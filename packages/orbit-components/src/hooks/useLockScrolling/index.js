// @flow
import { useLayoutEffect } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import typeof UseLockScrolling from ".";

function lockScrolling(el: HTMLElement): void {
  disableBodyScroll(el);
  // body-scroll-lock sets fixed position on requestAnimationFrame
  // so we need to use it as well
  window.requestAnimationFrame(() => {
    if (document.body && document.body.style.position === "fixed") {
      // avoid a bug on iOS Safari where body doesn't take up full width
      document.body.style.right = "0";
    }
  });
}

function unlockScrolling() {
  if (document.body && document.body.style.position === "fixed") {
    document.body.style.right = "";
  }
  clearAllBodyScrollLocks();
}

const useLockScrolling: UseLockScrolling = (ref, lock = true) => {
  useLayoutEffect(() => {
    if (ref.current) {
      if (lock) {
        lockScrolling(ref.current);
      } else {
        unlockScrolling();
      }
    }
    return () => {
      unlockScrolling();
    };
  }, [ref, lock]);
};

export default useLockScrolling;
