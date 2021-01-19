import createTheme from "./createTheme";
import defaultFoundation from "./defaultFoundation";
import type { Tokens } from "./createTokens";

export interface ThemePaletteColors {
  productLight: string;
  productLightHover: string;
  productLightActive: string;
  productNormal: string;
  productNormalHover: string;
  productNormalActive: string;
  productDark: string;
  productDarkHover?: string;
  productDarkActive?: string;
  productDarker?: string;
}

export interface FromPlainObject {
  (themePaletteColors: ThemePaletteColors): Tokens;
}

const fromPlainObject: FromPlainObject = themePaletteColors => {
  const theme = {
    palette: {
      product: {
        light: themePaletteColors.productLight,
        lightHover: themePaletteColors.productLightHover,
        lightActive: themePaletteColors.productLightActive,
        normal: themePaletteColors.productNormal,
        normalHover: themePaletteColors.productNormalHover,
        normalActive: themePaletteColors.productNormalActive,
        dark: themePaletteColors.productDark,
        darkHover:
          themePaletteColors.productDarkHover || defaultFoundation.palette.product.darkHover,
        darkActive:
          themePaletteColors.productDarkActive || defaultFoundation.palette.product.darkActive,
        darker: themePaletteColors.productDarker || defaultFoundation.palette.product.darker,
      },
    },
  };
  return createTheme(theme);
};

export default fromPlainObject;
