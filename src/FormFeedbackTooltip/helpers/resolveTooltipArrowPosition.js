// @flow
import { css } from "styled-components";

import { ARROW_SIZE, SIDE_NUDGE } from "../consts";
import type { ResolveTooltipArrowPosition } from "./resolveTooltipArrowPosition.js.flow";

const resolveTooltipArrowPosition: ResolveTooltipArrowPosition = ({
  theme: { rtl },
  position,
  contentBounding,
  iconBounding,
  inlineLabel,
}) => {
  const cssPosition = rtl ? "right" : "left";

  if (iconBounding) {
    const whenInline = SIDE_NUDGE + iconBounding.width / 2 - ARROW_SIZE;
    const leftPos = iconBounding.left - contentBounding.left + iconBounding.width / 2 - ARROW_SIZE;
    const rightPos =
      contentBounding.right - iconBounding.right + iconBounding.width / 2 - ARROW_SIZE;

    const rtlPosition = rtl ? rightPos : leftPos;
    const postionToApply = inlineLabel ? rtlPosition : whenInline;

    const pos = {
      top: css`
        bottom: ${-ARROW_SIZE}px;
        ${cssPosition}: ${postionToApply}px;
      `,
      bottom: css`
        top: ${-ARROW_SIZE}px;
        ${cssPosition}: ${postionToApply}px;
      `,
    };

    return pos[position];
  }

  const pos = {
    top: css`
      bottom: ${-ARROW_SIZE}px;
      ${cssPosition}: ${ARROW_SIZE}px;
    `,
    bottom: css`
      top: ${-ARROW_SIZE}px;
      ${cssPosition}: ${ARROW_SIZE}px;
    `,
  };

  return pos[position];
};

export default resolveTooltipArrowPosition;
