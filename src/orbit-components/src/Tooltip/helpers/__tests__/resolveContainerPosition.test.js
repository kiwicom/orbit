// @flow
import resolveContainerPosition from "../resolveContainerPosition";

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

const params = position => ({ position, ...dimensions });

const resolve = position => {
  const result = resolveContainerPosition(params(position));
  return result && result.join("");
};

describe("resolveContainerPosition", () => {
  it("top position", () => {
    expect(resolve("top")).toEqual("top:-19px;");
  });
  it("right position", () => {
    expect(resolve("right")).toEqual("left:59px;");
  });
  it("bottom position", () => {
    expect(resolve("bottom")).toEqual("top:51px;");
  });
  it("left position", () => {
    expect(resolve("left")).toEqual("left:-111px;");
  });
});
