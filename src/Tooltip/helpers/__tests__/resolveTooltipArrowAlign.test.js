// @flow
import resolveTooltipArrowAlign from "../resolveTooltipArrowAlign";

const dimensions = {
  windowHeight: 789,
  windowWidth: 743,
  tooltipHeight: 32,
  tooltipWidth: 132,
  contentHeight: 16,
  containerHeight: 24,
  containerWidth: 24,
  containerLeft: 28,
  containerLeftPure: 28,
  containerTop: 20,
  containerTopPure: 20,
};

const params = (position, align) => ({ align, position, ...dimensions });

const resolve = (position, align) => {
  const result = resolveTooltipArrowAlign(params(position, align));
  return result && result.join("");
};

describe("resolveTooltipArrowAlign", () => {
  it("horizontal position", () => {
    expect(resolve("left", "center")).toEqual("top:9px;");
    expect(resolve("right", "center")).toEqual("top:9px;");
    expect(resolve("left", "start")).toEqual("top:12px;");
    expect(resolve("right", "start")).toEqual("top:12px;");
    expect(resolve("left", "end")).toEqual("bottom:12px;");
    expect(resolve("right", "end")).toEqual("bottom:12px;");
  });
  it("vertical position", () => {
    expect(resolve("top", "center")).toEqual("left:59px;");
    expect(resolve("bottom", "center")).toEqual("left:59px;");
    expect(resolve("top", "start")).toEqual("left:12px;");
    expect(resolve("bottom", "start")).toEqual("left:12px;");
    expect(resolve("top", "end")).toEqual("right:12px;");
    expect(resolve("bottom", "end")).toEqual("right:12px;");
  });
});
