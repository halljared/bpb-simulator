import { NumberModifier } from "@/models/modifiers/NumberModifier";

export class FlatModifier extends NumberModifier {
  apply(base: number, mods: FlatModifier[]): number {
    return NumberModifier.applyFlatModifiers(base, mods);
  }
}
