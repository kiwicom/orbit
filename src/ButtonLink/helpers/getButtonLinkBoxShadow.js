// @flow
import { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import { BUTTON_STATES } from "../consts";
import type { GetButtonLinkBoxShadow } from "./getButtonLinkBoxShadow";

const getButtonLinkBoxShadow: GetButtonLinkBoxShadow = state => ({
  disabled,
  theme,
  transparent,
}) => {
  if (disabled) {
    return null;
  }
  if (state === BUTTON_STATES.ACTIVE && !transparent) {
    return css`
      box-shadow: inset 0 0 6px 3px ${convertHexToRgba(theme.orbit.paletteInkNormal, 8)};
      // TODO: token
    `;
  }
  if (state === BUTTON_STATES.FOCUS) {
    return css`
      ${!transparent &&
        css`
          &:active {
            box-shadow: inset 0 0 6px 3px ${convertHexToRgba(theme.orbit.paletteInkNormal, 8)};
          }
        `};
    `;
  }
  return null;
};
export default getButtonLinkBoxShadow;
