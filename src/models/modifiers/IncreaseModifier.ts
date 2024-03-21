import { Modifier } from "@/models/modifiers/Modifier";

export class IncreaseModifier implements Modifier<number> {
  constructor(public val: number) {
  }
  combine(mods: IncreaseModifier[]): number {
      return this.val + mods.reduce((acc, cur) => {
        return acc + cur.val;
      }, 0);
  }
}
