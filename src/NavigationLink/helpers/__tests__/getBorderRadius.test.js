// @flow
import getBorderRadius from "../getBorderRadius";
import theme from "../../../defaultTheme";
import { TYPES } from "../../consts";

describe("getBorderRadius", () => {
  it("should return borderRadiusNormal", () => {
    const type = TYPES.HORIZONTAL;
    const selectable = false;
    expect(getBorderRadius({ type, selectable, theme })).toBe(theme.orbit.borderRadiusNormal);
  });
  it("should return null", () => {
    expect(getBorderRadius({ type: TYPES.HORIZONTAL, selectable: true, theme })).toBe(null);
    expect(getBorderRadius({ type: TYPES.VERTICAL, selectable: false, theme })).toBe(null);
  });
});
