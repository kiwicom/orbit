// @flow
import { TOKENS } from "../consts";
import getButtonTypeToken from "./getButtonTypeToken";
import type { GetButtonIconForeground } from "./getButtonIconForeground";

const getButtonIconForeground: GetButtonIconForeground = ({ bordered, theme, type }) => {
  const wrappedTypeToken = name => getButtonTypeToken({ name, theme, type });
  if (bordered) {
    return {
      iconForeground: wrappedTypeToken(TOKENS.colorTextButtonBordered),
      iconForegroundHover: wrappedTypeToken(TOKENS.colorTextButtonBorderedHover),
      iconForegroundActive: wrappedTypeToken(TOKENS.colorTextButtonBorderedActive),
    };
  }
  return {
    iconForeground: wrappedTypeToken(TOKENS.colorTextButton),
    iconForegroundHover: wrappedTypeToken(TOKENS.colorTextButtonHover),
    iconForegroundActive: wrappedTypeToken(TOKENS.colorTextButtonActive),
  };
};

export default getButtonIconForeground;
