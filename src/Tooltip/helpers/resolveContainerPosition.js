// @flow
import { css } from "styled-components";

import { isPositionBottom, isPositionTop, isPositionRight, isPositionLeft } from "./isPosition";
import type { Props } from "./resolveContainerPosition";
import { TOOLTIP_ARROW_SIZE } from "../consts";

const resolveContainerPosition = ({
  position,
  containerTop,
  containerLeft,
  containerHeight,
  containerWidth,
  tooltipHeight,
  tooltipWidth,
}: Props) => {
  if (isPositionTop(position)) {
    return css`
      top: ${Math.floor(
        containerTop - tooltipHeight - parseFloat(TOOLTIP_ARROW_SIZE),
      )}px; // TODO: use token
    `;
  } else if (isPositionBottom(position)) {
    return css`
      top: ${Math.floor(
        containerTop + containerHeight + parseFloat(TOOLTIP_ARROW_SIZE),
      )}px; // TODO: use token
    `;
  } else if (isPositionRight(position)) {
    return css`
      left: ${Math.floor(
        containerLeft + containerWidth + parseFloat(TOOLTIP_ARROW_SIZE),
      )}px; // TODO: use token
    `;
  } else if (isPositionLeft(position)) {
    return css`
      left: ${Math.floor(
        containerLeft - tooltipWidth - parseFloat(TOOLTIP_ARROW_SIZE),
      )}px; // TODO: use token
    `;
  }
  return null;
};

export default resolveContainerPosition;
