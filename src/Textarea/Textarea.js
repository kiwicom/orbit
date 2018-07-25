// @flow
import * as React from "react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";

import FormFeedback from "../FormFeedback/FormFeedback";
import FormLabel from "../FormLabel/FormLabel";
import SIZE_OPTIONS from "./consts";
import type { Props } from "./Textarea";

const Field = styled.label`
  font-family: ${({ theme }) => theme.fontFamily};
`;
const StyledTextArea = styled(({ theme, tokens, size, error, help, ...props }) => (
  <textarea {...props} />
))`
  appearance: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: ${({ tokens, size }) => tokens.paddingInput[size]};
  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  border: ${({ theme, error }) =>
    `${theme.borderStyleInput} ${theme.borderWidthInput} ${
      error ? theme.borderColorInputError : theme.borderColorInput
    }`};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.backgroundInputDisabled : theme.backgroundInput};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colorTextInputDisabled : theme.colorTextInput};
  font-size: ${({ size, tokens }) => tokens.fontSizeInput[size]};
  line-height: ${({ theme }) => theme.lineHeightText};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  font-family: inherit;
  resize: none;
  transition: all ${({ theme }) => theme.durationFast} ease-in-out;
  
  &::placeholder {
    color: ${({ theme }) => theme.colorPlaceholderInput};
  }

  &:hover {
    border-color: ${({ disabled, theme, error }) =>
      !disabled &&
      (error ? theme.paletteRedNormal : theme.borderColorInputHover)}; // TODO create token
  }

  &:focus {
  box-shadow: ${({ theme, error, disabled }) =>
    !disabled && (error ? theme.boxShadowInputErrorFocus : theme.boxShadowInputFocus)};
  border-color: ${({ theme, error, disabled }) =>
    !disabled && (error ? theme.borderColorInputErrorFocus : theme.borderColorInputFocus)};
  };
    outline: none;
  }
`;

const Textarea = (props: Props) => {
  const { size = SIZE_OPTIONS.NORMAL, theme = defaultTokens, disabled } = props;

  const tokens = {
    fontSizeInput: {
      [SIZE_OPTIONS.SMALL]: theme.fontSizeInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.fontSizeInputNormal,
    },
    paddingInput: {
      [SIZE_OPTIONS.SMALL]: `${theme.spaceXSmall} ${theme.paddingInputSmall}`, // TODO create token "8px 12px"
      [SIZE_OPTIONS.NORMAL]: `${theme.paddingInputSmall}`, // TODO create token "12px"
    },
  };
  return (
    <Field theme={theme}>
      {props.label && (
        <FormLabel theme={theme} filled={!!props.children} disabled={disabled}>
          {props.label}
        </FormLabel>
      )}
      <StyledTextArea
        theme={theme}
        tokens={tokens}
        name={props.name}
        value={props.children}
        size={size}
        disabled={disabled}
        error={props.error}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      {props.help &&
        !props.error && (
          <FormFeedback type="help" theme={theme}>
            {props.help}
          </FormFeedback>
        )}
      {props.error && (
        <FormFeedback type="error" theme={theme}>
          {props.error}
        </FormFeedback>
      )}
    </Field>
  );
};

export default Textarea;
