// @flow
import type { ValidateDecrement } from ".";

const validateDecrement: ValidateDecrement = ({
  value,
  minValue = Number.NEGATIVE_INFINITY,
  step = 1,
}) => {
  const newValue = value - step;
  const calculatedValue = newValue <= +minValue ? minValue : newValue;
  return calculatedValue;
};

export default validateDecrement;
