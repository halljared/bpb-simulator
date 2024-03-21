export abstract class Modifier<T> {
  abstract val: T;
  abstract combine(mods: Modifier<T>[]): T;
  abstract apply(base: number, mods: Modifier<T>[]): T;
}