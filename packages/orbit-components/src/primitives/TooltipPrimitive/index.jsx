// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { SIZE_OPTIONS } from "./consts";
import { StyledText } from "../../Text";
import Portal from "../../Portal";
import useRandomId from "../../hooks/useRandomId";
import TooltipContent from "./components/TooltipContent";
import useStateWithTimeout from "../../hooks/useStateWithTimeout";

import type { Props } from ".";

export const StyledTooltipChildren: any = styled.span`
  ${({ block, enabled, removeUnderlinedText }) => css`
    display: ${block ? "flex" : "inline-flex"};
    max-width: 100%;
    &:focus:active {
      outline: none;
    }
    ${enabled &&
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
  `}
`;

const TooltipPrimitive = ({
  children,
  enabled = true,
  tooltipShown,
  tabIndex = "0",
  onShow,
  dataTest,
  id,
  renderInPortal = true,
  size = SIZE_OPTIONS.SMALL,
  content,
  error,
  help,
  stopPropagation = false,
  removeUnderlinedText,
  block = false,
  ...popper
}: Props): void | React.Node => {
  const [shown, setShown] = React.useState(false);
  const [referenceElement, setReferenceElement] = React.useState(null);

  const [
    render,
    setRender,
    setRenderWithTimeout,
    clearRenderTimeout,
  ] = useStateWithTimeout<boolean>(false, 200);

  const tooltipId = useRandomId();

  const handleIn = React.useCallback(() => {
    setRender(true);
    setShown(true);
    if (onShow) onShow();
    clearRenderTimeout();
  }, [clearRenderTimeout, setRender, onShow]);

  const handleOut = React.useCallback(() => {
    setShown(false);
    setRenderWithTimeout(false);
  }, [setRenderWithTimeout]);

  const handleClick = React.useCallback(
    ev => {
      if (stopPropagation) {
        ev.stopPropagation();
      }
    },
    [stopPropagation],
  );

  React.useEffect(() => {
    if (tooltipShown) {
      handleIn();
    } else {
      handleOut();
    }
  }, [tooltipShown, handleIn, handleOut]);

  const handleOutMobile = React.useCallback(() => {
    setRenderWithTimeout(false);
  }, [setRenderWithTimeout]);

  if (!enabled) return children;

  const tooltip = (
    <TooltipContent
      parent={children}
      dataTest={dataTest}
      id={id}
      shown={shown}
      size={size}
      error={error}
      help={help}
      tooltipId={id || tooltipId}
      onClose={handleOut}
      onCloseMobile={handleOutMobile}
      onEnter={handleIn}
      {...popper}
      referenceElement={referenceElement}
    >
      {content}
    </TooltipContent>
  );

  return (
    <>
      <StyledTooltipChildren
        as={block ? "div" : "span"}
        onMouseEnter={handleIn}
        onMouseLeave={handleOut}
        onClick={handleClick}
        onFocus={handleIn}
        onBlur={handleOut}
        ref={setReferenceElement}
        aria-describedby={enabled ? id || tooltipId : undefined}
        tabIndex={enabled ? tabIndex : undefined}
        enabled={enabled}
        removeUnderlinedText={removeUnderlinedText}
        block={block}
      >
        {children}
      </StyledTooltipChildren>
      {enabled &&
        render &&
        (renderInPortal ? <Portal renderInto="tooltips">{tooltip}</Portal> : tooltip)}
    </>
  );
};

export default TooltipPrimitive;
