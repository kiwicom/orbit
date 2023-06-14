import * as React from "react";
import styled, { css } from "styled-components";

import Stack from "../Stack";
import mergeRefs from "../utils/mergeRefs";
import defaultTheme from "../defaultTheme";
import useTheme from "../hooks/useTheme";
import useScrollBox from "./useScroll";
import ChevronBackward from "../icons/ChevronBackward";
import ChevronForward from "../icons/ChevronForward";
import type { Props, ScrollSnap } from "./types";

const TRIGGER_OFFSET = 20;

const shadowMixin = css`
  content: "";
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
`;

const StyledButton = styled.button<{ isHidden?: boolean }>`
  ${({ isHidden }) => css`
    display: flex;
    cursor: pointer;
    align-items: center;
    background: transparent;
    border: 0;
    z-index: 10;
    height: 100%;
    visibility: ${isHidden ? "hidden" : "visible"};
  `}
`;

const StyledWrapper = styled.div<{
  isDragging: boolean;
  $minHeight: Props["minHeight"];
  elevationColor?: Props["elevationColor"];
  overflowElevation?: Props["overflowElevation"];
  isStart: boolean;
  isEnd: boolean;
  isOverflowing: boolean;
}>`
  ${({
    isDragging,
    $minHeight,
    elevationColor,
    overflowElevation,
    isStart,
    theme,
    isOverflowing,
    isEnd,
  }) => css`
    position: relative;
    width: 100%;
    display: inline-flex;
    align-items: center;
    min-height: ${$minHeight && `${$minHeight}px`};
    cursor: ${isOverflowing && (isDragging ? "grabbing" : "grab")};
    overflow: hidden;
    ${isOverflowing &&
    overflowElevation &&
    !isStart &&
    css`
      &:before {
        ${shadowMixin};
        left: 0;
        box-shadow: 5px 0px 20px 20px ${elevationColor};
      }
    `}
    ${isOverflowing &&
    !isEnd &&
    overflowElevation &&
    css`
      &:after {
        ${shadowMixin};
        right: 0;
        box-shadow: -5px 0px 20px 20px ${elevationColor};
      }
    `}

    ${StyledButton} {
      position: absolute;

      &:first-child {
        left: ${theme.orbit.spaceXXSmall};
      }

      &:nth-child(2) {
        right: ${theme.orbit.spaceXXSmall};
      }
    }
  `};
`;

StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const getSnap = ({ $scrollSnap }: { $scrollSnap: ScrollSnap }) => {
  if ($scrollSnap === "mandatory") return "x mandatory";
  if ($scrollSnap === "proximity") return "x proximity";

  return $scrollSnap;
};

const StyledOverflow = styled.div<{
  isDragging?: boolean;
  scrollPadding?: number;
  $scrollSnap: ScrollSnap;
}>`
  ${({ isDragging, scrollPadding }) => css`
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: ${isDragging ? "none" : getSnap};
    scroll-padding: ${scrollPadding && `${scrollPadding}px`};
    box-sizing: border-box;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  `};
`;

const StyledContainer = styled.div<{ isDragging?: boolean }>`
  ${({ isDragging }) => css`
    height: 100%;
    position: relative;
    width: 100%;
    display: inline-flex;
    pointer-events: ${isDragging && "none"};
  `};
`;

const HorizontalScroll = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      spacing = "small",
      arrows,
      scrollSnap = "none",
      onOverflow,
      elevationColor = "paletteCloudDark",
      arrowColor,
      overflowElevation,
      scrollPadding,
      dataTest,
      id,
      minHeight,
      ...props
    },
    ref,
  ) => {
    const scrollWrapperRef = React.useRef<HTMLDivElement>(null);
    const [isOverflowing, setOverflowing] = React.useState(false);
    const [reachedStart, setReachedStart] = React.useState(true);
    const [reachedEnd, setReachedEnd] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { isDragging } = useScrollBox(scrollWrapperRef);
    const theme = useTheme();
    const scrollEl = scrollWrapperRef.current;

    const handleOverflow = React.useCallback(() => {
      if (scrollWrapperRef.current?.scrollWidth && containerRef.current?.offsetWidth) {
        const { scrollWidth: containerScrollWidth } = scrollWrapperRef.current;
        const { offsetWidth } = containerRef.current;

        if (containerScrollWidth > offsetWidth) {
          setOverflowing(true);
          if (onOverflow) onOverflow();
        } else {
          setOverflowing(false);
        }
      }
    }, [onOverflow]);

    const handleClick = (direction: "left" | "right") => {
      if (scrollEl) {
        const { scrollLeft, offsetWidth } = scrollEl;
        const scrollAmount =
          scrollLeft + (direction === "left" ? -offsetWidth / 2 : offsetWidth / 2);
        scrollEl.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    };

    const handleScroll = React.useCallback(() => {
      if (scrollEl) {
        const scrollWidth = scrollEl.scrollWidth - scrollEl.clientWidth;
        const { scrollLeft } = scrollEl;
        if (scrollLeft - TRIGGER_OFFSET <= 0) {
          setReachedStart(true);
        } else {
          setReachedStart(false);
        }

        if (scrollLeft + TRIGGER_OFFSET >= scrollWidth) {
          setReachedEnd(true);
        } else {
          setReachedEnd(false);
        }
      }
    }, [scrollEl]);

    const handleResize = React.useCallback(() => {
      handleOverflow();
      handleScroll();
    }, [handleOverflow, handleScroll]);

    React.useEffect(() => {
      handleOverflow();

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [handleOverflow, handleResize]);

    return (
      <StyledWrapper
        {...props}
        $minHeight={minHeight}
        overflowElevation={overflowElevation}
        data-test={dataTest}
        id={id}
        isDragging={isDragging}
        isEnd={reachedEnd}
        isStart={reachedStart}
        isOverflowing={isOverflowing}
        ref={mergeRefs<HTMLDivElement>([ref, containerRef])}
        elevationColor={theme.orbit[elevationColor]}
      >
        {arrows && (
          <>
            <StyledButton
              tabIndex={0}
              type="button"
              isHidden={reachedStart || !isOverflowing}
              onClick={() => handleClick("left")}
            >
              <ChevronBackward customColor={arrowColor} />
            </StyledButton>
            <StyledButton
              tabIndex={0}
              type="button"
              isHidden={reachedEnd || !isOverflowing}
              onClick={() => handleClick("right")}
            >
              <ChevronForward customColor={arrowColor} />
            </StyledButton>
          </>
        )}

        <StyledOverflow
          $scrollSnap={scrollSnap}
          scrollPadding={scrollPadding}
          isDragging={isDragging}
          onScroll={handleScroll}
          ref={scrollWrapperRef}
        >
          <StyledContainer isDragging={isDragging}>
            <Stack inline spacing={spacing}>
              {children}
            </Stack>
          </StyledContainer>
        </StyledOverflow>
      </StyledWrapper>
    );
  },
);

export default HorizontalScroll;
