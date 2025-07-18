"use client";

import * as React from "react";
import cx from "clsx";

import Text from "../Text";
import Heading from "../Heading";
import Stack from "../Stack";
import Hide from "../Hide";
import Handle from "./components/Handle";
import Bar from "./components/Bar";
import DEFAULT_VALUES from "./consts";
import Histogram from "./components/Histogram";
import type { Props, Value } from "./types";
import {
  sortArray,
  findClosestKey,
  pauseEvent,
  stopPropagation,
  constrainRangeValue,
  alignValue,
  injectCallbackAndSetState,
  moveValueByExtraStep,
  calculateValueFromPosition,
  isNotEqual,
} from "./utils";
import useTheme from "../hooks/useTheme";

const Slider = ({
  defaultValue = DEFAULT_VALUES.VALUE,
  maxValue = DEFAULT_VALUES.MAX,
  minValue = DEFAULT_VALUES.MIN,
  step = DEFAULT_VALUES.STEP,
  onChange,
  onChangeAfter,
  onChangeBefore,
  ariaValueText,
  ariaLabel,
  label,
  histogramData,
  histogramLoading,
  histogramDescription,
  histogramLoadingText,
  valueDescription,
  id,
  dataTest,
}: Props) => {
  const bar = React.useRef<HTMLDivElement | null>(null);
  const [value, setValue] = React.useState(defaultValue);
  const valueRef = React.useRef(value);
  const defaultRef = React.useRef(defaultValue);
  const handleIndex = React.useRef<number | null>(null);
  const [focused, setFocused] = React.useState(false);
  const theme = useTheme();
  const { rtl } = theme;

  const updateValue = (newValue: Value) => {
    valueRef.current = newValue;
    setValue(newValue);
  };

  React.useEffect(() => {
    const newValue = Array.isArray(defaultValue)
      ? defaultValue.map(item => Number(item))
      : Number(defaultValue);

    if (isNotEqual(defaultValue, defaultRef.current)) {
      defaultRef.current = newValue;
      updateValue(newValue);
    }
  }, [defaultValue]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey || event.shiftKey || event.altKey) return;

    // Return early if not a navigation key
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
      return;

    switch (event.key) {
      case "ArrowUp":
        pauseEvent(event);
        if (onChange) {
          injectCallbackAndSetState(
            updateValue,
            onChange,
            moveValueByExtraStep(
              valueRef.current,
              maxValue,
              minValue,
              step,
              handleIndex.current,
              step,
            ),
          );
        }
        break;
      case "ArrowDown":
        pauseEvent(event);
        if (onChange) {
          injectCallbackAndSetState(
            updateValue,
            onChange,
            moveValueByExtraStep(
              valueRef.current,
              maxValue,
              minValue,
              step,
              handleIndex.current,
              -step,
            ),
          );
        }
        break;
      case "ArrowRight":
        {
          const switchStep = rtl ? -step : step;
          pauseEvent(event);
          if (onChange) {
            injectCallbackAndSetState(
              updateValue,
              onChange,
              moveValueByExtraStep(
                valueRef.current,
                maxValue,
                minValue,
                step,
                handleIndex.current,
                switchStep,
              ),
            );
          }
        }
        break;
      case "ArrowLeft":
        {
          const switchStep = rtl ? step : -step;
          pauseEvent(event);
          if (onChange) {
            injectCallbackAndSetState(
              updateValue,
              onChange,
              moveValueByExtraStep(
                valueRef.current,
                maxValue,
                minValue,
                step,
                handleIndex.current,
                switchStep,
              ),
            );
          }
        }
        break;
      case "Home":
        pauseEvent(event);
        if (onChange) {
          injectCallbackAndSetState(
            updateValue,
            onChange,
            moveValueByExtraStep(
              valueRef.current,
              maxValue,
              minValue,
              step,
              handleIndex.current,
              0,
              minValue,
            ),
          );
        }
        break;
      case "End":
        pauseEvent(event);
        if (onChange) {
          injectCallbackAndSetState(
            updateValue,
            onChange,
            moveValueByExtraStep(
              valueRef.current,
              maxValue,
              minValue,
              step,
              handleIndex.current,
              0,
              maxValue,
            ),
          );
        }
        break;
      default:
    }
  };

  const handleBlur = () => {
    setFocused(false);
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("focusout", handleBlur);
    if (onChangeAfter) {
      injectCallbackAndSetState(updateValue, onChangeAfter, valueRef.current);
    }
  };

  const handleOnFocus = (i: number) => (event: React.FocusEvent<HTMLDivElement>) => {
    handleIndex.current = i;
    setFocused(true);
    pauseEvent(event.nativeEvent);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("focusout", handleBlur);
    if (onChangeBefore) {
      injectCallbackAndSetState(updateValue, onChangeBefore, value);
    }
  };

  const handleMove = (newValue: number | null) => {
    if (newValue != null) {
      if (Array.isArray(value)) {
        return constrainRangeValue(
          valueRef.current,
          alignValue(maxValue, minValue, step, newValue),
          Number(handleIndex.current),
        );
      }
      return alignValue(maxValue, minValue, step, newValue);
    }
    return null;
  };

  const handleBarMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    handleIndex.current = null;
    const newValue = calculateValueFromPosition({
      histogramData,
      histogramLoading,
      maxValue,
      minValue,
      handleIndex: handleIndex.current,
      bar,
      rtl,
      value,
      pageX: event.pageX,
      throughClick: true,
    });
    if (newValue) {
      if (Array.isArray(value)) {
        const index = findClosestKey(newValue, value);
        const replacedValue = constrainRangeValue(
          value,
          alignValue(maxValue, minValue, step, newValue),
          index || 0,
        );
        if (onChangeBefore) injectCallbackAndSetState(updateValue, onChangeBefore, value);
        if (onChange) injectCallbackAndSetState(updateValue, onChange, replacedValue);
        if (onChangeAfter) injectCallbackAndSetState(updateValue, onChangeAfter, replacedValue);
      } else {
        const alignedValue = alignValue(maxValue, minValue, step, newValue);
        if (onChangeBefore) injectCallbackAndSetState(updateValue, onChangeBefore, value);
        if (onChange) injectCallbackAndSetState(updateValue, onChange, alignedValue);
        if (onChangeAfter) injectCallbackAndSetState(updateValue, onChangeAfter, alignedValue);
      }
    }
  };

  const handleMouseMove = (event: MouseEvent): void => {
    const newValue = calculateValueFromPosition({
      histogramData,
      histogramLoading,
      maxValue,
      minValue,
      handleIndex: handleIndex.current,
      bar,
      rtl,
      value,
      pageX: event.pageX,
    });
    pauseEvent(event);
    injectCallbackAndSetState(updateValue, onChange, handleMove(newValue));
  };

  const handleMouseUp = () => {
    setFocused(false);

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    if (onChangeAfter) {
      injectCallbackAndSetState(updateValue, onChangeAfter, valueRef.current);
    }
  };

  const handleMouseDown = (i: number) => (event: React.MouseEvent<HTMLDivElement>) => {
    // just allow left-click
    if (event.button === 0 && event.buttons !== 2) {
      setFocused(true);
      handleIndex.current = i;
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      pauseEvent(event.nativeEvent);
      if (onChangeBefore) {
        injectCallbackAndSetState(updateValue, onChangeBefore, value);
      }
    }
  };

  const handleOnTouchMove = (event: TouchEvent) => {
    if (event.touches.length > 1) return;
    const newValue = calculateValueFromPosition({
      histogramData,
      histogramLoading,
      maxValue,
      minValue,
      handleIndex: handleIndex.current,
      bar,
      rtl,
      value,
      pageX: event.touches[0]?.pageX || 0,
    });
    pauseEvent(event);
    injectCallbackAndSetState(updateValue, onChange, handleMove(newValue));
  };

  const handleTouchEnd = () => {
    setFocused(false);
    window.removeEventListener("touchmove", handleOnTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
    if (onChangeAfter) {
      injectCallbackAndSetState(updateValue, onChangeAfter, valueRef.current);
    }
  };

  const handleOnTouchStart = (i: number) => (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length <= 1) {
      setFocused(true);
      handleIndex.current = i;
      window.addEventListener("touchmove", handleOnTouchMove, {
        passive: false,
      });
      window.addEventListener("touchend", handleTouchEnd);
      stopPropagation(event.nativeEvent);
      if (onChangeBefore) {
        injectCallbackAndSetState(updateValue, onChangeBefore, value);
      }
    }
  };

  const renderHandle = (i?: number) => {
    const key = i && encodeURIComponent(i.toString());
    const index = i || 0;
    return (
      <Handle
        onTop={handleIndex.current === i}
        valueMax={maxValue}
        valueMin={minValue}
        onMouseDown={handleMouseDown(index)}
        onFocus={handleOnFocus(index)}
        onTouchStart={handleOnTouchStart(index)}
        value={valueRef.current}
        ariaValueText={ariaValueText}
        ariaLabel={ariaLabel}
        hasHistogram={histogramLoading || !!histogramData}
        index={index}
        key={key}
        dataTest={`SliderHandle-${index}`}
      />
    );
  };

  const renderHandles = () =>
    Array.isArray(value) ? value.map((_valueNow, index) => renderHandle(index)) : renderHandle();

  const renderSliderTexts = React.useCallback(
    (biggerSpace: boolean) => {
      if (!(label || valueDescription || histogramDescription)) return null;
      return (
        <Stack direction="row" spacing="none" spaceAfter={biggerSpace ? "medium" : "small"}>
          {(label || histogramDescription) && (
            <Stack direction="column" spacing="none" basis="60%" grow>
              {label && <Heading type="title4">{label}</Heading>}
              {valueDescription && (
                <Text type="secondary" size="small">
                  {valueDescription}
                </Text>
              )}
            </Stack>
          )}
          {histogramDescription && (
            <Stack shrink justify="end" grow={false}>
              <Text type="primary" size="small">
                {histogramDescription}
              </Text>
            </Stack>
          )}
        </Stack>
      );
    },
    [histogramDescription, label, valueDescription],
  );

  if (histogramData) {
    const properHistogramLength = (maxValue - minValue + step) / step;

    if (histogramData.length !== properHistogramLength) {
      console.warn(
        `Warning: Length of histogramData array is ${histogramData.length}, but should be ${properHistogramLength}. This will cause broken visuals of the whole Histogram.`,
      );
    }
  }

  const sortedValue = sortArray(valueRef.current);
  const hasHistogram = histogramLoading || !!histogramData;

  return (
    <div className="orbit-slider relative" data-test={dataTest} id={id}>
      {hasHistogram ? (
        <>
          <Hide on={["smallMobile", "mediumMobile", "largeMobile"]} block>
            {renderSliderTexts(true)}
          </Hide>
          <div
            className={cx(
              "pb-200 tb:w-[calc(100%+48px)] tb:absolute tb:-bottom-400 tb:-inset-x-600 tb:pt-300 tb:px-600 tb:pb-1200 tb:rounded-100 tb:transition-opacity tb:ease-in-out tb:duration-fast tb:bg-white-normal tb:shadow-level3",
              focused ? "tb:visible tb:opacity-100" : "tb:invisible tb:opacity-0",
            )}
          >
            {renderSliderTexts(false)}
            <Histogram
              data={histogramData}
              value={sortedValue}
              min={minValue}
              step={step}
              loading={histogramLoading}
              loadingText={histogramLoadingText}
            />
          </div>
        </>
      ) : (
        renderSliderTexts(true)
      )}
      <div className="h-600 flex w-full items-center">
        <Bar
          ref={bar}
          onMouseDown={handleBarMouseDown}
          value={sortedValue}
          max={maxValue}
          min={minValue}
          hasHistogram={hasHistogram}
        />
        {renderHandles()}
      </div>
    </div>
  );
};

export default Slider;
