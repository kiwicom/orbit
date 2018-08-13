// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import FormFeedback from "../FormFeedback";
import FormLabel from "../FormLabel";
import { SIZE_OPTIONS, RESIZE_OPTIONS } from "./consts";

import type { Props } from "./index";

const Field = styled.label`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
`;

Field.defaultProps = {
  theme: defaultTokens,
};

const StyledTextArea = styled(({ theme, tokens, size, error, help, ...props }) => (
  <textarea {...props} />
))`
  appearance: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: ${({ tokens, size }) => tokens.paddingInput[size]};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border: ${({ theme, error }) =>
    `${theme.orbit.borderStyleInput} ${theme.orbit.borderWidthInput} ${
      error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput
    }`};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.backgroundInputDisabled : theme.orbit.backgroundInput};
  color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.colorTextInputDisabled : theme.orbit.colorTextInput};
  font-size: ${({ size, tokens }) => tokens.fontSizeInput[size]};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  font-family: inherit;
  resize: ${({ resize }) => resize};
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out, border-color ${({
  theme,
}) => theme.orbit.durationFast} ease-in-out;
  
  &::placeholder {
    color: ${({ theme }) => theme.orbit.colorPlaceholderInput};
  }

  &:hover {
    border-color: ${({ disabled, theme, error }) =>
      !disabled &&
      (error
        ? theme.orbit.paletteRedNormal
        : theme.orbit.borderColorInputHover)}; // TODO create token
  }

  &:focus {
  box-shadow: ${({ theme, error, disabled }) =>
    !disabled && (error ? theme.orbit.boxShadowInputErrorFocus : theme.orbit.boxShadowInputFocus)};
  border-color: ${({ theme, error, disabled }) =>
    !disabled &&
    (error ? theme.orbit.borderColorInputErrorFocus : theme.orbit.borderColorInputFocus)};
  };
    outline: none;
  }
`;

StyledTextArea.defaultProps = {
  theme: defaultTokens,
};

const Textarea = (props: Props) => {
  const {
    size = SIZE_OPTIONS.NORMAL,
    theme = defaultTokens,
    disabled,
    resize = RESIZE_OPTIONS.VERTICAL,
  } = props;

  const tokens = {
    fontSizeInput: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeInputNormal,
    },
    paddingInput: {
      [SIZE_OPTIONS.SMALL]: `${theme.orbit.spaceXSmall} ${theme.orbit.paddingInputSmall}`, // TODO create token "8px 12px"
      [SIZE_OPTIONS.NORMAL]: `${theme.orbit.paddingInputSmall}`, // TODO create token "12px"
    },
  };
  return (
    <Field>
      {props.label && (
        <FormLabel filled={!!props.value} disabled={disabled}>
          {props.label}
        </FormLabel>
      )}
      <StyledTextArea
        tokens={tokens}
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
