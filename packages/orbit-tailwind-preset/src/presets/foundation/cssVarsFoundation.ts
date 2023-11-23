import { defaultTokens } from "@kiwicom/orbit-design-tokens";
import { parseToRgba } from "color2k";

const getChannels = (color: string) => parseToRgba(color).slice(0, -1).join(", ");
const generateRgba = (color: string, fallback: string) =>
  `rgba(var(--${color}, ${getChannels(fallback)}), <alpha-value>)`;

const cssVarsFoundation = {
  palette: {
    product: {
      normal: generateRgba("palette-product-normal", defaultTokens.paletteProductNormal),
      normalHover: generateRgba(
        "palette-product-normal-hover",
        defaultTokens.paletteProductNormalHover,
      ),
      normalActive: generateRgba(
        "palette-product-normal-active",
        defaultTokens.paletteProductNormalActive,
      ),
      light: generateRgba("palette-product-light", defaultTokens.paletteProductLight),
      lightHover: generateRgba(
        "palette-product-light-hover",
        defaultTokens.paletteProductLightHover,
      ),
      lightActive: generateRgba(
        "palette-product-light-active",
        defaultTokens.paletteProductLightActive,
      ),
      dark: generateRgba("palette-product-dark", defaultTokens.paletteProductDark),
      darkHover: generateRgba("palette-product-dark-hover", defaultTokens.paletteProductDarkHover),
      darkActive: generateRgba(
        "palette-product-dark-active",
        defaultTokens.paletteProductDarkActive,
      ),
      darker: generateRgba("palette-product-darker", defaultTokens.paletteProductDarker),
    },
    blue: {
      normal: generateRgba("palette-blue-normal", defaultTokens.paletteBlueNormal),
      normalHover: generateRgba("palette-blue-normal-hover", defaultTokens.paletteBlueNormalHover),
      normalActive: generateRgba(
        "palette-blue-normal-active",
        defaultTokens.paletteBlueNormalActive,
      ),
      light: generateRgba("palette-blue-light", defaultTokens.paletteBlueLight),
      lightHover: generateRgba("palette-blue-light-hover", defaultTokens.paletteBlueLightHover),
      lightActive: generateRgba("palette-blue-light-active", defaultTokens.paletteBlueLightActive),
      dark: generateRgba("palette-blue-dark", defaultTokens.paletteBlueDark),
      darkHover: generateRgba("palette-blue-dark-hover", defaultTokens.paletteBlueDarkHover),
      darkActive: generateRgba("palette-blue-dark-active", defaultTokens.paletteBlueDarkActive),
      darker: generateRgba("palette-blue-darker", defaultTokens.paletteBlueDarker),
    },
    bundle: {
      basic: generateRgba("palette-bundle-basic", defaultTokens.paletteBundleBasic),
      medium: generateRgba("palette-bundle-medium", defaultTokens.paletteBundleMedium),
    },
    cloud: {
      normal: generateRgba("palette-cloud-normal", defaultTokens.paletteCloudNormal),
      normalHover: generateRgba(
        "palette-cloud-normal-hover",
        defaultTokens.paletteCloudNormalHover,
      ),
      normalActive: generateRgba(
        "palette-cloud-normal-active",
        defaultTokens.paletteCloudNormalActive,
      ),
      light: generateRgba("palette-cloud-light", defaultTokens.paletteCloudLight),
      lightHover: generateRgba("palette-cloud-light-hover", defaultTokens.paletteCloudLightHover),
      lightActive: generateRgba(
        "palette-cloud-light-active",
        defaultTokens.paletteCloudLightActive,
      ),
      dark: generateRgba("palette-cloud-dark", defaultTokens.paletteCloudDark),
      darkHover: generateRgba("palette-cloud-dark-hover", defaultTokens.paletteCloudDarkHover),
      darkActive: generateRgba("palette-cloud-dark-active", defaultTokens.paletteCloudDarkActive),
    },
    green: {
      normal: generateRgba("palette-green-normal", defaultTokens.paletteGreenNormal),
      normalHover: generateRgba(
        "palette-green-normal-hover",
        defaultTokens.paletteGreenNormalHover,
      ),
      normalActive: generateRgba(
        "palette-green-normal-active",
        defaultTokens.paletteGreenNormalActive,
      ),
      light: generateRgba("palette-green-light", defaultTokens.paletteGreenLight),
      lightHover: generateRgba("palette-green-light-hover", defaultTokens.paletteGreenLightHover),
      lightActive: generateRgba(
        "palette-green-light-active",
        defaultTokens.paletteGreenLightActive,
      ),
      dark: generateRgba("palette-green-dark", defaultTokens.paletteGreenDark),
      darkHover: generateRgba("palette-green-dark-hover", defaultTokens.paletteGreenDarkHover),
      darkActive: generateRgba("palette-green-dark-active", defaultTokens.paletteGreenDarkActive),
      darker: generateRgba("palette-green-darker", defaultTokens.paletteGreenDarker),
    },
    ink: {
      normal: generateRgba("palette-ink-normal", defaultTokens.paletteInkNormal),
      normalHover: generateRgba("palette-ink-normal-hover", defaultTokens.paletteInkNormalHover),
      normalActive: generateRgba("palette-ink-normal-active", defaultTokens.paletteInkNormalActive),
      light: generateRgba("palette-ink-light", defaultTokens.paletteInkLight),
      lightHover: generateRgba("palette-ink-light-hover", defaultTokens.paletteInkLightHover),
      lightActive: generateRgba("palette-ink-light-active", defaultTokens.paletteInkLightActive),
      dark: generateRgba("palette-ink-dark", defaultTokens.paletteInkDark),
      darkHover: generateRgba("palette-ink-dark-hover", defaultTokens.paletteInkDarkHover),
      darkActive: generateRgba("palette-ink-dark-active", defaultTokens.paletteInkDarkActive),
    },
    orange: {
      normal: generateRgba("palette-orange-normal", defaultTokens.paletteOrangeNormal),
      normalHover: generateRgba(
        "palette-orange-normal-hover",
        defaultTokens.paletteOrangeNormalHover,
      ),
      normalActive: generateRgba(
        "palette-orange-normal-active",
        defaultTokens.paletteOrangeNormalActive,
      ),
      light: generateRgba("palette-orange-light", defaultTokens.paletteOrangeLight),
      lightHover: generateRgba("palette-orange-light-hover", defaultTokens.paletteOrangeLightHover),
      lightActive: generateRgba(
        "palette-orange-light-active",
        defaultTokens.paletteOrangeLightActive,
      ),
      dark: generateRgba("palette-orange-dark", defaultTokens.paletteOrangeDark),
      darkHover: generateRgba("palette-orange-dark-hover", defaultTokens.paletteOrangeDarkHover),
      darkActive: generateRgba("palette-orange-dark-active", defaultTokens.paletteOrangeDarkActive),
    },
    red: {
      normal: generateRgba("palette-red-normal", defaultTokens.paletteRedNormal),
      normalHover: generateRgba("palette-red-normal-hover", defaultTokens.paletteRedNormalHover),
      normalActive: generateRgba("palette-red-normal-active", defaultTokens.paletteRedNormalActive),
      light: generateRgba("palette-red-light", defaultTokens.paletteRedLight),
      lightHover: generateRgba("palette-red-light-hover", defaultTokens.paletteRedLightHover),
      lightActive: generateRgba("palette-red-light-active", defaultTokens.paletteRedLightActive),
      dark: generateRgba("palette-red-dark", defaultTokens.paletteRedDark),
      darkHover: generateRgba("palette-red-dark-hover", defaultTokens.paletteRedDarkHover),
      darkActive: generateRgba("palette-red-dark-active", defaultTokens.paletteRedDarkActive),
      darker: generateRgba("palette-red-darker", defaultTokens.paletteRedDarker),
    },
    social: {
      facebook: generateRgba("palette-social-facebook", defaultTokens.paletteSocialFacebook),
      facebookHover: generateRgba(
        "palette-social-facebook-hover",
        defaultTokens.paletteSocialFacebookHover,
      ),
      facebookActive: generateRgba(
        "palette-social-facebook-active",
        defaultTokens.paletteSocialFacebookActive,
      ),
    },
    white: {
      normal: generateRgba("palette-white-normal", defaultTokens.paletteWhiteNormal),
      normalHover: generateRgba("palette-white-normal-hover", defaultTokens.paletteWhiteHover),
      normalActive: generateRgba("palette-white-normal-active", defaultTokens.paletteWhiteActive),
    },
  },
};

export default cssVarsFoundation;
