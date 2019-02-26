// @flow
import { css } from "styled-components";

import getDesktopSpacing from "./getDesktopSpacing";
import { rtlSpacing } from "../../utils/rtl";
import { DIRECTIONS } from "../consts";
import isMobileViewport from "./isMobileViewport";
import getMobileSpacing from "./getMobileSpacing";
import getProperty from "./getProperty";
import { DEVICES } from "../../utils/mediaQuery/consts";
import type { GetChildrenMargin } from "./getChildrenMargin";

const getChildrenMargin: GetChildrenMargin = ({ viewport, index, devices }) => props => {
  if (props[viewport] || viewport === DEVICES.DESKTOP) {
    const isMobile = isMobileViewport(viewport);
    const spacingTokens = isMobile ? getMobileSpacing() : getDesktopSpacing();
    const spacing = getProperty("spacing", { index, devices }, props);
    const direction = getProperty("direction", { index, devices }, props);
    const margin =
      spacing &&
      direction &&
      (direction === DIRECTIONS.COLUMN
        ? `0 0 ${spacingTokens[spacing]} 0`
        : `0 ${spacingTokens[spacing]} 0 0`);
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
