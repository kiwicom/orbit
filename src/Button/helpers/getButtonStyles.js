// @flow
import { BUTTON_STATES } from "../../primitives/ButtonPrimitive/common/consts";
import getButtonTypeToken from "./getButtonTypeToken";
import { TOKENS } from "../consts";
import getButtonBoxShadow from "./getButtonBoxShadow";
import type { GetButtonStyles } from "./getButtonStyles";

const getButtonStyles: GetButtonStyles = ({ disabled, bordered, theme, type }) => {
  const boxShadow = {
    boxShadow: getButtonBoxShadow({
      state: BUTTON_STATES.DEFAULT,
      disabled,
      bordered,
      theme,
      type,
    }),
    boxShadowHover: getButtonBoxShadow({
      state: BUTTON_STATES.HOVER,
      disabled,
      bordered,
      theme,
      type,
    }),
    boxShadowActive: getButtonBoxShadow({
      state: BUTTON_STATES.ACTIVE,
      disabled,
      bordered,
      theme,
      type,
    }),
    boxShadowFocus: getButtonBoxShadow({
      state: BUTTON_STATES.FOCUS,
      disabled,
      bordered,
      theme,
      type,
    }),
  };
  if (bordered) {
    return {
      background: getButtonTypeToken({
        name: TOKENS.backgroundButtonBordered,
        disabled,
        bordered,
        theme,
        type,
      }),
      backgroundHover: getButtonTypeToken({
        name: TOKENS.backgroundButtonBorderedHover,
        disabled,
        bordered,
        theme,
        type,
      }),
      backgroundActive: getButtonTypeToken({
        name: TOKENS.backgroundButtonBorderedActive,
        disabled,
        bordered,
        theme,
        type,
      }),
      backgroundFocus: getButtonTypeToken({
        name: TOKENS.backgroundButtonFocus,
        disabled,
        bordered,
        theme,
        type,
      }),
      foreground: getButtonTypeToken({
        name: TOKENS.colorTextButtonBordered,
        disabled,
        bordered,
        theme,
        type,
      }),
      foregroundHover: getButtonTypeToken({
        name: TOKENS.colorTextButtonBorderedHover,
        disabled,
        bordered,
        theme,
        type,
      }),
      foregroundActive: getButtonTypeToken({
        name: TOKENS.colorTextButtonBorderedActive,
        disabled,
        bordered,
        theme,
        type,
      }),
      ...boxShadow,
    };
  }
  return {
    background: getButtonTypeToken({
      name: TOKENS.backgroundButton,
      disabled,
      bordered,
      theme,
      type,
    }),
    backgroundHover: getButtonTypeToken({
      name: TOKENS.backgroundButtonHover,
      disabled,
      bordered,
      theme,
      type,
    }),
    backgroundActive: getButtonTypeToken({
      name: TOKENS.backgroundButtonActive,
      disabled,
      bordered,
      theme,
      type,
    }),
    foreground: getButtonTypeToken({
      name: TOKENS.colorTextButton,
      disabled,
      bordered,
      theme,
      type,
    }),
    foregroundHover: getButtonTypeToken({
      name: TOKENS.colorTextButtonHover,
      disabled,
      bordered,
      theme,
      type,
    }),
    foregroundActive: getButtonTypeToken({
      name: TOKENS.colorTextButtonActive,
      disabled,
      bordered,
      theme,
      type,
    }),
    backgroundFocus: null,
    ...boxShadow,
  };
};

export default getButtonStyles;
