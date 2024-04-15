import { NumberModifier } from "@/models/modifiers/NumberModifier";

export class FlatModifier extends NumberModifier {
  constructor(val: number | (() => number)) {
    super(val);
  }
  apply(base: number, mods: FlatModifier[]): number {
    return NumberModifier.applyFlatModifiers(base, mods);
  }
}
