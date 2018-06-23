export class Set2<T> extends Set<T> {
  public readonly [Symbol.toStringTag] = "Set";
  private readonly set: Set<T>;

  constructor(values?: ReadonlyArray<T>) {
    super(values);
  }

  public addSome(values: T[]): this {
    for (const value of values) {
      this.add(value);
    }
    return this;
  }
}
