export type Params = {
  value: number;
  maxValue?: number;
  step?: number;
};

declare const ValidateIncrement: (arg: Params) => number;

export default ValidateIncrement;
