import { Palette } from "./palette";

export interface Base {
  fontFamily: string;
  fontSizeSm: string;
  fontSizeMd: string;
  fontSizeLg: string;
  borderRadius: string;
  sizeSm: string;
  sizeMd: string;
  sizeLg: string;
  sizeXl: string;
  size2xl: string;
  opacitySmall: string;
  opacityMedium: string;
  opacityLarge: string;
  fontWeightNormal: string;
  fontWeightMedium: string;
  fontWeightBold: string;
  space2xs: string;
  spaceXs: string;
  spaceSm: string;
  spaceMd: string;
  spaceLg: string;
  spaceXl: string;
  space2xl: string;
  space3xl: string;
  durationFast: string;
  durationNormal: string;
  durationSlow: string;
  transitionDefault: string;
  lineHeight: string;
}

export interface Foundation {
  palette: Palette;
  base: Base;
}

declare const foundation: Foundation;

export default foundation;
