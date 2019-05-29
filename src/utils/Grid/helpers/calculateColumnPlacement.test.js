// @flow
import calculateColumnPlacement from "./calculateColumnPlacement";

describe("calculateColumnPlacement function", () => {
  it("with 6 children and 1 columns", () => {
    expect(calculateColumnPlacement(1, 1)).toBe(1);
    expect(calculateColumnPlacement(2, 1)).toBe(1);
    expect(calculateColumnPlacement(3, 1)).toBe(1);
  });
  it("with 6 children and 2 columns", () => {
    expect(calculateColumnPlacement(1, 2)).toBe(1);
    expect(calculateColumnPlacement(2, 2)).toBe(2);
    expect(calculateColumnPlacement(3, 2)).toBe(1);
    expect(calculateColumnPlacement(4, 2)).toBe(2);
    expect(calculateColumnPlacement(5, 2)).toBe(1);
    expect(calculateColumnPlacement(6, 2)).toBe(2);
  });
  it("with 4 children and 4 columns", () => {
    expect(calculateColumnPlacement(1, 4)).toBe(1);
    expect(calculateColumnPlacement(2, 4)).toBe(2);
    expect(calculateColumnPlacement(3, 4)).toBe(3);
    expect(calculateColumnPlacement(4, 4)).toBe(4);
  });
});
