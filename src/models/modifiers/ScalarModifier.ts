import { ScalarValue } from "@/models/values/ScalarValue";
import { FlatModifier } from "@/models/modifiers/FlatModifier";
import { IncreaseModifier } from "@/models/modifiers/IncreaseModifier";
import { Modifier } from "@/models/modifiers/Modifier";

export abstract class ScalarModifier extends Modifier<number> {
  private _val: ScalarValue;
  public get val(): number { return this._val.evaluate(); }

  constructor(val: ScalarValue) {
    super();
    this._val = val;
  }
  static combine(mods: ScalarModifier[]): number {
      return mods.reduce((acc, cur) => {
        return acc + cur.val;
      }, 0);
  }
  static apply(base: number, mods: ScalarModifier[]): number {
    const mod = mods[0];
    let current = base;
    if (mod) current = mod.apply(base, mods);
    return current;
  }
  static applyFlatModifiers(base: number, mods: FlatModifier[]): number {
    return base + ScalarModifier.combine(mods);
  }
  static applyIncreaseModifiers(base: number, mods: IncreaseModifier[]): number {
    return base * (1 + ScalarModifier.combine(mods) / 100)
  }
}

