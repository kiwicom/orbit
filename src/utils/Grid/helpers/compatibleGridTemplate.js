// @flow
import splitToWords from "./splitToWords";

/*
  This function is converting eg "repeat(3, 1fr) 2fr" to plain format that is compatible with IE
  For simplicity, the IE compatible format "(1fr)[3]" for repeat is not used
  Also if gap is defined, it adds gap after each column/row
 */
const compatibleGridTemplate = (cells, gap) => {
  const plainCells = splitToWords(cells)
    .map(item => {
      if (/repeat\((.*\))/g.test(item)) {
        const values = /repeat\((\d*?),\s([^)]*[^)])/g.exec(item);
        return Array(...Array(Number(values[1])))
          .map(() => values[2])
          .join(" ");
      }
      return item;
    })
    .join(" ");
  if (!gap) {
    return plainCells;
  }
  return splitToWords(plainCells)
    .map((col, i, arr) => (gap && i + 1 < arr.length ? `${col} ${gap}` : col))
    .join(" ");
};

export default compatibleGridTemplate;
