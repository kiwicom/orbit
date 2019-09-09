// @flow
import realCellsCount from "./realCellsCount";

describe("realCellCount function", () => {
  it("with gap", () => {
    expect(realCellsCount(true, 11)).toBe(6);
    expect(realCellsCount(true, 7)).toBe(4);
  });
  it("without gap", () => {
    expect(realCellsCount(false, 10)).toBe(10);
    expect(realCellsCount(false, 8)).toBe(8);
  });
});
