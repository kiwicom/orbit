// @flow
import { BUTTON_STATES } from "../../primitives/ButtonPrimitive/common/consts";
import getButtonTypeToken from "./getButtonTypeToken";
import { TOKENS } from "../consts";
import getButtonBoxShadow from "./getButtonBoxShadow";
import type { GetButtonStyles } from "./getButtonStyles";

const getButtonStyles: GetButtonStyles = props => {
  const boxShadow = {
    boxShadow: getButtonBoxShadow({ state: BUTTON_STATES.DEFAULT, ...props }),
    boxShadowHover: getButtonBoxShadow({ state: BUTTON_STATES.HOVER, ...props }),
    boxShadowActive: getButtonBoxShadow({ state: BUTTON_STATES.ACTIVE, ...props }),
    boxShadowFocus: getButtonBoxShadow({ state: BUTTON_STATES.FOCUS, ...props }),
  };
  if (props.bordered) {
    return {
      background: getButtonTypeToken({ name: TOKENS.backgroundButtonBordered, ...props }),
      backgroundHover: getButtonTypeToken({ name: TOKENS.backgroundButtonBorderedHover, ...props }),
      backgroundActive: getButtonTypeToken({
        name: TOKENS.backgroundButtonBorderedActive,
        ...props,
      }),
      backgroundFocus: getButtonTypeToken({
        name: TOKENS.backgroundButtonFocus,
        ...props,
      }),
      foreground: getButtonTypeToken({ name: TOKENS.colorTextButtonBordered, ...props }),
      foregroundHover: getButtonTypeToken({ name: TOKENS.colorTextButtonBorderedHover, ...props }),
      foregroundActive: getButtonTypeToken({
        name: TOKENS.colorTextButtonBorderedActive,
        ...props,
      }),
      ...boxShadow,
    };
  }
  return {
    background: getButtonTypeToken({ name: TOKENS.backgroundButton, ...props }),
    backgroundHover: getButtonTypeToken({ name: TOKENS.backgroundButtonHover, ...props }),
    backgroundActive: getButtonTypeToken({ name: TOKENS.backgroundButtonActive, ...props }),
    foreground: getButtonTypeToken({ name: TOKENS.colorTextButton, ...props }),
    foregroundHover: getButtonTypeToken({ name: TOKENS.colorTextButtonHover, ...props }),
    foregroundActive: getButtonTypeToken({ name: TOKENS.colorTextButtonActive, ...props }),
    ...boxShadow,
  };
};

export default getButtonStyles;
