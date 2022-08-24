import resolveColor from "../resolveColor";
import defaultTheme from "../../../../defaultTheme";

const params = (isHelp: boolean) => ({
  isHelp,
  theme: defaultTheme,
});

describe("resolveColor", () => {
  it("isHelp true", () => {
    expect(resolveColor(params(true))).toBe(defaultTheme.orbit.paletteBlueNormal);
  });
  it("isHelp false", () => {
    expect(resolveColor(params(false))).toBe(defaultTheme.orbit.paletteRedNormal);
  });
});
