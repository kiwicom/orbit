// @flow
import splitToWords from "./splitToWords";

/*
  This function just gives us a count of cells (columns or rows).
 */
const lengthOf = value => !!value && splitToWords(value).length;

export default lengthOf;
