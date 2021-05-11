import React from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

export default function useDisableScroll() {
  const scrollingElementRef = React.useRef<HTMLElement | null>(null);
  React.useLayoutEffect(() => {
    if (scrollingElementRef.current) {
      disableBodyScroll(scrollingElementRef.current);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);
  return scrollingElementRef;
}
