// @flow
import type { Value } from "..";

const isNotEqual = (a: Value, b: Value) => {
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.toString() !== b.toString();
  }

  return a !== b;
};

export default isNotEqual;
