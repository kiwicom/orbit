// @flow
import type { GetScrollableParent } from "./getScrollableParent";

const regex = /(auto|scroll)/;

const style = (node, prop) => getComputedStyle(node).getPropertyValue(prop);

const scroll = node =>
  regex.test(style(node, "overflow") + style(node, "overflow-y") + style(node, "overflow-x"));

const getScrollableParent: GetScrollableParent = node => {
  if (!node || node === document.body) {
    return document.body;
  }
  if (scroll(node)) {
    return node;
  }
  return getScrollableParent(node.parentNode);
};

export default getScrollableParent;
