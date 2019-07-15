// @flow
import type { CalculateBarPosition } from "./calculateBarPosition";

const calculateBarPosition: CalculateBarPosition = (value, max, min) => {
  if (Array.isArray(value)) {
    return {
      left: ((value[0] - min) / (max - min)) * 100,
      width: ((value[value.length - 1] - value[0]) / (max - min)) * 100,
    };
  }
  return {
    left: 0,
    width: ((value - min) / (max - min)) * 100,
  };
};

export default calculateBarPosition;
