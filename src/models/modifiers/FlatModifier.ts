import { NumberModifier } from "@/models/modifiers/NumberModifier";

export class FlatModifier extends NumberModifier {
  constructor(public val: number) {
    super();
  }
  apply(base: number, mods: FlatModifier[]): number {
    return base + this.combine(mods);
  }
}
