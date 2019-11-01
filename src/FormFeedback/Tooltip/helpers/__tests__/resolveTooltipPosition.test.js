// @flow
import resolveTooltipPosition from "../resolveTooltipPosition";
import defaultTheme from "../../../../defaultTheme";
import { right } from "../../../../utils/rtl";

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

const resolveWithRTLFunction = string => string.replace("__position__", right.toString());

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
    ).toEqual(resolveWithRTLFunction("top:-8px;__position__:-15px;"));
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
    ).toEqual(resolveWithRTLFunction("bottom:-8px;__position__:0;"));
  });
});
