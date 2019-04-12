// @flow

import type { CalculateColumnPlacement } from "./calculateColumnPlacement";

const calculateColumnPlacement: CalculateColumnPlacement = (
  childIndex,
  childrenCount,
  columnsCount,
  rowsCount,
) => {
  if (columnsCount === 1) {
    return 1;
  }
  return childIndex % (childrenCount / rowsCount) || childIndex <= childrenCount / rowsCount
    ? childIndex
    : childIndex - columnsCount;
};

export default calculateColumnPlacement;
