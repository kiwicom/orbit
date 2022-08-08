import { BUTTON_STATES } from "../../../primitives/ButtonPrimitive/common/consts";
import getAlertButtonTypeToken, { TokenName } from "./getAlertButtonTypeToken";
import { TOKENS } from "../consts";
import getAlertButtonBoxShadow, { State } from "./getAlertButtonBoxShadow";
import { Theme } from "../../../defaultTheme";
import { Type } from "../index.d";

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
