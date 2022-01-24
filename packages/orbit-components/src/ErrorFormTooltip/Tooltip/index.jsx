// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import { usePopper } from "react-popper";
import { useFloating, shift, flip, offset, arrow } from "@floating-ui/react-dom";
import { left } from "../../utils/rtl";
import useClickOutside from "../../hooks/useClickOutside";
import KEY_CODE_MAP from "../../common/keyMaps";
import handleKeyDown from "../../utils/handleKeyDown";
import defaultTheme from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import { StyledText } from "../../Text";
import { Item } from "../../List/ListItem";
import CloseIc from "../../icons/Close";
import { rtlSpacing, right } from "../../utils/rtl";
import resolveColor from "./helpers/resolveColor";
import resolvePlacement from "./helpers/resolvePlacement";
import { SIDE_NUDGE } from "./consts";
import useTheme from "../../hooks/useTheme";
import resolvePosition from "./helpers/resolvePosition";

import type { Props } from ".";

const StyledArrow = styled.div`
  ${({ position, top, left: floatingLeft }) => css`
    position: absolute;
    ${resolvePlacement};
    &:before {
      content: "";
      background: ${resolveColor};
      width: 8px;
      height: 8px;
      transform: translate(-50%, -50%) rotate(45deg);
      position: absolute;
    }
  `}
`;

const StyledFormFeedbackTooltip = styled.div`
  ${({ theme, isHelp, shown, inputSize, top, position, inlineLabel }) => css`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    border-radius: ${theme.orbit.borderRadiusNormal};
    box-shadow: ${theme.orbit.boxShadowElevatedLevel1};
    padding: ${theme.orbit.spaceXSmall} ${
    inputSize === "small" ? theme.orbit.spaceXSmall : theme.orbit.spaceSmall
  };
    padding-${right}: ${isHelp && theme.orbit.spaceSmall};
    z-index: 10;
    max-height: none;
    overflow: visible;
    width: min(${`calc(100% + ${SIDE_NUDGE * 2}px)`}, 100vw);
    background: ${resolveColor};
    visibility: ${shown ? "visible" : "hidden"};
    opacity: ${shown ? "1" : "0"};
    transition: opacity ${theme.orbit.durationFast} ease-in-out,
      visibility ${theme.orbit.durationFast} ease-in-out;

    position: ${position};
    top: ${top}px;
    ${left}: ${resolvePosition};

    img {
      max-width: 100%;
    }

    ${media.largeMobile(css`
      width: auto;
    `)};
`}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledArrow.defaultProps = {
  theme: defaultTheme,
};

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledFormFeedbackTooltip.defaultProps = {
  theme: defaultTheme,
};

const StyledTooltipContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 100%;
    font-family: ${theme.orbit.fontFamily};
    font-size: ${theme.orbit.fontSizeTextNormal};
    font-weight: ${theme.orbit.fontWeightNormal};
    line-height: ${theme.orbit.lineHeightText};
    color: ${theme.orbit.paletteWhite};

    & ${StyledText}, ${Item}, a {
      color: ${theme.orbit.paletteWhite};
      font-size: ${theme.orbit.fontSizeTextNormal};
      font-weight: ${theme.orbit.fontWeightNormal};
      &:hover,
      &:focus {
        color: ${theme.orbit.paletteWhite};
      }
    }

    ${media.largeMobile(css`
      font-size: ${theme.orbit.fontSizeTextSmall};
      font-weight: ${theme.orbit.fontWeightMedium};

      ${StyledText}, ${Item}, a {
        font-weight: ${theme.orbit.fontWeightMedium};
        font-size: ${theme.orbit.fontSizeTextSmall};
      }
    `)};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTooltipContent.defaultProps = {
  theme: defaultTheme,
};

const StyledCloseButton = styled.a`
  ${({ theme }) => css`
    color: ${theme.orbit.paletteWhite};
    cursor: pointer;
    margin: ${rtlSpacing(`0 0 0 ${theme.orbit.spaceSmall}`)};
    display: flex;
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCloseButton.defaultProps = {
  theme: defaultTheme,
};

const ErrorFormTooltip = ({
  onShown,
  dataTest,
  helpClosable,
  inputSize,
  children,
  shown,
  referenceElement,
  inlineLabel,
  isHelp,
  id,
}: Props): React.Node => {
  const contentRef = React.useRef(null);
  const arrowRef = React.useRef(null);
  const { rtl } = useTheme();

  const { x, y, reference, floating, strategy, middlewareData, refs } = useFloating({
    placement: "top-start",
    middleware: [shift(), flip(), offset(3)],
  });

  const isTOP = y > 0;

  React.useEffect(() => {
    if (referenceElement) reference(referenceElement.current);
  }, [referenceElement]);

  useClickOutside(refs.floating, () => {
    onShown(false);
  });

  React.useEffect(() => {
    const link = refs.floating.current?.querySelector("a");
    const handleTab = ev => {
      if (isHelp) return;
      if (ev.keyCode === KEY_CODE_MAP.TAB && link) {
        onShown(true);
        if (document.activeElement === link) {
          onShown(false);
        }
      } else {
        onShown(false);
      }
    };

    window.addEventListener("keydown", handleTab);
    return () => {
      window.removeEventListener("keydown", handleTab);
    };
  }, [onShown, isHelp, helpClosable]);

  return (
    <StyledFormFeedbackTooltip
      id={id}
      ref={floating}
      inputSize={inputSize}
      shown={shown}
      isHelp={isHelp}
      data-test={dataTest}
      inlineLabel={inlineLabel}
      aria-live="polite"
      position={strategy}
      top={y}
      left={x}
    >
      <StyledArrow isHelp={isHelp} isTop={isTOP} inlineLabel={inlineLabel} inputSize={inputSize} />
      <StyledTooltipContent ref={contentRef}>{children}</StyledTooltipContent>
      {isHelp && helpClosable && (
        <StyledCloseButton
          tabIndex={0}
          // $FlowFixMe: TODO
          onKeyDown={handleKeyDown(onShown)}
          onClick={ev => {
            ev.preventDefault();
            if (shown) onShown(false);
          }}
        >
          <CloseIc ariaLabel="close" size="small" />
        </StyledCloseButton>
      )}
    </StyledFormFeedbackTooltip>
  );
};

export default ErrorFormTooltip;
