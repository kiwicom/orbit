import getDisplay from "../getDisplay";

describe("#getDisplay", () => {
  it("should return inline-flex", () => {
    expect(getDisplay(true)).toBe("inline-flex");
  });

  it("should return flex", () => {
    expect(getDisplay(false)).toBe("flex");
  });
});
