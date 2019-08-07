// @flow
import type { BoundingClientRect } from "./index";

const boundingClientRect: BoundingClientRect = ref => {
  if (
    ref &&
    ref.current &&
    typeof ref.current.getBoundingClientRect === "function" &&
    typeof window !== "undefined"
  ) {
    const { height, width, top, left, right, bottom } = ref.current.getBoundingClientRect();
    return {
      top: top + window.scrollY,
      right: right + window.scrollX,
      bottom: bottom + window.scrollY,
      left: left + window.scrollX,
      height,
      width,
    };
  }
  return null;
};

export default boundingClientRect;
