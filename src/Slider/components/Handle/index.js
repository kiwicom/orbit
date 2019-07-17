// @flow
import * as React from "react";
import styled from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import defaultTheme from "../../../defaultTheme";

import type { Props } from "./index";

const calculateLeftPosition = (valueNow, valueMin, valueMax, isFirst) => {
  // if first, stick it to the left edge
  if (isFirst) {
    return ((valueNow - valueMin) / (valueMax - valueMin + 1)) * 100;
  }
  // for every other handle stick on the right edge
  return ((valueNow - valueMin + 1) / (valueMax - valueMin + 1)) * 100;
};

const isFirst = (value, valueNow, index, hasHistogram) => {
  if (Array.isArray(value)) {
    const max = Math.max(...value);
    const min = Math.min(...value);
    const maxEqualsMin = max === min;
    const minEqualsValueNow = min === valueNow;
    if (index === 0) {
      if (maxEqualsMin) {
        return true;
      }
      if (minEqualsValueNow) {
        return true;
      }
    }
    if (maxEqualsMin) {
      return false;
    }
    if (minEqualsValueNow) {
      return true;
    }
  } else {
    return !hasHistogram;
  }
  return false;
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
  right: 0;
  bottom: 0;
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
  will-change: left;
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
  onTop,
  value,
  index,
  hasHistogram,
}: Props) => {
  const first = isFirst(value, valueNow, index, hasHistogram);
  const left = React.useMemo(() => calculateLeftPosition(valueNow, valueMin, valueMax, first), [
    first,
    valueMax,
    valueMin,
    valueNow,
  ]);
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
      left={left}
    />
  );
};

export default Handle;
