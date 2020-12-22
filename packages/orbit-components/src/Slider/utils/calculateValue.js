// @flow
type Params = {|
  ratio: number,
  addition?: boolean,
  deduction?: boolean,
  maxValue: number,
  minValue: number,
|};

const calculateValue = ({ ratio, addition, deduction, maxValue, minValue }: Params) =>
  Math.round((maxValue - minValue + (addition ? 1 : 0)) * ratio + minValue - (deduction ? 1 : 0));

export default calculateValue;
