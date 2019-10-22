// @flow
import { css } from "styled-components";

import { rtlSpacing } from "../../utils/rtl";
import { SPACINGS } from "../consts";
import isMobileViewport from "./isMobileViewport";
import getStackSpacingToken from "./getStackSpacingToken";
import { getDirectionProperty, getSpacingProperty } from "./getProperty";
import type { GetChildrenMargin } from "./getChildrenMargin";
import getDirectionSpacingTemplate from "./getDirectionSpacingTemplate";

const getChildrenMargin: GetChildrenMargin = ({ viewport, index, devices }) => props => {
  if (props[viewport]) {
    const spacing = getSpacingProperty({ index, devices }, props);
    if (spacing === SPACINGS.NONE) return null;
    const spacingToken = getStackSpacingToken(props.theme, spacing);
    const isMobile = isMobileViewport(viewport);
    const direction = getDirectionProperty({ index, devices }, props);
    const margin =
      spacingToken &&
      direction &&
      String(getDirectionSpacingTemplate(direction)).replace("__spacing__", spacingToken);
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
  return null;
};

export default getChildrenMargin;
