// @flow
import calculateHorizontalPosition from "../calculateHorizontalPosition";

describe("calculateHorizontalPosition", () => {
  it("Center dimensions", () => {
    const dimensions = {
      containerTop: 132,
      containerLeft: 404.6875,
      containerHeight: 44,
      containerWidth: 147.609375,
      containerPureTop: 132,
      popoverHeight: 128,
      popoverWidth: 310.71875,
      windowScrollTop: 0,
      windowWidth: 957,
      windowHeight: 520,
      contentHeight: 128,
      documentHeight: 464,
    };

    expect(calculateHorizontalPosition(["start"], dimensions)).toEqual("start");
    expect(calculateHorizontalPosition(["center"], dimensions)).toEqual("center");
    expect(calculateHorizontalPosition(["end"], dimensions)).toEqual("end");
  });
  it("left dimensions", () => {
    const dimensions = {
      containerTop: 132,
      containerLeft: 28,
      containerHeight: 44,
      containerWidth: 147.609375,
      containerPureTop: 132,
      popoverHeight: 176,
      popoverWidth: 310.71875,
      windowScrollTop: 0,
      windowWidth: 957,
      windowHeight: 520,
      contentHeight: 176,
      documentHeight: 752,
    };

    expect(calculateHorizontalPosition(["start"], dimensions)).toEqual("start");
    expect(calculateHorizontalPosition(["center", "start", "end"], dimensions)).toEqual("start");
    expect(calculateHorizontalPosition(["end", "start", "center"], dimensions)).toEqual("start");
  });
  it("null position or dimensions", () => {
    const dimensions = {
      containerTop: 0,
      containerLeft: 0,
      containerHeight: 0,
      containerWidth: 0,
      containerPureTop: 0,
      popoverHeight: 0,
      popoverWidth: 0,
      windowScrollTop: 0,
      windowWidth: 0,
      windowHeight: 0,
      contentHeight: 0,
      documentHeight: 0,
    };
    expect(calculateHorizontalPosition([], dimensions)).toEqual(null);
    expect(calculateHorizontalPosition(["start"], dimensions)).toEqual(null);
  });
});
