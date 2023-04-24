import defaultFoundation, { CustomFoundation } from "./defaultFoundation";
import createTokens, { Tokens } from "./createTokens";
import merge from "../utils/mergeDeep";

type Overrides = Partial<Tokens>;

export interface CreateTheme {
  (foundation?: CustomFoundation, overrides?: Overrides): Tokens;
}

const createTheme: CreateTheme = (foundation = {}, overrides = {}) => {
  // custom merge function here instead of lodash, so it won't be included in the bundle
  const theme = merge<typeof defaultFoundation, CustomFoundation>(defaultFoundation, foundation);
  return merge(createTokens(theme), overrides);
};

export default createTheme;
