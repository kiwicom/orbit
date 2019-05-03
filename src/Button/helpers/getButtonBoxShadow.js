// @flow
import { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import { TOKENS, TYPE_OPTIONS, BUTTON_STATES } from "../consts";
import getTypeToken from "./getTypeToken";
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

const getButtonBoxShadow: GetButtonBoxShadow = state => ({ disabled, bordered, theme, type }) => {
  if (disabled) {
    return null;
  }
  if (state === BUTTON_STATES.DEFAULT && bordered) {
    return css`
      box-shadow: inset 0 0 0 1px ${getTypeToken(TOKENS.borderColorButton)};
    `;
  }
  if (state === BUTTON_STATES.HOVER && bordered) {
    return css`
      box-shadow: inset 0 0 0 1px ${getTypeToken(TOKENS.borderColorButtonHover)};
    `;
  }
  if (state === BUTTON_STATES.ACTIVE) {
    if (bordered) {
      return css`
        box-shadow: inset 0 0 0 1px ${getTypeToken(TOKENS.borderColorButtonActive)},
          inset 0 0 6px 3px ${convertHexToRgba(theme.orbit.paletteInkDark, opacity.bordered[type])}; // TODO: Create token
      `;
    }
    return css`
      box-shadow: inset 0 0 6px 3px
        ${convertHexToRgba(theme.orbit.paletteInkDark, opacity.default[type])}; // TODO: Create token
    `;
  }
  if (state === BUTTON_STATES.FOCUS) {
    return css`
      box-shadow: 0 0 1px 1px ${theme.orbit.colorTextButtonWhiteBordered},
        0 0 1px 3px ${convertHexToRgba(theme.orbit.paletteBlueNormal, 60)}; // TODO: Create token
      &:active {
        ${bordered
          ? css`
              box-shadow: inset 0 0 6px 3px
                ${convertHexToRgba(theme.orbit.paletteInkDark, opacity.bordered[type])}; // TODO: create token
            `
          : css`
              box-shadow: inset 0 0 6px 3px
                ${convertHexToRgba(theme.orbit.paletteInkDark, opacity.default[type])}; // TODO: create token
            `};
      }
    `;
  }
  return null;
};

export default getButtonBoxShadow;
