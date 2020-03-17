// @flow
import type { IsFullyScrolled } from "./isFullyScrolled";

const isFullyScrolled: IsFullyScrolled = (content, body) => {
  if (content?.current && body?.current) {
    // if the content height is smaller than window height, we need to explicitly set fullyScrolled to true
    const contentHeight =
      content.current.scrollHeight > content.current.offsetHeight + 40
        ? content.current.offsetHeight
        : content.current.scrollHeight;
    // when scrollHeight + topPadding - scrollingElementHeight is smaller or even than window height
    return contentHeight + 40 - body.current.scrollTop <= window.innerHeight;
  }
  return null;
};

export default isFullyScrolled;
