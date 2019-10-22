// @flow
import resolveTooltipPosition from "../resolveTooltipPosition";
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

describe("resolveTooltipPosition", () => {
  it("top position", () => {
    expect(
      resolveTooltipPosition(
        params({
          position: "top",
          contentBounding: contentBoundingRaw,
          iconBounding: iconBoundingRaw,
          inlineLabel: false,
        }),
      ).join(""),
    ).toEqual("top:-7px;left:-15px;");
  });
  it("bottom position", () => {
    expect(
      resolveTooltipPosition(
        params({
          position: "bottom",
          contentBounding: contentBoundingRaw,
          iconBounding: iconBoundingRaw,
          inlineLabel: false,
        }),
      ).join(""),
    ).toEqual("bottom:-7px;left:0;");
  });
});
