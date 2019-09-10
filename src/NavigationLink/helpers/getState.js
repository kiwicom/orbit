// @flow
import { css } from "styled-components";

import STATES from "../consts";
import type { GetState } from "./getState";

const getState: GetState = state => ({ theme }) => {
  if (state === STATES.HOVER) {
    return css`
      background-color: ${theme.orbit.paletteCloudLightHover};
    `;
  }
  if (state === STATES.FOCUS) {
    return css`
      background-color: ${theme.orbit.paletteCloudLight};
    `;
  }
  return null;
};

export default getState;
