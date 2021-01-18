// @flow
import createTheme from "../createTheme";
import { defaultTheme } from "../../index";

describe("createTheme", () => {
  it("should match defaultTheme without any parameters", () => {
    expect(createTheme()).toEqual(defaultTheme);
  });
  const customFoundation = {
    palette: {
      blue: {
        // replaced for green for the test
        light: "#EBF4EC",
        lightHover: "#D7EAD9",
        lightActive: "#C3DFC7",
        normal: "#28A138",
        normalHover: "#238B31",
        normalActive: "#1D7228",
        dark: "#2B7336",
        darkHover: "#25642F",
        darkActive: "#1F5126",
        darker: "#235C2B",
      },
    },
  };
  const theme = createTheme(customFoundation);
  it("should create custom theme - colors", () => {
    expect(theme.paletteBlueLight).toBe(customFoundation.palette.blue.light);
    expect(theme.paletteBlueLightHover).toBe(customFoundation.palette.blue.light);
    expect(theme.paletteBlueLightActive).toBe(customFoundation.palette.blue.lightActive);
    expect(theme.paletteBlueNormal).toBe(customFoundation.palette.blue.normal);
    expect(theme.paletteBlueNormalHover).toBe(customFoundation.palette.blue.normalHover);
    expect(theme.paletteBlueNormalActive).toBe(customFoundation.palette.blue.normalActive);
    expect(theme.paletteBlueDark).toBe(customFoundation.palette.blue.dark);
    expect(theme.paletteBlueDarkHover).toBe(customFoundation.palette.blue.darkHover);
    expect(theme.paletteBlueDarkActive).toBe(customFoundation.palette.blue.darkActive);
    expect(theme.paletteBlueDarker).toBe(customFoundation.palette.blue.darker);
  });
});
