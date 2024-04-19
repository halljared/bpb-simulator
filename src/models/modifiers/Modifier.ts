import { DerivedValue } from "@/models/values/DerivedValue";

export abstract class Modifier<T> {
  private _val: DerivedValue<T>;
  public get val(): T { return this._val.evaluate(); }
  public modifies: DerivedValue<T>[] = [];
  abstract apply(base: number, mods: Modifier<T>[]): T;
  constructor(val: DerivedValue<T>) {
    this._val = val;
  }
}