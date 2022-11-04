// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import { usePopper } from "react-popper";

import { PLACEMENTS } from "../../../common/consts";
import tooltipSize from "../helpers/tooltipSize";
import { StyledText } from "../../../Text";
import { Item } from "../../../List/ListItem";
import resolveBackgroundColor from "../helpers/resolveBackgroundColor";
import { resolveArrowStyle, resolveArrowPlacement } from "../helpers/resolveArrow";
import tooltipPadding from "../helpers/tooltipPadding";
import defaultTheme from "../../../defaultTheme";
import { StyledTextLink } from "../../../TextLink";
import transition from "../../../utils/transition";
import FOCUSABLE_ELEMENT_SELECTORS from "../../../hooks/useFocusTrap/consts";
import type { Props } from "./TooltipContent";

const StyledTooltip = styled.div`
  width: 100%;
`;

const StyledTooltipArrow = styled.div`
  ${({ transform, position }) => css`
    position: ${position};
    transform: ${transform};
    ${resolveArrowPlacement};
    &:after {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      ${resolveArrowStyle};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTooltipArrow.defaultProps = {
  theme: defaultTheme,
};

// TODO: add token for z-index
const StyledTooltipWrapper = styled.div`
  ${({ theme, shown, popper }) => css`
    display: block;
    ${popper};
    width: auto;
    max-width: ${tooltipSize};
    box-sizing: border-box;
    padding: ${tooltipPadding};
    border-radius: ${theme.orbit.borderRadiusNormal};
    background: ${resolveBackgroundColor};
    box-shadow: ${theme.orbit.boxShadowRaised};
    visibility: ${shown ? "visible" : "hidden"};
    opacity: ${shown ? "1" : "0"};
    transition: ${transition(["opacity", "visibility"], "fast", "ease-in-out")};
    z-index: 10012;
    overflow-y: scroll;
    overflow: visible;

    img {
      max-width: 100%;
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTooltipWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledTooltipContent = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.orbit.fontFamily};
    font-size: ${theme.orbit.fontSizeTextSmall};
    font-weight: ${theme.orbit.fontWeightMedium};
    line-height: ${theme.orbit.lineHeightTextNormal};
    color: ${theme.orbit.paletteWhite};
    margin-bottom: 0;

    & ${StyledText}, ${Item} {
      font-size: ${theme.orbit.fontSizeTextSmall};
      font-weight: ${theme.orbit.fontWeightMedium};
      color: ${theme.orbit.paletteWhite};
    }

    & ${StyledTextLink} {
      color: ${theme.orbit.paletteWhite};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTooltipContent.defaultProps = {
  theme: defaultTheme,
};

const TooltipContent = ({
  dataTest,
  shown,
  size,
  tooltipId,
  error,
  help,
  children,
  onClick,
  onClose,
  onCloseMobile,
  onEnter,
  placement = PLACEMENTS.AUTO,
  noFlip,
  offset = [0, 5],
  referenceElement,
}: Props): React.Node => {
  const [tooltip, setTooltipRef] = React.useState(null);
  const [arrowRef, setArrowRef] = React.useState(null);
  const [contentHeight, setContentHeight] = React.useState(0);
  const content = React.useRef<HTMLDivElement | null>(null);

  const { styles, attributes: attrs, update } = usePopper(referenceElement, tooltip, {
    placement,
    modifiers: [
      {
        name: "arrow",
        options: {
          element: arrowRef,
        },
      },
      {
        name: "offset",
        options: {
          offset,
        },
      },
      {
        name: "flip",
        enabled: !noFlip,
      },
    ],
  });

  React.useEffect(() => {
    if (update) update();
    if (content.current) setContentHeight(content.current.clientHeight);
  }, [update, setContentHeight]);

  const { popper, arrow } = styles;

  const handleInnerClick = React.useCallback(
    ev => {
      if (tooltip) {
        const focusableElements = tooltip.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS);
        if (Object.values(focusableElements).some(v => v === ev.target)) {
          onClose();
          onCloseMobile();
        }
      }
    },
    [onClose, onCloseMobile, tooltip],
  );

  return (
    <StyledTooltip role="tooltip" id={tooltipId} data-test={dataTest} onClick={onClick}>
      <StyledTooltipWrapper
        shown={shown}
        size={size}
        ref={setTooltipRef}
        error={error}
        help={help}
        role="tooltip"
        aria-hidden={!shown}
        onMouseEnter={onEnter}
        onMouseLeave={onClose}
        contentHeight={contentHeight}
        onClick={handleInnerClick}
        popper={{ ...popper }}
      >
        <StyledTooltipContent ref={content}>{children}</StyledTooltipContent>
        <StyledTooltipArrow
          ref={setArrowRef}
          position={arrow.position}
          transform={arrow.transform}
          contentHeight={contentHeight}
          placement={attrs.popper && attrs.popper["data-popper-placement"]}
        />
      </StyledTooltipWrapper>
    </StyledTooltip>
  );
};

export default TooltipContent;
