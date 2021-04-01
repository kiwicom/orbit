// @flow
import { css } from "styled-components";

import { isPositionBottom, isPositionLeft, isPositionRight, isPositionTop } from "./isPosition";
import type { Props } from "./resolveTooltipArrowPosition";
import { TOOLTIP_ARROW_SIZE } from "../consts";

const resolveTooltipArrowPosition = ({ position }: Props): any => {
  const cssPosition =
    (isPositionTop(position) && "bottom") ||
    (isPositionBottom(position) && "top") ||
    (isPositionLeft(position) && "right") ||
    (isPositionRight(position) && "left");
  return css`
    ${cssPosition}: -${parseFloat(TOOLTIP_ARROW_SIZE)}px; // TODO: use token sizeTooltipArrow
  `;
};

export default resolveTooltipArrowPosition;
