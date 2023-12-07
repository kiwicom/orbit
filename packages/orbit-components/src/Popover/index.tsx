"use client";

import * as React from "react";

import useStateWithTimeout from "../hooks/useStateWithTimeout";
import { PLACEMENTS } from "../common/consts";
import PopoverContent from "./components/ContentWrapper";
import useRandomId from "../hooks/useRandomId";
import Portal from "../Portal";
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
}: Props) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const popoverId = useRandomId();

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

  const handleOut = React.useCallback(
    (ev?: MouseEvent | React.SyntheticEvent<HTMLElement>) => {
      // If open prop is present ignore custom handler
      ev?.stopPropagation();
      if (ev && ref.current && !ref.current.contains(ev.target as Node)) {
        if (typeof opened === "undefined") {
          setShown(false);
          clearShownTimeout();
          setRenderWithTimeout(false);
          resolveCallback(false);
        } else if (onClose) onClose();
      }
    },
    [clearShownTimeout, onClose, opened, resolveCallback, setRenderWithTimeout, setShown],
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
  }, [
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
    >
      {content}
    </PopoverContent>
  );

  return (
    <>
      <div
        className="relative inline-block"
        ref={ref}
        role="button"
        // https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using
        // @ts-expect-error expected
        // eslint-disable-next-line react/no-unknown-property
        popovertarget={id || popoverId}
        // according to our docs button should be used for opening popover inside children (uncontrolled behavior),
        // that's why this div shouldn't be focusable in order to avoid double focus
        tabIndex={-1}
        onClick={handleClick}
        onKeyDown={handleKeyDown<HTMLDivElement>(handleClick)}
      >
        {children}
      </div>
      {render && (renderInPortal ? <Portal renderInto="popovers">{popover}</Portal> : popover)}
    </>
  );
};

export default Popover;
