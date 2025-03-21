import { defaultTokens, defaultFoundation } from "@kiwicom/orbit-design-tokens";

const toPx = (n: number) => `${n}px`;

const getTailwindTheme = (theme: typeof defaultTokens) => {
  return {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      blue: {
        dark: theme.paletteBlueDark,
        "dark-active": theme.paletteBlueDarkActive,
        "dark-hover": theme.paletteBlueDarkHover,
        darker: theme.paletteBlueDarker,
        light: theme.paletteBlueLight,
        "light-active": theme.paletteBlueLightActive,
        "light-hover": theme.paletteBlueLightHover,
        normal: theme.paletteBlueNormal,
        "normal-active": theme.paletteBlueNormalActive,
        "normal-hover": theme.paletteBlueNormalHover,
      },
      bundle: {
        basic: theme.paletteBundleBasic,
        medium: theme.paletteBundleMedium,
      },
      cloud: {
        dark: theme.paletteCloudDark,
        "dark-active": theme.paletteCloudDarkActive,
        "dark-hover": theme.paletteCloudDarkHover,
        light: theme.paletteCloudLight,
        "light-active": theme.paletteCloudLightActive,
        "light-hover": theme.paletteCloudLightHover,
        normal: theme.paletteCloudNormal,
        "normal-active": theme.paletteCloudNormalActive,
        "normal-hover": theme.paletteCloudNormalHover,
      },
      green: {
        dark: theme.paletteGreenDark,
        "dark-active": theme.paletteGreenDarkActive,
        "dark-hover": theme.paletteGreenDarkHover,
        darker: theme.paletteGreenDarker,
        light: theme.paletteGreenLight,
        "light-active": theme.paletteGreenLightActive,
        "light-hover": theme.paletteGreenLightHover,
        normal: theme.paletteGreenNormal,
        "normal-active": theme.paletteGreenNormalActive,
        "normal-hover": theme.paletteGreenNormalHover,
      },
      ink: {
        dark: theme.paletteInkDark,
        "dark-active": theme.paletteInkDarkActive,
        "dark-hover": theme.paletteInkDarkHover,
        light: theme.paletteInkLight,
        "light-active": theme.paletteInkLightActive,
        "light-hover": theme.paletteInkLightHover,
        normal: theme.paletteInkNormal,
        "normal-active": theme.paletteInkNormalActive,
        "normal-hover": theme.paletteInkNormalHover,
      },
      orange: {
        dark: theme.paletteOrangeDark,
        "dark-active": theme.paletteOrangeDarkActive,
        "dark-hover": theme.paletteOrangeDarkHover,
        darker: theme.paletteOrangeDarker,
        light: theme.paletteOrangeLight,
        "light-active": theme.paletteOrangeLightActive,
        "light-hover": theme.paletteOrangeLightHover,
        normal: theme.paletteOrangeNormal,
        "normal-active": theme.paletteOrangeNormalActive,
        "normal-hover": theme.paletteOrangeNormalHover,
      },
      product: {
        dark: theme.paletteProductDark,
        "dark-active": theme.paletteProductDarkActive,
        "dark-hover": theme.paletteProductDarkHover,
        darker: theme.paletteProductDarker,
        light: theme.paletteProductLight,
        "light-active": theme.paletteProductLightActive,
        "light-hover": theme.paletteProductLightHover,
        normal: theme.paletteProductNormal,
        "normal-active": theme.paletteProductNormalActive,
        "normal-hover": theme.paletteProductNormalHover,
      },
      red: {
        dark: theme.paletteRedDark,
        "dark-active": theme.paletteRedDarkActive,
        "dark-hover": theme.paletteRedDarkHover,
        darker: theme.paletteRedDarker,
        light: theme.paletteRedLight,
        "light-active": theme.paletteRedLightActive,
        "light-hover": theme.paletteRedLightHover,
        normal: theme.paletteRedNormal,
        "normal-active": theme.paletteRedNormalActive,
        "normal-hover": theme.paletteRedNormalHover,
      },
      social: {
        facebook: theme.paletteSocialFacebook,
        "facebook-hover": theme.paletteSocialFacebookHover,
        "facebook-active": theme.paletteSocialFacebookActive,
      },
      white: {
        normal: theme.paletteWhite,
        "normal-active": theme.paletteWhiteActive,
        "normal-hover": theme.paletteWhiteHover,
      },
    },
    fontSize: {
      small: defaultFoundation.fontSize.small,
      normal: defaultFoundation.fontSize.normal,
      large: defaultFoundation.fontSize.large,
      "extra-large": defaultFoundation.fontSize.extraLarge,
    },
    lineHeight: {
      none: "1",
      small: defaultFoundation.lineHeight.small,
      normal: defaultFoundation.lineHeight.normal,
      large: defaultFoundation.lineHeight.large,
      "extra-large": defaultFoundation.lineHeight.extraLarge,
    },
    fontWeight: {
      normal: defaultFoundation.fontWeight.normal,
      medium: defaultFoundation.fontWeight.medium,
      bold: defaultFoundation.fontWeight.bold,
    },
    fontFamily: {
      base: defaultFoundation.fontFamily.base,
    },
    spacing: {
      none: "0px",
      0: "0px",
      px: "1px",
      50: defaultFoundation.space["50"],
      100: defaultFoundation.space["100"],
      150: defaultFoundation.space["150"],
      200: defaultFoundation.space["200"],
      300: defaultFoundation.space["300"],
      400: defaultFoundation.space["400"],
      500: defaultFoundation.space["500"],
      600: defaultFoundation.space["600"],
      700: defaultFoundation.space["700"],
      800: defaultFoundation.space["800"],
      1000: defaultFoundation.space["1000"],
      1200: defaultFoundation.space["1200"],
      1300: defaultFoundation.space["1300"],
      1600: defaultFoundation.space["1600"],
    },
    borderRadius: {
      50: defaultFoundation.borderRadius["50"],
      100: defaultFoundation.borderRadius["100"],
      150: defaultFoundation.borderRadius["150"],
      200: defaultFoundation.borderRadius["200"],
      300: defaultFoundation.borderRadius["300"],
      400: defaultFoundation.borderRadius["400"],
      none: defaultFoundation.borderRadius.none,
      full: defaultFoundation.borderRadius.full,
    },
    screens: {
      sm: toPx(defaultFoundation.breakpoint.smallMobile),
      mm: toPx(defaultFoundation.breakpoint.mediumMobile),
      lm: toPx(defaultFoundation.breakpoint.largeMobile),
      tb: toPx(defaultFoundation.breakpoint.tablet),
      de: toPx(defaultFoundation.breakpoint.desktop),
      ld: toPx(defaultFoundation.breakpoint.largeDesktop),
    },
  };
};

export default getTailwindTheme;
