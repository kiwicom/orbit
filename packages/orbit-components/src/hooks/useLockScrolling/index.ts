import { useEffect } from "react";

import useTheme from "../useTheme";
import useIsMounted from "../useIsMounted";
import { disableBodyScroll, enableBodyScroll } from "./lock-scrolling";
import UseLockScrolling from "./index.d";

const useLockScrolling: typeof UseLockScrolling = (ref, lock = true, dependencies = []) => {
  const { lockScrolling: themeLockScrolling = true, lockScrollingBarGap = true } = useTheme();
  const isMounted = useIsMounted();

  useEffect(() => {
    const el = ref.current;

    if (el) {
      if (lock && themeLockScrolling) {
        disableBodyScroll(el, { reserveScrollBarGap: lockScrollingBarGap });
      }
      if (!lock || !themeLockScrolling) {
        enableBodyScroll(el);
      }
    }

    return () => {
      // disabling this because we're interested in precisely that changed value
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const didRefChange = el !== ref.current;
      if (el && (!isMounted() || didRefChange)) {
        enableBodyScroll(el);
      }
    };
  }, [ref, lock, themeLockScrolling, lockScrollingBarGap, isMounted, ...dependencies]);
};

export default useLockScrolling;
