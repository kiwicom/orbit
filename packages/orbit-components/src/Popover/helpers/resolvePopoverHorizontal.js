// @flow
import { css } from "styled-components";

import type { ResolvePopoverHorizontal } from "./resolvePopoverHorizontal.js.flow";
import { ALIGNS } from "../consts";

const resolvePopoverHorizontal: ResolvePopoverHorizontal = ({
  anchor,
  containerLeft,
  containerWidth,
  popoverWidth,
  offset,
}) => {
  if (anchor === ALIGNS.START) {
    return css`
      left: ${Math.floor(containerLeft + offset.left)}px;
    `;
  }
  if (anchor === ALIGNS.CENTER) {
    return css`
      left: ${Math.floor(
        containerLeft + containerWidth / 2 - popoverWidth / 2 + offset.left,
      )}px; /* TODO: use token */
    `;
  }
  if (anchor === ALIGNS.END) {
    return css`
      left: ${Math.floor(
        containerLeft + containerWidth - popoverWidth + offset.left,
      )}px; /* TODO: use token */
    `;
  }
  return null;
};

export default resolvePopoverHorizontal;
