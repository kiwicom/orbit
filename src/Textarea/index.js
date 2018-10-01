// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import FormFeedback from "../FormFeedback";
import FormLabel from "../FormLabel";
import { SIZE_OPTIONS, RESIZE_OPTIONS, TOKENS } from "./consts";

import type { Props } from "./index";

const Field = styled.label`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
`;

Field.defaultProps = {
  theme: defaultTokens,
};

const getTokens = name => ({ theme, size }) => {
  const tokens = {
    [TOKENS.fontSizeInput]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeInputNormal,
    },
    [TOKENS.paddingInput]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.paddingTextareaSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingTextareaNormal,
    },
  };

  return tokens[name][size];
};

const StyledTextArea = styled(({ theme, size, error, help, ...props }) => <textarea {...props} />)`
  appearance: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: ${getTokens(TOKENS.paddingInput)};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border: 0;
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput
      }`};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.backgroundInputDisabled : theme.orbit.backgroundInput};
  color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.colorTextInputDisabled : theme.orbit.colorTextInput};
  font-size: ${getTokens(TOKENS.fontSizeInput)};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  font-family: inherit;
  resize: ${({ resize }) => resize};
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.orbit.colorPlaceholderInput};
  }

  &:hover {
    box-shadow: ${({ disabled, theme, error }) =>
      !disabled &&
      `inset 0 0 0 ${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputErrorHover : theme.orbit.borderColorInputHover
      }`};
  }

  &:focus {
    box-shadow: ${({ theme, disabled }) =>
      !disabled && `inset 0 0 0 2px ${theme.orbit.borderColorInputFocus}`};
    outline: none;
  }
`;

StyledTextArea.defaultProps = {
  theme: defaultTokens,
};

const Textarea = (props: Props) => {
  const {
    size = SIZE_OPTIONS.NORMAL,
    disabled,
    resize = RESIZE_OPTIONS.VERTICAL,
    dataTest,
  } = props;

  return (
    <Field data-test={dataTest}>
      {props.label && (
        <FormLabel filled={!!props.value} disabled={disabled}>
          {props.label}
        </FormLabel>
      )}
      <StyledTextArea
        name={props.name}
        value={props.value}
        size={size}
        disabled={disabled}
        error={props.error}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        resize={resize}
      />
      {props.help && !props.error && <FormFeedback type="help">{props.help}</FormFeedback>}
      {props.error && <FormFeedback type="error">{props.error}</FormFeedback>}
    </Field>
  );
};

export default Textarea;
