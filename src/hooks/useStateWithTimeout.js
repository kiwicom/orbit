// @flow
import { useState, useEffect, useCallback, useRef } from "react";

import type { Return } from "./useStateWithTimeout";

export default function useStateWithTimeout<S>(defaultValue: S, timeout?: number): Return<S> {
  const [state, setState] = useState(defaultValue);
  const timeoutRef = useRef(null);
  const setStateWithTimeout = useCallback(
    value => {
      if (typeof setTimeout === "function") {
        timeoutRef.current = setTimeout(() => {
          timeoutRef.current = null;
          setState(value);
        }, timeout);
      }
    },
    [timeout],
  );
  const clearStateTimeout = useCallback(() => {
    if (timeoutRef.current !== null && typeof clearTimeout === "function") {
      clearTimeout(timeoutRef.current);
    }
  }, []);
  useEffect(() => {
    return () => {
      clearStateTimeout();
    };
  }, [clearStateTimeout]);
  return [state, setState, setStateWithTimeout, clearStateTimeout];
}
