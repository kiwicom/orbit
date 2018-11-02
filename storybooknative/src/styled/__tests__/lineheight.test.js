// @flow

import lineHeight from "../lineheight";

describe("lineHeight", () => {
  it("should convert given lineHeightText token and fontSize into correct lineHeight", () => {
    expect(lineHeight("24px", "1.5")).toBe("36px");
  });
});

describe("parseFloat", () => {
  it("should just care about the first digits of the string", () => {
    expect(parseFloat("24px")).toBe(24);
    expect(parseFloat("24pxwefgknregjolvbengkrjhber")).toBe(24);
    expect(parseFloat("24.33px")).toBe(24.33);
    expect(parseFloat("24.45.5px")).toBe(24.45);
  });
});
