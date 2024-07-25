import * as React from "react";
import cx from "clsx";

import { left as leftRight } from "../../../utils/rtl";
import type { Value } from "../../types";
import useTheme from "../../../hooks/useTheme";

type CalculateLeftPosition = (
  valueNow: number,
  valueMin: number,
  valueMax: number,
  isFirst: boolean,
  isSimple: boolean,
) => number;

type IsFirst = (value: Value, valueNow: number, index: number, hasHistogram: boolean) => boolean;

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

interface Props {
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  onFocus: React.FocusEventHandler<HTMLDivElement>;
  onTouchStart: React.TouchEventHandler<HTMLDivElement>;
  valueMax: number;
  valueMin: number;
  onTop: boolean;
  index: number;
  hasHistogram: boolean;
  value: Value;
  ariaLabel?: string | string[];
  ariaValueText?: string;
  dataTest?: string;
}

const Handle = ({
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
  dataTest,
}: Props) => {
  const valueNow = Array.isArray(value) ? value[index] : value;
  const first = isFirst(value, valueNow, index, hasHistogram);
  const isSimple = !hasHistogram && !Array.isArray(value);
  const left = calculateLeftPosition(valueNow, valueMin, valueMax, first, isSimple);
  const theme = useTheme();
  return (
    <div
      className={cx(
        "size-lg shadow-action bg-white-normal duration-fast tap-color-none hover:shadow-action-active active:shadow-action-active absolute bottom-0 flex cursor-pointer select-none items-center justify-center rounded-full transition-shadow ease-in-out",
        onTop && "z-20",
      )}
      style={{
        // TODO use inset-inline-start once we don’t support ios_safari 14
        [leftRight({ theme })]: `calc(${left}% - ${theme.orbit.spaceSmall})`,
      }}
      data-test={dataTest}
      tabIndex={0}
      role="slider"
      onMouseDown={onMouseDown}
      onFocus={onFocus}
      onTouchStart={onTouchStart}
      aria-valuemax={valueMax}
      aria-valuemin={valueMin}
      aria-valuenow={valueNow}
      aria-label={Array.isArray(ariaLabel) ? ariaLabel[index] : ariaLabel}
      aria-valuetext={ariaValueText}
    >
      <div className="size-xs bg-blue-normal rounded-full" />
    </div>
  );
};

export default Handle;
