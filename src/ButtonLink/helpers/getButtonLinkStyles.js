// @flow

import { TOKENS, TYPES } from "../consts";
import getButtonLinkTypeToken from "./getButtonLinkTypeToken";
import type { GetButtonLinkStyles } from "./getButtonLinkStyles";

const getButtonLinkStyles: GetButtonLinkStyles = ({ type, theme }) => {
  const wrappedTypeToken = name => getButtonLinkTypeToken(name, type, theme);
  const base = {
    background: wrappedTypeToken(TOKENS.background),
    backgroundHover: wrappedTypeToken(TOKENS.backgroundHover),
    backgroundActive: wrappedTypeToken(TOKENS.backgroundActive),
    backgroundFocus: wrappedTypeToken(TOKENS.backgroundActive),
    foreground: wrappedTypeToken(TOKENS.foreground),
    foregroundHover: wrappedTypeToken(TOKENS.foregroundHover),
    foregroundActive: wrappedTypeToken(TOKENS.foregroundActive),
    foregroundFocus: wrappedTypeToken(TOKENS.foregroundActive),
  };
  if (type === TYPES.INLINE) {
    return { ...base, underlined: true };
  }
  return base;
};

export default getButtonLinkStyles;
