// @flow
import { css } from "styled-components";

import type { ResolvePopoverPosition } from "./resolvePopoverPosition.js.flow";
import { POSITIONS, POPOVER_SPACE_BETWEEN } from "../consts";

const resolvePopoverPosition: ResolvePopoverPosition = ({
  position,
  containerTop,
  containerHeight,
  popoverHeight,
  overlapped,
  containerPureTop,
  fixed,
}) => {
  if (position === POSITIONS.TOP) {
    return css`
      top: ${Math.floor(
        (fixed ? containerPureTop : containerTop) -
          popoverHeight -
          (overlapped ? -containerHeight : POPOVER_SPACE_BETWEEN),
      )}px; /* TODO: use token */
    `;
  }
  if (position === POSITIONS.BOTTOM) {
    return css`
      top: ${Math.floor(
        (fixed ? containerPureTop : containerTop) +
          (overlapped ? 0 : containerHeight + POPOVER_SPACE_BETWEEN),
      )}px; /* TODO: use token */
    `;
  }
  return null;
};

export default resolvePopoverPosition;
