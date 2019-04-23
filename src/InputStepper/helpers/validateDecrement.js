// @flow
import type { ValidateDecrement } from "./validateDecrement.js.flow";

const validateDecrement: ValidateDecrement = ({
  value,
  minValue = Number.NEGATIVE_INFINITY,
  step = 1,
}) => {
  const newValue = value - step;
  const calculatedValue = newValue <= +minValue ? minValue : newValue;
  if (calculatedValue !== value) {
    return calculatedValue;
  }
  return false;
};

export default validateDecrement;
