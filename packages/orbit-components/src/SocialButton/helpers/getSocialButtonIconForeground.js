// @flow
import { TOKENS } from "../consts";
import getSocialButtonTypeToken from "./getSocialButtonTypeToken";
import type { GetSocialButtonIconForeground } from "./getSocialButtonIconForeground";

const getSocialButtonIconForeground: GetSocialButtonIconForeground = ({ theme, type }) => ({
  foreground: getSocialButtonTypeToken(TOKENS.iconColor, type, theme),
});

export default getSocialButtonIconForeground;
