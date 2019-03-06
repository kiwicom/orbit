// @flow

const calculateColumnPlacement = (childIndex, childrenCount, columnsCount, rowsCount) => {
  if (columnsCount === 1) {
    return 1;
  }
  return childIndex <= childrenCount / rowsCount ? childIndex : childIndex - columnsCount;
};

export default calculateColumnPlacement;
