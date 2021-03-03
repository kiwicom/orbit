// @flow
import { TOKENS, TYPE_OPTIONS } from "../consts";
import type { GetButtonTypeToken } from "./getButtonTypeToken";

const getButtonTypeToken: GetButtonTypeToken = (name, type, theme) => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.buttonPrimaryBackground,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.buttonSecondaryBackground,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalBackground,
      [TYPE_OPTIONS.WHITE]: theme.orbit.buttonWhiteBackground,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.buttonPrimarySubtleBackground,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.buttonCriticalSubtleBackground,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.buttonPrimaryBackgroundHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.buttonSecondaryBackgroundHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalBackgroundHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.buttonWhiteBackgroundHover,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.buttonPrimarySubtleBackgroundHover,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.buttonCriticalSubtleBackgroundHover,
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.buttonPrimaryBackgroundActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.buttonSecondaryBackgroundActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalBackgroundActive,
      [TYPE_OPTIONS.WHITE]: theme.orbit.buttonWhiteBackgroundActive,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.buttonPrimarySubtleBackgroundActive,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.buttonCriticalSubtleBackgroundActive,
    },
    [TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.buttonPrimaryForeground,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.buttonSecondaryForeground,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalForeground,
      [TYPE_OPTIONS.WHITE]: theme.orbit.buttonWhiteForeground,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.buttonPrimarySubtleForeground,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.buttonCriticalSubtleForeground,
    },
    [TOKENS.colorTextButtonHover]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.buttonPrimaryForegroundHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.buttonSecondaryForegroundHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalForegroundHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.buttonWhiteForegroundHover,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.buttonPrimarySubtleForegroundHover,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.buttonCriticalSubtleForegroundHover,
    },
    [TOKENS.colorTextButtonActive]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.buttonPrimaryForegroundActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.buttonSecondaryForegroundActive,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalForegroundActive,
      [TYPE_OPTIONS.WHITE]: theme.orbit.buttonWhiteForegroundActive,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.buttonPrimarySubtleForegroundActive,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.buttonCriticalSubtleForegroundActive,
    },
    [TOKENS.borderColorButtonFocus]: {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.buttonPrimaryBorderColorFocus,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.buttonSecondaryBorderColorFocus,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.buttonCriticalBorderColorFocus,
      [TYPE_OPTIONS.WHITE]: theme.orbit.buttonWhiteBorderColorFocus,
      [TYPE_OPTIONS.PRIMARY_SUBTLE]: theme.orbit.buttonPrimarySubtleBorderColorFocus,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.buttonCriticalSubtleBorderColorFocus,
    },
  };
  return tokens[name][type];
};

export default getButtonTypeToken;
