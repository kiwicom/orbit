import * as React from "react";
import styled, { css, withTheme } from "styled-components";
import { warning } from "@adeira/js";

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
import type { State, Callback as SliderCallback, Props, Value, Label, Data } from "./types";

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

export class PureSlider extends React.PureComponent<SliderProps, State> {
  bar = React.createRef<HTMLElement>();

  static defaultProps = {
    theme: defaultTheme,
  };

  state = {
    value: this.props.defaultValue || DEFAULT_VALUES.VALUE,
    handleIndex: null,
    focused: false,
  };

  componentDidUpdate(prevProps: Props) {
    const { defaultValue = DEFAULT_VALUES.VALUE } = this.props;
    const { defaultValue: prevDefaultValue = DEFAULT_VALUES.VALUE } = prevProps;
    if (this.isNotEqual(prevDefaultValue, defaultValue)) {
      const newValue = Array.isArray(defaultValue)
        ? defaultValue.map(item => Number(item))
        : Number(defaultValue);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ value: newValue });
    }
  }

  pauseEvent = (
    event:
      | React.KeyboardEvent<HTMLDivElement>
      | React.MouseEvent<HTMLDivElement>
      | React.TouchEvent<HTMLDivElement>
      | React.FocusEvent<HTMLDivElement>,
  ) => {
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

  stopPropagation = (event: React.TouchEvent<HTMLDivElement>) => {
    if (typeof event.stopPropagation === "function") event.stopPropagation();
  };

  isNotEqual = (a: Value, b: Value) => {
    if (Array.isArray(a) && Array.isArray(b)) {
      return a.toString() !== b.toString();
    }
    return a !== b;
  };

  calculateValue = (ratio: number, addition?: boolean, deduction?: boolean) => {
    const { maxValue = DEFAULT_VALUES.MAX, minValue = DEFAULT_VALUES.MIN } = this.props;
    return Math.round(
      (maxValue - minValue + (addition ? 1 : 0)) * ratio + minValue - (deduction ? 1 : 0),
    );
  };

  calculateValueFromPosition = (pageX: number, throughClick?: boolean) => {
    // @ts-expect-error TODO
    const barRect = boundingClientRect(this.bar);
    if (barRect) {
      const {
        histogramData,
        histogramLoading,
        theme: { rtl },
      } = this.props;
      const { handleIndex, value } = this.state;
      const mousePosition = (rtl ? barRect?.right : pageX) - (rtl ? pageX : barRect?.left);
      const positionRatio = mousePosition / barRect.width;
      const hasHistogram = histogramLoading || !!histogramData;
      // when range slider
      if (Array.isArray(value)) {
        if (value[0] === value[value.length - 1]) {
          if (this.calculateValue(positionRatio, true, true) >= value[value.length - 1]) {
            return this.calculateValue(positionRatio, true, true);
          }
          return this.calculateValue(positionRatio, true);
        }
        if (this.isNotEqual(this.sortArray(value), value)) {
          if (handleIndex === 0) {
            return this.calculateValue(positionRatio, true, true);
          }
          return this.calculateValue(positionRatio, true);
        }
        const closestKey = this.findClosestKey(
          this.calculateValue(positionRatio),
          this.sortArray(value),
        );
        // when first handle of range slider or when clicked and it should move the first handle
        if (handleIndex === 0 || (throughClick && closestKey === 0)) {
          return this.calculateValue(positionRatio, true);
        }
      }
      // simple slider without histogram
      if (handleIndex === null && !hasHistogram) {
        return this.calculateValue(positionRatio);
      }
      return this.calculateValue(positionRatio, true, true);
    }
    return null;
  };

  sortArray = (arr: Value): Value => {
    if (Array.isArray(arr)) {
      return arr.slice().sort((a, b) => a - b);
    }
    return arr;
  };

  findClosestKey = (goal: number, value: Value) => {
    return Array.isArray(value)
      ? value.reduce((acc, curr, index) => {
          return Array.isArray(value) && Math.abs(curr - goal) < Math.abs(value[acc] - goal)
            ? index
            : acc;
        }, 0)
      : null;
  };

  moveValueByStep: (step: number, forcedValue?: number) => number | Array<number> = (
    step: number,
    forcedValue?: number,
  ) => {
    const { value, handleIndex } = this.state;
    if (Array.isArray(value)) {
      return this.replaceValue(
        forcedValue || this.alignValue(value[Number(handleIndex)] + step),
        Number(handleIndex),
      );
    }
    return forcedValue || this.alignValue(value + step);
  };

  handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (event.ctrlKey || event.shiftKey || event.altKey) return;
    const {
      step = DEFAULT_VALUES.STEP,
      minValue = DEFAULT_VALUES.MIN,
      maxValue = DEFAULT_VALUES.MAX,
      theme: { rtl },
    } = this.props;
    if (event.keyCode === KEY_CODE_MAP.ARROW_UP) {
      this.pauseEvent(event);
      if (this.props.onChange) {
        this.injectCallbackAndSetState(this.props.onChange, this.moveValueByStep(step));
      }
    }
    if (event.keyCode === KEY_CODE_MAP.ARROW_DOWN) {
      this.pauseEvent(event);
      if (this.props.onChange) {
        this.injectCallbackAndSetState(this.props.onChange, this.moveValueByStep(-step));
      }
    }
    if (event.keyCode === KEY_CODE_MAP.ARROW_RIGHT) {
      const switchStep = rtl ? -step : step;
      this.pauseEvent(event);
      if (this.props.onChange) {
        this.injectCallbackAndSetState(this.props.onChange, this.moveValueByStep(switchStep));
      }
    }
    if (event.keyCode === KEY_CODE_MAP.ARROW_LEFT) {
      const switchStep = rtl ? step : -step;
      this.pauseEvent(event);
      if (this.props.onChange) {
        this.injectCallbackAndSetState(this.props.onChange, this.moveValueByStep(switchStep));
      }
    }
    if (event.keyCode === KEY_CODE_MAP.HOME) {
      this.pauseEvent(event);
      if (this.props.onChange) {
        this.injectCallbackAndSetState(this.props.onChange, this.moveValueByStep(0, minValue));
      }
    }
    if (event.keyCode === KEY_CODE_MAP.END) {
      this.pauseEvent(event);
      if (this.props.onChange) {
        this.injectCallbackAndSetState(this.props.onChange, this.moveValueByStep(0, maxValue));
      }
    }
  };

  handleBlur = () => {
    this.setState({ focused: false });
    const { value } = this.state;
    // @ts-expect-error TODO fix this
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("focusout", this.handleBlur);
    if (this.props.onChangeAfter) {
      this.injectCallbackAndSetState(this.props.onChangeAfter, value, true);
    }
  };

  handleOnFocus = (i: number) => (event: React.FocusEvent<HTMLDivElement>) => {
    if (typeof i === "number") this.setState({ handleIndex: i });
    const { value } = this.state;
    this.setState({ focused: true });
    this.pauseEvent(event);
    // @ts-expect-error TODO fix this
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("focusout", this.handleBlur);
    if (this.props.onChangeBefore) {
      this.injectCallbackAndSetState(this.props.onChangeBefore, value, true);
    }
  };

  handleMove = (newValue: number) => {
    const { value, handleIndex } = this.state;
    if (newValue != null) {
      if (Array.isArray(value)) {
        return this.replaceValue(this.alignValue(newValue), Number(handleIndex));
      }
      return this.alignValue(newValue);
    }
    return null;
  };

  handleBarMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const { value } = this.state;
    this.setState({ handleIndex: null });
    const newValue = this.calculateValueFromPosition(event.pageX, true);
    const { onChangeBefore, onChange, onChangeAfter } = this.props;
    if (newValue) {
      if (Array.isArray(value)) {
        const index = this.findClosestKey(newValue, value);
        const replacedValue = this.replaceValue(this.alignValue(newValue), index || 0);
        if (onChangeBefore) this.injectCallbackAndSetState(onChangeBefore, value, true);
        if (onChange) this.injectCallbackAndSetState(onChange, replacedValue);
        if (onChangeAfter) this.injectCallbackAndSetState(onChangeAfter, replacedValue);
      } else {
        const alignedValue = this.alignValue(newValue);
        if (onChangeBefore) this.injectCallbackAndSetState(onChangeBefore, value, true);
        if (onChange) this.injectCallbackAndSetState(onChange, alignedValue);
        if (onChangeAfter) this.injectCallbackAndSetState(onChangeAfter, alignedValue);
      }
    }
  };

  injectCallbackAndSetState: (
    callback: SliderCallback,
    newValue: Value,
    forced?: boolean,
  ) => void = (callback: SliderCallback, newValue: Value, forced?: boolean) => {
    const { value } = this.state;
    if (newValue != null) {
      if (this.isNotEqual(newValue, value) || forced) {
        this.setState({ value: newValue });
        if (callback) {
          callback(this.sortArray(newValue));
        }
      }
    }
  };

  handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const newValue = this.calculateValueFromPosition(event.pageX);
    this.pauseEvent(event);
    // @ts-expect-error TODO fix this
    this.injectCallbackAndSetState(this.props.onChange, this.handleMove(newValue));
  };

  handleMouseUp = () => {
    const { value } = this.state;
    this.setState({ focused: false });
    // @ts-expect-error TODO fix this
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
    if (this.props.onChangeAfter) {
      this.injectCallbackAndSetState(this.props.onChangeAfter, value, true);
    }
  };

  handleMouseDown = (i: number) => (event: React.MouseEvent<HTMLDivElement>) => {
    // just allow left-click
    if (event.button === 0 && event.buttons !== 2) {
      const { value } = this.state;
      this.setState({ focused: true });
      if (typeof i === "number") this.setState({ handleIndex: i });
      // @ts-expect-error TODO fix this
      window.addEventListener("mousemove", this.handleMouseMove);
      window.addEventListener("mouseup", this.handleMouseUp);
      this.pauseEvent(event);
      if (this.props.onChangeBefore) {
        this.injectCallbackAndSetState(this.props.onChangeBefore, value, true);
      }
    }
  };

  handleOnTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length > 1) return;
    const newValue = this.calculateValueFromPosition(event.touches[0].pageX);
    this.pauseEvent(event);
    // @ts-expect-error TODO fix this
    this.injectCallbackAndSetState(this.props.onChange, this.handleMove(newValue));
  };

  handleTouchEnd = () => {
    const { value } = this.state;
    this.setState({ focused: false });
    // @ts-expect-error TODO fix this
    window.removeEventListener("touchmove", this.handleOnTouchMove);
    window.removeEventListener("touchend", this.handleTouchEnd);
    if (this.props.onChangeAfter) {
      this.injectCallbackAndSetState(this.props.onChangeAfter, value, true);
    }
  };

  handleOnTouchStart = (i: number) => (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length <= 1) {
      this.setState({ focused: true });
      const { value } = this.state;
      if (typeof i === "number") this.setState({ handleIndex: i });
      // @ts-expect-error TODO fix this
      window.addEventListener("touchmove", this.handleOnTouchMove, {
        passive: false,
      });
      window.addEventListener("touchend", this.handleTouchEnd);
      this.stopPropagation(event);
      if (this.props.onChangeBefore) {
        this.injectCallbackAndSetState(this.props.onChangeBefore, value, true);
      }
    }
  };

  alignValueToStep = (value: number) => {
    const { step = DEFAULT_VALUES.STEP } = this.props;
    if (step === 1) return value;
    const gap = value % step;
    if (gap === 0) return value;
    if (gap * 2 >= step) {
      return value - gap + step;
    }
    return value - gap;
  };

  alignValueToMaxMin = (value: number) => {
    const { maxValue = DEFAULT_VALUES.MAX, minValue = DEFAULT_VALUES.MIN } = this.props;
    if (value > maxValue) {
      return maxValue;
    }
    if (value < minValue) {
      return minValue;
    }
    return value;
  };

  alignValue = (value: number) => this.alignValueToMaxMin(this.alignValueToStep(value));

  replaceValue = (newValue: number, index: number) => {
    const { value } = this.state;
    if (index == null || !Array.isArray(value)) return newValue;
    return value.map((item, key) => (key === index ? newValue : item));
  };

  renderHandle = (valueNow: number, i?: number) => {
    const {
      minValue = DEFAULT_VALUES.MIN,
      maxValue = DEFAULT_VALUES.MAX,
      histogramData,
      histogramLoading,
      ariaValueText,
      ariaLabel,
    } = this.props;
    const { handleIndex, value } = this.state;
    const key = i && encodeURIComponent(i.toString());
    const index = i || 0;
    return (
      <Handle
        tabIndex="0"
        onTop={handleIndex === i}
        valueMax={maxValue}
        valueMin={minValue}
        onMouseDown={this.handleMouseDown(index)}
        onFocus={this.handleOnFocus(index)}
        onTouchStart={this.handleOnTouchStart(index)}
        value={value}
        ariaValueText={ariaValueText}
        ariaLabel={ariaLabel}
        hasHistogram={histogramLoading || !!histogramData}
        index={index}
        key={key}
        dataTest={`SliderHandle-${index}`}
      />
    );
  };

  renderHandles = () => {
    const { value } = this.state;
    return Array.isArray(value)
      ? value.map((valueNow, i) => this.renderHandle(valueNow, i))
      : this.renderHandle(value);
  };

  renderSliderTexts = (biggerSpace: boolean) => {
    const { label, valueDescription, histogramDescription } = this.props;
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

  renderHeading = (hasHistogram: boolean) => {
    if (hasHistogram) {
      return (
        <Hide on={["smallMobile", "mediumMobile", "largeMobile"]} block>
          {this.renderSliderTexts(true)}
        </Hide>
      );
    }
    return this.renderSliderTexts(true);
  };

  render() {
    const {
      minValue = DEFAULT_VALUES.MIN,
      maxValue = DEFAULT_VALUES.MAX,
      histogramData,
      histogramLoading = false,
      histogramLoadingText,
      dataTest,
      id,
      step = DEFAULT_VALUES.STEP,
    } = this.props;
    if (histogramData) {
      const properHistogramLength = (maxValue - minValue + step) / step;
      warning(
        histogramData.length === properHistogramLength,
        `Warning: Length of histogramData array is ${histogramData.length}, but should be ${properHistogramLength}. This will cause broken visuals of the whole Histogram.`,
      );
    }
    const { value, focused } = this.state;
    const sortedValue = this.sortArray(value);
    const hasHistogram = histogramLoading || !!histogramData;
    return (
      <StyledSlider data-test={dataTest} id={id}>
        {this.renderHeading(hasHistogram)}
        {hasHistogram && (
          <StyledSliderContent focused={focused}>
            {this.renderSliderTexts(false)}
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
            // @ts-expect-error todo
            ref={this.bar}
            onMouseDown={this.handleBarMouseDown}
            value={sortedValue}
            max={maxValue}
            min={minValue}
            hasHistogram={hasHistogram}
          />
          {this.renderHandles()}
        </StyledSliderInput>
      </StyledSlider>
    );
  }
}

const ThemedSlider = withTheme(PureSlider);
ThemedSlider.displayName = "Slider";
export default ThemedSlider;
