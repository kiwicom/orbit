// @flow
import { TOKENS } from "../consts";
import getButtonTypeToken from "./getButtonTypeToken";
import type { GetButtonIconForeground } from "./getButtonIconForeground";

const getButtonIconForeground: GetButtonIconForeground = ({ theme, type }) => {
  const wrappedTypeToken = name => getButtonTypeToken({ name, type, theme });
  return {
    foreground: wrappedTypeToken(TOKENS.colorTextButton),
    foregroundHover: wrappedTypeToken(TOKENS.colorTextButtonHover),
    foregroundActive: wrappedTypeToken(TOKENS.colorTextButtonActive),
    foregroundFocus: wrappedTypeToken(TOKENS.colorTextButtonActive),
  };
};

export default getButtonIconForeground;
