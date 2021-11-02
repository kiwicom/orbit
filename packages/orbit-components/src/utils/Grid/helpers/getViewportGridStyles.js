// @flow
import { css } from "styled-components";

import getSpacingToken from "../../../common/getSpacingToken";
import getDisplay from "./getDisplay";
import type { GetViewportGridStyles } from "./getViewportGridStyles";

const getViewportGridStyles: GetViewportGridStyles = ({ viewport, theme }) => props => {
  if (props[viewport]) {
    const { inline, maxWidth, gap, columnGap, rowGap, rows, columns, width } = props[viewport];

    return css`
      ${getDisplay(inline, viewport === "smallMobile")};
      max-width: ${maxWidth};
      width: ${width};
      grid-template-columns: ${columns};
      grid-template-rows: ${rows};
      grid-column-gap: ${columnGap};
      grid-row-gap: ${rowGap};
      grid-gap: ${gap};
      margin-bottom: ${getSpacingToken({ spaceAfter: props.spaceAfter, theme })};
    `;
  }

  return css``;
};

export default getViewportGridStyles;
