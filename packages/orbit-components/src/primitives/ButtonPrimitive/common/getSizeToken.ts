import { SIZE_OPTIONS, TOKENS } from "./consts";
import type { Size } from "../types";
import type { Theme } from "../../../defaultTheme";

const getSizeToken = (
  size: Size,
  theme: Theme,
): {
  height: string;
  fontSize: string;
} => {
  const tokens = {
    [TOKENS.heightButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.formBoxLargeHeight,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.formBoxNormalHeight,
      [SIZE_OPTIONS.SMALL]: theme.orbit.formBoxSmallHeight,
    },
    [TOKENS.fontSizeButton]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.buttonLargeFontSize,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.buttonNormalFontSize,
      [SIZE_OPTIONS.SMALL]: theme.orbit.buttonSmallFontSize,
    },
    [TOKENS.spinnerWidth]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.iconMediumSize,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.iconMediumSize,
      [SIZE_OPTIONS.SMALL]: theme.orbit.iconSmallSize,
    },
    [TOKENS.spinnerHeight]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.iconMediumSize,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.iconMediumSize,
      [SIZE_OPTIONS.SMALL]: theme.orbit.iconSmallSize,
    },
  };
  return {
    height: tokens[TOKENS.heightButton][size],
    fontSize: tokens[TOKENS.fontSizeButton][size],
  };
};

export default getSizeToken;
