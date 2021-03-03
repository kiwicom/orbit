// @flow
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";

import { TOKENS, TYPE_OPTIONS } from "../consts";
import { BUTTON_STATES } from "../../primitives/ButtonPrimitive/common/consts";
import getSocialButtonTypeToken from "./getSocialButtonTypeToken";
import type { GetSocialButtonBoxShadow } from "./getSocialButtonBoxShadow";

const opacity = {
  [TYPE_OPTIONS.APPLE]: 15,
  [TYPE_OPTIONS.FACEBOOK]: 8,
  [TYPE_OPTIONS.GOOGLE]: 8,
  [TYPE_OPTIONS.TWITTER]: 8,
};

const getButtonBoxShadow: GetSocialButtonBoxShadow = (state, disabled, theme, type) => {
  const wrappedButtonTypeToken = name => getSocialButtonTypeToken(name, type, theme);
  if (disabled) {
    return null;
  }
  if (state === BUTTON_STATES.ACTIVE) {
    return `inset 0 0 6px 3px ${transparentColor(theme.orbit.paletteInkNormal, opacity[type])};`;
  }
  if (state === BUTTON_STATES.FOCUS) {
    return `0 0 0 3px ${wrappedButtonTypeToken(TOKENS.borderColorButtonFocus)}`;
  }
  return null;
};

export default getButtonBoxShadow;
