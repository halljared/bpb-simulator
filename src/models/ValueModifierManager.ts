import { Modifier } from "@/models/modifiers/Modifier";
import { DerivedValue } from "@/models/values/DerivedValue";

export class ValueModifierManager {
  
  private values: DerivedValue<any>[] = [];
  private modifiers: Modifier<any>[] = [];
  constructor(
    public matcher: (val: DerivedValue<any>, mod: Modifier<any>) => boolean
  ) {
    
  }
  public addValue(val: DerivedValue<any>) {
    this.values.push(val);
    this.modifiers.forEach(mod => {
      if (this.matcher(val, mod)) {
        val.addModifier(mod);
        mod.modifies.push(val);
      }
    });
  }
  public addModifier(mod: Modifier<any>) {
    this.modifiers.push(mod);
    this.values.forEach(val => {
      if (this.matcher(val, mod)) {
        val.addModifier(mod);
        mod.modifies.push(val);
      }
    });
  }
  public removeValue(val: DerivedValue<any>) {
    let index = this.values.indexOf(val);
    // stop storing this value
    if (index) {
      this.values.splice(index, 1);
    }
    // remove references to this value from modifiers
    val.getModifiers().forEach(mod => {
      index = mod.modifies.indexOf(val);
      if (index) {
        mod.modifies.splice(index, 1);
      }
    });
  }
  public removeModifier(mod: Modifier<any>) {
    let index = this.modifiers.indexOf(mod);
    // stop storing this modifier
    if (index) {
      this.modifiers.splice(index, 1);
    }
    // remove references to this modifier from values
    mod.modifies.forEach(val => {
      val.removeModifier(mod);
    });
  }
}