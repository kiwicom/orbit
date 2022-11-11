import getSpacing from "../getSpacing";
import theme from "../../../defaultTheme";

describe("#getSpacing", () => {
  it("should return spacings", () => {
    expect(getSpacing(theme)).toEqual({
      none: "",
      XXXSmall: "2px",
      XXSmall: "4px",
      XSmall: "8px",
      small: "12px",
      medium: "16px",
      large: "24px",
      XLarge: "32px",
      XXLarge: "40px",
      XXXLarge: "52px",
    });
  });
});
