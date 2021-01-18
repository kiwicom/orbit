// @flow
import mergeDeepRight from "ramda/src/mergeDeepRight";

import defaultFoundation from "./defaultFoundation";
import createTokens from "./createTokens";
import type { CreateTheme } from "./createTheme";

const createTheme: CreateTheme = (foundation = {}, overrides = {}) => {
  const theme = mergeDeepRight(defaultFoundation, foundation);
  return mergeDeepRight(createTokens(theme), overrides);
};

export default createTheme;
