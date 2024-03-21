import { NumberModifier } from "@/models/modifiers/NumberModifier";

export class MoreModifier extends NumberModifier {
  constructor(public val: number) {
    super();
  }
  apply(base: number, mods: MoreModifier[]): number {
    return base * (1 + this.combine(mods) / 100)
  }
}


