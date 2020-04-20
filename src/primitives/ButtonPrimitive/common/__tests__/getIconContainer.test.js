// @flow
import getIconContainer from "../getIconContainer";
import theme from "../../../../defaultTheme";
import { SIZE_OPTIONS } from "../consts";
import { ICON_SIZES } from "../../../../Icon/consts";

describe("ButtonPrimitive: getIconContainer function", () => {
  it("should match when left icon", () => {
    const size = SIZE_OPTIONS.LARGE;
    const onlyIcon = false;
    const right = false;
    const sizeIcon = ICON_SIZES.MEDIUM;
    expect(getIconContainer({ onlyIcon, theme, right, size, sizeIcon })).toMatchSnapshot();
  });
  it("should match when right icon", () => {
    const size = SIZE_OPTIONS.SMALL;
    const onlyIcon = false;
    const right = true;
    const sizeIcon = ICON_SIZES.SMALL;
    expect(getIconContainer({ onlyIcon, theme, right, size, sizeIcon })).toMatchSnapshot();
  });
});
