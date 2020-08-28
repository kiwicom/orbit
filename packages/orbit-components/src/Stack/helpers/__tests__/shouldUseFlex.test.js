// @flow
import shouldUseFlex from "../shouldUseFlex";

describe("#shouldUseFlex", () => {
  it("should return true", () => {
    const props = {
      children: "kek",
      wrap: true,
    };

    expect(shouldUseFlex(props)).toBe(true);
  });

  it("should return false", () => {
    const props = {
      children: "kek",
      spaceAfter: "large",
    };

    expect(shouldUseFlex(props)).toBe(false);
  });
});
