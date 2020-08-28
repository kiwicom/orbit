// @flow
import getJustify from "../getJustify";

describe("#getJustify", () => {
  it("should set justify", () => {
    expect(getJustify("start")).toBe("flex-start");
    expect(getJustify("end")).toBe("flex-end");
    expect(getJustify("center")).toBe("center");
    expect(getJustify("between")).toBe("space-between");
    expect(getJustify("around")).toBe("space-around");
  });
});
