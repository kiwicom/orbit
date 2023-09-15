import { TOKENS, TYPES } from "../consts";
import type { Type } from "../types";
import type { Theme } from "../../defaultTheme";

const getButtonLinkTypeToken = (name: string, type: Type, theme: Theme): string => {
  const tokens = {
    [TOKENS.background]: {
      [TYPES.PRIMARY]: theme.orbit.buttonLinkPrimaryBackground,
      [TYPES.SECONDARY]: theme.orbit.buttonLinkSecondaryBackground,
      [TYPES.CRITICAL]: theme.orbit.buttonLinkCriticalBackground,
    },
    [TOKENS.backgroundHover]: {
      [TYPES.PRIMARY]: theme.orbit.buttonLinkPrimaryBackgroundHover,
      [TYPES.SECONDARY]: theme.orbit.buttonLinkSecondaryBackgroundHover,
      [TYPES.CRITICAL]: theme.orbit.buttonLinkCriticalBackgroundHover,
    },
    [TOKENS.backgroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.buttonLinkPrimaryBackgroundActive,
      [TYPES.SECONDARY]: theme.orbit.buttonLinkSecondaryBackgroundActive,
      [TYPES.CRITICAL]: theme.orbit.buttonLinkCriticalBackgroundActive,
    },
    [TOKENS.foreground]: {
      [TYPES.PRIMARY]: theme.orbit.buttonLinkPrimaryForeground,
      [TYPES.SECONDARY]: theme.orbit.buttonLinkSecondaryForeground,
      [TYPES.CRITICAL]: theme.orbit.buttonLinkCriticalForeground,
    },
    [TOKENS.foregroundHover]: {
      [TYPES.PRIMARY]: theme.orbit.buttonLinkPrimaryForegroundHover,
      [TYPES.SECONDARY]: theme.orbit.buttonLinkSecondaryForegroundHover,
      [TYPES.CRITICAL]: theme.orbit.buttonLinkCriticalForegroundHover,
    },
    [TOKENS.foregroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.buttonLinkPrimaryForegroundActive,
      [TYPES.SECONDARY]: theme.orbit.buttonLinkSecondaryForegroundActive,
      [TYPES.CRITICAL]: theme.orbit.buttonLinkCriticalForegroundActive,
    },
  };
  return tokens[name][type];
};

export default getButtonLinkTypeToken;
