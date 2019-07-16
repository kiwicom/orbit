// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import Text from "../Text";
import Heading from "../Heading";
import Stack from "../Stack";
import Hide from "../Hide";
import Handle from "./components/Handle";
import Bar from "./components/Bar";
import getBoundingClientRect from "./utils/getBoundingClientRect";
import calculateBarPosition from "./utils/calculateBarPosition";
import KEY_CODE_MAP from "../common/keyMaps";
import DEFAULT_VALUES from "./consts";
import Histogram from "./components/Histogram";
import defaultTheme from "../defaultTheme";
import mq from "../utils/mediaQuery";

import type { State, SliderCallback, Props, Value } from "./index";

const StyledSlider = styled.div`
  position: relative;
`;

StyledSlider.defaultProps = {
  theme: defaultTheme,
};

const StyledSliderContent = styled.div`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 10px;

  ${mq.largeMobile(css`
    width: calc(100% + 48px);
    z-index: 10;
    position: absolute;
    bottom: -16px;
    left: -24px;
    right: -24px;
    opacity: 0;
    visibility: hidden;
    padding: 12px 24px 50px 24px;
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    transition: all ${({ theme }) => theme.orbit.durationFast} ease-in-out;
    background: transparent;
    ${({ focused, theme }) =>
      focused &&
      css`
        visibility: visible;
        opacity: 1;
        background: ${theme.orbit.paletteWhite};
        box-shadow: 0 2px 4px 0 ${convertHexToRgba(theme.orbit.paletteInkLight, 24)},
          0 4px 12px 0 ${convertHexToRgba(theme.orbit.paletteInkLight, 32)};
      `};
  `)};
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

const isNotEqual = (a: Value, b: Value) => {
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.map((item, index) => b[index] === item).indexOf(false) !== -1;
  }
  return a !== b;
};

class Slider extends React.PureComponent<Props, State> {
  bar: { current: React$ElementRef<*> } = React.createRef();

  state = {
    value: this.props.defaultValue || DEFAULT_VALUES.VALUE,
    handleIndex: null,
    focused: false,
  };

  componentDidUpdate(prevProps: Props) {
    const { defaultValue } = this.props;
    if (isNotEqual(prevProps.defaultValue, defaultValue)) {
      const newValue = Array.isArray(defaultValue)
        ? defaultValue.map(item => Number(item))
        : Number(defaultValue);
      // eslint-disable-nextline react/no-did-update-set-state
      this.setState({ value: newValue });
    }
  }

  pauseEvent = (
    event: SyntheticKeyboardEvent<HTMLDivElement> | SyntheticMouseEvent<HTMLDivElement>,
  ) => {
    if (event.stopPropagation) event.stopPropagation();
    if (event.preventDefault) event.preventDefault();
  };

  stopPropagation = (event: SyntheticTouchEvent<HTMLDivElement>) => {
    if (event.stopPropagation) event.stopPropagation();
  };

  calculateValueFromPosition = (pageX: number) => {
    const barRect = getBoundingClientRect(this.bar);
    if (barRect) {
      const { max = DEFAULT_VALUES.MAX, min = DEFAULT_VALUES.MIN } = this.props;
      const mousePosition = pageX - barRect.left;
      const positionRatio = mousePosition / barRect.width;
      return Math.round((max - min) * positionRatio + min);
    }
    return null;
  };

  findClosestKey = (goal: number) => {
    const { value } = this.state;
    return Array.isArray(value)
      ? value.reduce((acc, curr, index) => {
          return Math.abs(curr - goal) < Math.abs(value[acc] - goal) ? index : acc;
        }, 0)
      : null;
  };

  moveValueByStep = (step: number) => {
    const { value, handleIndex } = this.state;
    if (Array.isArray(value)) {
      return this.replaceValue(
        this.alignValue(value[Number(handleIndex)] + step),
        Number(handleIndex),
      );
    }
    return this.alignValue(value + step);
  };

  handleKeyDown = (event: SyntheticKeyboardEvent<HTMLDivElement>) => {
    if (event.ctrlKey || event.shiftKey || event.altKey) return;
    const {
      step = DEFAULT_VALUES.STEP,
      min = DEFAULT_VALUES.MIN,
      max = DEFAULT_VALUES.MAX,
    } = this.props;
    if (event.keyCode === KEY_CODE_MAP.ARROW_UP || event.keyCode === KEY_CODE_MAP.ARROW_RIGHT) {
      this.pauseEvent(event);
      this.injectCallbackAndSetState(this.props.onChange, this.moveValueByStep(step));
    }
    if (event.keyCode === KEY_CODE_MAP.ARROW_DOWN || event.keyCode === KEY_CODE_MAP.ARROW_LEFT) {
      this.pauseEvent(event);
      this.injectCallbackAndSetState(this.props.onChange, this.moveValueByStep(-step));
    }
    if (event.keyCode === KEY_CODE_MAP.HOME) {
      this.pauseEvent(event);
      this.injectCallbackAndSetState(this.props.onChange, min);
    }
    if (event.keyCode === KEY_CODE_MAP.END) {
      this.pauseEvent(event);
      this.injectCallbackAndSetState(this.props.onChange, max);
    }
  };

  handleBlur = () => {
    this.setState({ focused: false });
    const { value } = this.state;
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("focusout", this.handleBlur);
    this.injectCallbackAndSetState(this.props.onChangeAfter, value, true);
  };

  handleOnFocus = (i: ?number) => (event: SyntheticKeyboardEvent<HTMLDivElement>) => {
    if (typeof i === "number") this.setState({ handleIndex: i });
    const { value } = this.state;
    this.setState({ focused: true });
    this.pauseEvent(event);
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("focusout", this.handleBlur);
    this.injectCallbackAndSetState(this.props.onBeforeChange, value, true);
  };

  handleMove = (newValue: ?number) => {
    const { value, handleIndex } = this.state;
    if (newValue != null) {
      if (Array.isArray(value)) {
        return this.replaceValue(this.alignValue(newValue), Number(handleIndex));
      }
      return this.alignValue(newValue);
    }
    return null;
  };

  handleBarMouseDown = (event: SyntheticMouseEvent<HTMLDivElement>) => {
    const { value } = this.state;
    const newValue = this.calculateValueFromPosition(event.pageX);
    if (newValue) {
      if (Array.isArray(value)) {
        const index = this.findClosestKey(newValue);
        this.injectCallbackAndSetState(
          this.props.onChange,
          this.replaceValue(this.alignValue(newValue), index),
        );
      } else {
        this.injectCallbackAndSetState(this.props.onChange, this.alignValue(newValue));
      }
    }
  };

  injectCallbackAndSetState = (
    callback: ?SliderCallback,
    newValue: ?Value,
    forced: ?boolean = false,
  ) => {
    const { value } = this.state;
    if (newValue != null) {
      if (isNotEqual(newValue, value) || forced) {
        this.setState({ value: newValue });
        if (callback) {
          callback(newValue);
        }
      }
    }
  };

  handleMouseMove = (event: SyntheticMouseEvent<HTMLDivElement>) => {
    const newValue = this.calculateValueFromPosition(event.pageX);
    this.pauseEvent(event);
    this.injectCallbackAndSetState(this.props.onChange, this.handleMove(newValue));
  };

  handleMouseUp = () => {
    const { value } = this.state;
    this.setState({ focused: false });
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
    this.injectCallbackAndSetState(this.props.onChangeAfter, value, true);
  };

  handleMouseDown = (i: ?number) => (event: SyntheticMouseEvent<HTMLDivElement>) => {
    // just allow left-click
    if (event.button === 0 && event.buttons !== 2) {
      const { value } = this.state;
      this.setState({ focused: true });
      if (typeof i === "number") this.setState({ handleIndex: i });
      window.addEventListener("mousemove", this.handleMouseMove);
      window.addEventListener("mouseup", this.handleMouseUp);
      this.pauseEvent(event);
      this.injectCallbackAndSetState(this.props.onBeforeChange, value, true);
    }
  };

  handleOnTouchMove = (event: SyntheticTouchEvent<HTMLDivElement>) => {
    if (event.touches.length > 1) return;
    const newValue = this.calculateValueFromPosition(event.touches[0].pageX);
    this.stopPropagation(event);
    this.injectCallbackAndSetState(this.props.onChange, this.handleMove(newValue));
  };

  handleTouchEnd = () => {
    const { value } = this.state;
    window.removeEventListener("touchmove", this.handleOnTouchMove);
    window.removeEventListener("touchend", this.handleTouchEnd);
    this.injectCallbackAndSetState(this.props.onChangeAfter, value, true);
  };

  handleOnTouchStart = (i: ?number) => (event: SyntheticTouchEvent<HTMLDivElement>) => {
    if (event.touches.length <= 1) {
      const { value } = this.state;
      if (typeof i === "number") this.setState({ handleIndex: i });
      window.addEventListener("touchmove", this.handleOnTouchMove);
      window.addEventListener("touchend", this.handleTouchEnd);
      this.stopPropagation(event);
      this.injectCallbackAndSetState(this.props.onBeforeChange, value, true);
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
    // TODO: when current value is 1 and next should be 6, needs to be 5
  };

  alignValueToMaxMin = (value: number) => {
    const { max = DEFAULT_VALUES.MAX, min = DEFAULT_VALUES.MIN } = this.props;
    if (value > max) {
      return max;
    }
    if (value < min) {
      return min;
    }
    return value;
  };

  alignValue = (value: number) => this.alignValueToMaxMin(this.alignValueToStep(value));

  replaceValue = (newValue: number, index: ?number) => {
    const { value } = this.state;
    if (index == null || !Array.isArray(value)) return newValue;
    return value.map<number>((item, key) => (key === index ? newValue : item));
  };

  renderHandle = (value: number, i: ?number) => {
    const { min = DEFAULT_VALUES.MIN, max = DEFAULT_VALUES.MAX } = this.props;
    const { handleIndex } = this.state;
    return (
      <Handle
        tabIndex="0"
        onTop={handleIndex === i}
        valueMax={max}
        valueMin={min}
        valueNow={value}
        onMouseDown={this.handleMouseDown(i)}
        onFocus={this.handleOnFocus(i)}
        onTouchStart={this.handleOnTouchStart(i)}
        index={i}
      />
    );
  };

  renderHandles = () => {
    const { value } = this.state;
    return Array.isArray(value)
      ? value.map<React.Node>((handle, i) => this.renderHandle(value[i], i))
      : this.renderHandle(value);
  };

  renderSliderTexts = (biggerSpace: boolean) => {
    const { label, description, chosenText } = this.props;
    if (!(label || description || chosenText)) return null;
    return (
      <Stack direction="row" spacing="none" spaceAfter={biggerSpace ? "medium" : "small"}>
        {(label || description) && (
          <Stack direction="column" spacing="none" basis="60%" grow>
            {label && (
              <Heading type="title4" element="div">
                {label}
              </Heading>
            )}
            {description && (
              <Text type="secondary" size="small">
                {description}
              </Text>
            )}
          </Stack>
        )}
        {chosenText && (
          <Stack shrink justify="end" grow={false}>
            <Text type="primary" size="small">
              {chosenText}
            </Text>
          </Stack>
        )}
      </Stack>
    );
  };

  renderHeading = (hasHistogram: boolean) => {
    if (hasHistogram) {
      return (
        <Hide on={["smallMobile", "mediumMobile"]} block>
          {this.renderSliderTexts(true)}
        </Hide>
      );
    }
    return this.renderSliderTexts(true);
  };

  render() {
    const { min = DEFAULT_VALUES.MIN, max = DEFAULT_VALUES.MAX, histogramData } = this.props;
    const { value, focused } = this.state;
    return (
      <StyledSlider>
        {this.renderHeading(!!histogramData)}
        {histogramData && (
          <StyledSliderContent focused={focused}>
            {this.renderSliderTexts(false)}
            <Histogram data={histogramData} value={value} min={min} />
          </StyledSliderContent>
        )}
        <StyledSliderInput>
          <Bar
            ref={this.bar}
            onMouseDown={this.handleBarMouseDown}
            {...calculateBarPosition(value, max, min)}
          />
          {this.renderHandles()}
        </StyledSliderInput>
      </StyledSlider>
    );
  }
}

export default Slider;
