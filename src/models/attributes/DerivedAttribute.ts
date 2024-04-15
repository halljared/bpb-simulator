import { AttributeType } from "@/models/attributes/AttributeTypes";
import { Modifier } from "@/models/modifiers/Modifier";

export abstract class DerivedAttribute<T> {
  abstract type: AttributeType;
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
  abstract modifiers: {
    [key: string]: Modifier<T>[]
  };

  abstract evaluate() : T;
  abstract addModifier(mod: Modifier<T>): void;
}