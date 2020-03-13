// @flow
import getMobileSpacing from "../getMobileSpacing";

describe("#getMobileSpacing", () => {
  it("should return mobile spacings", () => {
    expect(getMobileSpacing()).toEqual({
      comfy: "20px",
      compact: "12px",
      condensed: "8px",
      extraLoose: "36px",
      extraTight: "2px",
      loose: "28px",
      natural: "16px",
      tight: "4px",
    });
  });
});
