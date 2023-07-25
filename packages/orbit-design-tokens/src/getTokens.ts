import { CustomFoundation } from "./js/defaultFoundation";
import { Tokens } from "./js/createTokens";
import createTheme from "./js/createTheme";

export type GetTokens = (foundation?: CustomFoundation) => Tokens;

const getTokens: GetTokens = (foundation = {}) => {
  return createTheme(foundation);
};

export default getTokens;
