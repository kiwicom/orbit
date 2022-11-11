import React from "react";

import useEventListener from "../useEventListener";

const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (ev: MouseEvent) => void,
  mouseEvent: "mousedown" | "mouseup" = "mousedown",
): void => {
  useEventListener(mouseEvent, event => {
    const el = ref?.current;

    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) {
      return;
    }

    handler(event);
  });
};

export default useClickOutside;
