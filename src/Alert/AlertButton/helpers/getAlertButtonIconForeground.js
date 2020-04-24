// @flow
import { TOKENS } from "../consts";
import getAlertButtonTypeToken from "./getAlertButtonTypeToken";
import type { GetAlertButtonIconForeground } from "./getAlertButtonIconForeground";

const getAlertButtonIconForeground: GetAlertButtonIconForeground = ({ theme, type }) => {
  const wrappedTypeToken = name => getAlertButtonTypeToken(name, type, theme);
  return {
    foreground: wrappedTypeToken(TOKENS.colorTextButton),
  };
};

export default getAlertButtonIconForeground;
