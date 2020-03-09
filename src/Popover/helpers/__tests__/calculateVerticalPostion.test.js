// @flow
import calculateVerticalPosition from "../calculateVerticalPosition";

describe("calculateVerticalPosition", () => {
  it("Only bottom space available", () => {
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

    expect(calculateVerticalPosition(["top"], dimensions)).toEqual("bottom");
    expect(calculateVerticalPosition(["bottom"], dimensions)).toEqual("bottom");
  });
  it("left dimensions", () => {
    const dimensions = {
      containerTop: 132,
      containerLeft: 28,
      containerHeight: 44,
      containerWidth: 901,
      containerPureTop: 132,
      popoverHeight: 60,
      popoverWidth: 193,
      windowScrollTop: 0,
      windowWidth: 957,
      windowHeight: 520,
      contentHeight: 60,
      documentHeight: 446,
    };

    expect(calculateVerticalPosition(["top"], dimensions)).toEqual("top");
    expect(calculateVerticalPosition(["bottom", "top"], dimensions)).toEqual("bottom");
    expect(calculateVerticalPosition(["top", "bottom"], dimensions)).toEqual("top");
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
    expect(calculateVerticalPosition([], dimensions)).toEqual(null);
    expect(calculateVerticalPosition(["top"], dimensions)).toEqual("bottom");
  });
});
