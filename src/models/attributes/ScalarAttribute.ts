import { AttributeType } from "@/models/attributes/Attributes";
import { DerivedAttribute } from "@/models/attributes/DerivedAttribute";
import { Modifier } from "@/models/modifiers/Modifier";

export class ScalarAttribute implements DerivedAttribute<number> {
  modifiers: Modifier<number>[] = [];
  constructor(public baseValue: number, public type: AttributeType) {
  }
}