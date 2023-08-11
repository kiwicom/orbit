import * as React from "react";
import styled, { css } from "styled-components";
import { usePopper } from "react-popper";

import useClickOutside from "../../hooks/useClickOutside";
import KEY_CODE_MAP from "../../common/keyMaps";
import handleKeyDown from "../../utils/handleKeyDown";
import defaultTheme from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import { StyledText } from "../../Text";
import CloseIc from "../../icons/Close";
import { rtlSpacing, right } from "../../utils/rtl";
import resolveColor from "./helpers/resolveColor";
import resolvePlacement from "./helpers/resolvePlacement";
import { SIDE_NUDGE } from "./consts";
import useTheme from "../../hooks/useTheme";
import type { Props } from "./types";
import useMediaQuery from "../../hooks/useMediaQuery";

const StyledArrow = styled.div<{
  inlineLabel?: boolean;
  isHelp?: boolean;
  placement?: string;
}>`
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
`;

const StyledFormFeedbackTooltip = styled.div<{
  isHelp?: boolean;
  shown?: boolean;
  inlineLabel?: boolean;
  placement?: string;
  top?: string | number;
  left?: string | number;
  position?: string | number;
  bottom?: string | number;
  right?: string | number;
  transform?: string;
}>`
  ${({ theme, isHelp, shown, top, left, position, bottom, right: popperRight, transform }) => css`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    border-radius: ${theme.orbit.borderRadiusLarge};
    padding: ${theme.orbit.spaceXSmall} ${theme.orbit.spaceSmall};
    padding-${right}: ${isHelp && theme.orbit.spaceSmall};
    z-index: 10;
    max-height: none;
    overflow: visible;
    width: min(${`calc(100% - ${SIDE_NUDGE * 2}px)`}, 100vw);
    background: ${resolveColor};
    visibility: ${shown ? "visible" : "hidden"};
    opacity: ${shown ? "1" : "0"};
    transition: opacity ${theme.orbit.durationFast} ease-in-out,
    visibility ${theme.orbit.durationFast} ease-in-out;
    position: ${position};
    top: ${top};
    left: ${left};
    bottom: ${bottom};
    right: ${popperRight};
    transform: ${transform};

    img {
      max-width: 100%;
    }

    ${media.largeMobile(css`
      width: auto;
    `)};

    ${media.tablet(css`
      border-radius: ${theme.orbit.borderRadiusNormal};
    `)}
  `}
`;

StyledArrow.defaultProps = {
  theme: defaultTheme,
};

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
    line-height: ${theme.orbit.lineHeightTextSmall};
    color: ${theme.orbit.paletteWhite};

    & ${StyledText}, .orbit-list-item,
    a {
      color: ${theme.orbit.paletteWhite};
      font-size: ${theme.orbit.fontSizeTextNormal};
      font-weight: ${theme.orbit.fontWeightNormal};

      &:hover,
      &:focus {
        color: ${theme.orbit.paletteWhite};
      }
    }
  `}
`;

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

StyledCloseButton.defaultProps = {
  theme: defaultTheme,
};

const ErrorFormTooltip = ({
  onShown,
  dataTest,
  helpClosable,
  children,
  shown,
  referenceElement,
  inlineLabel,
  isHelp = false,
  id,
}: Props) => {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const tooltipRef = React.useRef<HTMLDivElement | null>(null);
  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null);
  const { rtl } = useTheme();
  const { isDesktop } = useMediaQuery();

  const {
    styles,
    attributes: attrs,
    update,
  } = usePopper(referenceElement?.current, tooltipRef.current, {
    placement: rtl ? "top-end" : "top-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [inlineLabel || isDesktop ? 0 : 4, 3],
        },
      },
      {
        name: "flip",
        enabled: false,
      },
      {
        name: "arrow",
        options: {
          element: arrowRef,
        },
      },
      {
        name: "eventListeners",
        options: {
          scroll: false,
        },
      },
    ],
  });

  const { popper } = styles;

  useClickOutside(tooltipRef, () => {
    onShown(false);
  });

  React.useEffect(() => {
    if (update) update();
  }, [update, shown]);

  React.useEffect(() => {
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
  }, [onShown, isHelp, helpClosable]);

  return (
    <StyledFormFeedbackTooltip
      id={id}
      ref={tooltipRef}
      shown={shown}
      isHelp={isHelp}
      data-test={dataTest}
      aria-live="polite"
      inlineLabel={inlineLabel}
      placement={attrs.popper && attrs.popper["data-popper-placement"]}
      position={popper.position}
      top={popper.top}
      left={popper.left}
      right={popper.right}
      bottom={popper.bottom}
      transform={popper.transform}
    >
      <StyledArrow
        isHelp={isHelp}
        ref={setArrowRef}
        inlineLabel={inlineLabel}
        placement={attrs.popper && attrs.popper["data-popper-placement"]}
      />
      <StyledTooltipContent ref={contentRef}>{children}</StyledTooltipContent>
      {isHelp && helpClosable && (
        <StyledCloseButton
          tabIndex={0}
          // @ts-expect-error TODO
          onKeyDown={handleKeyDown<HTMLAnchorElement>(onShown)}
          onClick={ev => {
            ev.preventDefault();
            if (shown) onShown(false);
          }}
        >
          <CloseIc ariaLabel="close" />
        </StyledCloseButton>
      )}
    </StyledFormFeedbackTooltip>
  );
};

export default ErrorFormTooltip;
