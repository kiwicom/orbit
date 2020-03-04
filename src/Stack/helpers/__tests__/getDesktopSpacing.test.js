// @flow
import getDesktopSpacing from "../getDesktopSpacing";

describe("#getDesktopSpacing", () => {
  it("should return dekstop spacings", () => {
    expect(getDesktopSpacing()).toEqual({
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
