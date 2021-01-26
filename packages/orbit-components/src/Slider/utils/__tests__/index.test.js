// @flow

import calculateCountOf from "../calculateCountOf";

describe("calculateCountOf", () => {
  const data = [
    11,
    25,
    37,
    5,
    21,
    27,
    24,
    33,
    16,
    21,
    22,
    2,
    11,
    25,
    37,
    5,
    21,
    27,
    24,
    33,
    16,
    21,
    22,
    3,
  ];
  const min = 1;
  it("should count proper values", () => {
    expect(calculateCountOf(data, [1, 24], min)).toEqual([489, 489]);
    expect(calculateCountOf(data, [1, 12], min)).toEqual([244, 489]);
    expect(calculateCountOf(data, [12, 24], min)).toEqual([247, 489]);
    expect(calculateCountOf(data, [24, 24], min)).toEqual([3, 489]);
    expect(calculateCountOf(data, 24, min)).toEqual([489, 489]);
    expect(calculateCountOf(data, 12, min)).toEqual([244, 489]);
    expect(calculateCountOf(data, 1, min)).toEqual([11, 489]);
  });
});
