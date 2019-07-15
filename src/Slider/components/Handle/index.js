// @flow
import * as React from "react";
import styled from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import defaultTheme from "../../../defaultTheme";

const calculateLeftPosition = (valueNow, valueMin, valueMax, isFirst) => {
  // if first, stick it to the left edge
  if (isFirst) {
    return ((valueNow - valueMin) / (valueMax - valueMin)) * 100;
  }
  // for every other handle
  return ((valueNow - valueMin) / (valueMax - valueMin)) * 100;
};

const StyledHandle = styled(({ left, theme, onTop, ...props }) => <div {...props} />).attrs(
  ({ left, onTop }) => {
    return {
      style: {
        // TODO: use token for deducting the half size of the Handle
        left: `calc(${left.toFixed(2)}% - 12px)`,
        zIndex: onTop ? 40 : 30,
      },
    };
  },
)`
  display: flex;
  position: absolute;
  flex: 0 0 24px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  box-shadow: 0 1px 4px 0 ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkDark, 10)};
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  -webkit-tap-highlight-color: transparent;
  :after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.orbit.paletteProductNormal};
    border-radius: 8px;
  }
  :hover {
    box-shadow: 0 2px 6px 0 ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkDark, 10)};
  }
  :focus {
    outline: none;
    box-shadow: 0 1px 4px 0 ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkDark, 10)},
      0 0 0 2px ${({ theme }) => convertHexToRgba(theme.orbit.paletteProductNormal, 20)};
  }
  :active {
    box-shadow: 0 1px 4px 0 ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkDark, 10)},
      0 0 0 4px ${({ theme }) => convertHexToRgba(theme.orbit.paletteProductNormal, 20)};
  }
`;

StyledHandle.defaultProps = {
  theme: defaultTheme,
};

const Handle = ({
  tabIndex,
  onMouseDown,
  onFocus,
  onTouchStart,
  valueMax,
  valueMin,
  valueNow,
  label,
  valueText,
  onTop,
  arrayLength,
  index,
}) => {
  const left = calculateLeftPosition(
    valueNow,
    valueMin,
    valueMax,
    index === 0,
    index + 1 === arrayLength,
  );
  return (
    <StyledHandle
      tabIndex={tabIndex}
      onTop={onTop}
      role="slider"
      onMouseDown={onMouseDown}
      onFocus={onFocus}
      onTouchStart={onTouchStart}
      aria-valuemax={valueMax}
      aria-valuemin={valueMin}
      aria-valuenow={valueNow}
      aria-label={label}
      aria-valuetext={valueText}
      left={left}
    />
  );
};

export default Handle;
