import * as React from "react";

import FOCUSABLE_ELEMENT_SELECTORS from "./consts";

interface FocusElements {
  first: HTMLElement | null;
  last: HTMLElement | null;
}

type UseFocusTrap = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  triggeredDefault?: boolean,
) => void;

const manageFocus = (ref, triggered): FocusElements => {
  if (triggered && ref.current) {
    const focusableElements = ref.current.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS);

    if (focusableElements.length > 0) {
      const firstFocusableEl = focusableElements[0];
      const lastFocusableEl = focusableElements[focusableElements.length - 1];

      return { first: firstFocusableEl, last: lastFocusableEl };
    }
  }

  return { first: null, last: null };
};

const useFocusTrap: UseFocusTrap = (
  ref: React.RefObject<HTMLElement | null>,
  triggeredDefault: boolean = false,
) => {
  const [triggered, setTriggered] = React.useState(triggeredDefault);

  React.useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Tab") {
        if (!triggered) {
          setTriggered(true);
        }

        const { first, last } = manageFocus(ref, triggered);

        if (
          ev.shiftKey &&
          last &&
          (document.activeElement === first || document.activeElement === ref.current)
        ) {
          ev.preventDefault();
          last.focus();
        } else if (!ev.shiftKey && first && document.activeElement === last) {
          ev.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [triggered, ref]);
};

export default useFocusTrap;
