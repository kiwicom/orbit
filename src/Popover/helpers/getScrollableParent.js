// @flow
import type { GetScrollableParent } from "./getScrollableParent";

const findStyle = (node, prop) => {
  if (node instanceof HTMLElement) {
    return getComputedStyle(node).getPropertyValue(prop);
  }
  return "";
};

const isScrollable = node =>
  /(auto|scroll)/.test(
    findStyle(node, "overflow") + findStyle(node, "overflow-y") + findStyle(node, "overflow-x"),
  );

// getScrollableParent recursively checking for CSS styles which would indicate that element is scrollable.
// Element can be scrollable when it's parent has overflow auto or scroll set.
const getScrollableParent: GetScrollableParent = node => {
  if (!node || node === document.body) {
    return document.body;
  }
  if (isScrollable(node)) {
    return node;
  }
  if (node && node.parentNode) {
    return getScrollableParent(node.parentNode);
  }
  return null;
};

export default getScrollableParent;
