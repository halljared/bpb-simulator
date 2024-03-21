export interface Modifier<T> {
  combine(mods: Modifier<T>[]): T;
}