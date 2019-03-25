// @flow
import { css } from "styled-components";

import type { StyledAnchor } from "./resolvePopoverAnchor.js.flow";
import { ANCHORS } from "../consts";

const resolvePopoverAnchor = ({
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
  } else if (anchor === ANCHORS.END) {
    return css`
      left: ${Math.floor(containerLeft + containerWidth - popoverWidth)}px; // TODO: use token
    `;
  }
  return null;
};

export default resolvePopoverAnchor;
