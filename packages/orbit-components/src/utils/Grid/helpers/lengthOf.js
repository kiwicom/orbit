// @flow
import splitToWords from "./splitToWords";
import type { LengthOf } from "./lengthOf";

/*
  This function just gives us a count of cells (columns or rows).
 */
const lengthOf: LengthOf = value => (value ? splitToWords(value)?.length : undefined);

export default lengthOf;
