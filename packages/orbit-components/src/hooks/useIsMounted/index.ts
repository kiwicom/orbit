import { useCallback, useEffect, useRef } from "react";

// https://usehooks-typescript.com/react-hook/use-is-mounted
function useIsMounted(): () => boolean {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
}

export default useIsMounted;
