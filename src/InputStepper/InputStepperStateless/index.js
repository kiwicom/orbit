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

const PrefixSuffix = styled(({ type, ...props }) => <div {...props} />)`
  flex-shrink: 0;
  z-index: 3;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
`;

PrefixSuffix.defaultProps = {
  theme: defaultTheme,
};

const StyledInputStepper = styled.div`
  width: 100%;
  margin-bottom: ${getSpacingToken};
  ${Input} {
    text-align: center;
  }
  ${Prefix} {
    padding: 0;
    pointer-events: auto;
  }
`;

StyledInputStepper.defaultProps = {
  theme: defaultTheme,
};

const StyledButtonWrapper = styled.div`
  &:focus {
    outline: none;
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.orbit.colorTextButtonWhiteBordered},
      0 0 1px 3px rgba(1, 118, 210, 0.6); //TODO: Create token
  }

  &:focus:active {
    box-shadow: none;
  }
`;

StyledButtonWrapper.defaultProps = {
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
          <StyledButtonWrapper role="button" tabIndex="0" onKeyDown={onDecrement}>
            <ButtonLink
              disabled={
                disabledDecrement || disabled || (typeof value === "number" && value <= +minValue)
              }
              iconLeft={<MinusCircle color="secondary" />}
              size={size}
              onClick={onDecrement}
              transparent
              component={PrefixSuffix}
              title={titleDecrement}
            />
          </StyledButtonWrapper>
        }
        suffix={
          <StyledButtonWrapper role="button" tabIndex="0" onKeyDown={onIncrement}>
            <ButtonLink
              disabled={
                disabledIncrement || disabled || (typeof value === "number" && value >= +maxValue)
              }
              iconLeft={<PlusCircle color="secondary" />}
              size={size}
              onClick={onIncrement}
              transparent
              component={PrefixSuffix}
              title={titleIncrement}
            />
          </StyledButtonWrapper>
        }
      />
    </StyledInputStepper>
  );
};

export default InputStepperStateless;
