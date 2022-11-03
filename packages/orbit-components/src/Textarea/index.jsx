// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import ErrorFormTooltip from "../ErrorFormTooltip";
import FormLabel from "../FormLabel";
import { SIZE_OPTIONS, RESIZE_OPTIONS } from "./consts";
import { rtlSpacing } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import useErrorTooltip from "../ErrorFormTooltip/hooks/useErrorTooltip";
import getFieldDataState from "../common/getFieldDataState";
import mq from "../utils/mediaQuery";

import type { Props } from ".";

const Field = styled.label`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  display: flex;
  width: 100%;
  position: relative;
  height: ${({ fullHeight }) => fullHeight && "100%"};
  flex-direction: column;
  flex: ${({ fullHeight }) => fullHeight && "1"};
  margin-bottom: ${getSpacingToken};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
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

// TODO: add token for height
// flex is used for Stack
const StyledTextArea = styled.textarea`
  appearance: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: ${({ fullHeight }) => fullHeight && "100%"};
  padding: ${getPadding};
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput
      }`};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.backgroundInputDisabled : theme.orbit.backgroundInput};
  color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.colorTextInputDisabled : theme.orbit.colorTextInput};
  font-size: ${getFontSize};
  line-height: ${getLineHeight};
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

  flex: ${({ fullHeight }) => fullHeight && "1"};
  border: 1px solid transparent;
  overflow: auto;

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
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTextArea.defaultProps = {
  theme: defaultTheme,
};

const Textarea: React.AbstractComponent<Props, HTMLElement> = React.forwardRef<
  Props,
  HTMLTextAreaElement,
>((props, ref) => {
  const {
    size = SIZE_OPTIONS.NORMAL,
    disabled,
    resize = RESIZE_OPTIONS.VERTICAL,
    dataTest,
    id,
    spaceAfter,
    fullHeight,
    value,
    label,
    name,
    error,
    placeholder,
    helpClosable = true,
    maxLength,
    onChange,
    onFocus,
    onBlur,
    tabIndex,
    help,
    rows,
    readOnly,
    required,
  }: Props = props;

  const {
    tooltipShown,
    tooltipShownHover,
    setTooltipShown,
    setTooltipShownHover,
    labelRef,
    iconRef,
    handleFocus,
  } = useErrorTooltip({ onFocus });

  const shown = tooltipShown || tooltipShownHover;

  return (
    <Field fullHeight={fullHeight} spaceAfter={spaceAfter} ref={labelRef}>
      {label && (
        <FormLabel
          filled={!!value}
          error={!!error}
          help={!!help}
          required={required}
          disabled={disabled}
          iconRef={iconRef}
          onMouseEnter={() => setTooltipShownHover(true)}
          onMouseLeave={() => setTooltipShownHover(false)}
        >
          {label}
        </FormLabel>
      )}

      <StyledTextArea
        data-state={getFieldDataState(!!error)}
        data-test={dataTest}
        aria-required={!!required}
        id={id}
        name={name}
        value={value}
        size={size}
        fullHeight={fullHeight}
        disabled={disabled}
        error={error}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        rows={rows}
        onFocus={handleFocus}
        onBlur={onBlur}
        resize={resize}
        tabIndex={tabIndex}
        readOnly={readOnly}
        ref={ref}
      />
      <ErrorFormTooltip
        help={help}
        inputSize={size}
        helpClosable={helpClosable}
        error={error}
        onShown={setTooltipShown}
        shown={shown}
        referenceElement={labelRef}
      />
    </Field>
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
