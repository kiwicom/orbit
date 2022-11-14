import type * as React from "react";

export interface Dimensions {
  top: number;
  right: number;
  bottom: number;
  left: number;
  height: number;
  width: number;
  pureTop: number;
  pureLeft: number;
  pureRight: number;
  pureBottom: number;
}

const boundingClientRect = (ref: React.MutableRefObject<HTMLElement>): Dimensions => {
  if (
    ref &&
    ref.current &&
    typeof ref.current.getBoundingClientRect === "function" &&
    typeof window !== "undefined"
  ) {
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

  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: 0,
    width: 0,
    pureTop: 0,
    pureLeft: 0,
    pureRight: 0,
    pureBottom: 0,
  };
};

export default boundingClientRect;
