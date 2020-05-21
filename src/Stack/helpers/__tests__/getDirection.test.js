// @flow
import getDirection from "../getDirection";

describe("#getDirection", () => {
  it("should return directions", () => {
    expect(getDirection("row")).toBe("row");
    expect(getDirection("column")).toBe("column");
    expect(getDirection("row-reverse")).toBe("row-reverse");
    expect(getDirection("column-reverse")).toBe("column-reverse");
  });
});
