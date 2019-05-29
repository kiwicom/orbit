// @flow
import splitToWords from "./splitToWords";
import type { CompatibleGridTemplate } from "./compatibleGridTemplate";
import insertGap from "./insertGap";

/*
  This function is firstly converting "repeat(3, 1fr) 2fr" to plain format that is compatible with IE
  For simplicity, the IE compatible format "(1fr)[3]" for repeat is not used
  Also if gap is defined, it adds gap after each column/row
 */

const compatibleGridTemplate: CompatibleGridTemplate = (cells, gap) => {
  const cellsMap = splitToWords(cells);
  const plainCells =
    cellsMap &&
    cellsMap
      .map(item => {
        if (/repeat\((.*\))/g.test(item)) {
          const values = /repeat\((\d+),\s(.*\)?)\)/g.exec(item);
          return (
            values &&
            Array(...Array(Number(values[1])))
              .map(() => values[2])
              .join(" ")
          );
        }
        return item;
      })
      .join(" ");
  if (!gap) {
    return plainCells;
  }
  return insertGap(plainCells, gap);
};

export default compatibleGridTemplate;
