// @flow
import * as React from "react";
import styled from "styled-components";

import { SIZE_OPTIONS } from "../../InputField/consts";
import PlusCircle from "../../icons/PlusCircle";
import MinusCircle from "../../icons/MinusCircle";
import ButtonLink from "../../ButtonLink";
import InputField, { Input, Prefix } from "../../InputField";
import defaultTheme from "../../defaultTheme";
import getSpacingToken from "../../common/getSpacingToken";
import type { StateLessProps } from "./index.js.flow";

const StyledInputStepper = styled.div`
  width: 100%;
  margin-bottom: ${getSpacingToken};
  ${Input} {
    text-align: center;

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
  ${Prefix} {
    padding: 0;
    pointer-events: auto;
  }
`;

StyledInputStepper.defaultProps = {
  theme: defaultTheme,
};

const InputStepperStateless = ({
  label,
  error,
  onBlur,
  onFocus,
  onChange,
  onKeyDown,
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
  value,
  onDecrement,
  onIncrement,
  disabledIncrement,
  disabledDecrement,
  titleIncrement,
  titleDecrement,
}: StateLessProps) => {
  return (
    <StyledInputStepper spaceAfter={spaceAfter}>
      <InputField
        dataTest={dataTest}
        size={size}
        label={label}
        disabled={disabled}
        required={required}
        name={name}
        error={error}
        help={help}
        type={typeof value === "number" ? "number" : "text"}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        value={value}
        minValue={minValue}
        maxValue={maxValue}
        tabIndex={tabIndex}
        ref={forwardedRef}
        prefix={
          <ButtonLink
            type="primary"
            disabled={
              disabledDecrement || disabled || (typeof value === "number" && value <= +minValue)
            }
            compact
            iconLeft={<MinusCircle />}
            size={size}
            onClick={!disabled ? onDecrement : undefined}
            title={titleDecrement}
            asComponent={props => <div {...props} />}
          />
        }
        suffix={
          <ButtonLink
            disabled={
              disabledIncrement || disabled || (typeof value === "number" && value >= +maxValue)
            }
            type="primary"
            compact
            iconLeft={<PlusCircle />}
            size={size}
            onClick={!disabled ? onIncrement : undefined}
            title={titleIncrement}
            asComponent={props => <div {...props} />}
          />
        }
      />
    </StyledInputStepper>
  );
};

export default InputStepperStateless;
