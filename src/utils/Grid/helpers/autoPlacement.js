// @flow

import { css } from 'styled-components';

import applyGap from './applyGap';
import lengthOf from './lengthOf';
import realCellsCount from './realCellsCount';
import calculateColumnPlacement from './calculateColumnPlacement';
import calculateRowPlacement from './calculateRowPlacement';
import type { AutoPlacement } from './autoPlacement.js.flow';

/*
  This functions is applying a proper -ms-grid-column and -ms-grid-row
  as IE10+ can't resolve auto placement by itself natively
 */
const autoPlacement: AutoPlacement = (childrenCount, columns, rows, columnGap, rowGap) => {
  const columnsCount = realCellsCount(!!columnGap, lengthOf(columns));
  const rowsCount = realCellsCount(!!rowGap, lengthOf(rows));
  return Array(...Array(childrenCount)).map((_, i) => {
    const index = i + 1;
    const columnIndex = calculateColumnPlacement(index, columnsCount);
    const rowIndex = calculateRowPlacement(index, columnsCount, rowsCount);
    return css`
      & > *:nth-child(${index}) {
        -ms-grid-column: ${applyGap(columnIndex, !!columnGap)};
        -ms-grid-row: ${applyGap(rowIndex, !!rowGap)};
      }
    `;
  });
};

export default autoPlacement;
