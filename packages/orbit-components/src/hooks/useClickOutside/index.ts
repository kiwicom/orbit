import React from "react";

const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (ev: React.SyntheticEvent<T>) => void,
): void => {
  React.useEffect(() => {
    const handleClose = (event: React.SyntheticEvent<T>) => {
      if (ref.current && !ref.current.contains(event.currentTarget as Node)) {
        handler(event);
      }
    };

    // @ts-expect-error TODO FIXME: conflict between node and react types
    window.addEventListener("mousedown", handleClose);
    // @ts-expect-error TODO FIXME: conflict between node and react types
    window.addEventListener("touchstart", handleClose);
    return () => {
      // @ts-expect-error TODO FIXME: conflict between node and react types
      window.removeEventListener("mousedown", handleClose);
      // @ts-expect-error TODO FIXME: conflict between node and react types
      window.removeEventListener("touchstart", handleClose);
    };
  }, [handler, ref]);
};

export default useClickOutside;
