import mergeDeepRight from "ramda/src/mergeDeepRight";

import defaultFoundation, { CustomFoundation } from "./defaultFoundation";
import createTokens, { Tokens } from "./createTokens";

type Overrides = Partial<Tokens>;

export interface CreateTheme {
  (foundation?: CustomFoundation, overrides?: Overrides): Tokens;
}

const createTheme: CreateTheme = (foundation = {}, overrides = {}) => {
  const theme = mergeDeepRight(defaultFoundation, foundation);
  return mergeDeepRight(createTokens(theme), overrides);
};

export default createTheme;
