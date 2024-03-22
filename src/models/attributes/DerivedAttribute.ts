import { AttributeType } from "@/models/attributes/AttributeTypes";
import { Modifier } from "@/models/modifiers/Modifier";

export abstract class DerivedAttribute<T> {
  abstract type: AttributeType;
  abstract baseValue: T;
  modifiers: {
    [key: string]: Modifier<T>[]
  } = {};

  abstract evaluate() : T;

  addModifier(mod: Modifier<T>): void {
    let name = mod.constructor.name;
    let current = this.modifiers[name];
    if(current) {
      current.push(mod);
    } else {
      this.modifiers[name] = [mod];
    }
  }
}