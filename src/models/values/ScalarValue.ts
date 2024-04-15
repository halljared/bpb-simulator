import { ValueType } from "@/models/values/ValueTypes";
import { DerivedValue } from "@/models/values/DerivedValue";
import { ScalarModifier } from "@/models/modifiers/ScalarModifier";

export class ScalarValue extends DerivedValue<number> {
  modifiers: { [key: string]: ScalarModifier[]; } = {};
  constructor(val: number | (() => number), public type: ValueType) {
    super(val);
  }
  addModifier(mod: ScalarModifier): void {
    const name = mod.constructor.name,
      current = this.modifiers[name];
    if(current) {
      current.push(mod);
    } else {
      this.modifiers[name] = [mod];
    }
  }
  evaluate(): number {
    let current = this.baseValue;
    for(const key in this.modifiers) {
      const modifiers = this.modifiers[key];
      current = ScalarModifier.apply(current, modifiers);
    }
    return current;
  }
}