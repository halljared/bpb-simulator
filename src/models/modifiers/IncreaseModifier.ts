import { NumberModifier } from "@/models/modifiers/NumberModifier";

export class IncreaseModifier extends NumberModifier {
  constructor(public val: number) {
    super();
  }
  apply(base: number, mods: IncreaseModifier[]): number {
    return NumberModifier.applyIncreaseModifiers(base, mods);
  }
}

