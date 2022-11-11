import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import { Theme } from "../../../defaultTheme";
import getAlertButtonTypeToken, { TokenName } from "./getAlertButtonTypeToken";
import { TOKENS, TYPE_OPTIONS } from "../consts";
import { BUTTON_STATES } from "../../../primitives/ButtonPrimitive/common/consts";
import { Type } from "../types";

const opacity = {
  [TYPE_OPTIONS.INFO]: 15,
  [TYPE_OPTIONS.SUCCESS]: 15,
  [TYPE_OPTIONS.WARNING]: 15,
  [TYPE_OPTIONS.CRITICAL]: 15,
  [TYPE_OPTIONS.INFO_SUBTLE]: 8,
  [TYPE_OPTIONS.SUCCESS_SUBTLE]: 8,
  [TYPE_OPTIONS.WARNING_SUBTLE]: 8,
  [TYPE_OPTIONS.CRITICAL_SUBTLE]: 8,
};

export type State = "default" | "focus" | "active" | "hover";

const getAlertButtonBoxShadow = (
  state: State,
  disabled: boolean,
  theme: Theme,
  type: Type,
): string | null => {
  const wrappedButtonTypeToken = (name: TokenName) => getAlertButtonTypeToken(name, type, theme);

  if (disabled) return null;

  if (state === BUTTON_STATES.ACTIVE) {
    return `inset 0 0 6px 3px ${convertHexToRgba(theme.orbit.paletteInkDark, opacity[type])};`;
  }

  if (state === BUTTON_STATES.FOCUS) {
    return `0 0 0 3px ${wrappedButtonTypeToken(TOKENS.borderColorButtonFocus)}`;
  }

  return null;
};

export default getAlertButtonBoxShadow;
