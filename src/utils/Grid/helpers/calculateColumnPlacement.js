// @flow

import type { CalculateColumnPlacement } from './calculateColumnPlacement.js.flow';

const calculateColumnPlacement: CalculateColumnPlacement = (childIndex, columnsCount) => {
  if (columnsCount === 1) {
    return 1;
  }
  if (childIndex % columnsCount) {
    return childIndex % columnsCount;
  }
  return columnsCount;
};

export default calculateColumnPlacement;
