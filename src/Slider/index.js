// @flow
import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import styled from "styled-components";

import Text from "../Text";
import Heading from "../Heading";
import Handle from "./components/Handle";
import Bar from "./components/Bar";
import getBoundingClientRect from "./utils/getBoundingClientRect";
import calculateBarPosition from "./utils/calculateBarPosition";
import KEY_CODE_MAP from "../common/keyMaps";

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
  margin-top: 16px;
`;

class Slider extends React.PureComponent {
  container = React.createRef();

  bar = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || 1,
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

  pauseEvent = e => {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
  };

  stopPropagation = e => {
    if (e.stopPropagation) e.stopPropagation();
  };

  moveValueByStep = step => {
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

  handleKeyDown = event => {
    if (event.ctrlKey || event.shiftKey || event.altKey) return;
    const { step = 1, min = 1, max = 100 } = this.props;
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

  handleOnFocus = i => e => {
    this.setState({ handleIndex: i });
    this.pauseEvent(e);
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("focusout", this.handleBlur);
    this.injectCallback(this.props.onBeforeChange);
  };

  calculateValueFromPosition = pageX => {
    const { max = 100, min = 1 } = this.props;
    const barRect = getBoundingClientRect(this.bar);
    const mousePosition = pageX - barRect.left;
    const positionRatio = mousePosition / barRect.width;
    return Math.round((max - min) * positionRatio + min);
  };

  findClosestKey = goal =>
    this.state.value.reduce((acc, curr, index) => {
      return Math.abs(curr - goal) < Math.abs(this.state.value[acc] - goal) ? index : acc;
    }, 0);

  handleMove = newValue => {
    const { value, handleIndex } = this.state;
    if (Array.isArray(value)) {
      const replacedValue = this.replaceValue(this.alignValue(newValue), Number(handleIndex));
      this.setState({ value: replacedValue });
    } else {
      this.setState({ value: this.alignValue(newValue) });
    }
  };

  handleBarMouseDown = event => {
    const { value } = this.state;
    const newValue = this.calculateValueFromPosition(event.pageX);
    if (Array.isArray(value)) {
      const index = this.findClosestKey(newValue);
      const replacedValue = this.replaceValue(this.alignValue(newValue), index);
      this.setState({ value: replacedValue });
    } else {
      this.setState({ value: this.alignValue(newValue) });
    }
  };

  handleMouseMove = event => {
    const newValue = this.calculateValueFromPosition(event.pageX);
    this.pauseEvent(event);
    this.handleMove(newValue);
    this.injectCallback(this.props.onChange);
  };

  injectCallback = callback => {
    if (callback) callback(this.state.value);
  };

  handleMouseUp = () => {
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
    this.injectCallback(this.props.onChangeAfter);
  };

  handleMouseDown = i => event => {
    // just allow left-click
    if (event.button === 0 && event.buttons !== 2) {
      if (typeof i === "number") this.setState({ handleIndex: i });
      window.addEventListener("mousemove", this.handleMouseMove);
      window.addEventListener("mouseup", this.handleMouseUp);
      this.pauseEvent(event);
      this.injectCallback(this.props.onBeforeChange);
    }
  };

  handleOnTouchMove = event => {
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

  handleOnTouchStart = i => event => {
    if (event.touches.length > 1) return;
    if (typeof i === "number") this.setState({ handleIndex: i });
    window.addEventListener("touchmove", this.handleOnTouchMove);
    window.addEventListener("touchend", this.handleTouchEnd);
    this.stopPropagation(event);
    this.injectCallback(this.props.onBeforeChange);
  };

  alignValueToStep = value => {
    const { step = 1 } = this.props;
    if (step === 1) return value;
    const gap = value % step;
    if (gap === 0) return value;
    if (gap * 2 >= step) {
      return value - gap + step;
    }
    return value - gap;
    // TODO: when current value is 1 and next should be 6, needs to be 5
  };

  alignValueToMaxMin = value => {
    const { max = 100, min = 1 } = this.props;
    if (value > max) {
      return max;
    }
    if (value < min) {
      return min;
    }
    return value;
  };

  alignValue = newValue => this.alignValueToMaxMin(this.alignValueToStep(newValue));

  replaceValue = (newValue, index) => {
    const { value } = this.state;
    if (index == null || !Array.isArray(value)) return newValue;
    return value.map((item, key) => (key === index ? newValue : item));
  };

  renderHandle = (value, i) => {
    const { min = 1, max = 100 } = this.props;
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
      ? value.map((handle, i) => this.renderHandle(value[i], i))
      : this.renderHandle(value);
  };

  render() {
    const { label, description, min = 1, max = 100 } = this.props;
    const { value, parentWidth } = this.state;
    return (
      <StyledSlider>
        {label && <Heading type="title4">{label}</Heading>}
        {description && (
          <Text type="secondary" size="small">
            {description}
          </Text>
        )}
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
