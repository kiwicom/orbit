// @flow
import * as React from "react";

import { SIZE_OPTIONS } from "../InputField/consts";
import KEY_CODE_MAP from "../common/keyMaps";
import InputStepperStateless from "./InputStepperStateless";
import validateIncrement from "./helpers/validateIncrement";
import validateDecrement from "./helpers/validateDecrement";

import type { Props, State, ForwardedRef } from "./index";

class InputStepper extends React.Component<Props & ForwardedRef, State> {
  state = {
    value: this.props.defaultValue || 0,
  };

  setValueAndInjectCallback = (value: number) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
    this.setState({ value });
  };

  incrementCounter = () => {
    const { value } = this.state;
    const { maxValue = Number.POSITIVE_INFINITY, step = 1 } = this.props;

    const increment = validateIncrement({ value, maxValue, step });

    if (increment || increment === 0) {
      this.setValueAndInjectCallback(increment);
    }
  };

  decrementCounter = () => {
    const { value } = this.state;
    const { minValue = Number.NEGATIVE_INFINITY, step = 1 } = this.props;

    const decrement = validateDecrement({ value, minValue, step });

    if (decrement || decrement === 0) {
      this.setValueAndInjectCallback(decrement);
    }
  };

  handleIncrementCounter = (ev?: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (ev && ev.type === "click") {
      this.incrementCounter();
    }
    if (ev && ev.type === "keydown") {
      if (ev.keyCode === KEY_CODE_MAP.SPACE) {
        ev.preventDefault();
        this.incrementCounter();
      } else if (ev.keyCode === KEY_CODE_MAP.ENTER) {
        this.incrementCounter();
      }
    }
  };

  handleDecrementCounter = (ev?: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (ev && ev.type === "click") {
      this.decrementCounter();
    }
    if (ev && ev.type === "keydown") {
      if (ev.keyCode === KEY_CODE_MAP.SPACE) {
        ev.preventDefault();
        this.decrementCounter();
      } else if (ev.keyCode === KEY_CODE_MAP.ENTER) {
        this.decrementCounter();
      }
    }
  };

  handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (ev.keyCode === KEY_CODE_MAP.ARROW_DOWN) {
      ev.preventDefault();
      this.decrementCounter();
    }
    if (ev.keyCode === KEY_CODE_MAP.ARROW_UP) {
      ev.preventDefault();
      this.incrementCounter();
    }
  };

  handleChange = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    const { minValue = Number.NEGATIVE_INFINITY, maxValue = Number.POSITIVE_INFINITY } = this.props;
    const value = ev && parseInt(ev.target.value, 10);

    if (Number.isInteger(value) && value >= minValue && value <= maxValue) {
      this.setState({ value });
    }
  };

  render() {
    const {
      label,
      error,
      onBlur,
      onFocus,
      help,
      disabled,
      name,
      dataTest,
      size = SIZE_OPTIONS.NORMAL,
      maxValue,
      minValue,
      required,
      tabIndex,
      forwardedRef,
      spaceAfter,
    } = this.props;
    const { value } = this.state;
    return (
      <InputStepperStateless
        dataTest={dataTest}
        size={size}
        label={label}
        disabled={disabled}
        required={required}
        name={name}
        error={error}
        help={help}
        type="number"
        onChange={this.handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={this.handleKeyDown}
        value={value || 0}
        minValue={minValue}
        maxValue={maxValue}
        tabIndex={tabIndex}
        forwardedRef={forwardedRef}
        spaceAfter={spaceAfter}
        onDecrement={this.handleDecrementCounter}
        onIncrement={this.handleIncrementCounter}
      />
    );
  }
}

// $FlowExpected
const ForwardedInputStepper = React.forwardRef((props, ref) => (
  <InputStepper forwardedRef={ref} {...props} />
));

ForwardedInputStepper.displayName = "InputStepper";

export default ForwardedInputStepper;
