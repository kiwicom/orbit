// @flow
import getPadding from "../getPadding";
import { TYPES } from "../../consts";
import theme from "../../../defaultTheme";

describe("getPadding", () => {
  it("should return proper values", () => {
    expect(getPadding({ type: TYPES.HORIZONTAL, theme })).toBe(`0 ${theme.orbit.spaceXSmall}`);
    expect(getPadding({ type: TYPES.VERTICAL, theme })).toBe(`0 0 0 ${theme.orbit.spaceXXLarge}`);
  });
});
