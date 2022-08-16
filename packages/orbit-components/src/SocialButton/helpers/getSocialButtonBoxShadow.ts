import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import getSocialButtonTypeToken from "./getSocialButtonTypeToken";
import { TOKENS, TYPE_OPTIONS } from "../consts";
import { Theme } from "../../defaultTheme";
import { Type } from "../index.d";
import { BUTTON_STATES } from "../../primitives/ButtonPrimitive/common/consts";

const opacity = {
  [TYPE_OPTIONS.APPLE]: 15,
  [TYPE_OPTIONS.FACEBOOK]: 8,
  [TYPE_OPTIONS.GOOGLE]: 8,
  [TYPE_OPTIONS.TWITTER]: 8,
  [TYPE_OPTIONS.EMAIL]: 8,
};

type State = "default" | "focus" | "active" | "hover";

const getButtonBoxShadow = (
  state: State,
  disabled: boolean,
  theme: Theme,
  type: Type,
): string | null => {
  const wrappedButtonTypeToken = name => getSocialButtonTypeToken(name, type, theme);
  if (disabled) {
    return null;
  }
  if (state === BUTTON_STATES.ACTIVE) {
    return `inset 0 0 6px 3px ${convertHexToRgba(theme.orbit.paletteInkNormal, opacity[type])};`;
  }
  if (state === BUTTON_STATES.FOCUS) {
    return `0 0 0 3px ${wrappedButtonTypeToken(TOKENS.borderColorButtonFocus)}`;
  }
  return null;
};

export default getButtonBoxShadow;
