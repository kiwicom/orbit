import { CustomFoundation } from "./defaultFoundation";
import { Tokens } from "./createTokens";
import createTheme from "./createTheme";

export interface GetTokens {
  (foundation?: CustomFoundation): Tokens;
}

const getTokens: GetTokens = (foundation = {}) => {
  return createTheme(foundation);
};

export default getTokens;
