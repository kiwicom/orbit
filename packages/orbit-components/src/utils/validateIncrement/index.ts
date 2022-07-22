interface Params {
  value: number;
  maxValue?: number;
  step?: number;
}

const validateIncrement = ({
  value,
  maxValue = Number.POSITIVE_INFINITY,
  step = 1,
}: Params): number => {
  const newValue = value + step;
  const calculatedValue = newValue >= +maxValue ? maxValue : newValue;
  return calculatedValue;
};

export default validateIncrement;
