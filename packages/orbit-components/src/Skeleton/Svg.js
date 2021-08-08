// @flow
import * as React from "react";
import { UID } from "react-uid";
import styled, { css } from "styled-components";

import { getColor, resolveHeight } from "./helpers";
import useTheme from "../hooks/useTheme";
import defaultTheme from "../defaultTheme";
import getSpacingToken from "../common/getSpacingToken";

import type { Props } from ".";

const StyledSvg = styled(({ className, children, ariaLabelledby, viewBox }) => (
  <svg className={className} role="img" aria-labelledby={ariaLabelledby} viewBox={viewBox}>
    {children}
  </svg>
))`
  ${({ rtl, width }) => css`
    height: ${resolveHeight};
    transform: ${rtl && `scaleX(-1)`};
    width: ${width ? `${width}px` : "100%"};
    margin-bottom: ${getSpacingToken};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSvg.defaultProps = {
  theme: defaultTheme,
};

const Rows = ({ count, height, offset }) => {
  return [...Array(count).keys()].map(el => (
    <rect y={`${el * offset}px`} x="0" width="100%" height={height} />
  ));
};

const Svg = ({
  animate = true,
  animationInterval = 0.2,
  animationSpeed = 2,
  backgroundColor = "cloudNormal",
  backgroundOpacity = 1,
  children,
  height,
  width,
  foregroundColor = "cloudDark",
  foregroundOpacity = 1,
  gradientRatio = 2,
  rowHeight = 15,
  rowOffset = 15,
  rows = 1,
  spaceAfter,
  title,
  viewBox,
}: Props): React.Node => {
  const [calculatedHeight, setCalculatedHeight] = React.useState(0);
  const { rtl } = useTheme();
  const background = getColor(backgroundColor);
  const foreground = getColor(foregroundColor);
  const keyTimes = `0; ${animationInterval}; 1`;
  const duration = `${animationSpeed}s`;

  React.useEffect(() => {
    if (!children && rows && rowOffset) setCalculatedHeight(rows * rowOffset);
  }, [rowOffset, rows, setCalculatedHeight]);

  return (
    <UID>
      {id => {
        const idClip = `${id}-clip`;
        const idGradient = `${id}-animate`;

        return (
          <StyledSvg
            ariaLabelledby={id}
            role="img"
            rtl={rtl}
            viewBox={viewBox}
            height={height}
            width={width}
            calculatedHeight={calculatedHeight}
            spaceAfter={spaceAfter}
          >
            {title && <title id={id}>{title}</title>}
            <rect
              role="presentation"
              x="0"
              y="0"
              width="100%"
              height="100%"
              clipPath={`url(#${idClip})`}
              style={{ fill: `url(#${idGradient})` }}
            />
            <defs>
              <clipPath id={idClip}>
                {children || <Rows count={rows} height={rowHeight} offset={rowOffset} />}
              </clipPath>
            </defs>
            <linearGradient id={idGradient}>
              <stop offset="0%" stopColor={background} stopOpacity={backgroundOpacity}>
                {animate && (
                  <animate
                    attributeName="offset"
                    values={`${-gradientRatio}; ${-gradientRatio}; 1`}
                    keyTimes={keyTimes}
                    dur={duration}
                    repeatCount="indefinite"
                  />
                )}
              </stop>
              <stop offset="50%" stopColor={foreground} stopOpacity={foregroundOpacity}>
                {animate && (
                  <animate
                    attributeName="offset"
                    values={`${-gradientRatio / 2}; ${-gradientRatio / 2}; ${
                      1 + gradientRatio / 2
                    }`}
                    keyTimes={keyTimes}
                    dur={duration}
                    repeatCount="indefinite"
                  />
                )}
              </stop>
              <stop offset="100%" stopColor={background} stopOpacity={backgroundOpacity}>
                {animate && (
                  <animate
                    attributeName="offset"
                    values={`0; 0; ${1 + gradientRatio}`}
                    keyTimes={keyTimes}
                    dur={duration}
                    repeatCount="indefinite"
                  />
                )}
              </stop>
            </linearGradient>
          </StyledSvg>
        );
      }}
    </UID>
  );
};

export default Svg;
