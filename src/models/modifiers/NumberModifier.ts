import { Modifier } from "@/models/modifiers/Modifier";

export abstract class NumberModifier extends Modifier<number> {
  combine(mods: NumberModifier[]): number {
      return this.val + mods.reduce((acc, cur) => {
        return acc + cur.val;
      }, 0);
  }
}

