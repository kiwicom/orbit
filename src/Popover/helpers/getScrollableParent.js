// @flow
import type { GetScrollableParent } from "./getScrollableParent";

const regex = /(auto|scroll)/;

const style = (node, prop) => {
  if (node instanceof HTMLElement) {
    return getComputedStyle(node).getPropertyValue(prop);
  }
  return "";
};

const scroll = node =>
  regex.test(style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x"));

const getScrollableParent: GetScrollableParent = node => {
  if (!node || node === document.body) {
    return document.body;
  }
  if (scroll(node)) {
    return node;
  }
  if (node && node.parentNode) {
    return getScrollableParent(node.parentNode);
  }
  return null;
};

export default getScrollableParent;
