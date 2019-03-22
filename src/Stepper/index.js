// @flow
import * as React from "react";
import styled from "styled-components";

import Button from "../Button";
import Minus from "../icons/Minus";
import Plus from "../icons/Plus";
import defaultTokens from "../defaultTokens";

import type { Props, State } from "./index";

const StyledStepper = styled.div`
  display: flex;
  width: 100%;
  flex: 1 1 100%;
`;

const StyledStepperInput = styled.input`
  width: 100%;
  height: 32px; // TODO: create token sizeStepper
  padding: 0;
  border: 0;
  font-size: ${({ theme }) => theme.orbit.fontSizeInputNormal};
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold};
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;

StyledStepperInput.defaultProps = {
  theme: defaultTokens,
};

class Stepper extends React.PureComponent<Props, State> {
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
      value: newValue >= +maxValue ? maxValue : newValue,
    });
  };

  decrementCounter = () => {
    const { value } = this.state;
    const { minValue, step = 1 } = this.props;
    const newValue = value - step;

    this.setState({
      value: newValue <= +minValue ? minValue : newValue,
    });
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
    const { onBlur, onFocus, disabled, name, dataTest, maxValue, minValue } = this.props;
    const { value } = this.state;
    return (
      <StyledStepper data-test={dataTest}>
        <Button
          disabled={disabled || (disabled || value <= +minValue)}
          iconLeft={<Minus />}
          type="secondary"
          size="small"
          onClick={this.decrementCounter}
        />
        <StyledStepperInput
          name={name}
          disabled={disabled}
          type="text"
          value={value || 0}
          min={minValue}
          max={maxValue}
          onKeyDown={this.handleKeyDown}
          onBlur={onBlur}
          onFocus={onFocus}
          readOnly
        />
        <Button
          disabled={disabled || (disabled || value >= +maxValue)}
          iconLeft={<Plus />}
          type="secondary"
          size="small"
          onClick={this.incrementCounter}
        />
      </StyledStepper>
    );
  }
}

export default Stepper;
