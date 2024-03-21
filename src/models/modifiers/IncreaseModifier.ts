import { NumberModifier } from "@/models/modifiers/NumberModifier";

export class IncreaseModifier extends NumberModifier {
  constructor(public val: number) {
    super();
  }
  apply(base: number, mods: IncreaseModifier[]): number {
    return base * (1 + this.combine(mods) / 100)
  }
}

