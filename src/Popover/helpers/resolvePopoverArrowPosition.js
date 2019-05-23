// @flow
import { css } from "styled-components";

import { isPositionBottom, isPositionTop } from "../../Tooltip/helpers/isPosition";
import type { Props } from "./resolveTooltipArrowPosition";
import { POPOVER_ARROW_SIZE } from "../consts";

const resolvePopoverArrowPosition = ({ position }: Props) => {
  const cssPosition =
    (isPositionTop(position) && "bottom") || (isPositionBottom(position) && "top");
  return css`
    ${cssPosition}: -${parseFloat(POPOVER_ARROW_SIZE / 2)}px; // TODO: use token sizeTooltipArrow
  `;
};

export default resolvePopoverArrowPosition;
