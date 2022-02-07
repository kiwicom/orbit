// @flow
import { BUTTON_STATES } from "../../primitives/ButtonPrimitive/common/consts";
import getButtonTypeToken from "./getButtonTypeToken";
import { TOKENS } from "../consts";
import getButtonBoxShadow from "./getButtonBoxShadow";
import type { GetButtonStyles } from "./getButtonStyles";

const getButtonStyles: GetButtonStyles = ({ disabled, theme, type }) => {
  const wrappedBoxShadow = state => getButtonBoxShadow({ state, disabled, theme, type });
  const wrappedTypeToken = name => getButtonTypeToken({ name, type, theme });
  const boxShadow = {
    boxShadow: wrappedBoxShadow(BUTTON_STATES.DEFAULT),
    boxShadowHover: wrappedBoxShadow(BUTTON_STATES.HOVER),
    boxShadowActive: wrappedBoxShadow(BUTTON_STATES.ACTIVE),
    boxShadowFocus: wrappedBoxShadow(BUTTON_STATES.FOCUS),
  };
  return {
    background: wrappedTypeToken(TOKENS.backgroundButton),
    backgroundHover: wrappedTypeToken(TOKENS.backgroundButtonHover),
    backgroundActive: wrappedTypeToken(TOKENS.backgroundButtonActive),
    backgroundFocus: null,
    foreground: wrappedTypeToken(TOKENS.colorTextButton),
    foregroundHover: wrappedTypeToken(TOKENS.colorTextButtonHover),
    foregroundActive: wrappedTypeToken(TOKENS.colorTextButtonActive),
    ...boxShadow,
  };
};

export default getButtonStyles;
