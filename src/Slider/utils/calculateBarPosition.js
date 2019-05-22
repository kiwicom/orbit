// @flow
import type { CalculateBarPosition } from "./calculateBarPosition";

const calculateBarPosition: CalculateBarPosition = (parentWidth, value, max, min) => {
  if (Array.isArray(value)) {
    return {
      left: ((value[0] - min) / (max - min)) * Number(parentWidth),
      width: ((value[value.length - 1] - value[0]) / (max - min)) * Number(parentWidth),
      parentWidth,
    };
  }
  return {
    left: 0,
    width: ((value - min) / (max - min)) * Number(parentWidth),
    parentWidth,
  };
};

export default calculateBarPosition;
