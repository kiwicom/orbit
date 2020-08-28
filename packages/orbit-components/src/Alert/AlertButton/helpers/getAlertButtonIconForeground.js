// @flow
import { TOKENS } from "../consts";
import getAlertButtonTypeToken from "./getAlertButtonTypeToken";
import type { GetAlertButtonIconForeground } from "./getAlertButtonIconForeground";

const getAlertButtonIconForeground: GetAlertButtonIconForeground = ({ theme, type }) => ({
  foreground: getAlertButtonTypeToken(TOKENS.colorTextButton, type, theme),
});

export default getAlertButtonIconForeground;
