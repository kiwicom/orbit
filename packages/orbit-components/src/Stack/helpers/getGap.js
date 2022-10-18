// @flow
import { css } from "styled-components";

import getSpacing from "./getSpacing";
import getProperty from "./getProperty";
import { QUERIES } from "../../utils/mediaQuery/consts";
import { rtlSpacing } from "../../utils/rtl";
import { DIRECTIONS } from "../../utils/layout/consts";
import type { Direction, Spacing } from "..";
import type { GetGap } from "./getGap";

const getDirectionSpacingTemplate = (direction: Direction | Spacing): string => {
  switch (direction) {
    case DIRECTIONS.ROW:
      return "0 __spacing__ 0 0";
    case DIRECTIONS.COLUMNREVERSE:
      return "__spacing__ 0 0 0";
    case DIRECTIONS.ROWREVERSE:
      return "0 0 0 __spacing__";
    default:
      return "0 0 __spacing__ 0";
  }
};

const getGap: GetGap = ({ viewport, index, devices }) => props => {
  if (props[viewport] || viewport === QUERIES.DESKTOP) {
    const spacing = getProperty("spacing", { index, devices }, props);
    const direction = getProperty("direction", { index, devices }, props);
    const gap = spacing && direction && getSpacing(props)[spacing];

    const margin =
      spacing &&
      direction &&
      String(getDirectionSpacingTemplate(direction)).replace(
        "__spacing__",
        getSpacing(props)[spacing],
      );

    if (props.flex) {
      return css`
        gap: ${gap};
      `;
    }

    return css`
      & > * {
        margin: ${margin && rtlSpacing(margin)}!important;
        &:last-child {
          margin: 0 !important;
        }
      }
    `;
  }

  return null;
};

export default getGap;
