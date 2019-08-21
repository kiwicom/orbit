// @flow
import calculateTooltipPosition from "../calculateTooltipPosition";

const dimensionsShared = {
  windowHeight: 789,
  windowWidth: 743,
  tooltipHeight: 32,
  tooltipWidth: 132,
  contentHeight: 16,
  containerHeight: 24,
  containerWidth: 24,
};
const positionsWithTop = ["top", "right", "left", "bottom"];
const positionsWithRight = ["right", "left", "top", "bottom"];
const positionsWithBottom = ["bottom", "right", "left", "top"];
const positionsWithLeft = ["left", "right", "top", "bottom"];

describe("calculateTooltipPosition", () => {
  it("top left corner dimensions", () => {
    const dimensions = {
      containerLeft: 28,
      containerTop: 20,
      ...dimensionsShared,
    };
    expect(calculateTooltipPosition(positionsWithTop, dimensions)).toEqual("right");
    expect(calculateTooltipPosition(positionsWithRight, dimensions)).toEqual("right");
    expect(calculateTooltipPosition(positionsWithBottom, dimensions)).toEqual("bottom");
    expect(calculateTooltipPosition(positionsWithLeft, dimensions)).toEqual("right");
  });
  it("top right corner dimensions", () => {
    const dimensions = {
      containerLeft: 691,
      containerTop: 20,
      ...dimensionsShared,
    };
    expect(calculateTooltipPosition(positionsWithTop, dimensions)).toEqual("left");
    expect(calculateTooltipPosition(positionsWithRight, dimensions)).toEqual("left");
    expect(calculateTooltipPosition(positionsWithBottom, dimensions)).toEqual("bottom");
    expect(calculateTooltipPosition(positionsWithLeft, dimensions)).toEqual("left");
  });
  it("bottom left corner dimensions", () => {
    const dimensions = {
      containerLeft: 28,
      containerTop: 738,
      ...dimensionsShared,
    };
    expect(calculateTooltipPosition(positionsWithTop, dimensions)).toEqual("top");
    expect(calculateTooltipPosition(positionsWithRight, dimensions)).toEqual("right");
    expect(calculateTooltipPosition(positionsWithBottom, dimensions)).toEqual("right");
    expect(calculateTooltipPosition(positionsWithLeft, dimensions)).toEqual("right");
  });
  it("bottom right corner dimensions", () => {
    const dimensions = {
      containerLeft: 691,
      containerTop: 738,
      ...dimensionsShared,
    };
    expect(calculateTooltipPosition(positionsWithTop, dimensions)).toEqual("top");
    expect(calculateTooltipPosition(positionsWithRight, dimensions)).toEqual("left");
    expect(calculateTooltipPosition(positionsWithBottom, dimensions)).toEqual("left");
    expect(calculateTooltipPosition(positionsWithLeft, dimensions)).toEqual("left");
  });
  it("center dimensions", () => {
    const dimensions = {
      containerLeft: 359,
      containerTop: 150,
      ...dimensionsShared,
    };
    expect(calculateTooltipPosition(positionsWithTop, dimensions)).toEqual("top");
    expect(calculateTooltipPosition(positionsWithRight, dimensions)).toEqual("right");
    expect(calculateTooltipPosition(positionsWithBottom, dimensions)).toEqual("bottom");
    expect(calculateTooltipPosition(positionsWithLeft, dimensions)).toEqual("left");
  });
});
