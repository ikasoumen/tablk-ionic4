export class KeySet<T extends object, K extends keyof T> implements Set<T> {
  public readonly [Symbol.toStringTag] = "Set";
  private readonly map: Map<T[K], T>;

  constructor(private readonly key: K, values?: ReadonlyArray<T>) {
    this.map = new Map(
      values &&
        values.map(item => [item[key], item] as [typeof item[K], typeof item])
    );
  }

  public add(value: T): this {
    this.map.set(value[this.key], value);
    return this;
  }

  public addSome(values: T[]): this {
    for (const value of values) {
      this.add(value);
    }
    return this;
  }

  public get(key: T[K]) {
    return this.map.get(key);
  }

  public getSome(keys: Array<T[K]>) {
    const values: T[] = [];
    for (const key of keys) {
      const value = this.get(key);
      if (value != null) {
        values.push(value);
      }
    }
    return values;
  }

  public clear(): void {
    this.map.clear();
  }

  public delete(value: T): boolean {
    return this.map.delete(value[this.key]);
  }

  public forEach(
    callbackfn: (value: T, value2: T, set: Set<T>) => void,
    thisArg?: any
  ): void {
    const callback: typeof callbackfn =
      thisArg !== undefined ? callbackfn.bind(thisArg) : callbackfn;
    return this.map.forEach(value => callback(value, value, this));
  }

  public has(value: T): boolean {
    return this.map.has(value[this.key]);
  }

  get size() {
    return this.map.size;
  }

  public [Symbol.iterator]() {
    return this.map.values();
  }

  public *entries() {
    for (const item of this.map.values()) {
      yield [item, item] as [typeof item, typeof item];
    }
  }

  public keys() {
    return this.map.values();
  }

  public values() {
    return this.map.values();
  }
}
