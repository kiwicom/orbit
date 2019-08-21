// @flow
import resolveTooltipArrowPosition from "../resolveTooltipArrowPosition";

const resolve = position => {
  const result = resolveTooltipArrowPosition({ position });
  return result && result.join("");
};
describe("resolveTooltipArrowPosition", () => {
  it("top position", () => {
    expect(resolve("top")).toEqual("bottom:-7px;");
  });
  it("right position", () => {
    expect(resolve("right")).toEqual("left:-7px;");
  });
  it("bottom position", () => {
    expect(resolve("bottom")).toEqual("top:-7px;");
  });
  it("left position", () => {
    expect(resolve("left")).toEqual("right:-7px;");
  });
});
