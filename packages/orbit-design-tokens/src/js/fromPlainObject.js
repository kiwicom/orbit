// @flow
import createTheme from "./createTheme";
import defaultFoundation from "./defaultFoundation";
import type { FromPlainObject } from "./fromPlainObject";

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
