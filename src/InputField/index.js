// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { SIZE_OPTIONS, TYPE_OPTIONS, TOKENS } from "./consts";
import FormFeedback from "../FormFeedback";
import DefaultFormLabel from "../FormLabel";
import { StyledServiceLogo } from "../ServiceLogo";

import type { Props } from "./index";

const getToken = name => ({ theme, size }) => {
  const tokens = {
    [TOKENS.heightInput]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.heightInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.heightInputNormal,
    },
    [TOKENS.fontSizeInput]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeInputNormal,
    },
    [TOKENS.paddingInput]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingInputNormal,
    },
    [TOKENS.iconSize]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.widthIconSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.widthIconMedium,
    },
  };

  return tokens[name][size];
};

const Field = styled.label`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  position: relative;
  display: block;
  z-index: 2;
  flex: 1 1 100%;
`;

Field.defaultProps = {
  theme: defaultTokens,
};

export const FakeInput = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: ${getToken(TOKENS.heightInput)};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput
      }`};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.backgroundInputDisabled : theme.orbit.backgroundInput};
  font-size: ${getToken(TOKENS.fontSizeInput)};
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in-out;
`;

FakeInput.defaultProps = {
  theme: defaultTokens,
};

export const InputContainer = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: ${getToken(TOKENS.heightInput)};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.colorTextInputDisabled : theme.orbit.colorTextInput};
  font-size: ${getToken(TOKENS.fontSizeInput)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

  &:hover > ${FakeInput} {
    ${({ disabled, theme, error }) =>
      !disabled &&
      `box-shadow: inset 0 0 0 ${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputErrorHover : theme.orbit.borderColorInputHover
      }`};
  }
`;

InputContainer.defaultProps = {
  theme: defaultTokens,
};

const StyledInlineLabel = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  padding-left: ${({ theme }) => theme.orbit.spaceSmall};

  ${DefaultFormLabel} {
    margin-bottom: 0;
    font-size: ${getToken(TOKENS.fontSizeInput)};
    line-height: normal;
    z-index: 3;
    white-space: nowrap;
  }
`;

StyledInlineLabel.defaultProps = {
  theme: defaultTokens,
};

const Prefix = styled(({ children, className }) => <div className={className}>{children}</div>)`
  height: 100%;
  color: ${({ theme }) => theme.orbit.colorTextInputPrefix};
  display: flex;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  padding-left: ${({ theme }) => theme.orbit.spaceSmall};
  z-index: 3;

  & > svg {
    width: ${getToken(TOKENS.iconSize)};
    height: ${getToken(TOKENS.iconSize)};
    color: ${({ theme }) => theme.orbit.colorIconInput};
  }
`;

Prefix.defaultProps = {
  theme: defaultTokens,
};

const Suffix = styled(({ children, className }) => <div className={className}>{children}</div>)`
  height: ${getToken(TOKENS.heightInput)};
  color: ${({ theme }) => theme.orbit.colorIconInput};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${({ disabled }) => disabled && "none"};
  z-index: 3;

  & svg {
    color: ${({ theme }) => theme.orbit.colorIconSecondary};
  }
  ${StyledServiceLogo} {
    height: 16px;
    padding-right: ${({ theme }) => theme.orbit.spaceSmall};
  }
`;

Suffix.defaultProps = {
  theme: defaultTokens,
};

export const Input = styled(({ theme, size, suffix, error, help, ...props }) => (
  <input {...props} />
))`
  appearance: none;
  font-family: inherit;
  border: none;
  padding: 0 0 ${getToken(TOKENS.paddingInput)};
  font-size: inherit;
  color: inherit;
  background-color: transparent;
  cursor: inherit;
  flex: 1 auto;
  width: 100%;
  height: 100%;
  line-height: ${getToken(TOKENS.heightInput)};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  z-index: 2;

  &:focus {
    outline: none;
    & ~ ${FakeInput} {
      box-shadow: inset 0 0 0
        ${({ theme }) =>
          `${theme.orbit.borderWidthInputFocus} ${theme.orbit.borderColorInputFocus}`};
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.orbit.colorPlaceholderInput};
    /* Firefox */
    opacity: 1;
  }

  /* Internet Explorer 10-11 */
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.orbit.colorPlaceholderInput};
  }

  /* Microsoft Edge */
  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.orbit.colorPlaceholderInput};
  }

  &::-ms-clear {
    display: none;
  }
`;

Input.defaultProps = {
  theme: defaultTokens,
};

const FormLabel = ({
  label,
  isFilled,
  required,
}: {
  label?: string,
  isFilled: boolean,
  required?: boolean,
}) => (
  <DefaultFormLabel filled={isFilled} required={required}>
    {label}
  </DefaultFormLabel>
);

const InputField = ({
  disabled,
  size = SIZE_OPTIONS.NORMAL,
  type = TYPE_OPTIONS.TEXT,
  label,
  inlineLabel,
  dataTest,
  required,
  error,
  name,
  prefix,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  minValue,
  maxValue,
  minLength,
  maxLength,
  suffix,
  help,
  value,
}: Props) => (
  <Field data-test={dataTest}>
    {label && !inlineLabel && <FormLabel label={label} isFilled={!!value} required={required} />}
    <InputContainer size={size} disabled={disabled} error={error}>
      {prefix && <Prefix size={size}>{prefix}</Prefix>}
      {inlineLabel && (
        <StyledInlineLabel size={size}>
          <FormLabel label={label} isFilled={!!value} required={required} />
        </StyledInlineLabel>
      )}
      <Input
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        min={minValue}
        max={maxValue}
        minLength={minLength}
        maxLength={maxLength}
        size={size}
        error={error}
      />
      {suffix && <Suffix size={size}>{suffix}</Suffix>}
      <FakeInput size={size} disabled={disabled} error={error} />
    </InputContainer>
    {help && !error && <FormFeedback type="help">{help}</FormFeedback>}
    {error && <FormFeedback type="error">{error}</FormFeedback>}
  </Field>
);

export default InputField;
