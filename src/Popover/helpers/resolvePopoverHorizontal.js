// @flow
import { css } from "styled-components";

import type { ResolvePopoverHorizontal } from "./resolvePopoverHorizontal.js.flow";
import { ALIGNS } from "../consts";

const resolvePopoverHorizontal: ResolvePopoverHorizontal = ({
  anchor,
  containerLeft,
  containerWidth,
  popoverWidth,
  theme,
}) => {
  if (anchor === ALIGNS.START) {
    return css`
      left: ${theme.rtl
        ? Math.floor(containerLeft + containerWidth - popoverWidth)
        : Math.floor(containerLeft)}px;
    `;
  }
  if (anchor === ALIGNS.END) {
    return css`
      left: ${Math.floor(containerLeft + containerWidth - popoverWidth)}px; /* TODO: use token */
    `;
  }
  return null;
};

export default resolvePopoverHorizontal;
