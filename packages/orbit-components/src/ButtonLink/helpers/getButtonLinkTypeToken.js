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
      [TYPES.PRIMARY]: theme.orbit.paletteProductLightHover,
      [TYPES.SECONDARY]: theme.orbit.paletteCloudLightHover,
      [TYPES.CRITICAL]: theme.orbit.paletteRedLightHover,
    },
    [TOKENS.backgroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.paletteProductLightActive,
      [TYPES.SECONDARY]: theme.orbit.paletteCloudLightActive,
      [TYPES.CRITICAL]: theme.orbit.paletteRedLightActive,
    },
    [TOKENS.foreground]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimary,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondary,
      [TYPES.CRITICAL]: theme.orbit.paletteRedNormal,
    },
    [TOKENS.foregroundHover]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondaryHover,
      [TYPES.CRITICAL]: theme.orbit.paletteRedNormalHover,
    },
    [TOKENS.foregroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimaryActive,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondaryActive,
      [TYPES.CRITICAL]: theme.orbit.paletteRedNormalActive,
    },
  };
  return tokens[name][type];
};

export default getButtonLinkTypeToken;
