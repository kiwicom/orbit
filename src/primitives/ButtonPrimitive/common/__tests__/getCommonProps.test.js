// @flow
import getCommonProps from "../getCommonProps";
import theme from "../../../../defaultTheme";
import { SIZE_OPTIONS } from "../consts";

describe("ButtonPrimitive: getCommonProps function", () => {
  it("should match: null width and static fontWeight and transition", () => {
    const size = SIZE_OPTIONS.LARGE;
    const onlyIcon = false;
    const iconLeft = true;
    expect(getCommonProps({ size, onlyIcon, iconLeft, theme })).toMatchSnapshot();
  });
  it("should match: dynamic width and static fontWeight and transition", () => {
    const width = "200px";
    const size = SIZE_OPTIONS.NORMAL;
    const onlyIcon = true;
    const iconLeft = true;
    expect(
      getCommonProps({
        width,
        size,
        onlyIcon,
        iconLeft,
        theme,
      }),
    ).toMatchSnapshot();
  });
});
