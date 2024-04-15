import { ScalarModifier } from "@/models/modifiers/ScalarModifier";

export class FlatModifier extends ScalarModifier {
  apply(base: number, mods: FlatModifier[]): number {
    return ScalarModifier.applyFlatModifiers(base, mods);
  }
}
