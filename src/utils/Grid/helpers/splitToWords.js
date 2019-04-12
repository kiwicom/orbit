// @flow
/*
  Regex to split e.g. "10px 1fr 2fr 10px" to array of strings: ["10px", "1fr", "2fr", "10px"]
 */
import type { SplitToWords } from "./splitToWords";

const splitToWords: SplitToWords = value =>
  value
    ? value.match(
        /\w+\((\w+\([^\\(]+\)|[,]|\s+|\d+|\d+\.\d+\w+|\d+([\w]+|%))*\)|\w+\([^\\(]+\)|\d+([\w]+|%)|\d+\.\d+\w+|\w+/g,
      )
    : undefined;

export default splitToWords;
