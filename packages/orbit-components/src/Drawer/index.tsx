"use client";

import * as React from "react";
import cx from "clsx";

import KEY_CODE_MAP from "../common/keyMaps";
import useFocusTrap from "../hooks/useFocusTrap";
import useLockScrolling from "../hooks/useLockScrolling";
import DrawerClose from "./components/DrawerClose";
import POSITIONS from "./consts";
import Stack from "../Stack";
import Heading from "../Heading";
import type { Props } from "./types";
import theme from "../defaultTheme";
import useStateWithTimeout from "../hooks/useStateWithTimeout";

const getTransitionClasses = (shown: boolean, position: string) => {
  if (shown) return "translate-x-0";

  return position === POSITIONS.RIGHT
    ? "ltr:lm:translate-x-[var(--lm-drawer-width)] rtl:lm:-translate-x-[var(--lm-drawer-width)] ltr:translate-x-full rtl:-translate-x-full"
    : "ltr:lm:-translate-x-[var(--lm-drawer-width)] rtl:lm:-translate-x-[var(--lm-drawer-width)] ltr:-translate-x-full rtl:translate-x-full";
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
}: Props) => {
  const overlayRef = React.useRef(null);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const scrollableRef = React.useRef<HTMLElement | null>(null);

  const [overlayShown, setOverlayShown, setOverlayShownWithTimeout] = useStateWithTimeout<boolean>(
    shown,
    parseFloat(theme.orbit.durationNormal) * 1000,
  );

  const handleOnClose = React.useCallback(
    (ev: React.MouseEvent<HTMLDivElement>) => {
      if (onClose && ev.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose],
  );

  useFocusTrap(scrollableRef);
  useLockScrolling(scrollableRef, lockScrolling && overlayShown);

  const handleKeyDown = React.useCallback(
    (ev: React.KeyboardEvent<HTMLDivElement> | KeyboardEvent) => {
      if (ev.keyCode === KEY_CODE_MAP.ESC && onClose) {
        onClose();
      }
    },
    [onClose],
  );

  React.useEffect(() => {
    closeButtonRef.current?.focus();

    if (overlayShown !== shown) {
      if (shown) {
        setOverlayShown(true);
      } else if (!shown) {
        setOverlayShownWithTimeout(false);
      }
    }
  }, [overlayShown, setOverlayShown, shown, setOverlayShownWithTimeout, onClose]);

  const vars = {
    "--lm-drawer-width": width,
  };

  const varClasses = [vars["--lm-drawer-width"] != null && "lm:max-w-[var(--lm-drawer-width)]"];

  const onlyIcon = !title && !actions;
  const bordered = !!(title || actions);

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={cx(
        "orbit-drawer",
        "flex",
        "fixed inset-0",
        "h-full w-full",
        "z-drawer",
        "duration-fast transition-colors ease-in-out",
        overlayShown ? "visible" : "invisible",
        shown ? "bg-drawer-overlay-background" : "transparent",
      )}
      onClick={handleOnClose}
      data-test={dataTest}
      id={id}
      aria-hidden={!shown}
      ref={overlayRef}
    >
      <aside
        className={cx(
          "box-border block",
          "absolute bottom-0 top-0",
          "h-full w-full",
          "font-base",
          "overflow-y-auto",
          "overflow-x-hidden",
          "shadow-raised",
          "duration-normal transform-gpu transition-transform ease-in-out",
          getTransitionClasses(shown, position),
          suppressed ? "bg-cloud-light" : "bg-white-normal",
          position === POSITIONS.RIGHT ? "end-0" : "start-0",
          ...varClasses,
        )}
        style={vars as React.CSSProperties}
        ref={scrollableRef}
        role="navigation"
      >
        {(title || actions || onClose) && (
          <div
            className={cx(
              "flex",
              "items-center",
              "h-[64px]",
              "box-border",
              suppressed && !bordered ? "bg-cloud-light" : "bg-white-normal",
              fixedHeader && "z-sticky sticky top-0",
              onlyIcon ? "justify-end" : "justify-between",
              bordered &&
                "border-cloud-normal border-b border-l-0 border-r-0 border-t-0 border-solid",
              !noPadding && "px-md lm:ps-xl lm:pe-lg py-0",
            )}
          >
            {title && <Heading type="title2">{title}</Heading>}
            {actions && (
              <Stack spacing="none" justify="end" flex shrink>
                {actions}
              </Stack>
            )}
            {onClose && <DrawerClose onClick={onClose} ref={closeButtonRef} title={labelHide} />}
          </div>
        )}
        <div
          className={cx(
            !onClose && noPadding && "mt-lg",
            noPadding && "mb-lg",
            !noPadding && (bordered ? "p-md lm:p-xl" : "px-md pb-md lm:px-xl lm:pb-xl"),
          )}
        >
          {children}
        </div>
      </aside>
    </div>
  );
};

export default Drawer;
