import { ValueType } from "@/models/values/ValueTypes";
import { DerivedValue } from "@/models/values/DerivedValue";
import { ScalarModifier } from "@/models/modifiers/ScalarModifier";

export class ScalarValue extends DerivedValue<number> {
  constructor(val: number | (() => number), public type: ValueType) {
    super(val);
  }
  public modifiableByScalar(): boolean {
    return true;    
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