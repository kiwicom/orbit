// @flow
import * as React from "react";
import styled from "styled-components";

import { SIZE_OPTIONS } from "../InputField/consts";
import PlusCircle from "../icons/PlusCircle";
import MinusCircle from "../icons/MinusCircle";
import ButtonLink from "../ButtonLink";
import InputField, { Input, Prefix } from "../InputField";

import type { Props, State, ForwardedRef } from "./index";

const PrefixSuffix = styled(({ type, ...props }) => <div {...props} />)`
  flex-shrink: 0;
  z-index: 3;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
`;

const StyledInputStepper = styled.div`
  width: 100%;
  ${Input} {
    text-align: center;
  }
  ${Prefix} {
    padding: 0;
    pointer-events: auto;
  }
`;

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
    const newValue = value + step;
    const stateValue = newValue >= +maxValue ? maxValue : newValue;
    if (stateValue !== value) {
      this.setValueAndInjectCallback(stateValue);
    }
  };

  decrementCounter = () => {
    const { value } = this.state;
    const { minValue = Number.NEGATIVE_INFINITY, step = 1 } = this.props;
    const newValue = value - step;
    const stateValue = newValue <= +minValue ? minValue : newValue;
    if (stateValue !== value) {
      this.setValueAndInjectCallback(stateValue);
    }
  };

  handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLInputElement>) => {
    ev.preventDefault();
    if (ev.keyCode === 40) {
      this.decrementCounter();
    }
    if (ev.keyCode === 38) {
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
    } = this.props;
    const { value } = this.state;
    return (
      <StyledInputStepper>
        <InputField
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
          ref={forwardedRef}
          prefix={
            <ButtonLink
              disabled={disabled || value <= +minValue}
              iconLeft={<MinusCircle color="secondary" />}
              size={size}
              onClick={this.decrementCounter}
              transparent
              component={PrefixSuffix}
            />
          }
          suffix={
            <ButtonLink
              disabled={disabled || value >= +maxValue}
              iconLeft={<PlusCircle color="secondary" />}
              size={size}
              onClick={this.incrementCounter}
              transparent
              component={PrefixSuffix}
            />
          }
        />
      </StyledInputStepper>
    );
  }
}

// $FlowExpected
const ForwardedInputStepper = React.forwardRef((props, ref) => (
  <InputStepper forwardedRef={ref} {...props} />
));

ForwardedInputStepper.displayName = "InputStepper";

export default ForwardedInputStepper;
