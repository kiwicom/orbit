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

const StyledHistogramColumn = styled(({ height, theme, ...props }) => <div {...props} />).attrs(
  ({ height }) => {
    return {
      style: {
        height: `${height.toFixed(2)}%`,
      },
    };
  },
)`
  position: relative;
  min-width: 6px;
  flex: 1 0 auto;
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
    bottom: -3px;
    content: " ";
    width: 100%;
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
const Histogram = ({ data, value }) => {
  const maxValue = Math.max(...data);
  const highlightFrom = Array.isArray(value) ? value[0] - 1 : 0;
  const highlightTo = Array.isArray(value) ? value[1] : value;
  return (
    <StyledHistogram>
      {data.map((column, index) => {
        return (
          <StyledHistogramColumn
            key={encodeURIComponent(index)}
            height={Math.round((column / maxValue) * 100)}
            active={index >= highlightFrom && index <= highlightTo}
          />
        );
      })}
    </StyledHistogram>
  );
};

export default Histogram;
