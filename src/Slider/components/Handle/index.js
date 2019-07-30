// @flow
import * as React from "react";
import styled from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import { left as leftRight } from "../../../utils/rtl";
import defaultTheme from "../../../defaultTheme";

import type { Props, CalculateLeftPosition, IsFirst } from "./index";

export const calculateLeftPosition: CalculateLeftPosition = (
  valueNow,
  valueMin,
  valueMax,
  isFirst,
  isSimple,
) => {
  // if first, stick it to the left edge
  if (isFirst) {
    // if simple (one handle and without histogram)
    if (isSimple) {
      return +(((valueNow - valueMin) / (valueMax - valueMin)) * 100).toFixed(1);
    }
    return +(((valueNow - valueMin) / (valueMax - valueMin + 1)) * 100).toFixed(1);
  }
  // for every other handle stick on the right edge
  return +(((valueNow - valueMin + 1) / (valueMax - valueMin + 1)) * 100).toFixed(1);
};

export const isFirst: IsFirst = (value, valueNow, index, hasHistogram) => {
  if (Array.isArray(value)) {
    const max = Math.max(...value);
    const min = Math.min(...value);
    const maxEqualsMin = max === min;
    const minEqualsValueNow = min === valueNow;
    if (index !== 0 && maxEqualsMin) return false;
    return maxEqualsMin || minEqualsValueNow;
  }
  return !hasHistogram;
};

const StyledHandle = styled(({ left, theme, onTop, ...props }) => <div {...props} />).attrs(
  ({ left, onTop, theme }) => {
    return {
      style: {
        // TODO: use token for deducting the half size of the Handle
        [leftRight({ theme })]: `calc(${left}% - 12px)`,
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
  box-shadow: 0 1px 4px 0 ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkNormal, 10)};
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  -webkit-tap-highlight-color: transparent;
  will-change: ${leftRight};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  :after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.orbit.paletteProductNormal};
    border-radius: 8px;
  }
  :hover {
    box-shadow: 0 2px 6px 0 ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkNormal, 10)};
  }
  :focus {
    outline: none;
    box-shadow: 0 1px 4px 0 ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkNormal, 10)},
      0 0 0 2px ${({ theme }) => convertHexToRgba(theme.orbit.paletteProductNormal, 20)};
  }
  :active {
    box-shadow: 0 1px 4px 0 ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkNormal, 10)},
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
  onTop,
  value,
  index,
  ariaValueText,
  ariaLabel,
  hasHistogram,
}: Props) => {
  const valueNow = Array.isArray(value) ? value[index] : value;
  const first = isFirst(value, valueNow, index, hasHistogram);
  const isSimple = !hasHistogram && !Array.isArray(value);
  const left = calculateLeftPosition(valueNow, valueMin, valueMax, first, isSimple);
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
      aria-label={
        Array.isArray(ariaLabel) && typeof index !== "undefined" ? ariaLabel[index] : ariaLabel
      }
      aria-valuetext={ariaValueText}
      left={left}
    />
  );
};

export default Handle;
