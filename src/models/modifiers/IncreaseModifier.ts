import { NumberModifier } from "@/models/modifiers/NumberModifier";

export class IncreaseModifier extends NumberModifier {
  constructor(val: number | (() => number)) {
    super(val);
  }
  apply(base: number, mods: IncreaseModifier[]): number {
    return NumberModifier.applyIncreaseModifiers(base, mods);
  }
}

