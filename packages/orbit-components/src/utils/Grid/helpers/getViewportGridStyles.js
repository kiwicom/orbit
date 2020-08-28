// @flow
import * as React from "react";
import { css } from "styled-components";

import getViewportIEGridStyles from "./getViewportIEGridStyles";
import getDisplay from "./getDisplay";
import type { GetViewportGridStyles } from "./getViewportGridStyles";
/*
  We need to get gap, rowGap and columnGap recursively because someone can change row or columns
  in some mediaQuery, so we need to render IE compatible format once again and we need to know to gaps
  Also we want to render only own gaps into CSS
 */
const getViewportGridStyles: GetViewportGridStyles = ({ viewport, index, devices }) => props => {
  if (props[viewport]) {
    const { inline, maxWidth, gap, columnGap, rowGap, rows, columns } = props[viewport];
    const compatibleIE = getViewportIEGridStyles(
      props[viewport],
      React.Children.count(props.children),
      { index, devices },
      props,
    );
    return css`
      ${getDisplay(inline, viewport === "smallMobile")};
      max-width: ${maxWidth};
      grid-template-columns: ${columns};
      grid-template-rows: ${rows};
      grid-column-gap: ${columnGap};
      grid-row-gap: ${rowGap};
      grid-gap: ${gap};
      ${compatibleIE};
    `;
  }
  return false;
};

export default getViewportGridStyles;
