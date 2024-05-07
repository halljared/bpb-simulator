import { FlatModifier } from "@/models/modifiers/FlatModifier";
import { IncreaseModifier } from "@/models/modifiers/IncreaseModifier";
import { Modifier } from "@/models/modifiers/Modifier";
import { DerivedValue } from "@/models/values/DerivedValue";

export abstract class ScalarModifier extends Modifier<number> {
  public appliesTo(val: DerivedValue<any>): boolean {
    return val.modifiableByScalar();
  }
  static combine(mods: ScalarModifier[]): number {
      return mods.reduce((acc, cur) => {
        return acc + cur.val;
      }, 0);
  }
  /**
   * 
   * @param base 
   * @param mods Note: mods must be of the same class eg flat or increase
   * @returns 
   */
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

