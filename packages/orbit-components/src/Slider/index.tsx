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
import type { Props, Value } from "./types";
import {
  sortArray,
  findClosestKey,
  pauseEvent,
  stopPropagation,
  replaceValue,
  alignValue,
  injectCallbackAndSetState,
  moveValueByExtraStep,
  calculateValueFromPosition,
  isNotEqual,
} from "./utils";

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
        background: ${theme.orbit.paletteWhiteNormal};
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
  const valueRef = React.useRef(value);
  const defaultRef = React.useRef(defaultValue);
  const handleIndex = React.useRef<number | null>(null);
  const [focused, setFocused] = React.useState(false);
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
    const eventCode = Number(event.code);
    if (eventCode === KEY_CODE_MAP.ARROW_UP) {
      pauseEvent(event);
      if (onChange) {
        injectCallbackAndSetState(
          updateValue,
          onChange,
          moveValueByExtraStep(value, maxValue, minValue, step, handleIndex.current, step),
        );
      }
    }
    if (eventCode === KEY_CODE_MAP.ARROW_DOWN) {
      pauseEvent(event);
      if (onChange) {
        injectCallbackAndSetState(
          updateValue,
          onChange,
          moveValueByExtraStep(value, maxValue, minValue, step, handleIndex.current, -step),
        );
      }
    }
    if (eventCode === KEY_CODE_MAP.ARROW_RIGHT) {
      const switchStep = rtl ? -step : step;
      pauseEvent(event);
      if (onChange) {
        injectCallbackAndSetState(
          updateValue,
          onChange,
          moveValueByExtraStep(value, maxValue, minValue, step, handleIndex.current, switchStep),
        );
      }
    }
    if (eventCode === KEY_CODE_MAP.ARROW_LEFT) {
      const switchStep = rtl ? step : -step;
      pauseEvent(event);
      if (onChange) {
        injectCallbackAndSetState(
          updateValue,
          onChange,
          moveValueByExtraStep(value, maxValue, minValue, step, handleIndex.current, switchStep),
        );
      }
    }
    if (eventCode === KEY_CODE_MAP.HOME) {
      pauseEvent(event);
      if (onChange) {
        injectCallbackAndSetState(
          updateValue,
          onChange,
          moveValueByExtraStep(value, maxValue, minValue, step, handleIndex.current, 0, minValue),
        );
      }
    }
    if (eventCode === KEY_CODE_MAP.END) {
      pauseEvent(event);
      if (onChange) {
        injectCallbackAndSetState(
          updateValue,
          onChange,
          moveValueByExtraStep(value, maxValue, minValue, step, handleIndex.current, 0, maxValue),
        );
      }
    }
  };

  const handleBlur = () => {
    setFocused(false);
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("focusout", handleBlur);
    if (onChangeAfter) {
      injectCallbackAndSetState(updateValue, onChangeAfter, value);
    }
  };

  const handleOnFocus = (i: number) => (event: FocusEvent) => {
    handleIndex.current = i;
    setFocused(true);
    pauseEvent(event);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("focusout", handleBlur);
    if (onChangeBefore) {
      injectCallbackAndSetState(updateValue, onChangeBefore, value);
    }
  };

  const handleMove = (newValue: number | null) => {
    if (newValue != null) {
      if (Array.isArray(value)) {
        return replaceValue(
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
        const replacedValue = replaceValue(
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

  const handleMouseDown = (i: number) => (event: MouseEvent) => {
    // just allow left-click
    if (event.button === 0 && event.buttons !== 2) {
      setFocused(true);
      handleIndex.current = i;
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      pauseEvent(event);
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

  const handleOnTouchStart = (i: number) => (event: TouchEvent) => {
    if (event.touches.length <= 1) {
      setFocused(true);
      handleIndex.current = i;
      window.addEventListener("touchmove", handleOnTouchMove, {
        passive: false,
      });
      window.addEventListener("touchend", handleTouchEnd);
      stopPropagation(event);
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
        tabIndex="0"
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
    <StyledSlider data-test={dataTest} id={id}>
      {hasHistogram ? (
        <>
          <Hide on={["smallMobile", "mediumMobile", "largeMobile"]} block>
            {renderSliderTexts(true)}
          </Hide>
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
        </>
      ) : (
        renderSliderTexts(true)
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
