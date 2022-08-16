import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import { TOKENS, TYPE_OPTIONS } from "../consts";
import { Theme } from "../../defaultTheme";
import { Type } from "../index.d";

const getSocialButtonTypeToken = (name: string, type: Type, theme: Theme): string => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteCloudDark,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteInkNormalHover,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteCloudNormalHover,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteCloudNormalHover,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteCloudNormalHover,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteCloudNormalHover,
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteInkNormalActive,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteCloudNormalActive,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteCloudNormalActive,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteCloudNormalActive,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteCloudNormalActive,
    },
    [TOKENS.backgroundButtonFocus]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteCloudDark,
    },
    [TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteInkNormal,
    },
    [TOKENS.colorTextButtonHover]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteInkNormal,
    },
    [TOKENS.colorTextButtonActive]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteInkNormal,
    },
    [TOKENS.iconColor]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteSocialFacebook,
      [TYPE_OPTIONS.GOOGLE]: "currentColor",
      [TYPE_OPTIONS.TWITTER]: "#00ACEE", // TODO: add token
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteInkNormal,
    },
    [TOKENS.borderColorButtonFocus]: {
      [TYPE_OPTIONS.APPLE]: convertHexToRgba(theme.orbit.paletteInkLight, 50),
      [TYPE_OPTIONS.FACEBOOK]: convertHexToRgba(theme.orbit.paletteInkLight, 30),
      [TYPE_OPTIONS.GOOGLE]: convertHexToRgba(theme.orbit.paletteInkLight, 50),
      [TYPE_OPTIONS.TWITTER]: convertHexToRgba(theme.orbit.paletteInkLight, 50),
      [TYPE_OPTIONS.EMAIL]: convertHexToRgba(theme.orbit.paletteInkLight, 50),
    },
  };
  return tokens[name][type];
};

export default getSocialButtonTypeToken;
