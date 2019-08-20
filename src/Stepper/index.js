// @flow

import * as React from 'react';

import StepperStateless from './StepperStateless';
import validateIncrement from '../utils/validateIncrement';
import validateDecrement from '../utils/validateDecrement';
import type { Props, State } from './index.js.flow';

class Stepper extends React.PureComponent<Props, State> {
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

  handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (ev.keyCode === 40) {
      ev.preventDefault();
      this.decrementCounter();
    }
    if (ev.keyCode === 38) {
      ev.preventDefault();
      this.incrementCounter();
    }
  };

  render() {
    const {
      onBlur,
      onFocus,
      disabled,
      name,
      dataTest,
      maxValue,
      minValue,
      titleIncrement,
      titleDecrement,
    } = this.props;
    const { value } = this.state;
    return (
      <StepperStateless
        disabled={disabled}
        dataTest={dataTest}
        value={value}
        name={name}
        minValue={minValue}
        maxValue={maxValue}
        onKeyDown={this.handleKeyDown}
        onBlur={onBlur}
        onFocus={onFocus}
        onIncrement={this.incrementCounter}
        onDecrement={this.decrementCounter}
        titleIncrement={titleIncrement}
        titleDecrement={titleDecrement}
      />
    );
  }
}

export default Stepper;
export { default as StepperStateless } from './StepperStateless';
