// @flow
import { css } from "styled-components";

import getSpacing from "./getSpacing";
import getProperty from "./getProperty";
import { QUERIES } from "../../utils/mediaQuery/consts";
import type { GetGap } from "./getGap";

const getGap: GetGap = ({ viewport, index, devices }) => props => {
  if (props[viewport] || viewport === QUERIES.DESKTOP) {
    const spacing = getProperty("spacing", { index, devices }, props);
    const direction = getProperty("direction", { index, devices }, props);
    const gap = spacing && direction && getSpacing(props)[spacing];

    if (props.flex) {
      return css`
        gap: ${gap};
      `;
    }
  }

  return null;
};

export default getGap;
