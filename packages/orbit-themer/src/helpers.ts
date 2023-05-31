const isObject = (object: Record<string, any>) => {
  return object != null && typeof object === "object";
};

export function assocPath(path: string[], value: any, obj: Record<string, any>) {
  if (path.length === 0) return value;

  const [key, ...rest] = path;
  const newObj = Array.isArray(obj) ? [...obj] : { ...obj };
  newObj[key] = assocPath(rest, value, newObj[key] || {});

  return newObj;
}

export function isDeepEqual(object1: Record<string, any>, object2: Record<string, any>) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (const key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if ((isObjects && !isDeepEqual(value1, value2)) || (!isObjects && value1 !== value2)) {
      return false;
    }
  }
  return true;
}

export function get(path: string, obj: Record<string, any>, defaultValue = undefined) {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
}
