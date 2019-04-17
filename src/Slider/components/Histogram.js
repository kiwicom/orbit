// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";

const StyledHistogram = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 53px;
`;

const StyledHistogramColumn = styled.div`
  position: relative;
  min-width: 6px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}%`};
  border-radius: 1px;
  background-color: ${({ theme, active }) =>
    active ? theme.orbit.paletteProductNormal : theme.orbit.paletteProductLight};
  margin-right: 1px;
  :last-child {
    margin: 0;
  }
  :after {
    display: block;
    position: absolute;
    bottom: -2px;
    content: " ";
    width: 6px;
    height: 1px;
    border-radius: 1px;
    background-color: inherit;
  }
`;

StyledHistogramColumn.defaultProps = {
  theme: defaultTheme,
};

/*
  TODO: data grouping (if there is too much cdata columns)
  It's need to be dependent on DOM height of the Histogram
  Column needs to be at least 6px
 */
const Histogram = ({ data, containerWidth }) => {
  const dataMap = Object.values(data);
  const maxValue = Math.max(...dataMap);
  return (
    <StyledHistogram>
      {dataMap.map(column => (
        <StyledHistogramColumn height={Math.round((column / maxValue) * 100)} width={12} />
      ))}
    </StyledHistogram>
  );
};

export default Histogram;
