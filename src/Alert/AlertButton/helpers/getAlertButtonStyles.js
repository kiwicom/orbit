// @flow
import { BUTTON_STATES } from "../../../primitives/ButtonPrimitive/common/consts";
import getAlertButtonTypeToken from "./getAlertButtonTypeToken";
import { TOKENS } from "../consts";
import getAlertButtonBoxShadow from "./getAlertButtonBoxShadow";
import type { GetAlertButtonStyles } from "./getAlertButtonStyles";

const getAlertButtonStyles: GetAlertButtonStyles = ({ disabled, theme, type }) => {
  const wrappedBoxShadow = state => getAlertButtonBoxShadow(state, disabled, theme, type);
  const wrappedTypeToken = name => getAlertButtonTypeToken(name, type, theme);
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
    ...boxShadow,
  };
};

export default getAlertButtonStyles;
