// @flow
import { useEffect, useLayoutEffect, useRef } from "react";

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) return undefined;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
