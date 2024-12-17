import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import { TOKENS, TYPE_OPTIONS } from "../consts";
import type { Type } from "../types";
import type { Theme } from "../../../defaultTheme";

export type TokenName =
  | "backgroundButton"
  | "backgroundButtonHover"
  | "backgroundButtonActive"
  | "backgroundButtonFocus"
  | "colorTextButton"
  | "colorTextButtonHover"
  | "colorTextButtonActive"
  | "borderColorButtonFocus";

type GetAlertButtonTypeToken = (name: TokenName, type: Type, theme: Theme) => string;

const getAlertButtonTypeToken: GetAlertButtonTypeToken = (name, type, theme) => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.buttonInfoBackground,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.buttonSuccessBackground,
      [TYPE_OPTIONS.WARNING]: theme.orbit.buttonWarningBackground,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalBackground,
      [TYPE_OPTIONS.INFO_SUBTLE]: convertHexToRgba(theme.orbit.paletteBlueNormal, 12),
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: convertHexToRgba(theme.orbit.paletteGreenNormal, 12),
      [TYPE_OPTIONS.WARNING_SUBTLE]: convertHexToRgba(theme.orbit.paletteOrangeNormal, 12),
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: convertHexToRgba(theme.orbit.paletteRedNormal, 12),
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.buttonSecondaryBackground,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.buttonInfoBackgroundHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.buttonSuccessBackgroundHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.buttonWarningBackgroundHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalBackgroundHover,
      [TYPE_OPTIONS.INFO_SUBTLE]: convertHexToRgba(theme.orbit.paletteBlueNormal, 18),
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: convertHexToRgba(theme.orbit.paletteGreenNormal, 18),
      [TYPE_OPTIONS.WARNING_SUBTLE]: convertHexToRgba(theme.orbit.paletteOrangeNormal, 18),
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: convertHexToRgba(theme.orbit.paletteRedNormal, 18),
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.buttonInfoBackgroundActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.buttonSuccessBackgroundActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.buttonWarningBackgroundActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalBackgroundActive,
      [TYPE_OPTIONS.INFO_SUBTLE]: convertHexToRgba(theme.orbit.paletteBlueNormal, 24),
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: convertHexToRgba(theme.orbit.paletteGreenNormal, 24),
      [TYPE_OPTIONS.WARNING_SUBTLE]: convertHexToRgba(theme.orbit.paletteOrangeNormal, 24),
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: convertHexToRgba(theme.orbit.paletteRedNormal, 24),
    },
    [TOKENS.backgroundButtonFocus]: {
      [TYPE_OPTIONS.INFO]: convertHexToRgba(theme.orbit.paletteBlueNormal, 10),
      [TYPE_OPTIONS.SUCCESS]: convertHexToRgba(theme.orbit.paletteGreenNormal, 10),
      [TYPE_OPTIONS.WARNING]: convertHexToRgba(theme.orbit.paletteOrangeNormal, 10),
      [TYPE_OPTIONS.CRITICAL]: convertHexToRgba(theme.orbit.paletteRedNormal, 10),
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueLight,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.paletteGreenLight,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.paletteOrangeLight,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLight,
    },
    [TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.buttonInfoForeground,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.buttonSuccessForeground,
      [TYPE_OPTIONS.WARNING]: theme.orbit.buttonWarningForeground,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalForeground,
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueDark,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.paletteGreenDark,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.paletteOrangeDark,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedDark,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.paletteInkDark,
    },
    [TOKENS.colorTextButtonHover]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.buttonInfoForeground,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.buttonSuccessForeground,
      [TYPE_OPTIONS.WARNING]: theme.orbit.buttonWarningForeground,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalForeground,
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueDarkHover,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.paletteGreenDarkHover,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.paletteOrangeDarkHover,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedDarkHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.paletteInkDark,
    },
    [TOKENS.colorTextButtonActive]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.buttonInfoForeground,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.buttonSuccessForeground,
      [TYPE_OPTIONS.WARNING]: theme.orbit.buttonWarningForeground,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalForeground,
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueDarkActive,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.paletteGreenDarkActive,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.paletteOrangeDarkActive,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedDarkActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.paletteInkDark,
    },
    [TOKENS.borderColorButtonFocus]: {
      [TYPE_OPTIONS.INFO]: convertHexToRgba(theme.orbit.paletteBlueNormal, 50),
      [TYPE_OPTIONS.SUCCESS]: convertHexToRgba(theme.orbit.paletteGreenNormal, 50),
      [TYPE_OPTIONS.WARNING]: convertHexToRgba(theme.orbit.paletteOrangeNormal, 50),
      [TYPE_OPTIONS.CRITICAL]: convertHexToRgba(theme.orbit.paletteRedNormal, 50),
      [TYPE_OPTIONS.INFO_SUBTLE]: convertHexToRgba(theme.orbit.paletteBlueNormal, 50),
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: convertHexToRgba(theme.orbit.paletteGreenNormal, 50),
      [TYPE_OPTIONS.WARNING_SUBTLE]: convertHexToRgba(theme.orbit.paletteOrangeNormal, 50),
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: convertHexToRgba(theme.orbit.paletteRedNormal, 50),
    },
  };
  return tokens[name][type];
};

export default getAlertButtonTypeToken;
