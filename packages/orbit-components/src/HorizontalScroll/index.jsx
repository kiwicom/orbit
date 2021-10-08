// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import useScrollBox from "./useScroll";
import Stack from "../Stack";

import type { Props, ScrollSnap } from ".";

const StyledWrapper = styled.div`
  ${({ isDragging, minHeight }) => css`
    position: relative;
    width: 100%;
    min-height: ${minHeight}px;
    cursor: ${isDragging ? "grabbing" : "grab"};
    overflow: hidden;
  `}
`;

const getSnap = ({ scrollSnap }: {| scrollSnap: ScrollSnap |}) => {
  if (scrollSnap === "mandatory") return "x mandatory";
  if (scrollSnap === "proximity") return "x proximity";

  return scrollSnap;
};

const StyledOverflow = styled.div`
  ${({ isDragging, scrollPadding }) => css`
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
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
    display: inline-flex;
    pointer-events: ${isDragging && "none"};
  `}
`;

const HorizontalScroll = ({
  children,
  spacing = "small",
  scrollSnap = "none",
  scrollPadding,
  dataTest,
  minHeight,
  ...props
}: Props): React.Node => {
  const scrollWrapper = React.useRef(null);
  const { isDragging } = useScrollBox(scrollWrapper);

  return (
    <StyledWrapper {...props} isDragging={isDragging} minHeight={minHeight} data-test={dataTest}>
      <StyledOverflow
        ref={scrollWrapper}
        scrollSnap={scrollSnap}
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
};

export default HorizontalScroll;
