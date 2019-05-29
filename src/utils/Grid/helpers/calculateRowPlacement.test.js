// @flow
import calculateRowPlacement from "./calculateRowPlacement";

describe("calculateRowPlacement function", () => {
  it("2 columns and 1 row", () => {
    expect(calculateRowPlacement(1, 2, 1)).toBe(1);
    expect(calculateRowPlacement(2, 2, 1)).toBe(1);
  });
  it("2 columns and 2 rows", () => {
    expect(calculateRowPlacement(1, 2, 2)).toBe(1);
    expect(calculateRowPlacement(2, 2, 2)).toBe(1);
    expect(calculateRowPlacement(3, 2, 2)).toBe(2);
    expect(calculateRowPlacement(4, 2, 2)).toBe(2);
  });
  it("3 columns and 3 rows", () => {
    expect(calculateRowPlacement(1, 3, 3)).toBe(1);
    expect(calculateRowPlacement(2, 3, 3)).toBe(1);
    expect(calculateRowPlacement(3, 3, 3)).toBe(1);
    expect(calculateRowPlacement(4, 3, 3)).toBe(2);
    expect(calculateRowPlacement(5, 3, 3)).toBe(2);
    expect(calculateRowPlacement(6, 3, 3)).toBe(2);
    expect(calculateRowPlacement(7, 3, 3)).toBe(3);
    expect(calculateRowPlacement(8, 3, 3)).toBe(3);
    expect(calculateRowPlacement(9, 3, 3)).toBe(3);
  });
});
