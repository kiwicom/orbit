// @flow

import type { Props } from "./calculateCountOf";

const countValues = (data, [from, to], min) => {
  return data.reduce(
    ([selected, totalCount], curr, index) => {
      return [
        index + min + 1 >= from && index + min + 1 <= to ? selected + curr : selected,
        totalCount + curr,
      ];
    },
    [0, 0],
  );
};

const calculateCountOf = (data, value, min): Props => {
  if (Array.isArray(value)) {
    return countValues(data, [value[0], value[value.length - 1]], min);
  }
  return countValues(data, [0, value], min);
};

export default calculateCountOf;
