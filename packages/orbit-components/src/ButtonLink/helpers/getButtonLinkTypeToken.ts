import { TOKENS, TYPES } from "../consts";
import type { Type } from "../types";
import type { Theme } from "../../defaultTheme";

const getButtonLinkTypeToken = (name: string, type: Type, theme: Theme): string => {
  const tokens = {
    [TOKENS.background]: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimary,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondary,
      [TYPES.CRITICAL]: theme.orbit.backgroundButtonLinkCritical,
    },
    [TOKENS.backgroundHover]: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondaryHover,
      [TYPES.CRITICAL]: theme.orbit.backgroundButtonLinkCriticalHover,
    },
    [TOKENS.backgroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimaryActive,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondaryActive,
      [TYPES.CRITICAL]: theme.orbit.backgroundButtonLinkCriticalActive,
    },
    [TOKENS.foreground]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimary,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondary,
      [TYPES.CRITICAL]: theme.orbit.colorTextButtonLinkCritical,
    },
    [TOKENS.foregroundHover]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondaryHover,
      [TYPES.CRITICAL]: theme.orbit.colorTextButtonLinkCriticalHover,
    },
    [TOKENS.foregroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimaryActive,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondaryActive,
      [TYPES.CRITICAL]: theme.orbit.colorTextButtonLinkCriticalActive,
    },
  };
  return tokens[name][type];
};

export default getButtonLinkTypeToken;
