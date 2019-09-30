// @flow
import React, { useRef, useCallback, useMemo, useEffect } from "react";
import styled from "styled-components";

import Portal from "../Portal";
import PopoverContentWrapper from "./components/ContentWrapper";
import type { Props } from "./index.js.flow";
import useTheme from "../hooks/useTheme";
import useStateWithTimeout from "../hooks/useStateWithTimeout";

const StyledPopoverChild = styled.div`
  position: relative;
`;

const Popover = ({
  children,
  content,
  preferredPosition = "bottom",
  dataTest,
  opened,
  width,
  noPadding,
  overlapped,
  onClose,
  onOpen,
  fixed,
}: Props) => {
  const theme = useTheme();
  const transitionLength = useMemo(() => parseFloat(theme.orbit.durationFast) * 1000, [
    theme.orbit.durationFast,
  ]);
  const [shown, setShown, setShownWithTimeout, clearShownTimeout] = useStateWithTimeout<boolean>(
    false,
    transitionLength,
  );
  const [
    render,
    setRender,
    setRenderWithTimeout,
    clearRenderTimeout,
  ] = useStateWithTimeout<boolean>(false, transitionLength);
  const container: { current: React$ElementRef<*> } = useRef(null);

  const resolveCallback = useCallback(
    state => {
      if (onClose && !state) onClose();
      if (onOpen && state) onOpen();
    },
    [onClose, onOpen],
  );

  const handleOut = useCallback(
    ev => {
      // If open prop is present ignore custom handler
      if (container.current && !container.current.contains(ev.target)) {
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

  const handleClick = useCallback(() => {
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
    } else {
      resolveCallback(!shown);
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

  useEffect(() => {
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
  return (
    <React.Fragment>
      <StyledPopoverChild onClick={handleClick} ref={container}>
        {children}
      </StyledPopoverChild>
      {render && (
        <Portal element="popovers">
          <PopoverContentWrapper
            shown={shown}
            width={width}
            containerRef={container}
            preferredPosition={preferredPosition}
            onClose={handleOut}
            dataTest={dataTest}
            noPadding={noPadding}
            overlapped={overlapped}
            fixed={fixed}
          >
            {content}
          </PopoverContentWrapper>
        </Portal>
      )}
    </React.Fragment>
  );
};

export default Popover;
