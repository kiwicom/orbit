"use client";

import * as React from "react";
import cx from "clsx";

import useFocusTrap from "../hooks/useFocusTrap";
import useLockScrolling from "../hooks/useLockScrolling";
import DrawerClose from "./components/DrawerClose";
import POSITIONS from "./consts";
import Stack from "../Stack";
import Heading from "../Heading";
import type { Props } from "./types";
import theme from "../defaultTheme";
import useStateWithTimeout from "../hooks/useStateWithTimeout";
import useClickOutside from "../hooks/useClickOutside";
import FOCUSABLE_ELEMENT_SELECTORS from "../hooks/useFocusTrap/consts";

const getTransitionClasses = (shown: boolean, position: string) => {
  if (shown) return "translate-x-0 visible";

  return position === POSITIONS.RIGHT
    ? "ltr:lm:translate-x-(--lm-drawer-width) rtl:lm:-translate-x-(--lm-drawer-width) ltr:translate-x-full rtl:-translate-x-full invisible w-0"
    : "ltr:lm:-translate-x-(--lm-drawer-width) rtl:lm:translate-x-(--lm-drawer-width) ltr:-translate-x-full rtl:translate-x-full invisible w-0";
};

const Drawer = ({
  children,
  onClose,
  lockScrolling = true,
  fixedHeader,
  labelHide = "Hide",
  shown = true,
  width = "320px",
  position = POSITIONS.RIGHT,
  dataTest,
  id,
  noPadding,
  suppressed,
  title,
  actions,
  ariaLabel,
  triggerRef,
}: Props) => {
  const overlayRef = React.useRef(null);
  const drawerRef = React.useRef<HTMLDivElement | null>(null);
  const focusableElements = React.useRef<HTMLElement[]>([]);

  const [overlayShown, setOverlayShown, setOverlayShownWithTimeout] = useStateWithTimeout<boolean>(
    shown,
    parseFloat(theme.orbit.durationNormal) * 1000,
  );

  useFocusTrap(drawerRef, true);
  useLockScrolling(drawerRef, lockScrolling && overlayShown);

  React.useEffect(() => {
    if (overlayShown !== shown) {
      if (shown) {
        setOverlayShown(true);
      } else if (!shown) {
        setOverlayShownWithTimeout(false);
      }
    }
  }, [overlayShown, setOverlayShown, shown, setOverlayShownWithTimeout]);

  React.useEffect(() => {
    const findFocusableElements = () => {
      return Array.from(
        drawerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENT_SELECTORS) || [],
      );
    };

    if (!shown || !drawerRef.current) return undefined;

    // Find all focusable elements within the drawer
    focusableElements.current = findFocusableElements();

    if (focusableElements.current.length) {
      focusableElements.current[0].focus();
    }

    const observer = new MutationObserver(() => {
      focusableElements.current = findFocusableElements();
    });

    // Start observing the drawer content for DOM changes
    observer.observe(drawerRef.current, {
      childList: true, // Watch for added/removed nodes
      subtree: true, // Watch all descendants, not just direct children
    });

    return () => {
      observer.disconnect();
    };
  }, [shown]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (shown && event.key === "Escape" && onClose) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, shown]);

  const handleClickOutside = React.useCallback(() => {
    if (shown && onClose) onClose();
  }, [shown, onClose]);

  const vars = {
    "--lm-drawer-width": width,
  };

  const varClasses = [vars["--lm-drawer-width"] != null && "lm:max-w-(--lm-drawer-width)"];

  const onlyIcon = !title && !actions;
  const bordered = !!(title || actions);

  useClickOutside(drawerRef, handleClickOutside);

  React.useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      triggerRef?.current?.focus();
    };
  }, [triggerRef]);

  return (
    <>
      <div
        className={cx(
          "orbit-drawer",
          "flex",
          "fixed inset-0",
          "size-full",
          "z-drawer",
          "duration-fast transition-[background-color,visibility] ease-in-out",
          overlayShown ? "visible" : "invisible",
          shown ? "bg-drawer-overlay-background" : "bg-transparent",
        )}
        id={id}
        ref={overlayRef}
        aria-hidden="true"
      />
      <div
        className={cx(
          "box-border block",
          "fixed inset-y-0",
          "size-full",
          "font-base",
          "z-drawer",
          "overflow-y-auto",
          "overflow-x-hidden",
          "shadow-level3",
          "duration-normal transform-gpu transition-[transform,visibility,width] ease-in-out",
          getTransitionClasses(shown, position),
          suppressed ? "bg-cloud-light" : "bg-white-normal",
          position === POSITIONS.RIGHT ? "end-0" : "start-0",
          ...varClasses,
        )}
        style={vars as React.CSSProperties}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel || title}
        data-test={dataTest}
      >
        {(title || actions || onClose) && (
          <div
            className={cx(
              "flex",
              "items-center",
              "h-1600",
              "box-border",
              suppressed && !bordered ? "bg-cloud-light" : "bg-white-normal",
              fixedHeader && "z-sticky sticky top-0",
              onlyIcon ? "justify-end" : "justify-between",
              bordered && "border-cloud-normal border-x-0 border-b border-t-0 border-solid",
              "px-400 lm:ps-800 lm:pe-600 py-0",
            )}
          >
            {title && <Heading type="title2">{title}</Heading>}
            {actions && (
              <Stack spacing="none" justify="end" flex shrink>
                {actions}
              </Stack>
            )}
            {onClose && <DrawerClose onClick={onClose} title={labelHide} />}
          </div>
        )}
        <div
          className={cx(
            !onClose && noPadding && "mt-600",
            noPadding && "mb-600",
            !noPadding && (bordered ? "p-400 lm:p-800" : "px-400 pb-400 lm:px-800 lm:pb-800"),
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;
