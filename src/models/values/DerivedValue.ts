import { ValueType } from "@/models/values/ValueTypes";
import { Modifier } from "@/models/modifiers/Modifier";

export abstract class DerivedValue<T> {
  abstract type: ValueType;
  private _val: T | undefined;
  private source?: () => T;
  public get baseValue(): T { return this.source && this.source() || this._val as T } // evaluates the source or returns _val
  public constructor(val: T | (() => T)) {
    if(typeof val === "function") {
      this.source = val as (() => T);
    } else {
      this._val = val;
    }
  }
  protected modifiers: {
    [key: string]: Modifier<T>[]
  } = {};

  abstract evaluate() : T;
  addModifier(mod: Modifier<T>): void {
    const name = mod.constructor.name,
      current = this.modifiers[name];
    if(current) {
      current.push(mod);
    } else {
      this.modifiers[name] = [mod];
    }
  }
  removeModifier(mod: Modifier<T>): void {
    const name = mod.constructor.name,
      mods = this.modifiers[name];
    if(mods) {
      const index = mods.indexOf(mod);
      if (index) {
        mods.splice(index, 1);
      }
    }
  }
  getModifiers(): Modifier<T>[] {
    const all: Modifier<T>[] = [];
    for (const key in this.modifiers) {
      const modifiers = this.modifiers[key];
      all.concat(modifiers);
    }
    return all;
  }
}