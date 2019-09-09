// @flow
import { SIZES, TOKENS } from "../consts";
import type { GetSizeToken } from "./getSizeToken";

const getSizeToken: GetSizeToken = name => ({ theme, size }) => {
  const tokens = {
    [TOKENS.heightButton]: {
      [SIZES.LARGE]: theme.orbit.heightButtonLarge,
      [SIZES.NORMAL]: theme.orbit.heightButtonNormal,
      [SIZES.SMALL]: theme.orbit.heightButtonSmall,
    },
    [TOKENS.fontSizeButton]: {
      [SIZES.LARGE]: theme.orbit.fontSizeButtonLarge,
      [SIZES.NORMAL]: theme.orbit.fontSizeButtonNormal,
      [SIZES.SMALL]: theme.orbit.fontSizeButtonSmall,
    },
  };
  return tokens[name][size];
};

export default getSizeToken;
