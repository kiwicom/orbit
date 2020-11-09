// @flow
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import styled, { css } from "styled-components";

import { SIZE_OPTIONS } from "./consts";
import { StyledText } from "../../Text";
import Portal from "../../Portal";
import randomID from "../../utils/randomID";
import TooltipContent from "./components/TooltipContent";
import useStateWithTimeout from "../../hooks/useStateWithTimeout";

import type { Props } from "./index";

export const StyledTooltipChildren = styled.span`
  display: inline-flex;
  position: ${({ absolute }) => absolute && `absolute`};
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

const TooltipPrimitive = ({
  children,
  enabled = true,
  tooltipShown,
  tabIndex = "0",
  dataTest,
  size = SIZE_OPTIONS.SMALL,
  content,
  error,
  help,
  preferredPosition,
  preferredAlign,
  stopPropagation = false,
  removeUnderlinedText,
}: Props) => {
  const [shown, setShown] = useState(false);
  const [
    render,
    setRender,
    setRenderWithTimeout,
    clearRenderTimeout,
  ] = useStateWithTimeout<boolean>(false, 200);

  const tooltipId = useMemo(() => randomID("TooltipID"), []);
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

  const handleClick = useCallback(
    ev => {
      if (stopPropagation) {
        ev.stopPropagation();
      }
    },
    [stopPropagation],
  );

  useEffect(() => {
    if (tooltipShown) handleIn();
    else {
      handleOut();
    }
  }, [tooltipShown, handleIn, handleOut]);

  const handleOutMobile = useCallback(() => {
    setRenderWithTimeout(false);
  }, [setRenderWithTimeout]);

  if (!enabled) return children;

  return (
    <>
      <StyledTooltipChildren
        onMouseEnter={handleIn}
        onMouseLeave={handleOut}
        onClick={handleClick}
        onFocus={handleIn}
        onBlur={handleOut}
        absolute={tooltipShown}
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
            shown={shown}
            size={size}
            error={error}
            help={help}
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

export default TooltipPrimitive;
