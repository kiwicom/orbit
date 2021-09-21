// @flow
import { useLayoutEffect } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import useTheme from "../useTheme";

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

const useLockScrolling: UseLockScrolling = (ref, lock = true, dependencies = []) => {
  const { lockScrolling: themeLockScrolling = true } = useTheme();

  useLayoutEffect(() => {
    if (ref.current && lock && themeLockScrolling) {
      lockScrolling(ref.current);
    }
    return () => {
      unlockScrolling();
    };
    // the rule doesn't know that "ref" is a ref object
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lock, themeLockScrolling, ...dependencies]);
};

export default useLockScrolling;
