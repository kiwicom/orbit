import React from "react";

export interface Dimensions {
  top: number | null;
  right: number | null;
  bottom: number | null;
  left: number | null;
  height: number | null;
  width: number | null;
  pureTop: number | null;
  pureLeft: number | null;
  pureRight: number | null;
  pureBottom: number | null;
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
    top: null,
    right: null,
    bottom: null,
    left: null,
    height: null,
    width: null,
    pureTop: null,
    pureLeft: null,
    pureRight: null,
    pureBottom: null,
  };
};

export default boundingClientRect;
