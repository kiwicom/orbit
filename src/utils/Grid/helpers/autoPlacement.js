// @flow
import { css } from "styled-components";

/*
  This mixin is converting the generated object from createAutoPlacementObject function
  The main purpose is to define a proper -ms-grid-column and -ms-grid-row for IE
  as it can't resolve auto placement by itself natively
 */
import applyGap from "./applyGap";
import lengthOf from "./lengthOf";
import realCellsCount from "./realCellsCount";
import calculateColumnPlacement from "./calculateColumnPlacement";
import calculateRowPlacement from "./calculateRowPlacement";

const autoPlacement = (childrenCount, columns, rows, columnGap, rowGap) =>
  Array(...Array(childrenCount)).map((_, i) => {
    const index = i + 1;
    const columnsCount = realCellsCount(columnGap, lengthOf(columns));
    const rowsCount = realCellsCount(rowGap, lengthOf(rows));
    const columnIndex = calculateColumnPlacement(index, childrenCount, columnsCount, rowsCount);
    const rowIndex = calculateRowPlacement(index, columnsCount, rowsCount);
    return css`
      & > *:nth-child(${index}) {
        -ms-grid-column: ${applyGap(columnIndex, columnGap)};
        -ms-grid-row: ${applyGap(rowIndex, rowGap)};
      }
    `;
  });

export default autoPlacement;
