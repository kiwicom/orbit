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
