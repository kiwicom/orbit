import { BUTTON_STATES } from "../../../primitives/ButtonPrimitive/common/consts";
import type { TokenName } from "./getAlertButtonTypeToken";
import getAlertButtonTypeToken from "./getAlertButtonTypeToken";
import { TOKENS } from "../consts";
import type { State } from "./getAlertButtonBoxShadow";
import getAlertButtonBoxShadow from "./getAlertButtonBoxShadow";
import type { Theme } from "../../../defaultTheme";
import type { Type } from "../types";

const getAlertButtonStyles = ({
  disabled,
  theme,
  type,
}: {
  disabled: boolean;
  theme: Theme;
  type: Type;
}): Record<string, string | null> => {
  const wrappedBoxShadow = (state: State) => getAlertButtonBoxShadow(state, disabled, theme, type);
  const wrappedTypeToken = (name: TokenName) => getAlertButtonTypeToken(name, type, theme);
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
