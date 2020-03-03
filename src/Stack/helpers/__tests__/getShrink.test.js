// @flow
import getShrink from "../getShrink";

describe("#getShrink", () => {
  it("should return 1", () => {
    expect(getShrink(true)).toBe("1");
  });

  it("should return 0", () => {
    expect(getShrink(false)).toBe("0");
  });
});
