// @flow
import { css } from "styled-components";

import getSpacing from "./getSpacing";
import { rtlSpacing } from "../../utils/rtl";
import { SPACINGS } from "../../utils/layout/consts";
import isMobileViewport from "./isMobileViewport";
import getProperty from "./getProperty";
import { QUERIES } from "../../utils/mediaQuery/consts";
import type { GetChildrenMargin } from "./getChildrenMargin";
import getDirectionSpacingTemplate from "./getDirectionSpacingTemplate";

const getChildrenMargin: GetChildrenMargin = ({ viewport, index, devices }) => props => {
  if (props[viewport] || viewport === QUERIES.DESKTOP) {
    const spacing = getProperty("spacing", { index, devices }, props);
    if (spacing === SPACINGS.NONE) return false;
    const isMobile = isMobileViewport(viewport);
    const direction = getProperty("direction", { index, devices }, props);
    const margin =
      spacing &&
      direction &&
      String(getDirectionSpacingTemplate(direction)).replace(
        "__spacing__",
        getSpacing(props)[spacing],
      );
    return css`
      & > * {
        margin: ${margin && rtlSpacing(margin)}!important;
        ${isMobile &&
        css`
          &:last-child {
            margin: 0 !important;
          }
        `};
      }
    `;
  }
  return false;
};

export default getChildrenMargin;
