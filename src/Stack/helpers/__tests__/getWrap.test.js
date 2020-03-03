// @flow
import getWrap from "../getWrap";

describe("#getWrap", () => {
  it("should return wrap", () => {
    expect(getWrap(true)).toBe("wrap");
  });

  it("should return nowrap", () => {
    expect(getWrap(false)).toBe("nowrap");
  });
});
