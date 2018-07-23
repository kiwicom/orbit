// @flow
import * as React from "react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";

import { SIZE_OPTIONS, TYPE_OPTIONS } from "./consts";
import type { Props } from "./InputField";
import FormFeedback from "../FormFeedback/FormFeedback";
import FormLabel from "../FormLabel/FormLabel";

const Field = styled.label`
  font-family: ${({ theme }) => theme.fontFamily};
  position: relative;
  display: block;
`;

const FakeInput = styled(({ children, className }) => <div className={className}>{children}</div>)`
  width: 100%;
  position: absolute;
  z-index: -1;
  box-sizing: border-box;
  height: ${({ tokens, size }) => tokens.heightInput[size]};
  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  border: ${({ theme, error }) =>
    `${theme.borderStyleInput} ${theme.borderWidthInput} ${
      error ? theme.borderColorInputError : theme.borderColorInput
    }`};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.backgroundInputDisabled : theme.backgroundInput};
  font-size: ${({ size, tokens }) => tokens.fontSizeInput[size]};
  transition: all ${({ theme }) => theme.durationFast} ease-in-out;
`;

const InputContainer = styled(({ children, className }) => (
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
  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colorTextInputDisabled : theme.colorTextInput};
  font-size: ${({ size, tokens }) => tokens.fontSizeInput[size]};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

  &:hover > ${FakeInput} {
    border-color: ${({ disabled, theme, error }) =>
      !disabled && (error ? theme.paletteRedNormalHover : theme.borderColorInputHover)};
  }
`;

const Prefix = styled(({ children, className }) => <div className={className}>{children}</div>)`
  height: 100%;
  color: ${({ theme }) => theme.paletteInkLight}; // TODO create token
  display: flex;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spaceSmall};

  & > svg {
    width: ${({ tokens, size }) => tokens.iconSize[size]};
    height: ${({ tokens, size }) => tokens.iconSize[size]};
    color: ${({ theme }) => theme.colorIconInput};
  }
`;

const Suffix = styled(({ children, className }) => <div className={className}>{children}</div>)`
  height: ${({ tokens, size }) => tokens.heightInput[size]};
  color: ${({ theme }) => theme.colorIconInput};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: ${({ disabled }) => disabled && "none"};

  & svg {
    color: ${({ theme }) => theme.colorIconSecondary};
  }
`;

const Input = styled(({ theme, tokens, size, prefix, suffix, error, help, ...props }) => (
  <input {...props} />
))`
  appearance: none;
  font-family: inherit;
  border: none;
  padding: ${({ tokens, size, prefix }) => (prefix ? "0" : `0 ${tokens.paddingInput[size]}`)};
  font-size: inherit;
  color: inherit;
  background-color: inherit;
  cursor: inherit;
  width: 100%;
  height: 100%;
  line-height: ${({ tokens, size }) => tokens.heightInput[size]};
  border-radius: ${({ theme }) => theme.borderRadiusNormal};

  &:focus {
    outline: none;
    & ~ ${FakeInput} {
      box-shadow: ${({ theme, error }) =>
        error ? theme.boxShadowInputErrorFocus : theme.boxShadowInputFocus};
      border-color: ${({ theme, error }) =>
        error ? theme.borderColorInputErrorFocus : theme.borderColorInputFocus};
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.colorPlaceholderInput};
    /* Firefox */
    opacity: 1;
  }

  /* Internet Explorer 10-11 */
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colorPlaceholderInput};
  }

  /* Microsoft Edge */
  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.colorPlaceholderInput};
  }
`;

const InputField = (props: Props) => {
  const { size = SIZE_OPTIONS.NORMAL, type = TYPE_OPTIONS.TEXT, theme = defaultTokens } = props;

  const tokens = {
    heightInput: {
      [SIZE_OPTIONS.SMALL]: theme.heightInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.heightInputNormal,
    },
    fontSizeInput: {
      [SIZE_OPTIONS.SMALL]: theme.fontSizeInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.fontSizeInputNormal,
    },
    paddingInput: {
      [SIZE_OPTIONS.SMALL]: theme.paddingInputSmall, // TODO: create token (0 12px)
      [SIZE_OPTIONS.NORMAL]: theme.paddingInputSmall, // TODO: create token (0 12px)
    },
    iconSize: {
      [SIZE_OPTIONS.SMALL]: theme.widthIconSmall,
      [SIZE_OPTIONS.NORMAL]: theme.widthIconMedium,
    },
  };
  return (
    <Field theme={theme}>
      {props.label && (
        <FormLabel theme={theme} filled={!!props.value}>
          {props.label}
        </FormLabel>
      )}
      <InputContainer
        theme={theme}
        tokens={tokens}
        size={size}
        disabled={props.disabled}
        error={props.error}
      >
        {props.prefix && (
          <Prefix tokens={tokens} theme={theme} size={size}>
            {props.prefix}
          </Prefix>
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
          theme={theme}
          error={props.error}
          prefix={props.prefix}
        />
        {props.suffix && (
          <Suffix tokens={tokens} size={size} theme={theme}>
            {props.suffix}
          </Suffix>
        )}
        <FakeInput
          theme={theme}
          tokens={tokens}
          size={size}
          disabled={props.disabled}
          error={props.error}
        />
      </InputContainer>
      {props.help && !props.error && <FormFeedback type="help">{props.help}</FormFeedback>}
      {props.error && <FormFeedback type="error">{props.error}</FormFeedback>}
    </Field>
  );
};

export default InputField;
