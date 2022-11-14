import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import type { Theme } from "../../defaultTheme";
import type { Type } from "../types";
import { TOKENS, TYPE_OPTIONS } from "../consts";

const getButtonTypeToken = ({
  name,
  type,
  theme,
}: {
  name: string;
  type: Type;
  theme: Theme;
}): string => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonSecondary,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCritical,
      [TYPE_OPTIONS.WHITE]: theme.orbit.backgroundButtonWhite,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.paletteProductLight,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLight,
      [TYPE_OPTIONS.BUNDLE_BASIC]: theme.orbit.backgroundButtonBundleBasic,
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: theme.orbit.backgroundButtonBundleMedium,
      [TYPE_OPTIONS.BUNDLE_TOP]: theme.orbit.backgroundButtonBundleTop,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonPrimaryHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonSecondaryHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCriticalHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.backgroundButtonWhiteHover,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.paletteProductLightHover,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLightHover,
      [TYPE_OPTIONS.BUNDLE_BASIC]: theme.orbit.backgroundButtonBundleBasicHover,
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: theme.orbit.backgroundButtonBundleMediumHover,
      [TYPE_OPTIONS.BUNDLE_TOP]: theme.orbit.backgroundButtonBundleTopHover,
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.backgroundButtonPrimaryActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.backgroundButtonSecondaryActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCriticalActive,
      [TYPE_OPTIONS.WHITE]: theme.orbit.backgroundButtonWhiteActive,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.paletteProductLightActive,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLightActive,
      [TYPE_OPTIONS.BUNDLE_BASIC]: theme.orbit.backgroundButtonBundleBasicActive,
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: theme.orbit.backgroundButtonBundleMediumActive,
      [TYPE_OPTIONS.BUNDLE_TOP]: theme.orbit.backgroundButtonBundleTopActive,
    },
    [TOKENS.backgroundButtonFocus]: {
      [TYPE_OPTIONS.PRIMARY]: convertHexToRgba(theme.orbit.paletteProductNormal, 10),
      [TYPE_OPTIONS.SECONDARY]: convertHexToRgba(theme.orbit.paletteInkNormal, 10),
      [TYPE_OPTIONS.CRITICAL]: convertHexToRgba(theme.orbit.paletteRedNormal, 10),
      [TYPE_OPTIONS.WHITE]: convertHexToRgba(theme.orbit.paletteWhite, 20),
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.paletteProductLight,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLight,
      [TYPE_OPTIONS.BUNDLE_BASIC]: theme.orbit.backgroundButtonBundleBasic,
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: theme.orbit.backgroundButtonBundleMedium,
      [TYPE_OPTIONS.BUNDLE_TOP]: theme.orbit.backgroundButtonBundleTop,
    },
    [TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondary,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCritical,
      [TYPE_OPTIONS.WHITE]: theme.orbit.colorTextButtonWhite,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.paletteProductNormal,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedNormal,
      [TYPE_OPTIONS.BUNDLE_BASIC]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.BUNDLE_TOP]: theme.orbit.paletteWhite,
    },
    [TOKENS.colorTextButtonHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.colorTextButtonWhiteHover,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.paletteProductDark,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedDark,
      [TYPE_OPTIONS.BUNDLE_BASIC]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.BUNDLE_TOP]: theme.orbit.paletteWhite,
    },
    [TOKENS.colorTextButtonActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextButtonPrimaryActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextButtonSecondaryActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCriticalActive,
      [TYPE_OPTIONS.WHITE]: theme.orbit.colorTextButtonWhiteActive,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.paletteProductDark,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedDark,
      [TYPE_OPTIONS.BUNDLE_BASIC]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.BUNDLE_TOP]: theme.orbit.paletteWhite,
    },
    [TOKENS.borderColorButtonFocus]: {
      [TYPE_OPTIONS.PRIMARY]: convertHexToRgba(theme.orbit.paletteProductNormal, 50),
      [TYPE_OPTIONS.SECONDARY]: convertHexToRgba(theme.orbit.paletteInkNormal, 30),
      [TYPE_OPTIONS.CRITICAL]: convertHexToRgba(theme.orbit.paletteRedNormal, 50),
      // because it's not possible to see outline on the white bg, we use active token
      [TYPE_OPTIONS.WHITE]: convertHexToRgba(theme.orbit.paletteWhiteActive, 50),
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: convertHexToRgba(theme.orbit.paletteProductNormal, 50),
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: convertHexToRgba(theme.orbit.paletteRedNormal, 50),
      // TODO: currently we do not have tokens for these colors
      [TYPE_OPTIONS.BUNDLE_BASIC]: convertHexToRgba(`#E13E3B`, 50),
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: convertHexToRgba(`#3719AB`, 50),
      [TYPE_OPTIONS.BUNDLE_TOP]: convertHexToRgba(`#2D2D2E`, 50),
    },
  };

  return tokens[name][type];
};

export default getButtonTypeToken;
