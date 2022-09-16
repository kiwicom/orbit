export default function mergeDeep<A>(
  first: Record<string, any>,
  second: Record<string, any>,
): Record<string, A> {
  const result = { ...first };

  // eslint-disable-next-line no-restricted-syntax
  for (const key in second) {
    if (second[key] instanceof Object && key in first) {
      result[key] = mergeDeep(first[key], second[key]);
    } else {
      result[key] = second[key];
    }
  }

  return result;
}
