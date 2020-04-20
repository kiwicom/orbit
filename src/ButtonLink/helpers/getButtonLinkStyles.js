// @flow
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import { BUTTON_STATES } from "../../primitives/ButtonPrimitive/common/consts";
import { TOKENS } from "../consts";
import getButtonLinkTypeToken from "./getButtonLinkTypeToken";
import type { GetButtonLinkStyles } from "./getButtonLinkStyles";

const getButtonLinkBoxShadow = ({ state, disabled, theme, transparent }) => {
  if (disabled) {
    return null;
  }
  if (state === BUTTON_STATES.ACTIVE && !transparent) {
    return `inset 0 0 6px 3px ${convertHexToRgba(theme.orbit.paletteInkNormal, 8)}`;
  }
  return null;
};

const getButtonLinkStyles: GetButtonLinkStyles = ({ type, theme, disabled, transparent }) => {
  return {
    background: getButtonLinkTypeToken({ name: TOKENS.background, type, theme }),
    backgroundHover: getButtonLinkTypeToken({ name: TOKENS.backgroundHover, type, theme }),
    backgroundActive: getButtonLinkTypeToken({ name: TOKENS.backgroundActive, type, theme }),
    backgroundFocus: getButtonLinkTypeToken({ name: TOKENS.backgroundFocus, type, theme }),
    boxShadow: getButtonLinkBoxShadow({
      state: BUTTON_STATES.DEFAULT,
      disabled,
      theme,
      transparent,
    }),
    boxShadowHover: getButtonLinkBoxShadow({
      state: BUTTON_STATES.HOVER,
      disabled,
      theme,
      transparent,
    }),
    boxShadowActive: getButtonLinkBoxShadow({
      state: BUTTON_STATES.ACTIVE,
      disabled,
      theme,
      transparent,
    }),
    foreground: getButtonLinkTypeToken({ name: TOKENS.foreground, type, theme }),
    foregroundHover: getButtonLinkTypeToken({ name: TOKENS.foregroundHover, type, theme }),
    foregroundActive: getButtonLinkTypeToken({ name: TOKENS.foregroundActive, type, theme }),
  };
};

export default getButtonLinkStyles;
