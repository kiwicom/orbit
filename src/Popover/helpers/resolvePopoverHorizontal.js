// @flow
import { css } from "styled-components";

import type { StyledAnchor } from "./resolvePopoverHorizontal.js.flow";
import { ANCHORS } from "../consts";

const resolvePopoverHorizontal = ({
  anchor,
  containerLeft,
  containerWidth,
  popoverWidth,
  theme,
}: StyledAnchor) => {
  if (anchor === ANCHORS.START) {
    return css`
      left: ${theme.rtl
        ? Math.floor(containerLeft + containerWidth - popoverWidth)
        : Math.floor(containerLeft)}px;
    `;
  }
  if (anchor === ANCHORS.END) {
    return css`
      left: ${Math.floor(containerLeft + containerWidth - popoverWidth)}px; // TODO: use token
    `;
  }
  return null;
};

export default resolvePopoverHorizontal;
