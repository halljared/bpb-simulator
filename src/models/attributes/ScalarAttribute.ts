import { AttributeType } from "@/models/attributes/AttributeTypes";
import { DerivedAttribute } from "@/models/attributes/DerivedAttribute";
import { NumberModifier } from "@/models/modifiers/NumberModifier";

export class ScalarAttribute extends DerivedAttribute<number> {
  modifiers: { [key: string]: NumberModifier[]; } = {};
  constructor(val: number | (() => number), public type: AttributeType) {
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