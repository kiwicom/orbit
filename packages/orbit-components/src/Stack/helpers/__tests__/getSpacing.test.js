// @flow
import getSpacing from "../getSpacing";
import theme from "../../../defaultTheme";

describe("#getSpacing", () => {
  it("should return spacings", () => {
    expect(getSpacing({ theme })).toEqual({
      comfy: "24px",
      compact: "12px",
      condensed: "8px",
      extraLoose: "40px",
      extraTight: "2px",
      loose: "32px",
      natural: "16px",
      tight: "4px",
    });
  });
});
