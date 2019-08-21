// @flow
import React, { useState, useRef, useMemo, useEffect, useCallback } from "react";
import styled from "styled-components";

import { getBreakpointWidth } from "../utils/mediaQuery";
import { SIZE_OPTIONS } from "./consts";
import { StyledText } from "../Text";
import Portal from "../Portal";
import RandomID from "../utils/randomID";
import { QUERIES } from "../utils/mediaQuery/consts";
import useTheme from "../hooks/useTheme";
import TooltipContent from "./components/TooltipContent";

import type { Props } from "./index";

const StyledTooltipChildren = styled.span`
  &:focus:active {
    outline: none;
  }
  ${StyledText} {
    position: relative;
    display: inline-block;
    :after {
      display: block;
      border-bottom: 1px dotted currentColor;
      position: relative;
      content: " ";
      width: 100%;
      height: 0;
      top: -1px;
    }
  }
`;

const Tooltip = ({
  children,
  enabled = true,
  tabIndex = "0",
  dataTest,
  size = SIZE_OPTIONS.SMALL,
  content,
  preferredPosition,
}: Props) => {
  const theme = useTheme();
  const [shown, setShown] = useState(false);
  const [render, setRender] = useState(false);
  const [shownMobile, setShownMobile] = useState(false);
  const tooltipId = useMemo(() => RandomID("tooltip"), []);
  const container = useRef(null);
  const renderRef = useRef(null);
  const shownMobileRef = useRef(null);

  const setRenderTimeout = useCallback(() => {
    renderRef.current = setTimeout(() => {
      renderRef.current = null;
      setRender(false);
    }, 200);
  }, []);

  const setShownMobileTimeout = useCallback(() => {
    shownMobileRef.current = setTimeout(() => {
      shownMobileRef.current = null;
      setShownMobile(true);
    }, 200);
  }, []);

  const clearRenderTimeout = useCallback(() => {
    if (renderRef.current !== null) {
      clearTimeout(renderRef.current);
    }
  }, []);

  const clearShownMobileTimeout = useCallback(() => {
    if (shownMobileRef.current !== null) {
      clearTimeout(shownMobileRef.current);
    }
  }, []);

  const handleIn = useCallback(() => {
    if (window.innerWidth > +getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true)) {
      setRender(true);
      setShown(true);
      clearRenderTimeout();
    }
  }, [clearRenderTimeout, theme]);

  const handleOut = useCallback(() => {
    if (window.innerWidth > +getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true)) {
      setShown(false);
      setRenderTimeout();
    }
  }, [setRenderTimeout, theme]);

  const handleInMobile = useCallback(() => {
    if (window.innerWidth <= +getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true)) {
      setRender(true);
      setShownMobileTimeout();
      clearRenderTimeout();
    }
  }, [clearRenderTimeout, setShownMobileTimeout, theme]);

  const handleOutMobile = useCallback(() => {
    setShownMobile(false);
    setRenderTimeout();
  }, [setRenderTimeout]);

  useEffect(() => {
    return () => {
      clearRenderTimeout();
      clearShownMobileTimeout();
    };
  }, [clearRenderTimeout, clearShownMobileTimeout]);

  return (
    <React.Fragment>
      <StyledTooltipChildren
        onMouseEnter={handleIn}
        onMouseLeave={handleOut}
        onClick={handleInMobile}
        onFocus={handleIn}
        onBlur={handleOut}
        ref={container}
        aria-describedby={tooltipId}
        tabIndex={enabled && tabIndex}
      >
        {children}
      </StyledTooltipChildren>
      {enabled && render && (
        <Portal element="tooltips">
          <TooltipContent
            dataTest={dataTest}
            shownMobile={shownMobile}
            shown={shown}
            size={size}
            tooltipId={tooltipId}
            onClose={handleOut}
            onCloseMobile={handleOutMobile}
            onEnter={handleIn}
            preferredPosition={preferredPosition}
            containerRef={container}
          >
            {content}
          </TooltipContent>
        </Portal>
      )}
    </React.Fragment>
  );
};

export default Tooltip;
