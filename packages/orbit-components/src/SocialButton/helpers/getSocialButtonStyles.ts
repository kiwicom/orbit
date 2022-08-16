import getSocialButtonTypeToken from "./getSocialButtonTypeToken";
import getSocialButtonBoxShadow from "./getSocialButtonBoxShadow";
import { TOKENS } from "../consts";
import { BUTTON_STATES } from "../../primitives/ButtonPrimitive/common/consts";
import { Theme } from "../../defaultTheme";
import { Type } from "../index.d";

interface Output {
  background: string;
  backgroundHover: string;
  backgroundActive: string;
  backgroundFocus: string | null;
  foreground: string;
  foregroundHover: string;
  foregroundActive: string;
  boxShadow: string | null;
  boxShadowActive: string | null;
  boxShadowFocus: string | null;
  contentAlign: "start" | "center" | "end";
  contentWidth: string;
}

const getButtonStyles = ({
  theme,
  disabled,
  type,
}: {
  theme: Theme;
  disabled: boolean;
  type: Type;
}): Output => {
  const wrappedTypeToken = (name: string) => getSocialButtonTypeToken(name, type, theme);
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
