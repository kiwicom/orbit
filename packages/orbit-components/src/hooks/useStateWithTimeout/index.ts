import { useState, useEffect, useCallback, useRef } from "react";

type Return<S> = [S, (arg0: S) => void, (arg0: S) => void, () => void];

const useStateWithTimeout = <T>(defaultValue: T, timeout: number): Return<T> => {
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
