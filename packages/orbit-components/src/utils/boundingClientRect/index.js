// @flow
import type { BoundingClientRect } from ".";

const boundingClientRect: BoundingClientRect = ref => {
  if (
    ref &&
    ref.current &&
    // $FlowFixMe: TODO
    typeof ref.current.getBoundingClientRect === "function" &&
    typeof window !== "undefined"
  ) {
    // $FlowFixMe: TODO
    const { height, width, top, left, right, bottom } = ref.current.getBoundingClientRect();
    return {
      top: top + (window.scrollY || window.pageYOffset),
      right: right + (window.scrollX || window.pageXOffset),
      bottom: bottom + (window.scrollY || window.pageYOffset),
      left: left + (window.scrollX || window.pageXOffset),
      pureTop: top,
      pureLeft: left,
      pureRight: right,
      pureBottom: bottom,
      height,
      width,
    };
  }
  return null;
};

export default boundingClientRect;
