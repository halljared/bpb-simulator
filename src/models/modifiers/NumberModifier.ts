import { FlatModifier } from "@/models/modifiers/FlatModifier";
import { IncreaseModifier } from "@/models/modifiers/IncreaseModifier";
import { Modifier } from "@/models/modifiers/Modifier";

export abstract class NumberModifier extends Modifier<number> {
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
  static combine(mods: NumberModifier[]): number {
      return mods.reduce((acc, cur) => {
        return acc + cur.val;
      }, 0);
  }
  static apply(base: number, mods: NumberModifier[]): number {
    const mod = mods[0];
    let current = base;
    if (mod) current = mod.apply(base, mods);
    return current;
  }
  static applyFlatModifiers(base: number, mods: FlatModifier[]): number {
    return base + NumberModifier.combine(mods);
  }
  static applyIncreaseModifiers(base: number, mods: IncreaseModifier[]): number {
    return base * (1 + NumberModifier.combine(mods) / 100)
  }
}

