// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import useRandomId from "../hooks/useRandomId";
import { resolveHeight, resolvePulseAnimation } from "./helpers";
import useTheme from "../hooks/useTheme";
import defaultTheme from "../defaultTheme";
import getSpacingToken from "../common/getSpacingToken";

import type { Props } from ".";

const StyledWrapper = styled.div`
  position: relative;
`;

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
  ${({ rtl, width }) => css`
    height: ${resolveHeight};
    transform: ${rtl && `scaleX(-1)`};
    width: ${width ? `${width}px` : "100%"};
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
  animation = "pulse",
  animationDuration = 2,
  animationInterval = 0.5,
  ariaLabelledby,
  children,
  rowBorderRadius = 3,
  rowHeight = 21,
  rowOffset = 20,
  rows = 1,
  title,
  viewBox,
  ...props
}: Props): React.Node => {
  const [calculatedHeight, setCalculatedHeight] = React.useState(0);
  const { rtl, orbit } = useTheme();
  const duration = `${animationDuration}s`;
  const interval = `${animationInterval}s`;
  const uid = useRandomId();
  const id = ariaLabelledby || uid;
  const idClip = `${id}-clip`;
  const idGradient = `${id}-animate`;
  const fillColor = animation === "wave" ? `url(#${idGradient})` : orbit.paletteCloudDark;

  React.useEffect(() => {
    if (!children && rows && rowOffset) setCalculatedHeight(rows * rowOffset);
  }, [rowOffset, rows, setCalculatedHeight]);

  return (
    <StyledWrapper>
      <StyledSvg
        ariaLabelledby={id}
        role="img"
        rtl={rtl}
        viewBox={viewBox}
        calculatedHeight={calculatedHeight}
        duration={duration}
        interval={interval}
        animation={animation}
        {...props}
      >
        {title && <title id={id}>{title}</title>}
        <rect
          role="presentation"
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath={`url(#${idClip})`}
          style={{ fill: fillColor }}
        />
        <defs>
          <clipPath id={idClip}>
            {children || (
              <Rows
                count={rows}
                height={rowHeight}
                offset={rowOffset}
                rowBorderRadius={rowBorderRadius}
              />
            )}
          </clipPath>
          {animation === "wave" && (
            <linearGradient id={idGradient} x1="0" y1="0%">
              <stop offset="0%">
                <animate
                  attributeName="stop-color"
                  values={`${orbit.paletteInkLighter}; ${orbit.paletteCloudDark}`}
                  dur={animationDuration}
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor={orbit.paletteCloudNormal}>
                <animate
                  attributeName="offset"
                  values="0;.20;.40;.60;.80;.99"
                  dur={animationDuration}
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          )}
        </defs>
      </StyledSvg>
    </StyledWrapper>
  );
};

export default Svg;
