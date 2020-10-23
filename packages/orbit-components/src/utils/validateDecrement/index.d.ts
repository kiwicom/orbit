export type Params = {
  value: number;
  minValue?: number;
  step?: number;
};

declare const ValidateDecrement: (arg: Params) => number;

export default ValidateDecrement;
