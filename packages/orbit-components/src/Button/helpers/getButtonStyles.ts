import { BUTTON_STATES } from "../../primitives/ButtonPrimitive/common/consts";
import getButtonTypeToken from "./getButtonTypeToken";
import { TOKENS } from "../consts";
import getButtonBoxShadow from "./getButtonBoxShadow";
import { Theme } from "../../defaultTheme";
import { Type, ButtonStates } from "../index.d";

const getButtonStyles = ({
  disabled,
  theme,
  type,
}: {
  disabled: boolean;
  theme: Theme;
  type: Type;
}): {
  background: string;
  backgroundHover: string;
  backgroundActive: string;
  backgroundFocus: string | null;
  foreground: string;
  foregroundHover: string;
  foregroundActive: string;
} => {
  const wrappedBoxShadow = (state: ButtonStatesType) =>
    getButtonBoxShadow({ state, disabled, theme, type });
  const wrappedTypeToken = (name: string) => getButtonTypeToken({ name, type, theme });
  const boxShadow = {
    boxShadow: wrappedBoxShadow(BUTTON_STATES.DEFAULT),
    boxShadowHover: wrappedBoxShadow(BUTTON_STATES.HOVER),
    boxShadowActive: wrappedBoxShadow(BUTTON_STATES.ACTIVE),
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
