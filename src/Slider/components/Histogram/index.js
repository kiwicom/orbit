// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";

import type { Props } from "./index";

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
  min-width: 3px;
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

const Histogram = ({ data, value }: Props) => {
  const maxValue = Math.max(...data);
  const highlightFrom = Array.isArray(value) ? value[0] - 1 : 0;
  const highlightTo = Array.isArray(value) ? value[value.length - 1] : value;
  return (
    <StyledHistogram>
      {data.map((column, index) => {
        return (
          <StyledHistogramColumn
            aria-label={index}
            key={encodeURIComponent(index.toString())}
            height={Math.round((column / maxValue) * 100)}
            active={index >= highlightFrom && index < highlightTo}
          />
        );
      })}
    </StyledHistogram>
  );
};

export default Histogram;
