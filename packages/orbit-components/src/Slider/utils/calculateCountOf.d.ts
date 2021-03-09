import { Value, Data } from "..";

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
declare const CalculateCountOf: (data: Data, value: Value, min: number) => [number, number];

export default CalculateCountOf;
