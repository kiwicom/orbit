// @flow
/*
  If gap is not used just return cellIndex.
  If not, we need to add all previous gaps (cellIndex - 1).
 */
const applyGap = (cellIndex, isGap) =>
  cellIndex > 1 && isGap ? cellIndex + (cellIndex - 1) : cellIndex;

export default applyGap;
