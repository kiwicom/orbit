// @flow
import React, { useState, useRef, useMemo, useCallback } from "react";
import styled, { css } from "styled-components";

import { getBreakpointWidth } from "../utils/mediaQuery";
import { SIZE_OPTIONS } from "./consts";
import { StyledText } from "../Text";
import Portal from "../Portal";
import RandomID from "../utils/randomID";
import { QUERIES } from "../utils/mediaQuery/consts";
import useTheme from "../hooks/useTheme";
import TooltipContent from "./components/TooltipContent";
import useStateWithTimeout from "../hooks/useStateWithTimeout";

import type { Props } from "./index";

const StyledTooltipChildren = styled.span`
  display: inline-block;
  &:focus:active {
    outline: none;
  }
  ${({ enabled }) =>
    enabled &&
    css`
      ${StyledText} {
        display: inline-block;
        text-decoration: underline; // fallback for IE 10+
        text-decoration: underline currentColor dotted;
      }
    `};
`;

const Tooltip = ({
  children,
  enabled = true,
  tabIndex = "0",
  dataTest,
  size = SIZE_OPTIONS.SMALL,
  content,
  preferredPosition,
  stopPropagation = false,
}: Props) => {
  const theme = useTheme();
  const [shown, setShown] = useState(false);
  const [
    render,
    setRender,
    setRenderWithTimeout,
    clearRenderTimeout,
  ] = useStateWithTimeout<boolean>(false, 200);
  const [shownMobile, setShownMobile, setShownMobileWithTimeout] = useStateWithTimeout<boolean>(
    false,
    200,
  );
  const tooltipId = useMemo(() => RandomID("tooltip"), []);
  const container = useRef(null);
  const handleIn = useCallback(() => {
    if (window.innerWidth > +getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true)) {
      setRender(true);
      setShown(true);
      clearRenderTimeout();
    }
  }, [clearRenderTimeout, setRender, theme]);

  const handleOut = useCallback(() => {
    if (window.innerWidth > +getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true)) {
      setShown(false);
      setRenderWithTimeout(false);
    }
  }, [setRenderWithTimeout, theme]);

  const handleInMobile = useCallback(
    ev => {
      if (stopPropagation) {
        ev.stopPropagation();
      }
      if (window.innerWidth <= +getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true)) {
        setRender(true);
        setShownMobileWithTimeout(true);
        clearRenderTimeout();
      }
    },
    [clearRenderTimeout, setRender, setShownMobileWithTimeout, stopPropagation, theme],
  );

  const handleOutMobile = useCallback(() => {
    setShownMobile(false);
    setRenderWithTimeout(false);
  }, [setRenderWithTimeout, setShownMobile]);
  return (
    <React.Fragment>
      <StyledTooltipChildren
        onMouseEnter={handleIn}
        onMouseLeave={handleOut}
        onClick={handleInMobile}
        onFocus={handleIn}
        onBlur={handleOut}
        ref={container}
        aria-describedby={enabled ? tooltipId : undefined}
        tabIndex={enabled && tabIndex}
        enabled={enabled}
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
