// @flow
import * as React from "react";
import styled from "styled-components";

import Text from "../Text";
import Heading from "../Heading";
import Handle from "./components/Handle";
import Bar from "./components/Bar";
import getBoundingClientRect from "./utils/getBoundingClientRect";
import calculateBarPosition from "./utils/calculateBarPosition";
import KEY_CODE_MAP from "../common/keyMaps";
import DEFAULT_VALUES from "./consts";
import Histogram from "./components/Histogram";

import type { State, Props } from "./index";

const StyledSlider = styled.div`
  position: relative;
  background: white;
  padding: 16px 16px 16px 12px;
`;

const StyledSliderInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  margin-top: 10px;
`;

class Slider extends React.PureComponent<Props, State> {
  container: { current: React$ElementRef<*> } = React.createRef();

  bar: { current: React$ElementRef<*> } = React.createRef();

  timeout = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || DEFAULT_VALUES.VALUE,
      handleIndex: null,
      parentWidth: null,
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(this.calculateWidth, 10);
    window.addEventListener("resize", this.calculateWidth);
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    window.removeEventListener("resize", this.calculateWidth);
  }

  calculateWidth = () => {
    const containerRect = getBoundingClientRect(this.container);
    if (containerRect) {
      this.setState({ parentWidth: containerRect.width });
    }
  };

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
      const newValue = this.replaceValue(
        this.alignValue(value[Number(handleIndex)] + step),
        Number(handleIndex),
      );
      this.setState({ value: newValue });
    } else {
      const newValue = this.alignValue(value + step);
      this.setState({ value: newValue });
    }
    this.injectCallback(this.props.onChange);
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
      this.moveValueByStep(step);
    }
    if (event.keyCode === KEY_CODE_MAP.ARROW_DOWN || event.keyCode === KEY_CODE_MAP.ARROW_LEFT) {
      this.pauseEvent(event);
      this.moveValueByStep(-step);
    }
    if (event.keyCode === KEY_CODE_MAP.HOME) {
      this.pauseEvent(event);
      this.setState({ value: min });
      this.injectCallback(this.props.onChange);
    }
    if (event.keyCode === KEY_CODE_MAP.END) {
      this.pauseEvent(event);
      this.setState({ value: max });
      this.injectCallback(this.props.onChange);
    }
  };

  handleBlur = () => {
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("focusout", this.handleBlur);
    this.injectCallback(this.props.onChangeAfter);
  };

  handleOnFocus = (i: ?number) => (event: SyntheticKeyboardEvent<HTMLDivElement>) => {
    if (typeof i === "number") this.setState({ handleIndex: i });
    this.pauseEvent(event);
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("focusout", this.handleBlur);
    this.injectCallback(this.props.onBeforeChange);
  };

  handleMove = (newValue: ?number) => {
    const { value, handleIndex } = this.state;
    if (newValue) {
      if (Array.isArray(value)) {
        const replacedValue = this.replaceValue(this.alignValue(newValue), Number(handleIndex));
        this.setState({ value: replacedValue });
      } else {
        this.setState({ value: this.alignValue(newValue) });
      }
    }
  };

  handleBarMouseDown = (event: SyntheticMouseEvent<HTMLDivElement>) => {
    const { value } = this.state;
    const newValue = this.calculateValueFromPosition(event.pageX);
    if (newValue) {
      if (Array.isArray(value)) {
        const index = this.findClosestKey(newValue);
        const replacedValue = this.replaceValue(this.alignValue(newValue), index);
        this.setState({ value: replacedValue });
      } else {
        this.setState({ value: this.alignValue(newValue) });
      }
    }
  };

  injectCallback = (callback: ?(number | number[]) => void) => {
    if (callback) callback(this.state.value);
  };

  handleMouseMove = (event: SyntheticMouseEvent<HTMLDivElement>) => {
    const newValue = this.calculateValueFromPosition(event.pageX);
    this.pauseEvent(event);
    this.handleMove(newValue);
    this.injectCallback(this.props.onChange);
  };

  handleMouseUp = () => {
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
    this.injectCallback(this.props.onChangeAfter);
  };

  handleMouseDown = (i: ?number) => (event: SyntheticMouseEvent<HTMLDivElement>) => {
    // just allow left-click
    if (event.button === 0 && event.buttons !== 2) {
      if (typeof i === "number") this.setState({ handleIndex: i });
      window.addEventListener("mousemove", this.handleMouseMove);
      window.addEventListener("mouseup", this.handleMouseUp);
      this.pauseEvent(event);
      this.injectCallback(this.props.onBeforeChange);
    }
  };

  handleOnTouchMove = (event: SyntheticTouchEvent<HTMLDivElement>) => {
    if (event.touches.length > 1) return;
    const newValue = this.calculateValueFromPosition(event.touches[0].pageX);
    this.stopPropagation(event);
    this.handleMove(newValue);
    this.injectCallback(this.props.onChange);
  };

  handleTouchEnd = () => {
    window.removeEventListener("touchmove", this.handleOnTouchMove);
    window.removeEventListener("touchend", this.handleTouchEnd);
    this.injectCallback(this.props.onChangeAfter);
  };

  handleOnTouchStart = (i: ?number) => (event: SyntheticTouchEvent<HTMLDivElement>) => {
    if (event.touches.length > 1) return;
    if (typeof i === "number") this.setState({ handleIndex: i });
    window.addEventListener("touchmove", this.handleOnTouchMove);
    window.addEventListener("touchend", this.handleTouchEnd);
    this.stopPropagation(event);
    this.injectCallback(this.props.onBeforeChange);
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
    const { parentWidth, handleIndex } = this.state;
    return (
      <Handle
        tabIndex={0}
        onTop={handleIndex === i}
        valueMax={max}
        valueMin={min}
        valueNow={value}
        onMouseDown={this.handleMouseDown(i)}
        onFocus={this.handleOnFocus(i)}
        onTouchStart={this.handleOnTouchStart(i)}
        parentWidth={parentWidth}
      />
    );
  };

  renderHandles = () => {
    const { value } = this.state;
    return Array.isArray(value)
      ? value.map<React$Node>((handle, i) => this.renderHandle(value[i], i))
      : this.renderHandle(value);
  };

  render() {
    const {
      label,
      description,
      min = DEFAULT_VALUES.MIN,
      max = DEFAULT_VALUES.MAX,
      histogramData,
    } = this.props;
    const { value, parentWidth } = this.state;
    return (
      <StyledSlider>
        {label && <Heading type="title4">{label}</Heading>}
        {description && (
          <Text type="secondary" size="small" spaceAfter={histogramData ? "normal" : "medium"}>
            {description}
          </Text>
        )}
        {histogramData && <Histogram data={histogramData} value={value} />}
        <StyledSliderInput ref={this.container}>
          <Bar
            ref={this.bar}
            onMouseDown={this.handleBarMouseDown}
            {...calculateBarPosition(parentWidth, value, max, min)}
          />
          {this.renderHandles()}
        </StyledSliderInput>
      </StyledSlider>
    );
  }
}

export default Slider;
