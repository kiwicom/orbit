// @flow
import type { ValidateIncrement } from "./validateIncrement.js.flow";

const validateIncrement: ValidateIncrement = ({
  value,
  maxValue = Number.POSITIVE_INFINITY,
  step = 1,
}) => {
  const newValue = value + step;
  const calculatedValue = newValue >= +maxValue ? maxValue : newValue;
  if (calculatedValue !== value) {
    return calculatedValue;
  }
  return false;
};

export default validateIncrement;
