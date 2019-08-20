// @flow

import * as React from 'react';

import { SIZE_OPTIONS } from '../InputField/consts';
import KEY_CODE_MAP from '../common/keyMaps';
import InputStepperStateless from './InputStepperStateless';
import validateIncrement from '../utils/validateIncrement';
import validateDecrement from '../utils/validateDecrement';
import type { Props, State, ForwardedRef } from './index.js.flow';

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
    this.setValueAndInjectCallback(validateIncrement({ value, maxValue, step }));
  };

  decrementCounter = () => {
    const { value } = this.state;
    const { minValue = Number.NEGATIVE_INFINITY, step = 1 } = this.props;

    this.setValueAndInjectCallback(validateDecrement({ value, minValue, step }));
  };

  handleIncrementCounter = (
    ev?: SyntheticEvent<HTMLButtonElement> | SyntheticKeyboardEvent<HTMLButtonElement>,
  ) => {
    if (ev && ev.type === 'click') {
      this.incrementCounter();
    }
    if (ev && ev.type === 'keydown') {
      if (ev.keyCode === KEY_CODE_MAP.SPACE) {
        ev.preventDefault();
        this.incrementCounter();
      } else if (ev.keyCode === KEY_CODE_MAP.ENTER) {
        this.incrementCounter();
      }
    }
  };

  handleDecrementCounter = (
    ev?: SyntheticEvent<HTMLButtonElement> | SyntheticKeyboardEvent<HTMLButtonElement>,
  ) => {
    if (ev && ev.type === 'click') {
      this.decrementCounter();
    }
    if (ev && ev.type === 'keydown') {
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
    const prevValue = this.state.value;

    if (prevValue <= value) {
      this.setState({ value: validateIncrement({ value, maxValue, step: 0 }) });
    }

    if (prevValue >= value) {
      this.setState({ value: validateDecrement({ value, minValue, step: 0 }) });
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
      titleIncrement,
      titleDecrement,
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
        titleIncrement={titleIncrement}
        titleDecrement={titleDecrement}
      />
    );
  }
}

// $FlowExpected
const ForwardedInputStepper = React.forwardRef((props, ref) => (
  <InputStepper forwardedRef={ref} {...props} />
));

ForwardedInputStepper.displayName = 'InputStepper';

export default ForwardedInputStepper;
export { default as InputStepperStateless } from './InputStepperStateless';
