import _ from "lodash";

import defaultFoundation, { CustomFoundation } from "./defaultFoundation";
import createTokens, { Tokens } from "./createTokens";

type Overrides = Partial<Tokens>;

export interface CreateTheme {
  (foundation?: CustomFoundation, overrides?: Overrides): Tokens;
}

const createTheme: CreateTheme = (foundation = {}, overrides = {}) => {
  const theme = _.merge(foundation, defaultFoundation);
  return _.merge(overrides, createTokens(theme));
};

export default createTheme;
