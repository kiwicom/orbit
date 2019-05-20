// @flow
import type { ValidateIncrement } from "./index.js.flow";

const validateIncrement: ValidateIncrement = ({
  value,
  maxValue = Number.POSITIVE_INFINITY,
  step = 1,
}) => {
  const newValue = value + step;
  const calculatedValue = newValue >= +maxValue ? maxValue : newValue;
  return calculatedValue;
};

export default validateIncrement;
