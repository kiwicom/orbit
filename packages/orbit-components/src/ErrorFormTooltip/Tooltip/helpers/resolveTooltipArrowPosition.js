// @flow
import { css } from "styled-components";

import { ARROW_SIZE, SIDE_NUDGE } from "../consts";
import type { ResolveTooltipArrowPosition } from "./resolveTooltipArrowPosition.js.flow";
import { left } from "../../../utils/rtl";

const resolveTooltipArrowPosition: ResolveTooltipArrowPosition = ({
  theme: { rtl },
  position,
  content,
  icon,
  inlineLabel,
}) => {
  if (icon) {
    const whenInline = SIDE_NUDGE + icon.width / 2 - ARROW_SIZE;
    const leftPos = icon.left - content.left + icon.width / 2 - ARROW_SIZE;
    const rightPos = content.right - icon.right + icon.width / 2 - ARROW_SIZE;

    const rtlPosition = rtl ? rightPos : leftPos;
    const positionToApply = inlineLabel ? rtlPosition : whenInline;

    const pos = {
      top: css`
        bottom: ${-ARROW_SIZE}px;
        ${left}: ${positionToApply}px;
      `,
      bottom: css`
        top: ${-ARROW_SIZE}px;
        ${left}: ${positionToApply}px;
      `,
    };

    return pos[position];
  }

  const pos = {
    top: css`
      bottom: ${-ARROW_SIZE}px;
      ${left}: ${ARROW_SIZE + SIDE_NUDGE}px;
    `,
    bottom: css`
      top: ${-ARROW_SIZE}px;
      ${left}: ${ARROW_SIZE + SIDE_NUDGE}px;
    `,
  };

  return pos[position];
};

export default resolveTooltipArrowPosition;
