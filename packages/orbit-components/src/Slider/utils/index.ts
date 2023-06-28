import type { Value, Callback as SliderCallback, Data } from "../types";
import boundingClientRect from "../../utils/boundingClientRect";

export const isNotEqual = (a: Value, b: Value): boolean => {
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.toString() !== b.toString();
  }
  return a !== b;
};

export const sortArray = (arr: Value): Value => {
  if (Array.isArray(arr)) {
    return arr.slice().sort((a, b) => a - b);
  }
  return arr;
};

export const findClosestKey = (goal: number, value: Value): number | null => {
  return Array.isArray(value)
    ? value.reduce((acc, curr, index) => {
        return Array.isArray(value) && Math.abs(curr - goal) < Math.abs(value[acc] - goal)
          ? index
          : acc;
      }, 0)
    : null;
};

export const pauseEvent = (event: KeyboardEvent | MouseEvent | TouchEvent | FocusEvent): void => {
  if (typeof event.stopPropagation === "function") {
    event.stopPropagation();
  }
  if (
    typeof event.preventDefault === "function" &&
    (typeof event.cancelable !== "boolean" || event.cancelable)
  ) {
    event.preventDefault();
  }
};

export const stopPropagation = (event: TouchEvent): void => {
  if (typeof event.stopPropagation === "function") event.stopPropagation();
};

export const calculateValue = (
  maxValue: number,
  minValue: number,
  ratio: number,
  addition?: boolean,
  deduction?: boolean,
): number => {
  return Math.round(
    (maxValue - minValue + (addition ? 1 : 0)) * ratio + minValue - (deduction ? 1 : 0),
  );
};

export const replaceValue = (value: Value, newValue: number, index: number): Value => {
  if (index == null || !Array.isArray(value)) return newValue;
  return value.map((item, key) => (key === index ? newValue : item));
};

export const alignValue = (
  maxValue: number,
  minValue: number,
  step: number,
  value: number,
): number => {
  const alignValueToMaxMin = (val: number): number => {
    if (val > maxValue) return maxValue;
    if (val < minValue) return minValue;
    return val;
  };

  const alignValueToStep = (): number => {
    if (step === 1) return value;

    const gap = value % step;
    if (gap === 0) return value;
    if (gap * 2 >= step) return value - gap + step;

    return value - gap;
  };

  return alignValueToMaxMin(alignValueToStep());
};

export const injectCallbackAndSetState = (
  setValue: (value: Value) => void,
  callback: SliderCallback | undefined,
  newValue: Value | null,
): void => {
  if (newValue != null) {
    if (callback) {
      callback(sortArray(newValue));
    }
    setValue(newValue);
  }
};

export const moveValueByExtraStep = (
  value: Value,
  maxValue: number,
  minValue: number,
  step: number,
  handleIndex: number | null,
  extraStep: number,
  forcedValue?: number,
): Value => {
  if (Array.isArray(value)) {
    return replaceValue(
      value,
      forcedValue || alignValue(maxValue, minValue, step, value[Number(handleIndex)] + extraStep),
      Number(handleIndex),
    );
  }
  return forcedValue || alignValue(maxValue, minValue, step, value + extraStep);
};

export const calculateValueFromPosition = ({
  histogramData,
  histogramLoading,
  maxValue,
  minValue,
  handleIndex,
  bar,
  rtl,
  value,
  pageX,
  throughClick,
}: {
  histogramData?: Data;
  histogramLoading?: boolean;
  maxValue: number;
  minValue: number;
  handleIndex: number | null;
  bar: React.RefObject<HTMLDivElement>;
  rtl?: boolean;
  value: Value;
  pageX: number;
  throughClick?: boolean;
}): number | null => {
  const barRect = boundingClientRect(bar);
  if (barRect) {
    const mousePosition = (rtl ? barRect.right : pageX) - (rtl ? pageX : barRect.left);
    const positionRatio = mousePosition / barRect.width;
    const hasHistogram = histogramLoading || !!histogramData;
    // when range slider
    if (Array.isArray(value)) {
      if (value[0] === value[value.length - 1]) {
        if (
          calculateValue(maxValue, minValue, positionRatio, true, true) >= value[value.length - 1]
        ) {
          return calculateValue(maxValue, minValue, positionRatio, true, true);
        }
        return calculateValue(maxValue, minValue, positionRatio, true);
      }
      if (isNotEqual(sortArray(value), value)) {
        if (handleIndex === 0) {
          return calculateValue(maxValue, minValue, positionRatio, true, true);
        }
        return calculateValue(maxValue, minValue, positionRatio, true);
      }
      const closestKey = findClosestKey(
        calculateValue(maxValue, minValue, positionRatio),
        sortArray(value),
      );
      // when first handle of range slider or when clicked and it should move the first handle
      if (handleIndex === 0 || (throughClick && closestKey === 0)) {
        return calculateValue(maxValue, minValue, positionRatio, true);
      }
    }
    // simple slider without histogram
    if (handleIndex === null && !hasHistogram) {
      return calculateValue(maxValue, minValue, positionRatio);
    }
    return calculateValue(maxValue, minValue, positionRatio, true, true);
  }

  return null;
};
