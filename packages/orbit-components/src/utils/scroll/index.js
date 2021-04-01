// @flow
export const addScrollHandler = (onScrollFunction: () => void, element: Node = document) => {
  element.addEventListener("touchmove", onScrollFunction, element);
  element.addEventListener("scroll", onScrollFunction, element);
};

export const removeScrollHandler = (onScrollFunction: () => void, element: Node = document) => {
  element.removeEventListener("touchmove", onScrollFunction);
  element.removeEventListener("scroll", onScrollFunction);
};

export const getScrollingElement = (): any =>
  window.document.scrollingElement || window.document.documentElement;
