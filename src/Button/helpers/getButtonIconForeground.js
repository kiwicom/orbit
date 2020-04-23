// @flow
import { TOKENS } from "../consts";
import getButtonTypeToken from "./getButtonTypeToken";
import type { GetButtonIconForeground } from "./getButtonIconForeground";

const getButtonIconForeground: GetButtonIconForeground = ({ bordered, theme, type }) => {
  const wrappedTypeToken = name => getButtonTypeToken(name, type, theme);
  if (bordered) {
    return {
      foreground: wrappedTypeToken(TOKENS.colorTextButtonBordered),
      foregroundHover: wrappedTypeToken(TOKENS.colorTextButtonBorderedHover),
      foregroundActive: wrappedTypeToken(TOKENS.colorTextButtonBorderedActive),
    };
  }
  return {
    foreground: wrappedTypeToken(TOKENS.colorTextButton),
    foregroundHover: wrappedTypeToken(TOKENS.colorTextButtonHover),
    foregroundActive: wrappedTypeToken(TOKENS.colorTextButtonActive),
  };
};

export default getButtonIconForeground;
