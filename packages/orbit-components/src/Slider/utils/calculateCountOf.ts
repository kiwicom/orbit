import { Value, Data } from "../types";

type CalculateCountOf = (data: Data, value: Value, min: number) => [number, number];

const countValues = (data, [from, to], min) =>
  data.reduce(
    ([selected, totalCount], curr, index) => {
      return [
        index + min >= from && index + min <= to ? selected + curr : selected,
        totalCount + curr,
      ];
    },
    [0, 0],
  );

const calculateCountOf: CalculateCountOf = (data, value, min) => {
  if (Array.isArray(value)) {
    return countValues(data, [value[0], value[value.length - 1]], min);
  }
  return countValues(data, [min, value], min);
};

export default calculateCountOf;
