// @flow
import { css } from "styled-components";

import type { StyledPosition } from "./resolvePopoverPositin.flow";
import { POSITIONS } from "../consts";

const resolvePopoverPosition = ({
  position,
  containerTop,
  containerHeight,
  popoverHeight,
}: StyledPosition) => {
  if (position === POSITIONS.TOP) {
    return css`
      top: ${Math.floor(containerTop - popoverHeight)}px; // TODO: use token
    `;
  } else if (position === POSITIONS.BOTTOM) {
    return css`
      top: ${Math.floor(containerTop + containerHeight)}px; // TODO: use token
    `;
  }
  return null;
};

export default resolvePopoverPosition;
