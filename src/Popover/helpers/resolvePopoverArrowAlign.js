// @flow
import { css } from "styled-components";

import { isVertical } from "../../Tooltip/helpers/isPosition";
import { isAlignEnd, isAlignStart } from "../../Tooltip/helpers/isAlign";
import type { Props } from "./resolveTooltipPopoverAlign";
import { POPOVER_PADDING } from "../consts";

// TODO: use tokens for 12px and 7px - paddings and sizeTooltipPopover
const resolvePopoverArrowAlign = ({ position, anchor }: Props) => {
  if (isVertical(position)) {
    if (isAlignStart(anchor)) {
      return css`
        left: ${parseFloat(POPOVER_PADDING) + 5}px; /* TODO: use token */
      `;
    }
    if (isAlignEnd(anchor)) {
      return css`
        right: ${parseFloat(POPOVER_PADDING) + 5}px; /* TODO: use token */
      `;
    }
  }
  return null;
};

export default resolvePopoverArrowAlign;
