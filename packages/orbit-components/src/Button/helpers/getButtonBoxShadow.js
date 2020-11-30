// @flow
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";

import { TOKENS, TYPE_OPTIONS } from "../consts";
import { BUTTON_STATES } from "../../primitives/ButtonPrimitive/common/consts";
import getButtonTypeToken from "./getButtonTypeToken";
import type { GetButtonBoxShadow } from "./getButtonBoxShadow";

const opacity = {
  [TYPE_OPTIONS.PRIMARY]: 15,
  [TYPE_OPTIONS.SECONDARY]: 8,
  [TYPE_OPTIONS.CRITICAL]: 15,
  [TYPE_OPTIONS.WHITE]: 8,
  [TYPE_OPTIONS.PRIMARY_SUBTLE]: 8,
  [TYPE_OPTIONS.CRITICAL_SUBTLE]: 8,
  [TYPE_OPTIONS.BUNDLE_BASIC]: 15,
  [TYPE_OPTIONS.BUNDLE_MEDIUM]: 15,
  [TYPE_OPTIONS.BUNDLE_TOP]: 15,
};

const getButtonBoxShadow: GetButtonBoxShadow = ({ state, disabled, theme, type }) => {
  const wrappedButtonTypeToken = name => getButtonTypeToken({ name, type, theme });
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
