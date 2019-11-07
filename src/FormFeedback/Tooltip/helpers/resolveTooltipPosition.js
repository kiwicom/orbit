// @flow
import { css } from "styled-components";

import { SIDE_NUDGE, ARROW_SIZE, VERTICAL_NUDGE } from "../consts";
import type { ResolveTooltipPosition } from "./resolveTooltipPosition.js.flow";
import { left } from "../../../utils/rtl";

const resolveTooltipPosition: ResolveTooltipPosition = ({ position, contentBounding }) => {
  const pos = {
    top: css`
      top: ${-contentBounding.height - ARROW_SIZE - VERTICAL_NUDGE}px;
      ${left}: ${`-${SIDE_NUDGE}px`};
    `,
    bottom: css`
      bottom: ${-contentBounding.height - ARROW_SIZE - VERTICAL_NUDGE}px;
      ${left}: ${`-${SIDE_NUDGE}px`};
    `,
  };
  return pos[position];
};

export default resolveTooltipPosition;
