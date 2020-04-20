// @flow
import { SIZE_OPTIONS, TOKENS } from "./consts";
import type { GetSizeToken } from "./getSizeToken";

const getSizeToken: GetSizeToken = ({ theme, size }) => {
  const tokens = {
    [TOKENS.heightButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.heightButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.heightButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.heightButtonSmall,
    },
    [TOKENS.fontSizeButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeButtonSmall,
    },
    [TOKENS.spinnerWidth]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.widthIconMedium,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.widthIconMedium,
      [SIZE_OPTIONS.SMALL]: theme.orbit.widthIconSmall,
    },
    [TOKENS.spinnerHeight]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.heightIconMedium,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.heightIconMedium,
      [SIZE_OPTIONS.SMALL]: theme.orbit.heightIconSmall,
    },
  };
  return {
    height: tokens[TOKENS.heightButton][size],
    fontSize: tokens[TOKENS.fontSizeButton][size],
    spinner: {
      width: tokens[TOKENS.spinnerWidth][size],
      height: tokens[TOKENS.spinnerHeight][size],
    },
  };
};

export default getSizeToken;
