import { useRef, useEffect } from "react";

const useIsMountedRef = (): React.RefObject<boolean | null> => {
  const isMountedRef = useRef<boolean | null>(null);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  });

  return isMountedRef;
};

export default useIsMountedRef;
