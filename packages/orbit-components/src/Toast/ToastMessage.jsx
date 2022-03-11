// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mq from "../utils/mediaQuery";
import Stack from "../Stack";
import defaultTheme from "../defaultTheme";
import Text from "../Text";
import { fadeIn, fadeOut, lightAnimation, getPositionStyle, createRectRef } from "./helpers";
import useTheme from "../hooks/useTheme";
import useSwipe from "./hooks/useSwipe";
import mergeRefs from "../utils/mergeRefs";

import type { Toast as Props } from ".";

const StyledWrapper: any = styled(({ className, children, dataTest, ariaLive }) => (
  <div className={className} data-test={dataTest} aria-live={ariaLive} role="status">
    {children}
  </div>
))`
  ${({ theme, placement, offsetY, offsetX, opacity }) => css`
    z-index: ${theme.orbit.zIndexOnTheTop};
    will-change: transform;
    cursor: grab;
    opacity: ${opacity};
    transition: all ${theme.orbit.durationNormal} ease-in-out;
    transform: translate(${offsetX}px, ${offsetY}px);
    ${getPositionStyle(placement)};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledInnerWrapper = styled.div`
  ${({ theme, visible, duration, isPaused }) => css`
    position: relative;
    border-radius: ${theme.orbit.borderRadiusLarge};
    background: ${theme.orbit.paletteInkNormal};
    padding: ${theme.orbit.spaceXSmall};
    width: 100%;
    overflow: hidden;
    will-change: transform;
    pointer-events: ${visible ? "auto" : "none"};
    animation: ${visible ? fadeIn : fadeOut} ${theme.orbit.durationNormal} forwards;
    animation-play-state: ${isPaused ? "paused" : "running"};

    svg {
      min-height: 20px;
    }

    ${mq.largeMobile(css`
      max-width: 360px;
      padding: ${theme.orbit.spaceSmall};
    `)}
    }

    ${css`
      &:before {
        content: "";
        will-change: transform;
        position: absolute;
        border-radius: ${theme.orbit.borderRadiusLarge};
        top: 0;
        z-index: 1;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${theme.orbit.paletteWhite};
        opacity: 0.1;
        animation: ${lightAnimation} ${duration}ms linear;
        animation-play-state: ${isPaused ? "paused" : "running"};
      }
    `}
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledInnerWrapper.defaultProps = {
  theme: defaultTheme,
};

const ToastMessage = ({
  id,
  onUpdateHeight,
  onMouseEnter,
  onMouseLeave,
  visible,
  onDismiss,
  dismissTimeout,
  placement,
  icon,
  children,
  offset,
  ariaLive,
}: Props): React.Node => {
  const theme = useTheme();
  const measurerRef = React.useMemo(
    () => createRectRef(({ height }) => onUpdateHeight(id, height)),
    // it's safer to include children as well because if they change then we need to remeasure
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onUpdateHeight, id, children],
  );
  const innerRef = React.useRef(null);
  const mergedRef = React.useMemo(() => mergeRefs([measurerRef, innerRef]), [measurerRef]);
  const [isPaused, setPaused] = React.useState(false);
  const { swipeOffset, swipeOpacity } = useSwipe(
    innerRef,
    onDismiss,
    50,
    placement.match(/right|center/) ? "right" : "left",
  );

  return (
    <StyledWrapper
      ariaLive={ariaLive}
      opacity={swipeOpacity}
      visible={visible}
      offsetY={offset}
      offsetX={swipeOffset}
      placement={placement}
    >
      <StyledInnerWrapper
        visible={visible}
        ref={mergedRef}
        isPaused={isPaused}
        duration={dismissTimeout}
        onMouseEnter={() => {
          onMouseEnter();
          setPaused(true);
        }}
        onMouseLeave={() => {
          onMouseLeave();
          setPaused(false);
        }}
      >
        <Stack flex shrink spacing="XSmall">
          {icon &&
            React.isValidElement(icon) &&
            React.cloneElement(icon, { size: "small", customColor: theme.orbit.paletteWhite })}
          <Text type="white">{children}</Text>
        </Stack>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default ToastMessage;
