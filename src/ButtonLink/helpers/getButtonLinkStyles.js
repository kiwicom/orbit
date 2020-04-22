// @flow
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import { BUTTON_STATES } from "../../primitives/ButtonPrimitive/common/consts";
import { TOKENS } from "../consts";
import getButtonLinkTypeToken from "./getButtonLinkTypeToken";
import type { GetButtonLinkStyles } from "./getButtonLinkStyles";

const getButtonLinkBoxShadow = (state, disabled, transparent, theme) => {
  if (disabled) {
    return null;
  }
  if (state === BUTTON_STATES.ACTIVE && !transparent) {
    return `inset 0 0 6px 3px ${convertHexToRgba(theme.orbit.paletteInkNormal, 8)}`;
  }
  return null;
};

const getButtonLinkStyles: GetButtonLinkStyles = ({ type, theme, disabled, transparent }) => {
  const wrappedTypeToken = name => getButtonLinkTypeToken(name, type, theme);
  const wrappedBoxShadow = state => getButtonLinkBoxShadow(state, disabled, transparent, theme);
  return {
    background: wrappedTypeToken(TOKENS.background),
    backgroundHover: wrappedTypeToken(TOKENS.backgroundHover),
    backgroundActive: wrappedTypeToken(TOKENS.backgroundActive),
    backgroundFocus: wrappedTypeToken(TOKENS.backgroundFocus),
    boxShadow: wrappedBoxShadow(BUTTON_STATES.DEFAULT),
    boxShadowHover: wrappedBoxShadow(BUTTON_STATES.HOVER),
    boxShadowActive: wrappedBoxShadow(BUTTON_STATES.ACTIVE),
    foreground: wrappedTypeToken(TOKENS.foreground),
    foregroundHover: wrappedTypeToken(TOKENS.foregroundHover),
    foregroundActive: wrappedTypeToken(TOKENS.foregroundActive),
  };
};

export default getButtonLinkStyles;
