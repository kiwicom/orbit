// @flow
import * as React from "react";
import styled from "styled-components";

import { SIZE_OPTIONS } from "../InputField/consts";
import PlusCircle from "../icons/PlusCircle";
import MinusCircle from "../icons/MinusCircle";
import ButtonLink from "../ButtonLink";
import InputField, { Input, Prefix } from "../InputField";

import type { Props, State } from "./index";

const PrefixSuffix = styled(({ type, ...props }) => <div {...props} />)`
  flex-shrink: 0;
  z-index: 3;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
`;

const StyledInputStepper = styled.div`
  ${Input} {
    text-align: center;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  ${Prefix} {
    padding: 0;
    pointer-events: auto;
  }
`;

class InputStepper extends React.Component<Props, State> {
  state = {
    value: this.props.defaultValue || 0,
  };

  componentDidUpdate() {
    const { onChange } = this.props;
    const { value } = this.state;
    if (onChange) {
      onChange(value);
    }
  }

  incrementCounter = () => {
    const { value } = this.state;
    const { maxValue, step = 1 } = this.props;
    const newValue = value + step;
    this.setState({
      value: maxValue && newValue > maxValue ? maxValue : newValue,
    });
  };

  decrementCounter = () => {
    const { value } = this.state;
    const { minValue, step = 1 } = this.props;
    const newValue = value - step;

    this.setState({
      value: minValue && newValue < minValue ? minValue : newValue,
    });
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
    } = this.props;
    const { value } = this.state;
    return (
      <StyledInputStepper dataTest={dataTest}>
        <InputField
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
          prefix={
            <ButtonLink
              disabled={disabled || (!!minValue && value <= minValue)}
              iconLeft={<MinusCircle color="secondary" />}
              size={size}
              onClick={this.decrementCounter}
              transparent
              component={PrefixSuffix}
            />
          }
          suffix={
            <ButtonLink
              disabled={disabled || (!!maxValue && value >= maxValue)}
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

export default InputStepper;
