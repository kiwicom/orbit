// @flow

import splitToWords from './splitToWords';
import type { InsertGap } from './insertGap.js.flow';

const insertGap: InsertGap = (values, gap) => {
  const array = splitToWords(values);
  if (array) {
    return array
      .map((col, i, arr) => (gap && i + 1 < arr.length ? `${col} ${gap}` : col))
      .join(' ');
  }
  return undefined;
};

export default insertGap;
