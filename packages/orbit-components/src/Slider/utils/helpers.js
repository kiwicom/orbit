// @flow
import DEFAULT_VALUES from "../consts";
import type { Value } from "..";

export const sortArray = (arr: Value): Value => {
  if (Array.isArray(arr)) {
    return arr.slice().sort((a, b) => a - b);
  }
  return arr;
};

export const alignValueToStep = (value: number, step: number = DEFAULT_VALUES.STEP) => {
  if (step === 1) return value;
  const gap = value % step;
  if (gap === 0) return value;
  if (gap * 2 >= step) {
    return value - gap + step;
  }
  return value - gap;
};

export const alignValueToMaxMin = (
  value: number,
  maxValue: number = DEFAULT_VALUES.MAX,
  minValue: number = DEFAULT_VALUES.MIN,
) => {
  if (value > maxValue) {
    return maxValue;
  }
  if (value < minValue) {
    return minValue;
  }
  return value;
};

export const findClosestKey = (goal: number, value: Value) => {
  return Array.isArray(value)
    ? value.reduce((acc, curr, index) => {
        return Array.isArray(value) && Math.abs(curr - goal) < Math.abs(value[acc] - goal)
          ? index
          : acc;
      }, 0)
    : null;
};

export const alignValue = (value: number) => alignValueToMaxMin(alignValueToStep(value));
