export function setSome<K, T>(
  map: Map<K, T>,
  dictionary: Iterable<[K, T]>
): Map<K, T> {
  for (const [key, value] of dictionary) {
    map.set(key, value);
  }
  return map;
}

export function addSome<T>(set: Set<T>, values: T[]): Set<T> {
  for (const value of values) {
    set.add(value);
  }
  return set;
}
