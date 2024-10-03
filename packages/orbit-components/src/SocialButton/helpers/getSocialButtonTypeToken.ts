import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import { TOKENS, TYPE_OPTIONS } from "../consts";
import type { Theme } from "../../defaultTheme";
import type { Type } from "../types";

const getSocialButtonTypeToken = (name: string, type: Type, theme: Theme): string => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteCloudNormal,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteCloudNormal,
      [TYPE_OPTIONS.X]: theme.orbit.paletteCloudNormal,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteCloudNormal,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteInkDarkHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteCloudNormalHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteCloudNormalHover,
      [TYPE_OPTIONS.X]: theme.orbit.paletteCloudNormalHover,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteCloudNormalHover,
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteInkDarkActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteCloudNormalActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteCloudNormalActive,
      [TYPE_OPTIONS.X]: theme.orbit.paletteCloudNormalActive,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteCloudNormalActive,
    },
    [TOKENS.backgroundButtonFocus]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteCloudNormal,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteCloudNormal,
      [TYPE_OPTIONS.X]: theme.orbit.paletteCloudNormal,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteCloudNormal,
    },
    [TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.X]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteInkDark,
    },
    [TOKENS.colorTextButtonHover]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.X]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteInkDark,
    },
    [TOKENS.colorTextButtonActive]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.X]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteInkDark,
    },
    [TOKENS.iconColor]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteSocialFacebook,
      [TYPE_OPTIONS.GOOGLE]: "currentColor",
      [TYPE_OPTIONS.X]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteInkDark,
    },
    [TOKENS.borderColorButtonFocus]: {
      [TYPE_OPTIONS.APPLE]: convertHexToRgba(theme.orbit.paletteInkNormal, 50),
      [TYPE_OPTIONS.FACEBOOK]: convertHexToRgba(theme.orbit.paletteInkNormal, 30),
      [TYPE_OPTIONS.GOOGLE]: convertHexToRgba(theme.orbit.paletteInkNormal, 50),
      [TYPE_OPTIONS.X]: convertHexToRgba(theme.orbit.paletteInkNormal, 50),
      [TYPE_OPTIONS.EMAIL]: convertHexToRgba(theme.orbit.paletteInkNormal, 50),
    },
  };
  return tokens[name][type];
};

export default getSocialButtonTypeToken;
