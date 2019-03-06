// @flow
/*
  Function to calculate the real count of cells (columns or rows).
  It's needed for calculating proper auto placement in IE.
 */
const realCellsCount = (gap, cells) => (gap ? Math.ceil(cells / 2) : cells);

export default realCellsCount;
