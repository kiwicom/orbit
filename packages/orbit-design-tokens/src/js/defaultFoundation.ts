/**
#####################################################
#                                                   #
# DO NOT EDIT DIRECTLY, THIS FILE IS AUTO-GENERATED #
#                                                   #
#####################################################

If you want to update some tokens:
- please do so in /definitions folder
- run @kiwicom/orbit-design-tokens "build" script
*/
export type Blue = {
  dark: string;
  darkActive: string;
  darkHover: string;
  darker: string;
  light: string;
  lightActive: string;
  lightHover: string;
  normal: string;
  normalActive: string;
  normalHover: string;
};
export type Bundle = { basic: string; medium: string };
export type Cloud = {
  dark: string;
  darkActive: string;
  darkHover: string;
  light: string;
  lightActive: string;
  lightHover: string;
  normal: string;
  normalActive: string;
  normalHover: string;
};
export type Green = {
  dark: string;
  darkActive: string;
  darkHover: string;
  darker: string;
  light: string;
  lightActive: string;
  lightHover: string;
  normal: string;
  normalActive: string;
  normalHover: string;
};
export type Ink = {
  dark: string;
  darkActive: string;
  darkHover: string;
  light: string;
  lightActive: string;
  lightHover: string;
  normal: string;
  normalActive: string;
  normalHover: string;
};
export type Orange = {
  dark: string;
  darkActive: string;
  darkHover: string;
  darker: string;
  light: string;
  lightActive: string;
  lightHover: string;
  normal: string;
  normalActive: string;
  normalHover: string;
};
export type Product = {
  dark: string;
  darkActive: string;
  darkHover: string;
  darker: string;
  light: string;
  lightActive: string;
  lightHover: string;
  normal: string;
  normalActive: string;
  normalHover: string;
};
export type Red = {
  dark: string;
  darkActive: string;
  darkHover: string;
  darker: string;
  light: string;
  lightActive: string;
  lightHover: string;
  normal: string;
  normalActive: string;
  normalHover: string;
};
export type Social = { facebook: string; facebookHover: string; facebookActive: string };
export type White = { normal: string; normalActive: string; normalHover: string };
export type BorderRadius = { circle: string; small: string; normal: string; large: string };
export type Breakpoint = {
  smallMobile: number;
  mediumMobile: number;
  largeMobile: number;
  tablet: number;
  desktop: number;
  largeDesktop: number;
};
export type Size = {
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  extraExtraLarge: string;
};
export type Space = {
  XXXSmall: string;
  XXSmall: string;
  XSmall: string;
  small: string;
  medium: string;
  large: string;
  XLarge: string;
  XXLarge: string;
  XXXLarge: string;
};
export type FontFamily = { base: string };
export type FontSize = { small: string; normal: string; large: string; extraLarge: string };
export type LineHeight = { small: string; normal: string; large: string; extraLarge: string };
export type FontWeight = { normal: string; medium: string; bold: string };
export type Palette = {
  blue: Blue;
  bundle: Bundle;
  cloud: Cloud;
  green: Green;
  ink: Ink;
  orange: Orange;
  product: Product;
  red: Red;
  social: Social;
  white: White;
};
export type Foundation = {
  palette: Palette;
  borderRadius: BorderRadius;
  breakpoint: Breakpoint;
  size: Size;
  space: Space;
  fontFamily: FontFamily;
  fontSize: FontSize;
  lineHeight: LineHeight;
  fontWeight: FontWeight;
};
export type CustomFoundation = {
  palette?: Partial<{
    blue?: Partial<Blue>;
    bundle?: Partial<Bundle>;
    cloud?: Partial<Cloud>;
    green?: Partial<Green>;
    ink?: Partial<Ink>;
    orange?: Partial<Orange>;
    product?: Partial<Product>;
    red?: Partial<Red>;
    social?: Partial<Social>;
    white?: Partial<White>;
  }>;
  borderRadius?: Partial<BorderRadius>;
  breakpoint?: Partial<Breakpoint>;
  size?: Partial<Size>;
  space?: Partial<Space>;
  fontFamily?: Partial<FontFamily>;
  fontSize?: Partial<FontSize>;
  lineHeight?: Partial<LineHeight>;
  fontWeight?: Partial<FontWeight>;
};
const blue = {
  dark: "#005AA3",
  darkActive: "#003E70",
  darkHover: "#004F8F",
  darker: "#004680",
  light: "#E8F4FD",
  lightActive: "#C7E4FA",
  lightHover: "#DEF0FC",
  normal: "#0172CB",
  normalActive: "#01508E",
  normalHover: "#0161AC",
};
const bundle = { basic: "#D7331C", medium: "#3B1EB0" };
const cloud = {
  dark: "#BAC7D5",
  darkActive: "#94A8BE",
  darkHover: "#A6B6C8",
  light: "#F5F7F9",
  lightActive: "#D6DEE6",
  lightHover: "#E5EAEF",
  normal: "#E8EDF1",
  normalActive: "#CAD4DE",
  normalHover: "#DCE3E9",
};
const green = {
  dark: "#2D7738",
  darkActive: "#1F5126",
  darkHover: "#276831",
  darker: "#235C2B",
  light: "#EAF5EA",
  lightActive: "#CDE4CF",
  lightHover: "#E1EFE2",
  normal: "#28A138",
  normalActive: "#1D7228",
  normalHover: "#238B31",
};
const ink = {
  dark: "#252A31",
  darkActive: "#0B0C0F",
  darkHover: "#181B20",
  light: "#697D95",
  lightActive: "#4A617C",
  lightHover: "#5D738E",
  normal: "#4F5E71",
  normalActive: "#324256",
  normalHover: "#3E4E63",
};
const orange = {
  dark: "#AD5700",
  darkActive: "#954A00",
  darkHover: "#A75400",
  darker: "#803F00",
  light: "#FEF2E6",
  lightActive: "#FAE2C6",
  lightHover: "#FCECDA",
  normal: "#DF7B00",
  normalActive: "#B26200",
  normalHover: "#C96F00",
};
const product = {
  dark: "#007A69",
  darkActive: "#006657",
  darkHover: "#007060",
  darker: "#005C4E",
  light: "#E1F4F3",
  lightActive: "#BFE8E2",
  lightHover: "#D6F0EC",
  normal: "#00A58E",
  normalActive: "#008472",
  normalHover: "#009580",
};
const red = {
  dark: "#970C0C",
  darkActive: "#6D0909",
  darkHover: "#890B0B",
  darker: "#760909",
  light: "#FAEAEA",
  lightActive: "#F3CECE",
  lightHover: "#F8E2E2",
  normal: "#D21C1C",
  normalActive: "#9D1515",
  normalHover: "#B91919",
};
const social = { facebook: "#3B5998", facebookHover: "#385490", facebookActive: "#354F88" };
const white = { normal: "#FFFFFF", normalActive: "#E7ECF1", normalHover: "#F1F4F7" };
const borderRadius = { circle: "50%", small: "2px", normal: "3px", large: "6px" };
const breakpoint = {
  smallMobile: 320,
  mediumMobile: 414,
  largeMobile: 576,
  tablet: 768,
  desktop: 992,
  largeDesktop: 1200,
};
const size = {
  small: "16px",
  medium: "24px",
  large: "32px",
  extraLarge: "44px",
  extraExtraLarge: "52px",
};
const space = {
  XXXSmall: "2px",
  XXSmall: "4px",
  XSmall: "8px",
  small: "12px",
  medium: "16px",
  large: "24px",
  XLarge: "32px",
  XXLarge: "40px",
  XXXLarge: "52px",
};
const fontFamily = {
  base: "'Roboto', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
};
const fontSize = { small: "13px", normal: "15px", large: "16px", extraLarge: "18px" };
const lineHeight = { small: "16px", normal: "20px", large: "24px", extraLarge: "24px" };
const fontWeight = { normal: "400", medium: "500", bold: "700" };
const palette = { blue, bundle, cloud, green, ink, orange, product, red, social, white };
const foundation = {
  palette,
  borderRadius,
  breakpoint,
  size,
  space,
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
};

export default foundation;
