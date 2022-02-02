// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import useTheme from "../hooks/useTheme";
import defaultTheme from "../defaultTheme";
import useScrollBox from "./useScroll";
import Stack from "../Stack";

import type { Props, ScrollSnap } from ".";

const shadowMixin = css`
  content: "";
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
`;

const StyledWrapper = styled.div`
  ${({ isDragging, $minHeight, direction, elevationColor, overflowElevation }) => css`
    position: relative;
    width: 100%;
    min-height: ${$minHeight && `${$minHeight}px`};
    cursor: ${isDragging ? "grabbing" : "grab"};
    overflow: hidden;
    ${overflowElevation &&
    (direction < 0
      ? css`
          &:before {
            ${shadowMixin};
            left: 0;
            box-shadow: 5px 0px 20px 20px ${elevationColor};
          }
        `
      : css`
          &:after {
            ${shadowMixin};
            right: 0;
            box-shadow: -5px 0px 20px 20px ${elevationColor};
          }
        `)}
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const getSnap = ({ $scrollSnap }: {| $scrollSnap: ScrollSnap |}) => {
  if ($scrollSnap === "mandatory") return "x mandatory";
  if ($scrollSnap === "proximity") return "x proximity";

  return $scrollSnap;
};

const StyledOverflow = styled.div`
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

const StyledContainer = styled.div`
  ${({ isDragging }) => css`
    height: 100%;
    width: 100%;
    display: inline-flex;
    pointer-events: ${isDragging && "none"};
  `}
`;

const HorizontalScroll: React.AbstractComponent<Props, HTMLDivElement> = React.forwardRef(
  (
    {
      children,
      spacing = "small",
      scrollSnap = "none",
      elevationColor = "paletteCloudDark",
      overflowElevation,
      scrollPadding,
      dataTest,
      minHeight,
      ...props
    },
    ref,
  ): React.Node => {
    const scrollWrapper = React.useRef(null);
    const { isDragging, direction } = useScrollBox(scrollWrapper);
    const theme = useTheme();

    return (
      <StyledWrapper
        {...props}
        ref={ref}
        isDragging={isDragging}
        $minHeight={minHeight}
        overflowElevation={overflowElevation}
        data-test={dataTest}
        elevationColor={theme.orbit[elevationColor]}
        direction={direction}
      >
        <StyledOverflow
          ref={scrollWrapper}
          $scrollSnap={scrollSnap}
          scrollPadding={scrollPadding}
          isDragging={isDragging}
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
