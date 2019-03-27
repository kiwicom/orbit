// @flow
import { css } from "styled-components";

import getDesktopSpacing from "./getDesktopSpacing";
import { rtlSpacing } from "../../utils/rtl";
import { SPACINGS } from "../consts";
import isMobileViewport from "./isMobileViewport";
import getMobileSpacing from "./getMobileSpacing";
import getProperty from "./getProperty";
import { DEVICES } from "../../utils/mediaQuery/consts";
import type { GetChildrenMargin } from "./getChildrenMargin";
import getDirectionSpacingTemplate from "./getDirectionSpacingTemplate";

const getChildrenMargin: GetChildrenMargin = ({ viewport, index, devices }) => props => {
  if (props[viewport] || viewport === DEVICES.DESKTOP) {
    const spacing = getProperty("spacing", { index, devices }, props);
    if (spacing === SPACINGS.NONE) return false;
    const isMobile = isMobileViewport(viewport);
    const spacingTokens = isMobile ? getMobileSpacing() : getDesktopSpacing();
    const direction = getProperty("direction", { index, devices }, props);
    const margin =
      spacing &&
      direction &&
      String(getDirectionSpacingTemplate(direction)).replace("__spacing__", spacingTokens[spacing]);
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
