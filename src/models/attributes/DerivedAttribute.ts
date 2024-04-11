import { AttributeType } from "@/models/attributes/AttributeTypes";
import { Modifier } from "@/models/modifiers/Modifier";

export abstract class DerivedAttribute<T> {
  abstract type: AttributeType;
  abstract baseValue: T;
  abstract modifiers: {
    [key: string]: Modifier<T>[]
  };

  abstract evaluate() : T;
  abstract addModifier(mod: Modifier<T>): void;
}