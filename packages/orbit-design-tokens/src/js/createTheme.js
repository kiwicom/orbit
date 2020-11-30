// @flow
import mergeDeepRight from "ramda/src/mergeDeepRight";

import defaultFoundation from "./defaultFoundation";
import createTokens from "./createTokens";

export default function createTheme(foundation = {}, overrides = {}) {
  const theme = mergeDeepRight(defaultFoundation, foundation);
  return mergeDeepRight(createTokens(theme), overrides);
}
