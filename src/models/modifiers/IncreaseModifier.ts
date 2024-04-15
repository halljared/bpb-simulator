import { ScalarModifier } from "@/models/modifiers/ScalarModifier";

export class IncreaseModifier extends ScalarModifier {
  apply(base: number, mods: IncreaseModifier[]): number {
    return ScalarModifier.applyIncreaseModifiers(base, mods);
  }
}

