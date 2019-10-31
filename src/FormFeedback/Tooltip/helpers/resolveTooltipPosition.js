// @flow
import { css } from "styled-components";

import { SIDE_NUDGE, ARROW_SIZE } from "../consts";
import type { ResolveTooltipPosition } from "./resolveTooltipPosition.js.flow";
import { left } from "../../utils/rtl";

const resolveTooltipPosition: ResolveTooltipPosition = ({
  position,
  contentBounding,
  iconBounding,
  inlineLabel,
}) => {
  const pos = {
    top: css`
      top: ${-contentBounding.height - ARROW_SIZE}px;
      ${left}: ${inlineLabel || !iconBounding ? "0" : `-${SIDE_NUDGE}px`};
    `,
    bottom: css`
      bottom: ${-contentBounding.height - ARROW_SIZE}px;
      ${left}: 0;
    `,
  };

  return pos[position];
};

export default resolveTooltipPosition;
