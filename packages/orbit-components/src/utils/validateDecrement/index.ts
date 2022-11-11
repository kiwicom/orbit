interface Params {
  value: number;
  minValue?: number;
  step?: number;
}

const validateDecrement = ({
  value,
  minValue = Number.NEGATIVE_INFINITY,
  step = 1,
}: Params): number => {
  const newValue = value - step;
  const calculatedValue = newValue <= +minValue ? minValue : newValue;
  return calculatedValue;
};

export default validateDecrement;
