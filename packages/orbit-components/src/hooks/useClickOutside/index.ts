import React from "react";

const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (ev: MouseEvent | TouchEvent) => void,
): void => {
  React.useEffect(() => {
    const handleClose = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.currentTarget as Node)) {
        handler(event);
      }
    };

    window.addEventListener<"mousedown">("mousedown", handleClose);
    window.addEventListener("touchstart", handleClose);
    return () => {
      window.removeEventListener("mousedown", handleClose);
      window.removeEventListener("touchstart", handleClose);
    };
  }, [handler, ref]);
};

export default useClickOutside;
