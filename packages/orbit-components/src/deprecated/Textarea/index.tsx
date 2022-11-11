import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import FormFeedback from "../FormFeedback";
import FormLabel from "../../FormLabel";
import { SIZE_OPTIONS, RESIZE_OPTIONS } from "./consts";
import { rtlSpacing } from "../../utils/rtl";
import getSpacingToken from "../../common/getSpacingToken";
import formElementFocus from "../InputField/helpers/formElementFocus";
import mq from "../../utils/mediaQuery";
import { Props } from "./types";

const Field = styled.label<{ fullHeight?: boolean; spaceAfter?: Props["spaceAfter"] }>`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  display: flex;
  width: 100%;
  position: relative;
  height: ${({ fullHeight }) => fullHeight && "100%"};
  flex-direction: column;
  // for usage with Stack
  flex: ${({ fullHeight }) => fullHeight && "1"};
  margin-bottom: ${getSpacingToken};
`;

Field.defaultProps = {
  theme: defaultTheme,
};

const getFontSize = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeInputSmall,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeInputNormal,
  };

  return tokens[size];
};

const getLineHeight = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.lineHeightTextSmall,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.lineHeightTextNormal,
  };
  return tokens[size];
};

const getPadding = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.paddingTextareaSmall,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingTextareaNormal,
  };
  return rtlSpacing(tokens[size]);
};

const StyledTextArea = styled.textarea<{
  error?: boolean;
  fullHeight?: Props["fullHeight"];
  size?: string;
  resize?: string;
  placeholder: string;
  disabled?: Props["disabled"];
}>`
  appearance: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: ${({ fullHeight }) => fullHeight && "100%"};
  padding: ${({ theme, size }) => getPadding({ theme, size })};
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput
      }`};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.backgroundInputDisabled : theme.orbit.backgroundInput};
  color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.colorTextInputDisabled : theme.orbit.colorTextInput};
  font-size: ${({ theme, size }) => getFontSize({ theme, size })};
  line-height: ${({ theme, size }) => getLineHeight({ theme, size })};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  resize: ${({ resize }) => resize};
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  min-height: 44px;

  /* for usage with Stack */
  border-radius: 6px;
  ${mq.tablet(css`
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  `)};

  // for usage with Stack
  flex: ${({ fullHeight }) => fullHeight && "1"};

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
    ${formElementFocus}
    outline: none;
  }
`;

StyledTextArea.defaultProps = {
  theme: defaultTheme,
};

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      size = SIZE_OPTIONS.NORMAL,
      disabled,
      resize = RESIZE_OPTIONS.VERTICAL,
      dataTest,
      spaceAfter,
      fullHeight,
      label,
      value,
      name,
      rows,
      readOnly,
      tabIndex,
      error,
      help,
      placeholder,
      maxLength,
      onChange,
      onFocus,
      onBlur,
      required,
    },
    ref,
  ) => {
    return (
      <Field fullHeight={fullHeight} spaceAfter={spaceAfter}>
        {label && (
          <FormLabel filled={Boolean(value)} disabled={disabled}>
            {label}
          </FormLabel>
        )}
        <StyledTextArea
          data-test={dataTest}
          name={name}
          value={value}
          rows={rows}
          size={size}
          fullHeight={fullHeight}
          disabled={disabled}
          error={!!error}
          // @ts-expect-error conflict between types
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          resize={resize}
          readOnly={readOnly}
          tabIndex={tabIndex ? Number(tabIndex) : undefined}
          required={required}
          ref={ref}
        />
        <FormFeedback error={error} help={help} />
      </Field>
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
