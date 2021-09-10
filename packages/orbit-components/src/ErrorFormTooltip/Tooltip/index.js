// @flow
import * as React from "react";
import styled, { css } from "styled-components";

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
import tooltipArrowStyle from "./helpers/tooltipArrowStyle";
import resolveTooltipArrowPosition from "./helpers/resolveTooltipArrowPosition";
import resolveTooltipPosition from "./helpers/resolveTooltipPosition";
import useDimensions from "../hooks/useDimensions";
import { POSITIONS, SIDE_NUDGE } from "./consts";

import type { Props } from ".";

const StyledFormFeedbackTooltip = styled.div`
  ${({ theme, isHelp, shown, inputSize }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    border-radius: ${theme.orbit.borderRadiusNormal};
    box-shadow: ${theme.orbit.boxShadowElevatedLevel1};
    padding: ${inputSize === "small" ? theme.orbit.spaceXSmall : theme.orbit.spaceSmall};
    padding-${right}: ${isHelp && theme.orbit.spaceSmall};
    z-index: 10;
    max-height: none;
    overflow: visible;
    width: ${`calc(100% + ${SIDE_NUDGE * 2}px)`};
    background-color: ${resolveColor};
    visibility: ${shown ? "visible" : "hidden"};
    opacity: ${shown ? "1" : "0"};
    transition: opacity ${theme.orbit.durationFast} ease-in-out,
      visibility ${theme.orbit.durationFast} ease-in-out;

    /* prevent position, IEs don't have initial YAY */
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;

    img {
      max-width: 100%;
    }

    &::after {
      width: 0;
      height: 0;
      border-style: solid;
      content: " ";
      display: block;
      position: absolute;

      ${tooltipArrowStyle};
      ${resolveTooltipArrowPosition};
    }

    ${media.largeMobile(css`
      width: auto;
    `)};

    ${resolveTooltipPosition};
`}
`;

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
      font-weight: ${theme.orbit.fontWeightNormal};
    }

    ${media.largeMobile(css`
      font-size: ${theme.orbit.fontSizeTextSmall};
      font-weight: ${theme.orbit.fontWeightMedium};

      ${StyledText}, ${Item}, a {
        font-weight: ${theme.orbit.fontWeightMedium};
        font-size: ${theme.orbit.fontSizeTextSmall};
      }
      a:hover {
        color: ${theme.orbit.paletteWhite};
      }
      a:focus {
        color: ${theme.orbit.paletteWhite};
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
  labelRef,
  dataTest,
  inputSize,
  iconRef,
  children,
  shown,
  isHelp = false,
  inlineLabel,
  id,
}: Props): React.Node => {
  const contentRef = React.useRef(null);
  const tooltipRef = React.useRef<HTMLElement | null>(null);

  const dimensions = useDimensions({
    labelRef,
    iconRef,
    contentRef: tooltipRef,
    children,
    inlineLabel,
  });

  const preferredPosition = React.useMemo(
    () => (dimensions.label.top - dimensions.content.height > 0 ? POSITIONS.TOP : POSITIONS.BOTTOM),
    [dimensions.label.top, dimensions.content.height],
  );

  useClickOutside(contentRef, () => {
    if (!isHelp) onShown(false);
  });

  React.useEffect(() => {
    // $FlowFixMe: TODO
    const link = tooltipRef.current?.querySelector("a");

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
  }, [onShown, isHelp]);

  return (
    <StyledFormFeedbackTooltip
      ref={tooltipRef}
      inputSize={inputSize}
      position={preferredPosition}
      shown={shown && dimensions.set}
      isHelp={isHelp}
      data-test={dataTest}
      inlineLabel={inlineLabel}
      aria-live="polite"
      id={id}
      {...dimensions}
    >
      <StyledTooltipContent ref={contentRef}>{children}</StyledTooltipContent>
      {isHelp && (
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
