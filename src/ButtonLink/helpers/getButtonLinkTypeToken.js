// @flow
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import { TOKENS, TYPES } from "../consts";
import type { GetButtonLinkTypeToken } from "./getButtonLinkTypeToken";

const getButtonLinkTypeToken: GetButtonLinkTypeToken = (name, type, theme) => {
  const tokens = {
    [TOKENS.background]: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimary,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondary,
      [TYPES.CRITICAL]: "transparent",
      [TYPES.INLINE]: "transparent",
    },
    [TOKENS.backgroundHover]: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondaryHover,
      [TYPES.CRITICAL]: theme.orbit.paletteRedLightHover,
      [TYPES.INLINE]: "transparent",
    },
    [TOKENS.backgroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondaryHover,
      [TYPES.CRITICAL]: theme.orbit.paletteRedLightActive,
      [TYPES.INLINE]: "transparent",
    },
    [TOKENS.backgroundFocus]: {
      [TYPES.PRIMARY]: convertHexToRgba(theme.orbit.paletteProductNormal, 10),
      [TYPES.SECONDARY]: convertHexToRgba(theme.orbit.paletteInkLight, 10),
      [TYPES.CRITICAL]: convertHexToRgba(theme.orbit.paletteRedNormal, 10),
      [TYPES.INLINE]: "transparent",
    },
    [TOKENS.foreground]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimary,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondary,
      [TYPES.CRITICAL]: theme.orbit.paletteRedNormal,
      [TYPES.INLINE]: theme.orbit.paletteInkNormal,
    },
    [TOKENS.foregroundHover]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondaryHover,
      [TYPES.CRITICAL]: theme.orbit.paletteRedNormalHover,
      [TYPES.INLINE]: theme.orbit.paletteProductNormal,
    },
    [TOKENS.foregroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimaryActive,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondaryActive,
      [TYPES.CRITICAL]: theme.orbit.paletteRedNormalActive,
      [TYPES.INLINE]: theme.orbit.paletteProductNormal,
    },
  };
  return tokens[name][type];
};

export default getButtonLinkTypeToken;
