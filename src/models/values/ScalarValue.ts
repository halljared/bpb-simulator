import { ValueType } from "@/models/values/ValueTypes";
import { DerivedValue } from "@/models/values/DerivedValue";
import { NumberModifier } from "@/models/modifiers/NumberModifier";

export class ScalarValue extends DerivedValue<number> {
  modifiers: { [key: string]: NumberModifier[]; } = {};
  constructor(val: number | (() => number), public type: ValueType) {
    super(val);
  }
  addModifier(mod: NumberModifier): void {
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
      current = NumberModifier.apply(current, modifiers);
    }
    return current;
  }
}