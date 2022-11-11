import * as layoutHelpers from "..";

describe("getJustify", () => {
  it("should set justify", () => {
    expect(layoutHelpers.getJustify("start")).toBe("flex-start");
    expect(layoutHelpers.getJustify("end")).toBe("flex-end");
    expect(layoutHelpers.getJustify("center")).toBe("center");
    expect(layoutHelpers.getJustify("between")).toBe("space-between");
    expect(layoutHelpers.getJustify("around")).toBe("space-around");
  });
});

describe("getWrap", () => {
  it("should return wrap", () => {
    expect(layoutHelpers.getWrap(true)).toBe("wrap");
  });

  it("should return nowrap", () => {
    expect(layoutHelpers.getWrap(false)).toBe("nowrap");
  });
});
describe("getDirection", () => {
  it("should return directions", () => {
    expect(layoutHelpers.getDirection("row")).toBe("row");
    expect(layoutHelpers.getDirection("column")).toBe("column");
    expect(layoutHelpers.getDirection("row-reverse")).toBe("row-reverse");
    expect(layoutHelpers.getDirection("column-reverse")).toBe("column-reverse");
  });
});

describe("getGrow", () => {
  it("should get grow value", () => {
    expect(layoutHelpers.getGrow(true)).toBe("1");
    expect(layoutHelpers.getGrow(false)).toBe("0");
  });
});

describe("getShrink", () => {
  it("should return 1", () => {
    expect(layoutHelpers.getShrink(true)).toBe("1");
  });

  it("should return 0", () => {
    expect(layoutHelpers.getShrink(false)).toBe("0");
  });
});

describe("#getGrow", () => {
  it("should get grow value", () => {
    expect(layoutHelpers.getGrow(true)).toBe("1");
    expect(layoutHelpers.getGrow(false)).toBe("0");
  });
});

describe("#getAlign", () => {
  it("should set align", () => {
    expect(layoutHelpers.getAlign("start")).toBe("flex-start");
    expect(layoutHelpers.getAlign("end")).toBe("flex-end");
    expect(layoutHelpers.getAlign("center")).toBe("center");
    expect(layoutHelpers.getAlign("stretch")).toBe("stretch");
  });
});
