// @flow
import { css } from "styled-components";

import { left } from "../../utils/rtl";
import type { ResolveTooltipPosition } from "./resolveTooltipPosition";

const resolveLeft = ({ theme, inlineLabel, icon }) => {
  if (icon && inlineLabel) {
    const { height, width } = icon;
    return theme.rtl ? `${width - 26}` : `${height === 16 ? width + 5 : width}`;
  }

  return theme.rtl ? 0 : 8;
};

const resolveTop = ({ icon, inlineLabel }) => {
  if (inlineLabel && icon) return `${icon.height / 3 - 10}`;
  if (icon) return -13;

  return -14;
};

const resolveTooltipPosition: ResolveTooltipPosition = ({ position }) => {
  const pos = {
    top: css`
      top: ${resolveTop}px;
      ${left}: ${resolveLeft}px;
    `,
  };
  return pos[position];
};

export default resolveTooltipPosition;
