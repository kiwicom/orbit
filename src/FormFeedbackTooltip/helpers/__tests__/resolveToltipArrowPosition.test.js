// @flow
import resolveTooltipArrowPosition from "../resolveTooltipArrowPosition";
import defaultTheme from "../../../defaultTheme";

const contentBoundingRaw = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
};

const iconBoundingRaw = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
};

const params = ({ position, contentBounding, iconBounding, inlineLabel }) => ({
  position,
  theme: defaultTheme,
  inlineLabel,
  contentBounding,
  iconBounding,
});

describe("resolveTooltipArrowPosition", () => {
  it("top position", () => {
    expect(
      resolveTooltipArrowPosition(
        params({
          position: "top",
          contentBounding: contentBoundingRaw,
          iconBounding: iconBoundingRaw,
          inlineLabel: false,
        }),
      ).join(""),
    ).toEqual("bottom:-7px;left:8px;");
  });
  it("bottom position", () => {
    expect(
      resolveTooltipArrowPosition(
        params({
          position: "bottom",
          contentBounding: contentBoundingRaw,
          iconBounding: iconBoundingRaw,
          inlineLabel: false,
        }),
      ).join(""),
    ).toEqual("top:-7px;left:8px;");
  });
  it("bottom position with inline label", () => {
    expect(
      resolveTooltipArrowPosition(
        params({
          position: "bottom",
          contentBounding: contentBoundingRaw,
          iconBounding: iconBoundingRaw,
          inlineLabel: true,
        }),
      ).join(""),
    ).toEqual("top:-7px;left:-7px;");
  });
  it("top position with inline label", () => {
    expect(
      resolveTooltipArrowPosition(
        params({
          position: "top",
          contentBounding: contentBoundingRaw,
          iconBounding: iconBoundingRaw,
          inlineLabel: true,
        }),
      ).join(""),
    ).toEqual("bottom:-7px;left:-7px;");
  });
  it("top position with inline label", () => {
    expect(
      resolveTooltipArrowPosition(
        params({
          position: "top",
          contentBounding: contentBoundingRaw,
          iconBounding: undefined,
          inlineLabel: true,
        }),
      ).join(""),
    ).toEqual("bottom:-7px;left:7px;");
  });
  it("bottom position with inline label", () => {
    expect(
      resolveTooltipArrowPosition(
        params({
          position: "bottom",
          contentBounding: contentBoundingRaw,
          iconBounding: undefined,
          inlineLabel: true,
        }),
      ).join(""),
    ).toEqual("top:-7px;left:7px;");
  });
});
