// @flow
import { ALIGNS } from "../consts";
import type { GetAlign } from "./getAlign";

const getAlign: GetAlign = align => {
  const tokens = {
    [ALIGNS.START]: "flex-start",
    [ALIGNS.END]: "flex-end",
    [ALIGNS.CENTER]: "center",
    [ALIGNS.STRETCH]: "stretch",
  };
  return align && tokens[align];
};

export default getAlign;
