// @flow
import { css } from "styled-components";

import { STATES, TYPES } from "../consts";
import type { GetState } from "./getState";

const getState: GetState = state => ({ theme, selectable, type }) => {
  if (state === STATES.HOVER) {
    return css`
      background-color: ${theme.orbit.paletteCloudLightHover};
    `;
  }
  if (state === STATES.FOCUS) {
    return css`
      background-color: ${theme.orbit.paletteCloudLightHover};
      ${(!selectable || type !== TYPES.VERTICAL) &&
        css`
          box-shadow: 0 0 0 2px ${theme.orbit.paletteCloudLightActive};
        `};
    `;
  }
  return null;
};

export default getState;
