import type { Value } from "../types";

export const isNotEqual = (a: Value, b: Value): boolean => {
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.toString() !== b.toString();
  }
  return a !== b;
};

export const sortArray = (arr: Value): Value => {
  if (Array.isArray(arr)) {
    return arr.slice().sort((a, b) => a - b);
  }
  return arr;
};

export const findClosestKey = (goal: number, value: Value): number | null => {
  return Array.isArray(value)
    ? value.reduce((acc, curr, index) => {
        return Array.isArray(value) && Math.abs(curr - goal) < Math.abs(value[acc] - goal)
          ? index
          : acc;
      }, 0)
    : null;
};

export const pauseEvent = (event: KeyboardEvent | MouseEvent | TouchEvent | FocusEvent): void => {
  if (typeof event.stopPropagation === "function") {
    event.stopPropagation();
  }
  if (
    typeof event.preventDefault === "function" &&
    (typeof event.cancelable !== "boolean" || event.cancelable)
  ) {
    event.preventDefault();
  }
};

export const stopPropagation = (event: TouchEvent): void => {
  if (typeof event.stopPropagation === "function") event.stopPropagation();
};
