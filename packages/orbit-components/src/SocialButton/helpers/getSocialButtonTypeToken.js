// @flow
import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import { TOKENS, TYPE_OPTIONS } from "../consts";
import type { GetSocialButtonTypeToken } from "./getSocialButtonTypeToken";

const getSocialButtonTypeToken: GetSocialButtonTypeToken = (name, type, theme) => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteInkDark,
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
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteCloudDark,
    },
    [TOKENS.colorTextButton]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteInkDark,
    },
    [TOKENS.colorTextButtonHover]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteInkDark,
    },
    [TOKENS.colorTextButtonActive]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.GOOGLE]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.TWITTER]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteInkDark,
    },
    [TOKENS.iconColor]: {
      [TYPE_OPTIONS.APPLE]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.FACEBOOK]: theme.orbit.paletteSocialFacebook,
      [TYPE_OPTIONS.GOOGLE]: "currentColor",
      [TYPE_OPTIONS.TWITTER]: "#00ACEE", // TODO: add token
      [TYPE_OPTIONS.EMAIL]: theme.orbit.paletteInkDark,
    },
    [TOKENS.borderColorButtonFocus]: {
      [TYPE_OPTIONS.APPLE]: convertHexToRgba(theme.orbit.paletteInkNormal, 50),
      [TYPE_OPTIONS.FACEBOOK]: convertHexToRgba(theme.orbit.paletteInkNormal, 30),
      [TYPE_OPTIONS.GOOGLE]: convertHexToRgba(theme.orbit.paletteInkNormal, 50),
      [TYPE_OPTIONS.TWITTER]: convertHexToRgba(theme.orbit.paletteInkNormal, 50),
      [TYPE_OPTIONS.EMAIL]: convertHexToRgba(theme.orbit.paletteInkNormal, 50),
    },
  };
  return tokens[name][type];
};

export default getSocialButtonTypeToken;
