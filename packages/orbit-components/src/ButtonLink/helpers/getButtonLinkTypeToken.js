// @flow
import { TOKENS, TYPES } from "../consts";
import type { GetButtonLinkTypeToken } from "./getButtonLinkTypeToken";

const getButtonLinkTypeToken: GetButtonLinkTypeToken = (name, type, theme) => {
  const tokens = {
    [TOKENS.background]: {
      [TYPES.PRIMARY]: "transparent",
      [TYPES.SECONDARY]: "transparent",
      [TYPES.CRITICAL]: "transparent",
    },
    [TOKENS.backgroundHover]: {
      [TYPES.PRIMARY]: theme.orbit.paletteProductLightSecondary,
      [TYPES.SECONDARY]: theme.orbit.paletteCloudLightSecondary,
      [TYPES.CRITICAL]: theme.orbit.paletteRedLightSecondary,
    },
    [TOKENS.backgroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.paletteProductLightTertiary,
      [TYPES.SECONDARY]: theme.orbit.paletteCloudLightTertiary,
      [TYPES.CRITICAL]: theme.orbit.paletteRedLightTertiary,
    },
    [TOKENS.foreground]: {
      [TYPES.PRIMARY]: theme.orbit.buttonLinkPrimaryForeground,
      [TYPES.SECONDARY]: theme.orbit.buttonLinkSecondaryForeground,
      [TYPES.CRITICAL]: theme.orbit.paletteRedNormal,
    },
    [TOKENS.foregroundHover]: {
      [TYPES.PRIMARY]: theme.orbit.buttonLinkPrimaryForegroundHover,
      [TYPES.SECONDARY]: theme.orbit.buttonLinkSecondaryForegroundHover,
      [TYPES.CRITICAL]: theme.orbit.paletteRedDarkSecondary,
    },
    [TOKENS.foregroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.buttonLinkPrimaryForegroundActive,
      [TYPES.SECONDARY]: theme.orbit.buttonLinkSecondaryForegroundActive,
      [TYPES.CRITICAL]: theme.orbit.paletteRedDarkTertiary,
    },
  };
  return tokens[name][type];
};

export default getButtonLinkTypeToken;
