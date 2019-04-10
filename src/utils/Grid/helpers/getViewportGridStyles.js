// @flow
import { css } from "styled-components";

import autoPlacement from "./autoPlacement";
import compatibleGridTemplate from "./compatibleGridTemplate";
import getProperty from "./getProperty";
import getDisplay from "./getDisplay";
import type { GetViewportGridStyles } from "./getViewportGridStyles";

/*
  We need to get gap, rowGap and columnGap recursively because someone can change row or columns
  in some mediaQuery, so we need to render IE compatible format once again and we need to know to gaps
  Also we want to render only own gaps into CSS
 */
const getViewportGridStyles: GetViewportGridStyles = ({ viewport, index, devices }) => props => {
  if (props[viewport]) {
    const { inline, maxWidth, gap: ownGap, columnGap: ownColumnGap, rowGap: ownRowGap } = props[
      viewport
    ];
    const rows = getProperty("rows", { index, devices }, props);
    const columns = getProperty("columns", { index, devices }, props);
    const gap = getProperty("gap", { index, devices }, props);
    const rowGap = getProperty("rowGap", { index, devices }, props);
    const columnGap = getProperty("columnGap", { index, devices }, props);
    const compatibleColumns = compatibleGridTemplate(columns, columnGap || gap);
    const compatibleRows = compatibleGridTemplate(rows, rowGap || gap);
    const childrenPlacement = autoPlacement(
      props.children.length,
      compatibleColumns,
      compatibleRows,
      columnGap || gap,
      rowGap || gap,
      viewport,
    );

    return css`
      ${getDisplay(inline, viewport === "smallMobile")};
      max-width: ${maxWidth};
      grid-template-columns: ${columns};
      grid-template-rows: ${rows};
      grid-column-gap: ${ownColumnGap};
      grid-row-gap: ${ownRowGap};
      grid-gap: ${ownGap};
      -ms-grid-columns: ${compatibleColumns};
      -ms-grid-rows: ${compatibleRows};
      ${childrenPlacement};
    `;
  }
  return false;
};

export default getViewportGridStyles;
