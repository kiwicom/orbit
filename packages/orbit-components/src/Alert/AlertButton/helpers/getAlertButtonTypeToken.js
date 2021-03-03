// @flow
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";

import { TOKENS, TYPE_OPTIONS } from "../consts";
import type { GetAlertButtonTypeToken } from "./getAlertButtonTypeToken";

const getAlertButtonTypeToken: GetAlertButtonTypeToken = (name, type, theme) => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCritical,
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueLightHover,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.paletteGreenLightHover,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.paletteOrangeLightHover,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLightHover,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonInfoHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonSuccessHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonWarningHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCriticalHover,
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueLightHover,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.paletteGreenLightHover,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.paletteOrangeLightHover,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLightHover,
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundButtonInfoActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundButtonSuccessActive,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundButtonWarningActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundButtonCriticalActive,
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueLightActive,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.paletteGreenLightActive,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.paletteOrangeLightActive,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLightActive,
    },
    // TODO: is used?
    [TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextButtonInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextButtonSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextButtonWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextButtonCritical,
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueDark,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.paletteGreenDark,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.paletteOrangeDark,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedDark,
    },
    [TOKENS.borderColorButtonFocus]: {
      [TYPE_OPTIONS.INFO]: transparentColor(theme.orbit.paletteBlueNormal, 50),
      [TYPE_OPTIONS.SUCCESS]: transparentColor(theme.orbit.paletteGreenNormal, 50),
      [TYPE_OPTIONS.WARNING]: transparentColor(theme.orbit.paletteOrangeNormal, 50),
      [TYPE_OPTIONS.CRITICAL]: transparentColor(theme.orbit.paletteRedNormal, 50),
      [TYPE_OPTIONS.INFO_SUBTLE]: transparentColor(theme.orbit.paletteBlueNormal, 50),
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: transparentColor(theme.orbit.paletteGreenNormal, 50),
      [TYPE_OPTIONS.WARNING_SUBTLE]: transparentColor(theme.orbit.paletteOrangeNormal, 50),
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: transparentColor(theme.orbit.paletteRedNormal, 50),
    },
  };
  return tokens[name][type];
};

export default getAlertButtonTypeToken;
