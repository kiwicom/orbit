// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { useRandomIdSeed } from "../hooks/useRandomId";
import { resolveHeight, resolveValue, resolvePulseAnimation } from "./helpers";
import useTheme from "../hooks/useTheme";
import defaultTheme from "../defaultTheme";
import getSpacingToken from "../common/getSpacingToken";

import type { Props } from ".";

const StyledSvg = styled(({ className, children, ariaLabelledby, dataTest, viewBox }) => (
  <svg
    aria-labelledby={ariaLabelledby}
    data-test={dataTest}
    className={className}
    role="img"
    viewBox={viewBox}
  >
    {children}
  </svg>
))`
  ${({ rtl, width, maxHeight }) => css`
    height: ${resolveHeight};
    max-height: ${resolveValue(maxHeight)};
    width: ${resolveValue(width)};
    transform: ${rtl && `scaleX(-1)`};
    margin-bottom: ${getSpacingToken};
    ${resolvePulseAnimation}
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSvg.defaultProps = {
  theme: defaultTheme,
};

const Rows = ({ count, height, offset, rowBorderRadius }) => {
  return [...Array(count).keys()].map(el => (
    <rect
      key={el}
      y={`${el * offset}px`}
      x="0"
      rx={rowBorderRadius}
      ry={rowBorderRadius}
      width="100%"
      height={height}
    />
  ));
};

const Svg = ({
  animate = true,
  children,
  rowBorderRadius = 3,
  rowHeight = 21,
  rowOffset = 20,
  rows,
  title = "loading",
  viewBox,
  height,
  maxHeight,
  width = "100%",
  ...props
}: Props): React.Node => {
  const [loaded, setLoaded] = React.useState(false);
  const [calculatedHeight, setCalculatedHeight] = React.useState(0);
  const { rtl, orbit } = useTheme();
  const duration = `${2}s`;
  const interval = `${0.5}s`;
  const id = useRandomIdSeed();
  const idClip = `${id("clip")}-clip`;
  const titleId = id("title");

  React.useEffect(() => {
    setLoaded(true);

    if (loaded) {
      if (!children && rows && rowOffset) setCalculatedHeight(rows * rowOffset);
    }
  }, [rowOffset, rows, setCalculatedHeight, setLoaded, loaded, maxHeight]);

  return (
    loaded && (
      <StyledSvg
        ariaLabelledby={titleId}
        maxHeight={maxHeight}
        role="img"
        rtl={rtl}
        viewBox={viewBox}
        calculatedHeight={calculatedHeight}
        duration={duration}
        interval={interval}
        animate={animate}
        height={height}
        width={width}
        {...props}
      >
        <title id={titleId}>{title}</title>
        <rect
          role="presentation"
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath={`url(#${idClip})`}
          style={{ fill: orbit.paletteCloudDark }}
        />
        <defs>
          <clipPath id={idClip}>
            {children ||
              (rows ? (
                <Rows
                  count={rows}
                  height={rowHeight}
                  offset={rowOffset}
                  rowBorderRadius={rowBorderRadius}
                />
              ) : (
                <rect
                  x="0"
                  y="0"
                  rx={rowBorderRadius}
                  ry={rowBorderRadius}
                  height="100%"
                  width="100%"
                />
              ))}
          </clipPath>
        </defs>
      </StyledSvg>
    )
  );
};

export default Svg;
