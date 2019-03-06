// @flow

const calculateRowPlacement = (childIndex, columnsCount, rowsCount) => {
  if (rowsCount === 1) {
    return 1;
  }
  return Math.ceil(childIndex / columnsCount);
};

export default calculateRowPlacement;
