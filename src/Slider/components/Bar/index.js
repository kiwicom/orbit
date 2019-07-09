// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";
import type { Ref } from "../../../common/common.js.flow";

const StyledBar = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 24px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const StyledBarPart = styled(({ width, left, theme, active, ...props }) => (
  <div {...props} />
)).attrs(({ width, left }) => {
  return {
    style: {
      width: `${width}px`,
      left: `${left}px`,
    },
  };
})`
  position: absolute;
  height: 4px;
  top: 10px;
  border-radius: 4px;
  background-color: ${({ theme, active }) =>
    active ? theme.orbit.paletteProductNormal : theme.orbit.paletteInkLighter};
  z-index: ${({ active }) => (active ? 30 : 20)};
`;

StyledBarPart.defaultProps = {
  theme: defaultTheme,
};

const Bar = React.forwardRef(({ left, width, parentWidth, onMouseDown }, ref: Ref) => {
  return (
    <StyledBar ref={ref} onMouseDown={onMouseDown}>
      <StyledBarPart width={parentWidth} />
      <StyledBarPart active left={left} width={width} />
    </StyledBar>
  );
});

export default Bar;
