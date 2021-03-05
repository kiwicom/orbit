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
      [TYPES.PRIMARY]: theme.orbit.paletteProductNormal,
      [TYPES.SECONDARY]: theme.orbit.paletteInkNormal,
      [TYPES.CRITICAL]: theme.orbit.paletteRedNormal,
    },
    [TOKENS.foregroundHover]: {
      [TYPES.PRIMARY]: theme.orbit.paletteProductNormalHover,
      [TYPES.SECONDARY]: theme.orbit.paletteInkNormalHover,
      [TYPES.CRITICAL]: theme.orbit.paletteRedNormalHover,
    },
    [TOKENS.foregroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.paletteProductNormalActive,
      [TYPES.SECONDARY]: theme.orbit.paletteInkNormalActive,
      [TYPES.CRITICAL]: theme.orbit.paletteRedNormalActive,
    },
  };
  return tokens[name][type];
};

export default getButtonLinkTypeToken;
