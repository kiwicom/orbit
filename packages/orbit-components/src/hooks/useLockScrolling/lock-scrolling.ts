/* eslint-disable no-param-reassign */

/**
 * body-scroll-lock library adjusted to fix an issue with scrolling being enabled regardless
 * of the number of locks, which causes scrolling to be enabled after a nested Popover is closed
 *
 * https://github.com/willmcpo/body-scroll-lock/issues/235
 */

interface BodyScrollOptions {
  reserveScrollBarGap?: boolean;
}

interface Lock {
  targetElement: HTMLElement;
  options?: BodyScrollOptions;
}

// Older browsers don't support event options, feature detect it.
let hasPassiveEvents = false;
if (typeof window !== "undefined") {
  const passiveTestOptions = {
    // @ts-expect-error TODO
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    },
  };

  // @ts-expect-error TODO
  window.addEventListener("testPassive", null, passiveTestOptions);
  // @ts-expect-error TODO
  window.removeEventListener("testPassive", null, passiveTestOptions);
}

const isIosDevice =
  typeof window !== "undefined" &&
  window.navigator &&
  window.navigator.platform &&
  (/iP(ad|hone|od)/.test(window.navigator.platform) ||
    (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1));
type HandleScrollEvent = TouchEvent;

let locks: Lock[] = [];
let documentListenerAdded = false;
let initialClientY = -1;
let previousBodyPosition: {
  position: string;
  top: string;
  left: string;
  right: string;
} | void;
let previousBodyOverflowSetting: string | undefined;
let previousBodyPaddingRight: string | undefined;

const preventDefault = (rawEvent: HandleScrollEvent): boolean => {
  const e = rawEvent || window.event;

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

const setOverflowHidden = (options?: BodyScrollOptions) => {
  if (!document.body || !document.documentElement) return;

  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
    const reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;

    if (reserveScrollBarGap && scrollBarGap > 0) {
      const computedBodyPaddingRight = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right"),
        10,
      );

      if (document.body) {
        previousBodyPaddingRight = document.body.style.paddingRight;
        document.body.style.paddingRight = `${computedBodyPaddingRight || 0 + scrollBarGap}px`;
      }
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined && document.body) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};

const restoreOverflowSetting = () => {
  if (!document.body) return;

  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }

  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};

const setPositionFixed = () =>
  window.requestAnimationFrame(() => {
    if (!document.body) return;

    // If previousBodyPosition is already set, don't set it again.
    if (previousBodyPosition === undefined) {
      previousBodyPosition = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        right: document.body.style.right,
      };

      // Update the dom inside an animation frame
      const { scrollY, scrollX, innerHeight } = window;
      document.body.style.position = "fixed";
      document.body.style.top = `${-scrollY}px`;
      document.body.style.left = `${-scrollX}px`;
      // avoid a bug on iOS Safari where body doesn't take up full width
      document.body.style.right = `0px`;

      setTimeout(
        () =>
          window.requestAnimationFrame(() => {
            if (!document.body) return;

            // Attempt to check if the bottom bar appeared due to the position change
            const bottomBarHeight = innerHeight - window.innerHeight;
            if (bottomBarHeight && scrollY >= innerHeight) {
              // Move the content further up so that the bottom bar doesn't hide it
              document.body.style.top = String(-(scrollY + bottomBarHeight));
            }
          }),
        300,
      );
    }
  });

const restorePositionSetting = () => {
  if (!document.body) return;

  if (previousBodyPosition) {
    const { top, left } = document.body.style;

    // Restore styles
    document.body.style.position = previousBodyPosition.position;
    document.body.style.top = previousBodyPosition.top;
    document.body.style.left = previousBodyPosition.left;
    document.body.style.right = previousBodyPosition.right;

    // Convert the position from "px" to Int
    const y = -parseInt(top, 10);
    const x = -parseInt(left, 10);

    // Restore scroll
    window.scrollTo(x, y);

    previousBodyPosition = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
const isTargetElementTotallyScrolled = (targetElement: HTMLElement): boolean =>
  !!targetElement &&
  targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight;

const handleScroll = (event: HandleScrollEvent, targetElement: HTMLElement): boolean => {
  const clientY = event.targetTouches[0].clientY - initialClientY;

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

export const disableBodyScroll = (
  targetElement: HTMLElement,
  options?: BodyScrollOptions,
): void => {
  // disableBodyScroll must not have been called on this targetElement before
  // @ts-expect-error TODO
  if (locks.some(lock => lock === targetElement)) {
    return;
  }

  const lock = { targetElement, options };

  locks = [...locks, lock];

  if (isIosDevice) {
    setPositionFixed();
  } else {
    setOverflowHidden(options);
  }

  if (isIosDevice) {
    targetElement.ontouchstart = (event: HandleScrollEvent) => {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = (event: HandleScrollEvent) => {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };

    if (!documentListenerAdded) {
      document.addEventListener(
        "touchmove",
        preventDefault,
        hasPassiveEvents ? { passive: false } : undefined,
      );
      documentListenerAdded = true;
    }
  }
};

export const clearAllBodyScrollLocks = (): void => {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach(lock => {
      // @ts-expect-error TODO
      lock.ontouchstart = null;
      // @ts-expect-error TODO
      lock.ontouchmove = null;
    });

    if (documentListenerAdded) {
      // @ts-expect-error TODO
      document.removeEventListener(
        "touchmove",
        preventDefault,
        hasPassiveEvents ? { passive: false } : undefined,
      );
      documentListenerAdded = false;
    }

    // Reset initial clientY.
    initialClientY = -1;
  }

  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }

  locks = [];
};

export const enableBodyScroll = (targetElement: HTMLElement): void => {
  locks = locks.filter(lock => lock.targetElement !== targetElement);

  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    if (documentListenerAdded && locks.length === 0) {
      // @ts-expect-error TODO
      document.removeEventListener(
        "touchmove",
        preventDefault,
        hasPassiveEvents ? { passive: false } : undefined,
      );
      documentListenerAdded = false;
    }
  }

  if (locks.length === 0) {
    if (isIosDevice) {
      restorePositionSetting();
    } else {
      restoreOverflowSetting();
    }
  }
};
