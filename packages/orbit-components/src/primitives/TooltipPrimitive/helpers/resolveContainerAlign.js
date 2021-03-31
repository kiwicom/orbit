// @flow
import { css } from "styled-components";

import { isHorizontal, isVertical } from "./isPosition";
import { isAlignCenter, isAlignEnd, isAlignStart } from "./isAlign";
import type { Props } from "./resolveContainerAlign";
import { TOOLTIP_ARROW_SIZE, TOOLTIP_PADDING } from "../consts";

const resolveContainerAlign = ({
  align,
  position,
  containerTop,
  containerLeft,
  containerHeight,
  containerWidth,
  tooltipHeight,
  tooltipWidth,
}: Props): any | null => {
  if (isAlignCenter(align)) {
    if (isHorizontal(position)) {
      return css`
        top: ${Math.floor(containerTop + containerHeight / 2 - tooltipHeight / 2)}px;
      `;
    }
    if (isVertical(position)) {
      return css`
        left: ${Math.floor(containerLeft + containerWidth / 2 - tooltipWidth / 2)}px;
      `;
    }
    return null;
  }
  if (isAlignStart(align)) {
    if (isHorizontal(position)) {
      return css`
        top: ${Math.floor(containerTop - parseFloat(TOOLTIP_ARROW_SIZE))}px; // TODO: use token
      `;
    }
    if (isVertical(position)) {
      return css`
        left: ${Math.floor(
          containerLeft +
            containerWidth / 2 -
            parseFloat(TOOLTIP_PADDING) -
            parseFloat(TOOLTIP_ARROW_SIZE),
        )}px; // TODO: use tokens
      `;
    }
  } else if (isAlignEnd(align)) {
    if (isHorizontal(position)) {
      return css`
        top: ${Math.floor(
          containerTop - tooltipHeight + containerHeight + parseFloat(TOOLTIP_ARROW_SIZE),
        )}px; // TODO: use token
      `;
    }
    if (isVertical(position)) {
      return css`
        left: ${Math.floor(
          containerLeft + containerWidth - tooltipWidth + parseFloat(TOOLTIP_ARROW_SIZE),
        )}px; // TODO: use token
      `;
    }
  }
  return null;
};

export default resolveContainerAlign;
