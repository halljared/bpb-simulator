import { Modifier } from "@/models/modifiers/Modifier";
import { DerivedValue } from "@/models/values/DerivedValue";

type matcherFunc = (val: DerivedValue<any>, mod: Modifier<any>) => boolean;

export class ValueModifierManager {
  
  private values: DerivedValue<any>[] = [];
  private modifiers: Modifier<any>[] = [];
  private matchers: matcherFunc[] = [];
  constructor(
    matcher: matcherFunc
  ) {
    this.matchers.push((val, mod) => {
      return mod.appliesTo(val);
    });
    this.matchers.push(matcher);
  }
  private _matches(val: DerivedValue<any>, mod: Modifier<any>): boolean {
    return this.matchers.reduce((accum, curr) => {
      return accum && curr(val, mod);
    }, true);
  }
  public addValue(val: DerivedValue<any>) {
    this.values.push(val);
    this.modifiers.forEach(mod => {
      if (this._matches(val, mod)) {
        val.addModifier(mod);
        mod.modifies.push(val);
      }
    });
  }
  public addModifier(mod: Modifier<any>) {
    this.modifiers.push(mod);
    this.values.forEach(val => {
      if (this._matches(val, mod)) {
        val.addModifier(mod);
        mod.modifies.push(val);
      }
    });
  }
  public removeValue(val: DerivedValue<any>) {
    let index = this.values.indexOf(val);
    // stop storing this value
    if (index >= 0) {
      this.values.splice(index, 1);
    }
    // remove references to this value from modifiers
    val.getModifiers().forEach(mod => {
      index = mod.modifies.indexOf(val);
      if (index >= 0) {
        mod.modifies.splice(index, 1);
      }
    });
  }
  public removeModifier(mod: Modifier<any>) {
    let index = this.modifiers.indexOf(mod);
    // stop storing this modifier
    if (index >= 0) {
      this.modifiers.splice(index, 1);
    }
    // remove references to this modifier from values
    mod.modifies.forEach(val => {
      val.removeModifier(mod);
    });
  }
}