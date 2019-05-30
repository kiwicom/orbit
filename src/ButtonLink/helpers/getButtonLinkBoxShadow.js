// @flow
import { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import { BUTTON_STATES } from "../consts";
import type { GetButtonLinkBoxShadow } from "./getButtonLinkBoxShadow";

const getButtonLinkBoxShadow: GetButtonLinkBoxShadow = state => ({ disabled, theme }) => {
  if (disabled) {
    return null;
  }
  if (state === BUTTON_STATES.ACTIVE) {
    return css`
      box-shadow: inset 0 0 6px 3px ${convertHexToRgba(theme.orbit.paletteInkDark, 8)};
      // TODO: token
    `;
  }
  if (state === BUTTON_STATES.FOCUS) {
    return css`
      box-shadow: 0 0 1px 1px ${theme.orbit.colorTextButtonWhiteBordered},
        0 0 1px 3px ${convertHexToRgba(theme.orbit.paletteBlueNormal, 60)}; // TODO: Create token
      &:active {
        box-shadow: inset 0 0 6px 3px ${convertHexToRgba(theme.orbit.paletteInkDark, 8)};
      }
    `;
  }
  return null;
};

export default getButtonLinkBoxShadow;
