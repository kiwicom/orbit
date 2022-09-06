import { useState, useEffect, useCallback, useRef } from "react";

import UseStateWithTimeout from "./index.d";

const useStateWithTimeout: typeof UseStateWithTimeout = (defaultValue, timeout) => {
  const [state, setState] = useState(defaultValue);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
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
};

export default useStateWithTimeout;
