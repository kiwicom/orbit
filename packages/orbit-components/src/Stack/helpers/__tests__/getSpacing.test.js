// @flow
import getSpacing from "../getSpacing";
import theme from "../../../defaultTheme";

describe("#getSpacing", () => {
  it("should return spacings", () => {
    expect(getSpacing({ theme })).toEqual({
      large: "24px",
      medium: "16px",
      small: "12px",
      XLarge: "32px",
      XSmall: "8px",
      XXLarge: "40px",
      XXSmall: "4px",
      XXXSmall: "2px",
    });
  });
});
