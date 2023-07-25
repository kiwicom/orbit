export default function mergeDeep<A, B>(a: A, b: B) {
  const merged = { ...a };

  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(b)) {
    if (b[key] instanceof Object) {
      if (a[key] instanceof Object) {
        merged[key] = mergeDeep(a[key], b[key]);
      } else {
        merged[key] = b[key];
      }
    } else {
      merged[key] = b[key];
    }
  }

  return merged;
}
