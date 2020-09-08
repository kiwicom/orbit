// @flow
import React, { useState, useRef, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";

import { SIZE_OPTIONS } from "./consts";
import { StyledText } from "../../Text";
import Portal from "../../Portal";
import RandomID from "../../utils/randomID";
import TooltipContent from "./components/TooltipContent";
import useStateWithTimeout from "../../hooks/useStateWithTimeout";
import useMediaQuery from "../../hooks/useMediaQuery";

import type { Props } from "./index";

const StyledTooltipChildren = styled.span`
  display: inline-flex;
  &:focus:active {
    outline: none;
  }
  ${({ enabled, removeUnderlinedText }) =>
    enabled &&
    !removeUnderlinedText &&
    css`
      ${StyledText} {
        display: inline-block;
        text-decoration: underline; // fallback for IE 10+
        text-decoration: underline currentColor dotted;
      }
    `};
  /* enable event bubbling for disabled children, e.g. buttons */
  [disabled] {
    pointer-events: none;
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
  preferredAlign,
  stopPropagation = false,
  removeUnderlinedText,
}: Props) => {
  const { isLargeMobile } = useMediaQuery();
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
  const [tooltipId, setTooltipId] = useState(null);
  const container = useRef(null);
  const handleIn = useCallback(() => {
    setRender(true);
    setShown(true);
    clearRenderTimeout();
  }, [clearRenderTimeout, setRender]);

  const handleOut = useCallback(() => {
    setShown(false);
    setRenderWithTimeout(false);
  }, [setRenderWithTimeout]);

  const handleInMobile = useCallback(
    ev => {
      if (stopPropagation) {
        ev.stopPropagation();
      }
      if (!isLargeMobile) {
        ev.preventDefault();
        setRender(true);
        setShownMobileWithTimeout(true);
        clearRenderTimeout();
      }
    },
    [clearRenderTimeout, setRender, setShownMobileWithTimeout, stopPropagation, isLargeMobile],
  );

  const handleOutMobile = useCallback(() => {
    setShownMobile(false);
    setRenderWithTimeout(false);
  }, [setRenderWithTimeout, setShownMobile]);

  useEffect(() => {
    setTooltipId(RandomID("tooltip"));
  }, []);

  if (!enabled) return children;

  return (
    <>
      <StyledTooltipChildren
        onMouseEnter={handleIn}
        onMouseLeave={handleOut}
        onClick={handleInMobile}
        onFocus={handleIn}
        onBlur={handleOut}
        ref={container}
        aria-describedby={enabled ? tooltipId : undefined}
        tabIndex={enabled ? tabIndex : undefined}
        enabled={enabled}
        removeUnderlinedText={removeUnderlinedText}
      >
        {children}
      </StyledTooltipChildren>
      {enabled && render && (
        <Portal renderInto="tooltips">
          <TooltipContent
            parent={children}
            dataTest={dataTest}
            shownMobile={shownMobile}
            shown={shown}
            size={size}
            tooltipId={tooltipId}
            onClose={handleOut}
            onCloseMobile={handleOutMobile}
            onEnter={handleIn}
            preferredPosition={preferredPosition}
            preferredAlign={preferredAlign}
            containerRef={container}
          >
            {content}
          </TooltipContent>
        </Portal>
      )}
    </>
  );
};

export default Tooltip;
