// @flow
import getGrow from "../getGrow";

describe("#getGrow", () => {
  it("should get grow value", () => {
    expect(getGrow(true)).toBe("1");
    expect(getGrow(false)).toBe("0");
  });
});
