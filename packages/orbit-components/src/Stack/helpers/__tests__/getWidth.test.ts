import getWidth from "../getWidth";

describe("#getWidth", () => {
  it("should return false", () => {
    expect(getWidth(true)).toBe("");
  });

  it("should return 100%", () => {
    // inline props is set to false
    expect(getWidth(false)).toBe("100%");
  });
});
