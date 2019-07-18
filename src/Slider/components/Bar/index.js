// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";
import type { Ref } from "../../../common/common.js.flow";

import type { Props } from "./index";

const StyledBar = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 24px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const calculateBarPosition = (value, max, min, hasHistogram) => {
  if (Array.isArray(value)) {
    return {
      left: ((value[0] - min) / (max - min + 1)) * 100,
      width: ((value[value.length - 1] - value[0] + 1) / (max - min + 1)) * 100,
    };
  }
  const addition = hasHistogram ? 1 : 0;
  return {
    left: 0,
    width: ((value - min + addition) / (max - min + addition)) * 100,
  };
};

export const StyledBarPart = styled(({ width, left, theme, active, ...props }) => (
  <div {...props} />
)).attrs(({ width, left }) => {
  return {
    style: {
      width: `${width.toFixed(2)}%`,
      left: `${left.toFixed(2)}%`,
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
// $FlowExpected
const Bar = React.forwardRef(({ onMouseDown, value, max, min, hasHistogram }: Props, ref: Ref) => {
  const { left, width } = calculateBarPosition(value, max, min, hasHistogram);
  return (
    <StyledBar ref={ref} onMouseDown={onMouseDown}>
      <StyledBarPart width={100} left={0} />
      <StyledBarPart active left={left} width={width} />
    </StyledBar>
  );
});

export default Bar;
