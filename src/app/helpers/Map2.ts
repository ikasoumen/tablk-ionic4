import { Dictionary } from "lodash";

export class Map2<K extends keyof T, T> extends Map<K, T> {
  public readonly [Symbol.toStringTag] = "Map";
  private readonly map: Map<K, T>;

  constructor(values?: Iterable<[K, T]>) {
    super(values);
  }

  public setSome(dictionary: Iterable<[K, T]>): this {
    for (const [key, value] of dictionary) {
      this.set(key, value);
    }
    return this;
  }
}
