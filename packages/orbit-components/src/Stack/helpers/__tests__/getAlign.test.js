// @flow
import getAlign from "../getAlign";

describe("#getAlign", () => {
  it("should set align", () => {
    expect(getAlign("start")).toBe("flex-start");
    expect(getAlign("end")).toBe("flex-end");
    expect(getAlign("center")).toBe("center");
    expect(getAlign("stretch")).toBe("stretch");
  });
});
