// @flow
import React, { useState, useRef, useCallback, useMemo, useEffect } from "react";
import styled from "styled-components";

import Portal from "../Portal";
import PopoverContentWrapper from "./components/ContentWrapper";
import type { Props } from "./index.js.flow";
import useTheme from "../hooks/useTheme";

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
}: Props) => {
  const theme = useTheme();
  const [shown, setShown] = useState<boolean>(false);
  const [render, setRender] = useState(false);
  const renderRef = useRef(null);
  const shownRef = useRef(null);
  const container: { current: React$ElementRef<*> } = useRef(null);

  const transitionLength = useMemo(() => parseFloat(theme.orbit.durationFast) * 1000, [
    theme.orbit.durationFast,
  ]);

  const setShownTimeout = useCallback(() => {
    shownRef.current = setTimeout(() => {
      shownRef.current = null;
      setShown(true);
    }, transitionLength);
  }, [transitionLength]);

  const setRenderTimeout = useCallback(() => {
    renderRef.current = setTimeout(() => {
      renderRef.current = null;
      setRender(false);
    }, transitionLength);
  }, [transitionLength]);

  const clearRenderTimeout = useCallback(() => {
    if (renderRef.current !== null) {
      clearTimeout(renderRef.current);
    }
  }, []);

  const clearShownTimeout = useCallback(() => {
    if (shownRef.current !== null) {
      clearTimeout(shownRef.current);
    }
  }, []);

  const resolveCallback = useCallback(
    state => {
      if (onClose && !state) onClose();
      if (onOpen && state) onOpen();
    },
    [onClose, onOpen],
  );

  const handleOut = useCallback(() => {
    // If open prop is present ignore custom handler
    if (typeof opened === "undefined") {
      setShown(false);
      clearShownTimeout();
      setRenderTimeout();
      resolveCallback(false);
    } else if (onClose) onClose();
  }, [clearShownTimeout, onClose, opened, resolveCallback, setRenderTimeout]);

  const handleClick = useCallback(() => {
    // If open prop is present ignore custom handler
    if (typeof opened === "undefined") {
      setRender(true);
      clearRenderTimeout();
      setShownTimeout();
      resolveCallback(true);
    } else if (onOpen) onOpen();
  }, [clearRenderTimeout, onOpen, opened, resolveCallback, setShownTimeout]);

  useEffect(() => {
    if (typeof opened !== "undefined") {
      if (opened) {
        setRender(true);
        clearRenderTimeout();
        setShownTimeout();
      } else {
        setShown(false);
        clearShownTimeout();
        setRenderTimeout();
      }
    }
    return () => {
      clearRenderTimeout();
      clearShownTimeout();
    };
  }, [opened, setShownTimeout, setRenderTimeout, clearRenderTimeout, clearShownTimeout]);
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
          >
            {content}
          </PopoverContentWrapper>
        </Portal>
      )}
    </React.Fragment>
  );
};

export default Popover;
