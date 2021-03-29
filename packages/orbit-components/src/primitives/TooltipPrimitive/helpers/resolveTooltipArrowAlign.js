// @flow
import { css } from "styled-components";

import { isHorizontal, isVertical } from "./isPosition";
import { isAlignCenter, isAlignEnd, isAlignStart } from "./isAlign";
import type { Props } from "./resolveTooltipArrowAlign";
import { TOOLTIP_ARROW_SIZE, TOOLTIP_PADDING } from "../consts";

// TODO: use tokens for 12px and 7px - paddings and sizeTooltipArrow
const resolveTooltipArrowAlign = ({
  position,
  align,
  tooltipWidth,
  tooltipHeight,
}: Props): any | null => {
  if (isVertical(position)) {
    if (isAlignCenter(align)) {
      return css`
        left: ${Math.floor(tooltipWidth / 2 - parseFloat(TOOLTIP_ARROW_SIZE))}px; // TODO: use token
      `;
    }
    if (isAlignStart(align)) {
      return css`
        left: ${parseFloat(TOOLTIP_PADDING)}px; // TODO: use token
      `;
    }
    if (isAlignEnd(align)) {
      return css`
        right: ${parseFloat(TOOLTIP_PADDING)}px; // TODO: use token
      `;
    }
  } else if (isHorizontal(position)) {
    if (isAlignCenter(align)) {
      return css`
        top: ${Math.floor(tooltipHeight / 2 - parseFloat(TOOLTIP_ARROW_SIZE))}px; // TODO: use token
      `;
    }
    if (isAlignStart(align)) {
      return css`
        top: ${parseFloat(TOOLTIP_PADDING)}px; // TODO: use token
      `;
    }
    if (isAlignEnd(align)) {
      return css`
        bottom: ${parseFloat(TOOLTIP_PADDING)}px; // TODO: use token
      `;
    }
  }
  return null;
};

export default resolveTooltipArrowAlign;
