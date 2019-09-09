// @flow
import type { ApplyGap } from "./applyGap";
/*
  If gap is not defined or cellIndex is 1 just return cellIndex.
  If not, we need to add all previous gaps (cellIndex - 1).

  This is necessary because IE10+ takes gap as separate column.
 */
const applyGap: ApplyGap = (cellIndex, isGap) =>
  cellIndex > 1 && isGap ? cellIndex + (cellIndex - 1) : cellIndex;

export default applyGap;
