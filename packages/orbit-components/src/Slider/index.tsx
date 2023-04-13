import * as React from "react";
import styled, { css, withTheme } from "styled-components";

import transition from "../utils/transition";
import Text from "../Text";
import Heading from "../Heading";
import Stack from "../Stack";
import Hide from "../Hide";
import Handle from "./components/Handle";
import Bar from "./components/Bar";
import KEY_CODE_MAP from "../common/keyMaps";
import DEFAULT_VALUES from "./consts";
import Histogram from "./components/Histogram";
import type { ThemeProps } from "../defaultTheme";
import defaultTheme from "../defaultTheme";
import mq from "../utils/mediaQuery";
import boundingClientRect from "../utils/boundingClientRect";
import type { Callback as SliderCallback, Props, Value } from "./types";
import { isNotEqual, sortArray, findClosestKey, pauseEvent, stopPropagation } from "./utils";

const StyledSlider = styled.div`
  position: relative;
`;

StyledSlider.defaultProps = {
  theme: defaultTheme,
};

const StyledSliderContent = styled.div<{ focused?: boolean }>`
  ${({ theme, focused }) => css`
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding-bottom: ${theme.orbit.spaceXSmall};

    ${mq.tablet(css`
      width: calc(100% + 48px);
      position: absolute;
      bottom: -16px;
      left: -24px;
      right: -24px;
      opacity: 0;
      visibility: hidden;
      padding: 12px 24px 48px 24px;
      border-radius: ${theme.orbit.borderRadiusNormal};
      transition: ${transition(["all"], "fast", "ease-in-out")};

      background: transparent;
      ${focused &&
      css`
        visibility: visible;
        opacity: 1;
        background: ${theme.orbit.paletteWhite};
        box-shadow: ${theme.orbit.boxShadowRaised};
      `};
    `)};
  `}
`;

StyledSliderContent.defaultProps = {
  theme: defaultTheme,
};

const StyledSliderInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
`;

interface SliderProps extends Props, ThemeProps {}

const PureSlider = ({
  defaultValue = DEFAULT_VALUES.VALUE,
  maxValue = DEFAULT_VALUES.MAX,
  minValue = DEFAULT_VALUES.MIN,
  step = DEFAULT_VALUES.STEP,
  theme,
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
}: SliderProps) => {
  const bar = React.useRef<HTMLDivElement>(null);
  const [value, setValue] = React.useState(defaultValue);
  const handleIndex = React.useRef<number | null>(null);
  const [focused, setFocused] = React.useState(false);
  const { rtl } = theme;

  React.useEffect(() => {
    const newValue = Array.isArray(defaultValue)
      ? defaultValue.map(item => Number(item))
      : Number(defaultValue);

    setValue(newValue);
  }, [defaultValue]);

  const calculateValue = React.useCallback(
    (ratio: number, addition?: boolean, deduction?: boolean) => {
      return Math.round(
        (maxValue - minValue + (addition ? 1 : 0)) * ratio + minValue - (deduction ? 1 : 0),
      );
    },
    [maxValue, minValue],
  );

  const calculateValueFromPosition = React.useCallback(
    (pageX: number, throughClick?: boolean) => {
      const barRect = boundingClientRect(bar);
      if (barRect) {
        const mousePosition = (rtl ? barRect?.right : pageX) - (rtl ? pageX : barRect?.left);
        const positionRatio = mousePosition / barRect.width;
        const hasHistogram = histogramLoading || !!histogramData;
        // when range slider
        if (Array.isArray(value)) {
          if (value[0] === value[value.length - 1]) {
            if (calculateValue(positionRatio, true, true) >= value[value.length - 1]) {
              return calculateValue(positionRatio, true, true);
            }
            return calculateValue(positionRatio, true);
          }
          if (isNotEqual(sortArray(value), value)) {
            if (handleIndex.current === 0) {
              return calculateValue(positionRatio, true, true);
            }
            return calculateValue(positionRatio, true);
          }
          const closestKey = findClosestKey(calculateValue(positionRatio), sortArray(value));
          // when first handle of range slider or when clicked and it should move the first handle
          if (handleIndex.current === 0 || (throughClick && closestKey === 0)) {
            return calculateValue(positionRatio, true);
          }
        }
        // simple slider without histogram
        if (handleIndex.current === null && !hasHistogram) {
          return calculateValue(positionRatio);
        }
        return calculateValue(positionRatio, true, true);
      }

      return null;
    },
    [bar, calculateValue, histogramData, histogramLoading, rtl, value],
  );

  const replaceValue = React.useCallback(
    (newValue: number, index: number) => {
      if (index == null || !Array.isArray(value)) return newValue;
      return value.map((item, key) => (key === index ? newValue : item));
    },
    [value],
  );

  const alignValueToStep = React.useCallback(
    (val: number) => {
      if (step === 1) return val;
      const gap = val % step;
      if (gap === 0) return val;
      if (gap * 2 >= step) {
        return val - gap + step;
      }
      return val - gap;
    },
    [step],
  );

  const alignValueToMaxMin = React.useCallback(
    (val: number) => {
      if (val > maxValue) {
        return maxValue;
      }
      if (val < minValue) {
        return minValue;
      }
      return val;
    },
    [maxValue, minValue],
  );

  const alignValue = React.useCallback(
    (val: number) => alignValueToMaxMin(alignValueToStep(val)),
    [alignValueToMaxMin, alignValueToStep],
  );

  const moveValueByStep = React.useCallback(
    (stepValue: number, forcedValue?: number) => {
      if (Array.isArray(value)) {
        return replaceValue(
          forcedValue || alignValue(value[Number(handleIndex.current)] + stepValue),
          Number(handleIndex.current),
        );
      }
      return forcedValue || alignValue(value + stepValue);
    },
    [value, alignValue, replaceValue],
  );

  const injectCallbackAndSetState = React.useCallback(
    (callback: SliderCallback | undefined, newValue: Value | null, forced?: boolean) => {
      if (newValue != null) {
        if (isNotEqual(newValue, value) || forced) {
          if (callback) {
            callback(sortArray(newValue));
          }
          setValue(newValue);
        }
      }
    },
    [value],
  );

  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.ctrlKey || event.shiftKey || event.altKey) return;
      const eventCode = Number(event.code);
      if (eventCode === KEY_CODE_MAP.ARROW_UP) {
        pauseEvent(event);
        if (onChange) {
          injectCallbackAndSetState(onChange, moveValueByStep(step));
        }
      }
      if (eventCode === KEY_CODE_MAP.ARROW_DOWN) {
        pauseEvent(event);
        if (onChange) {
          injectCallbackAndSetState(onChange, moveValueByStep(-step));
        }
      }
      if (eventCode === KEY_CODE_MAP.ARROW_RIGHT) {
        const switchStep = rtl ? -step : step;
        pauseEvent(event);
        if (onChange) {
          injectCallbackAndSetState(onChange, moveValueByStep(switchStep));
        }
      }
      if (eventCode === KEY_CODE_MAP.ARROW_LEFT) {
        const switchStep = rtl ? step : -step;
        pauseEvent(event);
        if (onChange) {
          injectCallbackAndSetState(onChange, moveValueByStep(switchStep));
        }
      }
      if (eventCode === KEY_CODE_MAP.HOME) {
        pauseEvent(event);
        if (onChange) {
          injectCallbackAndSetState(onChange, moveValueByStep(0, minValue));
        }
      }
      if (eventCode === KEY_CODE_MAP.END) {
        pauseEvent(event);
        if (onChange) {
          injectCallbackAndSetState(onChange, moveValueByStep(0, maxValue));
        }
      }
    },
    [injectCallbackAndSetState, maxValue, minValue, moveValueByStep, onChange, rtl, step],
  );

  const handleBlur = React.useCallback(() => {
    setFocused(false);
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("focusout", handleBlur);
    if (onChangeAfter) {
      injectCallbackAndSetState(onChangeAfter, value, true);
    }
  }, [handleKeyDown, onChangeAfter, injectCallbackAndSetState, value]);

  const handleOnFocus = React.useCallback(
    (i: number) => (event: FocusEvent) => {
      handleIndex.current = i;
      setFocused(true);
      pauseEvent(event);
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("focusout", handleBlur);
      if (onChangeBefore) {
        injectCallbackAndSetState(onChangeBefore, value, true);
      }
    },
    [handleBlur, handleKeyDown, injectCallbackAndSetState, onChangeBefore, value],
  );

  const handleMove = React.useCallback(
    (newValue: number | null) => {
      if (newValue != null) {
        if (Array.isArray(value)) {
          return replaceValue(alignValue(newValue), Number(handleIndex.current));
        }
        return alignValue(newValue);
      }
      return null;
    },
    [value, alignValue, replaceValue],
  );

  const handleBarMouseDown = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      handleIndex.current = null;
      const newValue = calculateValueFromPosition(event.pageX, true);
      if (newValue) {
        if (Array.isArray(value)) {
          const index = findClosestKey(newValue, value);
          const replacedValue = replaceValue(alignValue(newValue), index || 0);
          if (onChangeBefore) injectCallbackAndSetState(onChangeBefore, value, true);
          if (onChange) injectCallbackAndSetState(onChange, replacedValue);
          if (onChangeAfter) injectCallbackAndSetState(onChangeAfter, replacedValue);
        } else {
          const alignedValue = alignValue(newValue);
          if (onChangeBefore) injectCallbackAndSetState(onChangeBefore, value, true);
          if (onChange) injectCallbackAndSetState(onChange, alignedValue);
          if (onChangeAfter) injectCallbackAndSetState(onChangeAfter, alignedValue);
        }
      }
    },
    [
      alignValue,
      calculateValueFromPosition,
      injectCallbackAndSetState,
      onChange,
      onChangeAfter,
      onChangeBefore,
      replaceValue,
      value,
    ],
  );

  const handleMouseMove = React.useCallback(
    (event: MouseEvent): void => {
      const newValue = calculateValueFromPosition(event.pageX);
      pauseEvent(event);
      injectCallbackAndSetState(onChange, handleMove(newValue));
    },
    [calculateValueFromPosition, handleMove, injectCallbackAndSetState, onChange],
  );

  const handleMouseUp = React.useCallback(() => {
    setFocused(false);

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    if (onChangeAfter) {
      injectCallbackAndSetState(onChangeAfter, value, true);
    }
  }, [handleMouseMove, injectCallbackAndSetState, onChangeAfter, value]);

  const handleMouseDown = React.useCallback(
    (i: number) => (event: MouseEvent) => {
      // just allow left-click
      if (event.button === 0 && event.buttons !== 2) {
        setFocused(true);
        handleIndex.current = i;
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        pauseEvent(event);
        if (onChangeBefore) {
          injectCallbackAndSetState(onChangeBefore, value, true);
        }
      }
    },
    [handleMouseMove, handleMouseUp, injectCallbackAndSetState, onChangeBefore, value],
  );

  const handleOnTouchMove = React.useCallback(
    (event: TouchEvent) => {
      if (event.touches.length > 1) return;
      const newValue = calculateValueFromPosition(event.touches[0].pageX);
      pauseEvent(event);
      injectCallbackAndSetState(onChange, handleMove(newValue));
    },
    [calculateValueFromPosition, handleMove, injectCallbackAndSetState, onChange],
  );

  const handleTouchEnd = React.useCallback(() => {
    setFocused(false);
    window.removeEventListener("touchmove", handleOnTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
    if (onChangeAfter) {
      injectCallbackAndSetState(onChangeAfter, value, true);
    }
  }, [handleOnTouchMove, injectCallbackAndSetState, onChangeAfter, value]);

  const handleOnTouchStart = React.useCallback(
    (i: number) => (event: TouchEvent) => {
      if (event.touches.length <= 1) {
        setFocused(true);
        handleIndex.current = i;
        window.addEventListener("touchmove", handleOnTouchMove, {
          passive: false,
        });
        window.addEventListener("touchend", handleTouchEnd);
        stopPropagation(event);
        if (onChangeBefore) {
          injectCallbackAndSetState(onChangeBefore, value, true);
        }
      }
    },
    [handleOnTouchMove, handleTouchEnd, injectCallbackAndSetState, onChangeBefore, value],
  );

  const renderHandle = React.useCallback(
    (i?: number) => {
      const key = i && encodeURIComponent(i.toString());
      const index = i || 0;
      return (
        <Handle
          tabIndex="0"
          onTop={handleIndex.current === i}
          valueMax={maxValue}
          valueMin={minValue}
          onMouseDown={handleMouseDown(index)}
          onFocus={handleOnFocus(index)}
          onTouchStart={handleOnTouchStart(index)}
          value={value}
          ariaValueText={ariaValueText}
          ariaLabel={ariaLabel}
          hasHistogram={histogramLoading || !!histogramData}
          index={index}
          key={key}
          dataTest={`SliderHandle-${index}`}
        />
      );
    },
    [
      maxValue,
      minValue,
      handleMouseDown,
      handleOnFocus,
      handleOnTouchStart,
      value,
      ariaValueText,
      ariaLabel,
      histogramLoading,
      histogramData,
    ],
  );

  const renderHandles = () =>
    Array.isArray(value) ? value.map((_valueNow, index) => renderHandle(index)) : renderHandle();

  const renderSliderTexts = (biggerSpace: boolean) => {
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
  };

  const renderHeading = (hasHistogram: boolean) => {
    if (hasHistogram) {
      return (
        <Hide on={["smallMobile", "mediumMobile", "largeMobile"]} block>
          {renderSliderTexts(true)}
        </Hide>
      );
    }
    return renderSliderTexts(true);
  };

  if (histogramData) {
    const properHistogramLength = (maxValue - minValue + step) / step;

    if (histogramData.length !== properHistogramLength) {
      console.warn(
        `Warning: Length of histogramData array is ${histogramData.length}, but should be ${properHistogramLength}. This will cause broken visuals of the whole Histogram.`,
      );
    }
  }

  const sortedValue = sortArray(value);
  const hasHistogram = histogramLoading || !!histogramData;

  return (
    <StyledSlider data-test={dataTest} id={id}>
      {renderHeading(hasHistogram)}
      {hasHistogram && (
        <StyledSliderContent focused={focused}>
          {renderSliderTexts(false)}
          <Histogram
            data={histogramData}
            value={sortedValue}
            min={minValue}
            step={step}
            loading={histogramLoading}
            loadingText={histogramLoadingText}
          />
        </StyledSliderContent>
      )}
      <StyledSliderInput>
        <Bar
          ref={bar}
          onMouseDown={handleBarMouseDown}
          value={sortedValue}
          max={maxValue}
          min={minValue}
          hasHistogram={hasHistogram}
        />
        {renderHandles()}
      </StyledSliderInput>
    </StyledSlider>
  );
};

PureSlider.defaultProps = {
  theme: defaultTheme,
};

const ThemedSlider = withTheme(PureSlider);
ThemedSlider.displayName = "Slider";

export default ThemedSlider;
