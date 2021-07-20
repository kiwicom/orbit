// @flow
import { useLayoutEffect } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import typeof UseLockScrolling from ".";

const useLockScrolling: UseLockScrolling = (ref, lock = true) => {
  useLayoutEffect(() => {
    if (ref.current) {
      if (lock) {
        disableBodyScroll(ref.current);
      } else {
        clearAllBodyScrollLocks();
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [ref, lock]);
};

export default useLockScrolling;
