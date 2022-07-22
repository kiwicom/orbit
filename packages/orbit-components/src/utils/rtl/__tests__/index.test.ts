import defaultTheme from "../../../defaultTheme";
import * as rtl from "..";

const disabledRTL = {
  theme: {
    ...defaultTheme,
    rtl: false,
  },
};
const enabledRTL = {
  theme: {
    ...defaultTheme,
    rtl: true,
  },
};

describe("rtlSpacing", () => {
  it("should return the ame values when rtl false", () => {
    expect(rtl.rtlSpacing("10px 20px 30px 40px")(disabledRTL)).toBe("10px 20px 30px 40px");
    expect(rtl.rtlSpacing("-10px 20px -30px 40px")(disabledRTL)).toBe("-10px 20px -30px 40px");
    expect(rtl.rtlSpacing("10px 20px 30px")(disabledRTL)).toBe("10px 20px 30px");
  });
  it("should return switched values when rtl true", () => {
    expect(rtl.rtlSpacing("10px 20px 30px 40px")(enabledRTL)).toBe("10px 40px 30px 20px");
    expect(rtl.rtlSpacing("-10px 20px -30px 40px")(enabledRTL)).toBe("-10px 40px -30px 20px");
    expect(rtl.rtlSpacing("10px 20px 30px")(enabledRTL)).toBe("10px 20px 30px");
  });
});

describe("right", () => {
  it("should return right when rtl false", () => {
    expect(rtl.right(disabledRTL)).toBe("right");
  });
  it("should return left when rtl true", () => {
    expect(rtl.right(enabledRTL)).toBe("left");
  });
});

describe("left", () => {
  it("should return left when rtl false", () => {
    expect(rtl.left(disabledRTL)).toBe("left");
  });
  it("should return right when rtl true", () => {
    expect(rtl.left(enabledRTL)).toBe("right");
  });
});

describe("textAlign", () => {
  it("should be the same value when rtl false", () => {
    expect(rtl.textAlign("left")(disabledRTL)).toBe("left");
    expect(rtl.textAlign("right")(disabledRTL)).toBe("right");
  });
  it("should be the opposite value when rtl true", () => {
    expect(rtl.textAlign("left")(enabledRTL)).toBe("right");
    expect(rtl.textAlign("right")(enabledRTL)).toBe("left");
  });
});

describe("borderRadius", () => {
  it("should return the same values when rtl false", () => {
    expect(rtl.borderRadius("1px 0 0 1px")(disabledRTL)).toBe("1px 0 0 1px");
    expect(rtl.borderRadius("0 1px 1px 0")(disabledRTL)).toBe("0 1px 1px 0");
  });
  it("should return switched values when rtl true", () => {
    expect(rtl.borderRadius("1px 0 0 1px")(enabledRTL)).toBe("0 1px 1px 0");
    expect(rtl.borderRadius("0 1px 1px 0")(enabledRTL)).toBe("1px 0 0 1px");
  });
});

describe("translate3d", () => {
  it("should return the same values when rtl false", () => {
    expect(rtl.translate3d("-100px, 0, 0")(disabledRTL)).toBe("translate3d(-100px, 0, 0)");
    expect(rtl.translate3d("100px,0,0")(disabledRTL)).toBe("translate3d(100px,0,0)");
  });
  it("should return switched first value when rtl true", () => {
    expect(rtl.translate3d("-100px, 0, 0")(enabledRTL)).toBe("translate3d(100px, 0, 0)");
    expect(rtl.translate3d("100px,0,0")(enabledRTL)).toBe("translate3d(-100px,0,0)");
  });
});
