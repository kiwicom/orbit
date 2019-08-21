// @flow
import calculateTooltipAlign from "../calculateTooltipAlign";

const aligns = ["center", "start", "end"];
const dimensionsShared = {
  windowHeight: 789,
  windowWidth: 743,
  tooltipHeight: 32,
  tooltipWidth: 132,
  contentHeight: 16,
  containerHeight: 24,
  containerWidth: 24,
};
describe("calculateTooltipAlign", () => {
  it("top left corner dimensions", () => {
    const dimensions = {
      containerLeft: 28,
      containerTop: 150,
      ...dimensionsShared,
    };
    expect(calculateTooltipAlign("top", aligns, dimensions)).toEqual("start");
    expect(calculateTooltipAlign("right", aligns, dimensions)).toEqual("center");
    expect(calculateTooltipAlign("bottom", aligns, dimensions)).toEqual("start");
    expect(calculateTooltipAlign("left", aligns, dimensions)).toEqual("center");
  });
  it("top right corner dimensions", () => {
    const dimensions = {
      containerLeft: 691,
      containerTop: 150,
      ...dimensionsShared,
    };
    expect(calculateTooltipAlign("top", aligns, dimensions)).toEqual("end");
    expect(calculateTooltipAlign("right", aligns, dimensions)).toEqual("center");
    expect(calculateTooltipAlign("bottom", aligns, dimensions)).toEqual("end");
    expect(calculateTooltipAlign("left", aligns, dimensions)).toEqual("center");
  });
  it("bottom left corner dimensions", () => {
    const dimensions = {
      containerLeft: 28,
      containerTop: 718,
      ...dimensionsShared,
    };
    expect(calculateTooltipAlign("top", aligns, dimensions)).toEqual("start");
    expect(calculateTooltipAlign("right", aligns, dimensions)).toEqual("center");
    expect(calculateTooltipAlign("bottom", aligns, dimensions)).toEqual("start");
    expect(calculateTooltipAlign("left", aligns, dimensions)).toEqual("center");
  });
  it("bottom right corner dimensions", () => {
    const dimensions = {
      containerLeft: 691,
      containerTop: 718,
      ...dimensionsShared,
    };
    expect(calculateTooltipAlign("top", aligns, dimensions)).toEqual("end");
    expect(calculateTooltipAlign("right", aligns, dimensions)).toEqual("center");
    expect(calculateTooltipAlign("bottom", aligns, dimensions)).toEqual("end");
    expect(calculateTooltipAlign("left", aligns, dimensions)).toEqual("center");
  });
  it("center dimensions", () => {
    const dimensions = {
      containerLeft: 359,
      containerTop: 150,
      ...dimensionsShared,
    };
    expect(calculateTooltipAlign("top", aligns, dimensions)).toEqual("center");
    expect(calculateTooltipAlign("right", aligns, dimensions)).toEqual("center");
    expect(calculateTooltipAlign("bottom", aligns, dimensions)).toEqual("center");
    expect(calculateTooltipAlign("left", aligns, dimensions)).toEqual("center");
  });
  it("null position or dimensions", () => {
    const dimensions = {
      containerLeft: 0,
      containerTop: 0,
      windowHeight: 0,
      windowWidth: 0,
      tooltipHeight: 0,
      tooltipWidth: 0,
      contentHeight: 0,
      containerHeight: 0,
      containerWidth: 0,
    };
    expect(calculateTooltipAlign(null, aligns, dimensions)).toEqual(null);
    expect(calculateTooltipAlign("right", aligns, dimensions)).toEqual(null);
  });
});
