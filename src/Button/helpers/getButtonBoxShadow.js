// @flow
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import { TOKENS, TYPE_OPTIONS } from "../consts";
import { BUTTON_STATES } from "../../primitives/ButtonPrimitive/common/consts";
import getButtonTypeToken from "./getButtonTypeToken";
import type { GetButtonBoxShadow } from "./getButtonBoxShadow";

const opacity = {
  default: {
    [TYPE_OPTIONS.PRIMARY]: 15,
    [TYPE_OPTIONS.SECONDARY]: 8,
    [TYPE_OPTIONS.INFO]: 15,
    [TYPE_OPTIONS.SUCCESS]: 15,
    [TYPE_OPTIONS.WARNING]: 15,
    [TYPE_OPTIONS.CRITICAL]: 15,
    [TYPE_OPTIONS.FACEBOOK]: 15,
    [TYPE_OPTIONS.GOOGLE]: 8,
    [TYPE_OPTIONS.WHITE]: 8,
  },
  bordered: {
    [TYPE_OPTIONS.PRIMARY]: 15,
    [TYPE_OPTIONS.SECONDARY]: 15,
    [TYPE_OPTIONS.INFO]: 15,
    [TYPE_OPTIONS.SUCCESS]: 15,
    [TYPE_OPTIONS.WARNING]: 15,
    [TYPE_OPTIONS.CRITICAL]: 15,
    [TYPE_OPTIONS.FACEBOOK]: 15,
    [TYPE_OPTIONS.GOOGLE]: 15,
    [TYPE_OPTIONS.WHITE]: 15,
  },
};

const getButtonBoxShadow: GetButtonBoxShadow = ({ state, disabled, bordered, theme, type }) => {
  const wrappedButtonTypeToken = name =>
    getButtonTypeToken({
      name,
      type,
      theme,
    });
  if (disabled) {
    return null;
  }
  if (state === BUTTON_STATES.DEFAULT && bordered) {
    return `inset 0 0 0 1px ${wrappedButtonTypeToken(TOKENS.borderColorButton)}`;
  }
  if (state === BUTTON_STATES.HOVER && bordered) {
    return `inset 0 0 0 1px ${wrappedButtonTypeToken(TOKENS.borderColorButtonHover)}`;
  }
  if (state === BUTTON_STATES.ACTIVE) {
    if (bordered) {
      return `inset 0 0 0 1px ${wrappedButtonTypeToken(TOKENS.borderColorButtonActive)},
          inset 0 0 6px 3px ${convertHexToRgba(
            theme.orbit.paletteInkNormal,
            opacity.bordered[type],
          )}`;
    }
    return `inset 0 0 6px 3px ${convertHexToRgba(
      theme.orbit.paletteInkNormal,
      opacity.default[type],
    )};`;
  }
  if (state === BUTTON_STATES.FOCUS && !bordered) {
    return `0 0 0 3px ${wrappedButtonTypeToken(TOKENS.borderColorButtonFocus)}`;
  }
  return null;
};

export default getButtonBoxShadow;
