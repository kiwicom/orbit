// @flow

import { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import { BUTTON_STATES } from "../../primitives/ButtonPrimitive/common/consts";
import { TOKENS, TYPES } from "../consts";

const getTypeToken = ({ name, type, theme }) => {
  const tokens = {
    [TOKENS.background]: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimary,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondary,
    },
    [TOKENS.backgroundHover]: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondaryHover,
    },
    [TOKENS.backgroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.backgroundButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.backgroundButtonLinkSecondaryHover,
    },
    [TOKENS.backgroundFocus]: {
      [TYPES.PRIMARY]: convertHexToRgba(theme.orbit.paletteProductNormal, 10),
      [TYPES.SECONDARY]: convertHexToRgba(theme.orbit.paletteInkLight, 10),
    },
    [TOKENS.foreground]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimary,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondary,
    },
    [TOKENS.foregroundHover]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondaryHover,
    },
    [TOKENS.foregroundActive]: {
      [TYPES.PRIMARY]: theme.orbit.colorTextButtonLinkPrimaryActive,
      [TYPES.SECONDARY]: theme.orbit.colorTextButtonLinkSecondaryActive,
    },
  };

  return tokens[name][type];
};

const getButtonLinkBoxShadow = ({ state, disabled, theme, transparent }) => {
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

const getButtonLinkStyles = props => {
  return {
    background: getTypeToken({ name: TOKENS.background, ...props }),
    backgroundHover: getTypeToken({ name: TOKENS.backgroundHover, ...props }),
    backgroundActive: getTypeToken({ name: TOKENS.backgroundActive, ...props }),
    backgroundFocus: getTypeToken({ name: TOKENS.backgroundFocus, ...props }),
    iconColor: true,
    iconColorHover: true,
    iconColorActive: true,
    boxShadow: getButtonLinkBoxShadow({ state: BUTTON_STATES.DEFAULT, ...props }),
    boxShadowHover: getButtonLinkBoxShadow({ state: BUTTON_STATES.HOVER, ...props }),
    boxShadowActive: getButtonLinkBoxShadow({ state: BUTTON_STATES.ACTIVE, ...props }),
    boxShadowFocus: getButtonLinkBoxShadow({ state: BUTTON_STATES.FOCUS, ...props }),
    foreground: getTypeToken({ name: TOKENS.foreground, ...props }),
    foregroundHover: getTypeToken({ name: TOKENS.foregroundHover, ...props }),
    foregroundActive: getTypeToken({ name: TOKENS.foregroundActive, ...props }),
    foregroundFocus: getTypeToken({ name: TOKENS.foregroundFocus, ...props }),
  };
};

export default getButtonLinkStyles;
