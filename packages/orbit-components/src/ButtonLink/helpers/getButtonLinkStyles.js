// @flow

import { TOKENS, TYPES } from "../consts";
import getButtonLinkTypeToken from "./getButtonLinkTypeToken";
import type { GetButtonLinkStyles } from "./getButtonLinkStyles";

const getButtonLinkStyles: GetButtonLinkStyles = ({ type, theme, compact }) => {
  const wrappedTypeToken = name => getButtonLinkTypeToken(name, type, theme);
  const commonStyles = {
    background: wrappedTypeToken(TOKENS.background),
    foreground: wrappedTypeToken(TOKENS.foreground),
    foregroundHover: wrappedTypeToken(TOKENS.foregroundHover),
    foregroundActive: wrappedTypeToken(TOKENS.foregroundActive),
    foregroundFocus: wrappedTypeToken(TOKENS.foregroundActive),
  };

  if (compact) {
    if (type === TYPES.SECONDARY) {
      const wrappedPrimaryType = name => getButtonLinkTypeToken(name, TYPES.PRIMARY, theme);
      return {
        ...commonStyles,
        foregroundHover: wrappedPrimaryType(TOKENS.foregroundHover),
        foregroundActive: wrappedPrimaryType(TOKENS.foregroundActive),
        foregroundFocus: wrappedPrimaryType(TOKENS.foregroundActive),
      };
    }
    return commonStyles;
  }

  return {
    backgroundHover: wrappedTypeToken(TOKENS.backgroundHover),
    backgroundActive: wrappedTypeToken(TOKENS.backgroundActive),
    backgroundFocus: wrappedTypeToken(TOKENS.backgroundActive),
    ...commonStyles,
  };
};

export default getButtonLinkStyles;
