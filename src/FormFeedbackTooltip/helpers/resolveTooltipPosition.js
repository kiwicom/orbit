// @flow
import { css } from "styled-components";

import { SIDE_NUDGE } from "../consts";
import type { ResolveTooltipPosition } from "./resolveTooltipPosition.js.flow";

const resolveTooltipPosition: ResolveTooltipPosition = ({
  theme: { rtl },
  position,
  contentBounding,
  iconBounding,
  inlineLabel,
}) => {
  const cssPosition = rtl ? "right" : "left";
  const pos = {
    top: css`
      top: ${-contentBounding.height - 7}px;
      ${cssPosition}: ${inlineLabel || !iconBounding ? "0" : `-${SIDE_NUDGE}px`};
    `,
    bottom: css`
      bottom: ${-contentBounding.height - 7}px;
      ${cssPosition}: 0;
    `,
  };

  return pos[position];
};

export default resolveTooltipPosition;
