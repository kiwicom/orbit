declare module "@kiwicom/orbit-design-tokens/lib/js/fromPlainObject";

import type { Tokens } from "./createTokens";

export type ThemePaletteColors = {
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
};

export type FromPlainObject = (themePaletteColors: ThemePaletteColors) => Tokens;

export default FromPlainObject;
