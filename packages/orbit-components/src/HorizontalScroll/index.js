// @flow
import * as React from "react";
import styled from "styled-components";

import useScrollBox from "./useScroll";
import Stack from "../Stack";

import type { Props } from ".";

const StyledWrapper = styled.div`
  ${({ isDragging, minHeight }) => `
    position: relative;
    width: 100%;
    min-height: ${minHeight}px;
    cursor: ${isDragging ? "grabbing" : "grab"};
    overflow: hidden;
  `}
`;

const StyledOverflow = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  box-sizing: border-box;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledContainer = styled.div`
  ${({ isDragging }) => `
    height: 100%;
    display: inline-flex;
    pointer-events: ${isDragging && "none"};
  `}
`;

const HorizontalScroll = ({
  children,
  spacing = "small",
  dataTest,
  minHeight,
  ...props
}: Props): React.Node => {
  const scrollWrapper = React.useRef(null);
  const { isDragging } = useScrollBox(scrollWrapper);

  return (
    <StyledWrapper {...props} isDragging={isDragging} minHeight={minHeight} data-test={dataTest}>
      <StyledOverflow ref={scrollWrapper}>
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
