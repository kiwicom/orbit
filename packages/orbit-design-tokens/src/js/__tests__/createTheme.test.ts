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
        lightSecondary: "#D7EAD9",
        lightTertiary: "#C3DFC7",
        normal: "#28A138",
        normalSecondary: "#238B31",
        normalTertiary: "#1D7228",
        dark: "#2B7336",
        darkSecondary: "#25642F",
        darkTertiary: "#1F5126",
        darker: "#235C2B",
      },
    },
  };
  const theme = createTheme(customFoundation);
  it("should create custom theme - colors", () => {
    expect(theme.paletteBlueLight).toBe(customFoundation.palette.blue.light);
    expect(theme.paletteBlueLightHover).toBe(customFoundation.palette.blue.lightSecondary);
    expect(theme.paletteBlueLightSecondary).toBe(customFoundation.palette.blue.lightSecondary);
    expect(theme.paletteBlueLightActive).toBe(customFoundation.palette.blue.lightTertiary);
    expect(theme.paletteBlueLightTertiary).toBe(customFoundation.palette.blue.lightTertiary);
    expect(theme.paletteBlueNormal).toBe(customFoundation.palette.blue.normal);
    expect(theme.paletteBlueNormalHover).toBe(customFoundation.palette.blue.normalSecondary);
    expect(theme.paletteBlueNormalSecondary).toBe(customFoundation.palette.blue.normalSecondary);
    expect(theme.paletteBlueNormalActive).toBe(customFoundation.palette.blue.normalTertiary);
    expect(theme.paletteBlueNormalTertiary).toBe(customFoundation.palette.blue.normalTertiary);
    expect(theme.paletteBlueDark).toBe(customFoundation.palette.blue.dark);
    expect(theme.paletteBlueDarkHover).toBe(customFoundation.palette.blue.darkSecondary);
    expect(theme.paletteBlueDarkSecondary).toBe(customFoundation.palette.blue.darkSecondary);
    expect(theme.paletteBlueDarkActive).toBe(customFoundation.palette.blue.darkTertiary);
    expect(theme.paletteBlueDarkTertiary).toBe(customFoundation.palette.blue.darkTertiary);
    expect(theme.paletteBlueDarker).toBe(customFoundation.palette.blue.darker);
  });
});
