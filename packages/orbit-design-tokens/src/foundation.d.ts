export type ProductColor = {
  light: string;
  lightHover: string;
  lightActive: string;
  normal: string;
  normalHover: string;
  normalActive: string;
  dark: string;
  darkHover: string;
  darkActive: string;
  darker: string;
};

export type StatusColor = {
  light: string;
  lightHover: string;
  lightActive: string;
  normal: string;
  normalHover: string;
  normalActive: string;
  dark: string;
  darkHover: string;
  darkActive: string;
  darker: string;
};

export type WhiteColor = {
  normal: string;
  normalHover: string;
  normalActive: string;
};

export type CloudColor = {
  light: string;
  lightHover: string;
  lightActive: string;
  normal: string;
  normalHover: string;
  normalActive: string;
  dark: string;
};

export type InkColor = {
  lighter: string;
  lighterHover: string;
  lighterActive: string;
  light: string;
  lightHover: string;
  lightActive: string;
  normal: string;
  normalHover: string;
  normalActive: string;
};

export type SocialColor = {
  facebook: string;
  facebookHover: string;
  facebookActive: string;
};

export type Palette = {
  product: ProductColor;
  white: WhiteColor;
  cloud: CloudColor;
  ink: InkColor;
  orange: StatusColor;
  red: StatusColor;
  green: StatusColor;
  blue: StatusColor;
  social: SocialColor;
};

export type Base = {
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
};

export type Foundation = {
  palette: Palette;
  base: Base;
};

declare const foundation: Foundation;
export default foundation;
