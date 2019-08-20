// @flow

import type { CalculateRowPlacement } from './calculateRowPlacement.js.flow';

const calculateRowPlacement: CalculateRowPlacement = (childIndex, columnsCount, rowsCount) => {
  if (rowsCount === 1) {
    return 1;
  }
  return Math.ceil(childIndex / columnsCount);
};

export default calculateRowPlacement;
