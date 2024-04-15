export abstract class Modifier<T> {
  abstract val: T;
  abstract apply(base: number, mods: Modifier<T>[]): T;
}