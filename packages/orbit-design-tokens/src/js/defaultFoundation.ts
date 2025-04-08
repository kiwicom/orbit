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
export interface Blue {
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
}
export interface Bundle {
  basic: string;
  medium: string;
}
export interface Cloud {
  dark: string;
  darkActive: string;
  darkHover: string;
  light: string;
  lightActive: string;
  lightHover: string;
  normal: string;
  normalActive: string;
  normalHover: string;
}
export interface Green {
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
}
export interface Ink {
  dark: string;
  darkActive: string;
  darkHover: string;
  light: string;
  lightActive: string;
  lightHover: string;
  normal: string;
  normalActive: string;
  normalHover: string;
}
export interface Orange {
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
}
export interface Product {
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
}
export interface Red {
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
}
export interface Social {
  facebook: string;
  facebookHover: string;
  facebookActive: string;
}
export interface White {
  normal: string;
  normalActive: string;
  normalHover: string;
}
export interface BorderRadius {
  50: string;
  100: string;
  150: string;
  200: string;
  300: string;
  400: string;
  none: string;
  full: string;
}
export interface Breakpoint {
  smallMobile: number;
  mediumMobile: number;
  largeMobile: number;
  tablet: number;
  desktop: number;
  largeDesktop: number;
}
export interface Elevations {
  base: string;
  navbar: string;
}
export interface Size {
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
  extraExtraLarge: string;
}
export interface Space {
  50: string;
  100: string;
  150: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  1000: string;
  1200: string;
  1300: string;
  1600: string;
}
export interface FontFamily {
  base: string;
}
export interface FontSize {
  small: string;
  normal: string;
  large: string;
  extraLarge: string;
}
export interface LineHeight {
  small: string;
  normal: string;
  large: string;
  extraLarge: string;
}
export interface FontWeight {
  normal: string;
  medium: string;
  bold: string;
}
export interface Palette {
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
}
export interface Foundation {
  palette: Palette;
  borderRadius: BorderRadius;
  breakpoint: Breakpoint;
  elevations: Elevations;
  size: Size;
  space: Space;
  fontFamily: FontFamily;
  fontSize: FontSize;
  lineHeight: LineHeight;
  fontWeight: FontWeight;
}
export interface CustomFoundation {
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
  elevations?: Partial<Elevations>;
  size?: Partial<Size>;
  space?: Partial<Space>;
  fontFamily?: Partial<FontFamily>;
  fontSize?: Partial<FontSize>;
  lineHeight?: Partial<LineHeight>;
  fontWeight?: Partial<FontWeight>;
}
const blue = {
  dark: "#005AA3",
  darkActive: "#003E70",
  darkHover: "#004F8F",
  darker: "#003866",
  light: "#E8F4FD",
  lightActive: "#C7E4FA",
  lightHover: "#DEF0FC",
  normal: "#0070C8",
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
  dark: "#296B33",
  darkActive: "#1C4A23",
  darkHover: "#21592A",
  darker: "#163B1C",
  light: "#EAF5EA",
  lightActive: "#CDE4CF",
  lightHover: "#E1EFE2",
  normal: "#058A25",
  normalActive: "#03631B",
  normalHover: "#047620",
};
const ink = {
  dark: "#252A31",
  darkActive: "#0B0C0F",
  darkHover: "#181B20",
  light: "#657890",
  lightActive: "#4E5C6F",
  lightHover: "#58697E",
  normal: "#4F5E71",
  normalActive: "#324256",
  normalHover: "#3E4E63",
};
const orange = {
  dark: "#8A4500",
  darkActive: "#572C00",
  darkHover: "#703800",
  darker: "#4D2600",
  light: "#FEF2E6",
  lightActive: "#FAE2C6",
  lightHover: "#FCECDA",
  normal: "#B36200",
  normalActive: "#804600",
  normalHover: "#995400",
};
const product = {
  dark: "#007061",
  darkActive: "#004239",
  darkHover: "#005C4F",
  darker: "#003D35",
  light: "#E1F4F3",
  lightActive: "#BFE8E2",
  lightHover: "#D6F0EC",
  normal: "#008F7B",
  normalActive: "#006153",
  normalHover: "#007565",
};
const red = {
  dark: "#970C0C",
  darkActive: "#6D0909",
  darkHover: "#890B0B",
  darker: "#630808",
  light: "#FAEAEA",
  lightActive: "#F3CECE",
  lightHover: "#F8E2E2",
  normal: "#D21C1C",
  normalActive: "#9D1515",
  normalHover: "#B91919",
};
const social = { facebook: "#3B5998", facebookHover: "#385490", facebookActive: "#354F88" };
const white = { normal: "#FFFFFF", normalActive: "#E7ECF1", normalHover: "#F1F4F7" };
const borderRadius = {
  50: "2px",
  100: "4px",
  150: "6px",
  200: "8px",
  300: "12px",
  400: "16px",
  none: "0",
  full: "9999px",
};
const breakpoint = {
  smallMobile: 320,
  mediumMobile: 414,
  largeMobile: 576,
  tablet: 768,
  desktop: 992,
  largeDesktop: 1200,
};
const elevations = { base: "#292F37", navbar: "#1B3249" };
const size = {
  small: "16px",
  medium: "24px",
  large: "32px",
  extraLarge: "44px",
  extraExtraLarge: "52px",
};
const space = {
  50: "2px",
  100: "4px",
  150: "6px",
  200: "8px",
  300: "12px",
  400: "16px",
  500: "20px",
  600: "24px",
  700: "28px",
  800: "32px",
  1000: "40px",
  1200: "48px",
  1300: "52px",
  1600: "64px",
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
  elevations,
  size,
  space,
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
};

export default foundation;
