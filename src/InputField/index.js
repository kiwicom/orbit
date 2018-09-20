// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { SIZE_OPTIONS, TYPE_OPTIONS } from "./consts";
import FormFeedback from "../FormFeedback";
import DefaultFormLabel from "../FormLabel";
import { StyledServiceLogo } from "../ServiceLogo";

import type { Props } from "./index";

const Field = styled.label`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  position: relative;
  display: block;
  z-index: 2;
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
  box-sizing: border-box;
  height: ${({ tokens, size }) => tokens.heightInput[size]};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput
      }`};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.backgroundInputDisabled : theme.orbit.backgroundInput};
  font-size: ${({ size, tokens }) => tokens.fontSizeInput[size]};
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
  height: ${({ tokens, size }) => tokens.heightInput[size]};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.colorTextInputDisabled : theme.orbit.colorTextInput};
  font-size: ${({ size, tokens }) => tokens.fontSizeInput[size]};
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
    font-size: ${({ size, tokens }) => tokens.fontSizeInput[size]};
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
    width: ${({ tokens, size }) => tokens.iconSize[size]};
    height: ${({ tokens, size }) => tokens.iconSize[size]};
    color: ${({ theme }) => theme.orbit.colorIconInput};
  }
`;

Prefix.defaultProps = {
  theme: defaultTokens,
};

const Suffix = styled(({ children, className }) => <div className={className}>{children}</div>)`
  height: ${({ tokens, size }) => tokens.heightInput[size]};
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

export const Input = styled(({ theme, tokens, size, suffix, error, help, ...props }) => (
  <input {...props} />
))`
  appearance: none;
  font-family: inherit;
  border: none;
  padding: 0 0 ${({ tokens, size }) => tokens.paddingInput[size]};
  font-size: inherit;
  color: inherit;
  background-color: inherit;
  cursor: inherit;
  flex: 1 auto;
  width: 100%;
  height: 100%;
  line-height: ${({ tokens, size }) => tokens.heightInput[size]};
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

const InputField = (props: Props) => {
  const {
    size = SIZE_OPTIONS.NORMAL,
    type = TYPE_OPTIONS.TEXT,
    theme = defaultTokens,
    required,
  } = props;

  const tokens = {
    heightInput: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.heightInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.heightInputNormal,
    },
    fontSizeInput: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeInputNormal,
    },
    paddingInput: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingInputNormal,
    },
    iconSize: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.widthIconSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.widthIconMedium,
    },
  };

  return (
    <Field>
      {props.label &&
        !props.inlineLabel && (
          <FormLabel label={props.label} isFilled={!!props.value} required={required} />
        )}
      <InputContainer tokens={tokens} size={size} disabled={props.disabled} error={props.error}>
        {props.prefix && (
          <Prefix tokens={tokens} size={size}>
            {props.prefix}
          </Prefix>
        )}
        {props.inlineLabel && (
          <StyledInlineLabel tokens={tokens} size={size}>
            <FormLabel label={props.label} isFilled={!!props.value} required={required} />
          </StyledInlineLabel>
        )}
        <Input
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          name={props.name}
          type={type}
          value={props.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          min={props.minValue}
          max={props.maxValue}
          minLength={props.minLength}
          maxLength={props.maxLength}
          size={size}
          tokens={tokens}
          error={props.error}
        />
        {props.suffix && (
          <Suffix tokens={tokens} size={size}>
            {props.suffix}
          </Suffix>
        )}
        <FakeInput tokens={tokens} size={size} disabled={props.disabled} error={props.error} />
      </InputContainer>
      {props.help && !props.error && <FormFeedback type="help">{props.help}</FormFeedback>}
      {props.error && <FormFeedback type="error">{props.error}</FormFeedback>}
    </Field>
  );
};

export default InputField;
