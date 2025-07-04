"use client";

import * as React from "react";
import { FloatingPortal } from "@floating-ui/react";

import useStateWithTimeout from "../hooks/useStateWithTimeout";
import { PLACEMENTS } from "../common/placements";
import PopoverContent from "./components/ContentWrapper";
import useRandomId from "../hooks/useRandomId";
import handleKeyDown from "../utils/handleKeyDown";
import type { Props } from "./types";

const Popover = ({
  children,
  renderInPortal = true,
  opened,
  zIndex,
  content,
  onClose,
  id,
  onOpen,
  offset,
  placement = PLACEMENTS.BOTTOM_START,
  fixed,
  lockScrolling = true,
  noFlip,
  labelClose = "Close",
  renderTimeout = 0,
  allowOverflow,
  noPadding,
  width,
  maxHeight,
  actions,
  overlapped,
  dataTest,
  ariaLabel,
  ariaLabelledby,
  role = "dialog",
  tabIndex,
  triggerRole,
}: Props) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const popoverId = useRandomId();
  const overlayId = useRandomId();

  const [shown, setShown, setShownWithTimeout, clearShownTimeout] = useStateWithTimeout<boolean>(
    false,
    renderTimeout,
  );

  const [render, setRender, setRenderWithTimeout, clearRenderTimeout] =
    useStateWithTimeout<boolean>(false, renderTimeout);

  const resolveCallback = React.useCallback(
    state => {
      if (onClose && !state) onClose();
      if (onOpen && state) onOpen();
    },
    [onClose, onOpen],
  );

  const closePopover = React.useCallback(() => {
    // If open prop is present ignore custom handler
    if (typeof opened === "undefined") {
      setShown(false);
      clearShownTimeout();
      resolveCallback(false);
      setRenderWithTimeout(false);
    } else if (onClose) onClose();
  }, [setShown, clearShownTimeout, onClose, opened, resolveCallback, setRenderWithTimeout]);

  const handleEsc = React.useCallback(
    (ev: { key: string }) => {
      if (ev.key === "Escape") {
        closePopover();
      }
    },
    [closePopover],
  );

  const handleOut = React.useCallback(
    (ev?: MouseEvent | React.SyntheticEvent<HTMLElement>) => {
      ev?.stopPropagation();

      if (ev && ref.current && !ref.current.contains(ev.target as Node)) {
        closePopover();
      }
    },
    [closePopover],
  );

  const handleClick = React.useCallback(() => {
    // If open prop is present ignore custom handler
    if (typeof opened === "undefined") {
      if (shown) {
        setShown(false);
        clearShownTimeout();
        setRenderWithTimeout(false);
        resolveCallback(false);
      } else {
        setRender(true);
        clearRenderTimeout();
        setShownWithTimeout(true);
        resolveCallback(true);
      }
    } else if (opened) {
      resolveCallback(false);
    } else if (!opened) {
      resolveCallback(true);
    }
  }, [
    clearRenderTimeout,
    clearShownTimeout,
    opened,
    resolveCallback,
    setRender,
    setRenderWithTimeout,
    setShown,
    setShownWithTimeout,
    shown,
  ]);

  React.useEffect(() => {
    if (opened || shown) {
      document.addEventListener("keydown", handleEsc);
    }

    if (typeof opened !== "undefined") {
      if (opened) {
        setRender(true);
        clearRenderTimeout();
        setShownWithTimeout(true);
      } else {
        setShown(false);
        clearShownTimeout();
        setRenderWithTimeout(false);
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [
    shown,
    handleEsc,
    opened,
    clearRenderTimeout,
    clearShownTimeout,
    setRender,
    setShown,
    setShownWithTimeout,
    setRenderWithTimeout,
  ]);

  const popover = (
    <PopoverContent
      shown={shown}
      id={id || popoverId}
      overlayId={overlayId}
      labelClose={labelClose}
      dataTest={dataTest}
      zIndex={zIndex}
      overlapped={overlapped}
      fixed={fixed}
      noFlip={noFlip}
      allowOverflow={allowOverflow}
      lockScrolling={lockScrolling}
      noPadding={noPadding}
      actions={actions}
      width={width}
      maxHeight={maxHeight}
      offset={offset}
      referenceElement={ref.current}
      onClose={handleOut}
      placement={placement}
      ariaLabel={ariaLabel}
      ariaLabelledby={ariaLabelledby}
      role={role}
    >
      {content}
    </PopoverContent>
  );

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="relative inline-block focus:outline-offset-1"
        ref={ref}
        role={triggerRole || "button"}
        tabIndex={tabIndex ? Number(tabIndex) : 0}
        onClick={handleClick}
        onKeyDown={handleKeyDown<HTMLDivElement>(handleClick)}
        aria-controls={shown ? id || popoverId : undefined}
        aria-haspopup={role}
        aria-expanded={shown}
      >
        {children}
      </div>
      {render &&
        (renderInPortal ? <FloatingPortal id="popovers">{popover}</FloatingPortal> : popover)}
    </>
  );
};

export default Popover;
