import { AttributeType } from "@/models/attributes/Attributes";
import { DerivedAttribute } from "@/models/attributes/DerivedAttribute";

export class ScalarAttribute extends DerivedAttribute<number> {
  constructor(public baseValue: number, public type: AttributeType) {
    super();
  }
  evaluate(): number {
    let current = this.baseValue;
    for(const key in this.modifiers) {
      const modifiers = this.modifiers[key],
        first = modifiers[0];
        if(first) {
          current = first.apply(current, modifiers.slice(1));
        }
    }
    return current;
  }
}