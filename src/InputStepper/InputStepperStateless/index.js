// @flow
import * as React from "react";
import styled from "styled-components";

import { SIZE_OPTIONS } from "../../InputField/consts";
import PlusCircle from "../../icons/PlusCircle";
import MinusCircle from "../../icons/MinusCircle";
import ButtonLink from "../../ButtonLink";
import InputField, { Input, Prefix, Suffix } from "../../InputField";
import defaultTheme from "../../defaultTheme";
import getSpacingToken from "../../common/getSpacingToken";
import type { StateLessProps } from "./index.js.flow";

const StyledInputStepper = styled.div`
  width: 100%;
  margin-bottom: ${getSpacingToken};
  ${Input} {
    text-align: center;
    font-size: ${({ customValueSize }) => customValueSize && `${customValueSize}px`};
  }

  ${Prefix} {
    padding: 0;
    pointer-events: auto;
    svg {
      ${({ customButtonSize }) =>
        customButtonSize &&
        `height: ${customButtonSize.height}px; width: ${customButtonSize.width}px`};
    }
  }

  ${Suffix} {
    svg {
      ${({ customButtonSize }) =>
        customButtonSize &&
        `height: ${customButtonSize.height}px; width: ${customButtonSize.width}px`};
    }
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
  customButtonSize,
  customValueSize,
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
    <StyledInputStepper
      spaceAfter={spaceAfter}
      customButtonSize={customButtonSize}
      customValueSize={customValueSize}
    >
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
            type="secondary"
            disabled={
              disabledDecrement || disabled || (typeof value === "number" && value <= +minValue)
            }
            iconLeft={<MinusCircle color="secondary" />}
            size={size}
            onClick={onDecrement}
            transparent
            title={titleDecrement}
            asComponent={props => <div {...props} />}
          />
        }
        suffix={
          <ButtonLink
            disabled={
              disabledIncrement || disabled || (typeof value === "number" && value >= +maxValue)
            }
            type="secondary"
            iconLeft={<PlusCircle color="secondary" />}
            size={size}
            onClick={onIncrement}
            transparent
            title={titleIncrement}
            asComponent={props => <div {...props} />}
          />
        }
      />
    </StyledInputStepper>
  );
};

export default InputStepperStateless;
