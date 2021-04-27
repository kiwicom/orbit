// @flow
import * as React from "react";
import styled from "styled-components";

import useScrollBox from "./useScroll";
import Stack from "../../Stack";

import type { Props } from ".";

const StyledWrapper = styled.div`
  ${({ isDragging, height, minHeight }) => `
    position: relative;
    width: 100%;
    min-height: ${minHeight}px;
    height: ${height}px;
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

const StyledChild = styled.div``;

const HorizontalScroll = ({
  children,
  spacing = "small",
  minHeight,
  ...props
}: Props): React.Node => {
  const [height, setHeight] = React.useState(0);
  const { current: childRef } = React.useRef<(number | null)[]>([]);

  React.useEffect(() => {
    if (childRef.length > 0) {
      setHeight(Math.max(...childRef.filter(Boolean)));
    }
  }, []);

  const scrollWrapper = React.useRef(null);
  const { isDragging } = useScrollBox(scrollWrapper);

  return (
    <StyledWrapper {...props} isDragging={isDragging} height={height} minHeight={minHeight}>
      <StyledOverflow ref={scrollWrapper}>
        <StyledContainer isDragging={isDragging}>
          <Stack inline spacing={spacing}>
            {React.Children.map(children, (child, idx) => {
              if (!React.isValidElement(child)) return null;
              return (
                // eslint-disable-next-line no-return-assign
                <StyledChild ref={r => (childRef[idx] = r && r.clientHeight)}>{child}</StyledChild>
              );
            })}
          </Stack>
        </StyledContainer>
      </StyledOverflow>
    </StyledWrapper>
  );
};

export default HorizontalScroll;
