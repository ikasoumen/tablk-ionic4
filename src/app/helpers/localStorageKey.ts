export function getFromLocalStrage<T extends object, K extends keyof T>(
  key: K
): T[K] | undefined {
  const obj = localStorage.getItem(key);
  if (obj == null) {
    return undefined;
  }
  return JSON.parse(obj) as T[K];
}

export function setToLocalStrage<T extends object, K extends keyof T>(
  key: keyof T,
  object: T[K]
) {
  const stringified = JSON.stringify(object);
  localStorage.setItem(key, stringified);
}

export function unsetFromLocalStorage<T>(key: keyof T): void {
  localStorage.removeItem(key as string);
}
