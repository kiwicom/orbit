// @flow
import basicPaletteTokens from "./palette";

const palette = {
  ...basicPaletteTokens,
  social: {
    facebook: "#3B5998",
    facebookHover: "#385490",
    facebookActive: "#354F88",
  },
  bundle: {
    basic: "#D7331C",
    medium: "#3B1EB0",
  },
};

const base = {
  fontFamily:
    "'Roboto', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
  fontSizeSm: "12px",
  fontSizeMd: "14px",
  fontSizeLg: "16px",
  borderRadius: "3px",
  sizeSm: "16px",
  sizeMd: "24px",
  sizeLg: "32px",
  sizeXl: "44px",
  size2xl: "52px",
  opacitySmall: "0.3",
  opacityMedium: "0.5",
  opacityLarge: "0.8",
  fontWeightNormal: "400",
  fontWeightMedium: "500",
  fontWeightBold: "700",
  space2xs: "4px",
  spaceXs: "8px",
  spaceSm: "12px",
  spaceMd: "16px",
  spaceLg: "24px",
  spaceXl: "32px",
  space2xl: "40px",
  space3xl: "52px",
  durationFast: "0.15s",
  durationNormal: "0.3s",
  durationSlow: "0.4s",
  transitionDefault: "ease-in-out",
  lineHeight: "1.4",
};

const foundation = { palette, base };

export default foundation;
