import _ from "lodash";

import defaultFoundation, { CustomFoundation } from "./defaultFoundation";
import createTokens, { Tokens } from "./createTokens";

type Overrides = Partial<Tokens>;

export interface CreateTheme {
  (foundation?: CustomFoundation, overrides?: Overrides): Tokens;
}

const createTheme: CreateTheme = (foundation = {}, overrides = {}) => {
  const theme = _.merge(defaultFoundation, foundation);
  return _.merge(createTokens(theme), overrides);
};

export default createTheme;
