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
  darker: string;
  darkerHover: string;
  darkerActive: string;
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

export type BundleColor = {
  basic: string;
  medium: string;
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
  bundle: BundleColor;
};

declare const palette: Palette;

export default palette;
