// @flow
import getSocialButtonTypeToken from "./getSocialButtonTypeToken";
import getSocialButtonBoxShadow from "./getSocialButtonBoxShadow";
import { TOKENS } from "../consts";
import { BUTTON_STATES } from "../../primitives/ButtonPrimitive/common/consts";
import type { GetSocialButtonStyles } from "./getSocialButtonStyles";

const getButtonStyles: GetSocialButtonStyles = ({ theme, disabled, type }) => {
  const wrappedTypeToken = name => getSocialButtonTypeToken(name, type, theme);
  return {
    background: wrappedTypeToken(TOKENS.backgroundButton),
    backgroundHover: wrappedTypeToken(TOKENS.backgroundButtonHover),
    backgroundActive: wrappedTypeToken(TOKENS.backgroundButtonActive),
    backgroundFocus: null,
    foreground: wrappedTypeToken(TOKENS.colorTextButton),
    foregroundHover: wrappedTypeToken(TOKENS.colorTextButtonHover),
    foregroundActive: wrappedTypeToken(TOKENS.colorTextButtonActive),
    boxShadow: null,
    boxShadowActive: getSocialButtonBoxShadow(BUTTON_STATES.ACTIVE, disabled, theme, type),
    boxShadowFocus: getSocialButtonBoxShadow(BUTTON_STATES.FOCUS, disabled, theme, type),
    contentAlign: "start",
    contentWidth: "100%",
  };
};

export default getButtonStyles;
