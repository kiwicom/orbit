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

const getButtonLinkStyles: GetButtonLinkStyles = props => {
  return {
    background: getButtonLinkTypeToken({ name: TOKENS.background, ...props }),
    backgroundHover: getButtonLinkTypeToken({ name: TOKENS.backgroundHover, ...props }),
    backgroundActive: getButtonLinkTypeToken({ name: TOKENS.backgroundActive, ...props }),
    backgroundFocus: getButtonLinkTypeToken({ name: TOKENS.backgroundFocus, ...props }),
    boxShadow: getButtonLinkBoxShadow({ state: BUTTON_STATES.DEFAULT, ...props }),
    boxShadowHover: getButtonLinkBoxShadow({ state: BUTTON_STATES.HOVER, ...props }),
    boxShadowActive: getButtonLinkBoxShadow({ state: BUTTON_STATES.ACTIVE, ...props }),
    foreground: getButtonLinkTypeToken({ name: TOKENS.foreground, ...props }),
    foregroundHover: getButtonLinkTypeToken({ name: TOKENS.foregroundHover, ...props }),
    foregroundActive: getButtonLinkTypeToken({ name: TOKENS.foregroundActive, ...props }),
  };
};

export default getButtonLinkStyles;
