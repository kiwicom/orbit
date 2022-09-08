import * as React from "react";
import styled, { css } from "styled-components";

import Stack from "../Stack";
import mergeRefs from "../utils/mergeRefs";
import defaultTheme from "../defaultTheme";
import useTheme from "../hooks/useTheme";
import useScrollBox from "./useScroll";
import { Props, ScrollSnap } from "./types";

const shadowMixin = css`
  content: "";
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
`;

const StyledWrapper = styled.div<{
  isDragging?: boolean;
  $minHeight?: number;
  elevationColor?: string;
  overflowElevation?: boolean;
  isStart?: boolean;
  isEnd?: boolean;
  isOverflowing?: boolean;
}>`
  ${({
    isDragging,
    $minHeight,
    elevationColor,
    overflowElevation,
    isStart,
    isOverflowing,
    isEnd,
  }) => css`
    position: relative;
    width: 100%;
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
  `}
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
  `}
`;

const StyledContainer = styled.div<{ isDragging?: boolean }>`
  ${({ isDragging }) => css`
    height: 100%;
    width: 100%;
    display: inline-flex;
    pointer-events: ${isDragging && "none"};
  `}
`;

const HorizontalScroll = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      spacing = "small",
      scrollSnap = "none",
      onOverflow,
      elevationColor = "paletteCloudDark",
      overflowElevation,
      scrollPadding,
      dataTest,
      id,
      minHeight,
      ...props
    },
    ref,
  ) => {
    const scrollWrapperRef = React.useRef<HTMLDivElement | null>(null);
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const [isOverflowing, setOverflowing] = React.useState(false);
    const { isDragging, reachedStart, reachedEnd } = useScrollBox(scrollWrapperRef);
    const theme = useTheme();

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

    React.useEffect(() => {
      handleOverflow();
      window.addEventListener("resize", handleOverflow);
      return () => window.addEventListener("resize", handleOverflow);
    }, [handleOverflow]);

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
        <StyledOverflow
          $scrollSnap={scrollSnap}
          scrollPadding={scrollPadding}
          isDragging={isDragging}
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
