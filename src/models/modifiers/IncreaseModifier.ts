import { NumberModifier } from "@/models/modifiers/NumberModifier";

export class IncreaseModifier extends NumberModifier {
  apply(base: number, mods: IncreaseModifier[]): number {
    return NumberModifier.applyIncreaseModifiers(base, mods);
  }
}

