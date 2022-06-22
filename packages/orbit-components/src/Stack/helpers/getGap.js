// @flow
import { css } from "styled-components";

import getSpacing from "./getSpacing";
import { SPACINGS } from "../../utils/layout/consts";
import getProperty from "./getProperty";
import { QUERIES } from "../../utils/mediaQuery/consts";
import type { GetGap } from "./getGap";

const getChildrenMargin: GetGap = ({ viewport, index, devices }) => props => {
  if (props[viewport] || viewport === QUERIES.DESKTOP) {
    const spacing = getProperty("spacing", { index, devices }, props);
    if (spacing === SPACINGS.NONE) return false;
    const gap = spacing && getSpacing(props)[spacing];

    return css`
      gap: ${gap};
    `;
  }

  return false;
};

export default getChildrenMargin;
