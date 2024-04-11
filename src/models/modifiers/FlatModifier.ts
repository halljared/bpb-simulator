import { NumberModifier } from "@/models/modifiers/NumberModifier";

export class FlatModifier extends NumberModifier {
  private _val: number = 0;
  private source?: () => number;
  public get val() { return this.source && this.source() || this._val } // evaluates the source or returns _val

  /**
   * @param val { number | () => number } a number or a function that returns a number
   */
  constructor(val: number | (() => number)) {
    super();
    if(typeof val === "number") {
      this._val = val;
    } else {
      this.source = val;
    }
  }
  apply(base: number, mods: FlatModifier[]): number {
    return NumberModifier.applyFlatModifiers(base, mods);
  }
}
