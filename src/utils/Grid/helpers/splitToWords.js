// @flow
/*
  Regex to split e.g. "10px 1fr 2fr 10px" to array of strings: ["10px", "1fr", "2fr", "10px"]
 */
import type { SplitToWords } from "./splitToWords";

const splitToWords: SplitToWords = value => value.match(/[\w\\.]+(\(.*?\))?/g);

export default splitToWords;
