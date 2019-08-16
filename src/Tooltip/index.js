// @flow
import React, { useState, useRef, useMemo, useEffect } from "react";
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
  const timeoutRef = useRef(null);

  const handleIn = () => {
    setRender(true);
    setShown(true);
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleOut = () => {
    setShown(false);
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      setRender(false);
    }, 200);
  };

  const handleInMobile = () => {
    if (window.innerWidth <= +getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true)) {
      setRender(true);
      setShownMobile(true);
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    }
  };

  const handleOutMobile = () => {
    setShownMobile(false);
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      setRender(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return (
    <React.Fragment>
      <StyledTooltipChildren
        onMouseEnter={handleIn}
        onMouseLeave={handleOut}
        onClick={handleInMobile}
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
