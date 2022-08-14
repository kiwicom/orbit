import { TOKENS, TYPES } from "../consts";
import { Type } from "../index.d";
import { Theme } from "../../defaultTheme";

const getButtonLinkTypeToken = (name: string, type: Type, theme: Theme): string => {
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
      [TYPES.CRITICAL]: theme.orbit.paletteRedDarkHover,
    },
    [TOKENS.foregroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimaryActive,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondaryActive,
      [TYPES.CRITICAL]: theme.orbit.paletteRedDarkActive,
    },
  };
  return tokens[name][type];
};

export default getButtonLinkTypeToken;
