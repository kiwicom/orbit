// @flow
/*
  Regex to split e.g. "10px repeat(2, 1fr) 0.4em 10px" to array of strings: ["10px", "repeat(2, 1fr)", "0.4em", "10px"]
 */
import type { SplitToWords } from "./splitToWords";

const splitToWords: SplitToWords = value =>
  value
    ? value.match(
        /\d+\.\d+\w+|\w+\((\w+\([^\\(]+\)|[,]|\s+|\d+|\d+\.\d+\w+|\d+([\w]+|%))*\)|\w+\([^\\(]+\)|\d+([\w]+|%)|[\w\\-]+/g,
      )
    : undefined;

export default splitToWords;
