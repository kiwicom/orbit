import * as React from "react";
import styled from "styled-components";

import { Value } from "../../index.d";
import { Translation } from "../../../common/common";
import defaultTheme from "../../../defaultTheme";
import Loading from "../../../Loading";

const StyledHistogram = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 52px;
  padding-bottom: 3px;
  overflow: hidden;
`;

const StyledLoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledHistogramColumn = styled(({ height, theme, active, ...props }) => (
  <div {...props} />
)).attrs(({ height }) => {
  return {
    style: {
      height: `${height.toFixed(2)}%`,
    },
  };
})`
  position: relative;
  min-width: 3px;
  flex: 1 0 auto;
  border-radius: 1px;
  background-color: ${({ theme, active }) =>
    active ? theme.orbit.paletteBlueNormal : theme.orbit.paletteBlueLightActive};
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

interface Props {
  data?: number[];
  value: Value;
  min: number;
  step: number;
  loading?: boolean;
  loadingText?: Translation;
}

const Histogram = ({ data, value, min, loading = false, loadingText, step }: Props) => {
  const maxValue = !!data && Math.max(...data);
  const highlightFrom = Array.isArray(value) ? value[0] : 0;
  const highlightTo = Array.isArray(value) ? value[value.length - 1] : value;
  return (
    <StyledHistogram role="presentation">
      {loading ? (
        <StyledLoadingContainer>
          <Loading type="inlineLoader" text={loadingText} />
        </StyledLoadingContainer>
      ) : (
        data &&
        data.map((column, index) => {
          const properIndex = (index + min) * step;
          return (
            <StyledHistogramColumn
              key={encodeURIComponent(properIndex.toString())}
              height={maxValue && +((column / maxValue) * 100).toFixed(1)}
              active={properIndex >= highlightFrom && properIndex <= highlightTo}
            />
          );
        })
      )}
    </StyledHistogram>
  );
};

export default Histogram;
