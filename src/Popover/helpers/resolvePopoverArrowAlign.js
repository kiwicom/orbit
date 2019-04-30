// @flow
import { css } from "styled-components";

import { isVertical } from "../../Tooltip/helpers/isPosition";
import { isAlignCenter, isAlignEnd, isAlignStart } from "../../Tooltip/helpers/isAlign";
import type { Props } from "./resolveTooltipPopoverAlign";
import { POPOVER_ARROW_SIZE, POPOVER_PADDING } from "../consts";

// TODO: use tokens for 12px and 7px - paddings and sizeTooltipPopover
const resolvePopoverArrowAlign = ({ position, anchor, tooltipWidth, popoverHeight }: Props) => {
  if (isVertical(position)) {
    if (isAlignCenter(anchor)) {
      return css`
        left: ${Math.floor(tooltipWidth / 2 - parseFloat(POPOVER_ARROW_SIZE))}px; // TODO: use token
      `;
    }
    if (isAlignStart(anchor)) {
      return css`
        left: ${parseFloat(POPOVER_PADDING)}px; // TODO: use token
      `;
    }
    if (isAlignEnd(anchor)) {
      return css`
        right: ${parseFloat(POPOVER_PADDING)}px; // TODO: use token
      `;
    }
  }
  return null;
};

export default resolvePopoverArrowAlign;
