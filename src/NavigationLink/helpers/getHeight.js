// @flow
import TYPES from "../consts";
import type { GetHeight } from "./getHeight";

const getHeight: GetHeight = ({ type, selectable }) => {
  if (type === TYPES.HORIZONTAL) {
    if (selectable) {
      return "64px";
    }
    return "44px";
  }
  return "28px";
};

export default getHeight;
