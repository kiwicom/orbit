// @flow
import { css } from "styled-components";

import type { ResolvePopoverPosition } from "./resolvePopoverPosition.js.flow";
import { POSITIONS, POPOVER_SPACE_BETWEEN } from "../consts";

const resolvePopoverPosition: ResolvePopoverPosition = ({
  position,
  containerTop,
  containerHeight,
  popoverHeight,
}) => {
  if (position === POSITIONS.TOP) {
    return css`
      top: ${Math.floor(
        containerTop - popoverHeight - POPOVER_SPACE_BETWEEN,
      )}px; /* TODO: use token */
    `;
  }
  if (position === POSITIONS.BOTTOM) {
    return css`
      top: ${Math.floor(
        containerTop + containerHeight + POPOVER_SPACE_BETWEEN,
      )}px; /* TODO: use token */
    `;
  }
  return null;
};

export default resolvePopoverPosition;
