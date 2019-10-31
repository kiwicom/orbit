// @flow
import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import FormLabel from "../FormLabel";
import ChevronDown from "../icons/ChevronDown";
import FormFeedback from "../FormFeedback";
import SIZE_OPTIONS from "./consts";
import type { Ref } from "../common/common.js.flow";
import { right, left, rtlSpacing } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import getFieldDataState from "../common/getFieldDataState";

import type { Props } from "./index";

const getSelectSize = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.heightInputSmall,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.heightInputNormal,
  };
  return tokens[size];
};

const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: ${getSpacingToken};
`;

Label.defaultProps = {
  theme: defaultTheme,
};

const StyledSelect = styled(
  // $FlowExpected
  React.forwardRef(
    (
      {
        className,
        dataTest,
        children,
        value,
        disabled,
        name,
        error,
        tabIndex,
        onChange,
        onFocus,
        onBlur,
        id,
      },
      ref,
    ) => (
      <select
        id={id}
        data-test={dataTest}
        data-state={getFieldDataState(error)}
        value={value}
        className={className}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        name={name}
        tabIndex={tabIndex}
        ref={ref}
      >
        {children}
      </select>
    ),
  ),
)`
  appearance: none;
  background: ${({ theme }) => theme.orbit.backgroundInput};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  cursor: pointer;
  color: ${({ theme, filled }) =>
    filled ? theme.orbit.colorTextInput : theme.orbit.colorPlaceholderInput};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme, size }) =>
    size === SIZE_OPTIONS.SMALL ? theme.orbit.fontSizeInputSmall : theme.orbit.fontSizeInputNormal};
  height: ${getSelectSize};
  padding: ${({ theme, size, prefix }) =>
    rtlSpacing(
      (size === SIZE_OPTIONS.SMALL &&
        !prefix &&
        `0 ${theme.orbit.spaceXLarge} 0 ${theme.orbit.spaceSmall}`) ||
        (size === SIZE_OPTIONS.SMALL &&
          prefix &&
          `0 ${theme.orbit.spaceXLarge} 0 ${theme.orbit.paddingLeftSelectPrefix}`) ||
        (prefix && `0 ${theme.orbit.spaceXXLarge} 0 ${theme.orbit.paddingLeftSelectPrefix}`) ||
        `0 ${theme.orbit.spaceXXLarge} 0 ${theme.orbit.spaceSmall}`,
    )};
  outline: none;
  width: 100%;
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  z-index: 2;
  color: ${({ customValueText }) => customValueText && "transparent"};
  > option {
    color: ${({ theme }) => theme.orbit.colorTextInput};
  }

  &::-ms-expand {
    display: none;
  }

  // IE Bug fix: highlighted background color and color of text
  &::-ms-value {
    background: transparent;
    color: ${({ theme, filled }) =>
      filled ? theme.orbit.colorTextInput : theme.orbit.colorPlaceholderInput};
    // needs to rgba, transparent is not allow in IE
    color: ${({ customValueText }) => customValueText && "rgba(255, 255, 255, 0)"};
  }

  /* Based on state of select */
  border: 0;
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput
      }`};

  &:hover {
    box-shadow: inset 0 0 0
      ${({ theme, error }) =>
        `${theme.orbit.borderWidthInput} ${
          error ? theme.orbit.borderColorInputErrorHover : theme.orbit.borderColorInputHover
        }`};
  }

  &:focus {
    box-shadow: inset 0 0 0
      ${({ theme }) => `${theme.orbit.borderWidthInputFocus} ${theme.orbit.borderColorInputFocus}`};
  }

  &:disabled {
    color: ${({ theme }) => theme.orbit.colorTextInputDisabled};
    background: ${({ theme }) => theme.orbit.backgroundInputDisabled};
    cursor: not-allowed;

    &:hover {
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.orbit.borderColorInput};
    }
  }
`;

StyledSelect.defaultProps = {
  theme: defaultTheme,
};

export const SelectContainer = styled(({ className, children, labelRef }) => (
  <div ref={labelRef} className={className}>
    {children}
  </div>
))`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.orbit.backgroundInput};
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;

SelectContainer.defaultProps = {
  theme: defaultTheme,
};

const SelectPrefix = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  align-items: center;
  position: absolute;
  padding: ${({ theme }) => `0 ${theme.orbit.spaceSmall}`};
  pointer-events: none;
  z-index: 3;
  top: 0;
  height: ${getSelectSize};
`;

SelectPrefix.defaultProps = {
  theme: defaultTheme,
};

const SelectSuffix = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  ${right}: ${({ theme }) => theme.orbit.spaceXSmall};
  color: ${({ theme, disabled }) =>
    disabled ? theme.orbit.colorTextInputDisabled : theme.orbit.colorTextInput};
  pointer-events: none;
  z-index: 3;
  height: 100%;

  & > * {
    width: ${({ theme, size }) => size === SIZE_OPTIONS.SMALL && theme.orbit.widthIconSmall};
    height: ${({ theme, size }) => size === SIZE_OPTIONS.SMALL && theme.orbit.heightIconSmall};
    margin-bottom: ${({ size, theme }) => size === SIZE_OPTIONS.SMALL && theme.orbit.spaceXXXSmall};
  }
`;

SelectSuffix.defaultProps = {
  theme: defaultTheme,
};

const StyledCustomValue = styled(({ prefix, theme, size, filled, ...props }) => <div {...props} />)`
  color: ${({ theme, filled }) =>
    filled ? theme.orbit.colorTextInput : theme.orbit.colorPlaceholderInput};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme, size }) =>
    size === SIZE_OPTIONS.SMALL ? theme.orbit.fontSizeInputSmall : theme.orbit.fontSizeInputNormal};
  z-index: 3;
  position: absolute;
  height: 100%;
  line-height: ${getSelectSize};
  top: 0;
  ${left}: ${({ prefix, theme }) => (prefix ? "48px" : theme.orbit.spaceSmall)};
  bottom: 0;
  pointer-events: none;
`;

StyledCustomValue.defaultProps = {
  theme: defaultTheme,
};

// $FlowExpected
const Select = React.forwardRef((props: Props, ref: Ref) => {
  const {
    size = SIZE_OPTIONS.NORMAL,
    label,
    placeholder,
    value,
    disabled = false,
    error,
    help,
    name,
    onChange,
    onBlur,
    onFocus,
    options,
    tabIndex,
    id,
    required,
    dataTest,
    prefix,
    spaceAfter,
    customValueText,
  } = props;
  const filled = !(value == null || value === "");

  const [tooltipShown, setTooltipShown] = useState(false);
  const [tooltipShownHover, setTooltipShownHover] = useState(false);
  const labelRef = useRef(null);
  const iconRef = useRef(null);

  const handleFocus = useCallback(
    ev => {
      if (onFocus) onFocus(ev);
      setTooltipShown(true);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    ev => {
      if (onBlur) onBlur(ev);
      setTooltipShown(false);
    },
    [onBlur],
  );

  return (
    <Label spaceAfter={spaceAfter}>
      {label && (
        <FormLabel
          filled={!!filled}
          error={!!error}
          help={!!help}
          disabled={disabled}
          labelRef={labelRef}
          iconRef={iconRef}
          onMouseEnter={() => setTooltipShownHover(true)}
          onMouseLeave={() => setTooltipShownHover(false)}
          required={required}
        >
          {label}
        </FormLabel>
      )}
      <SelectContainer disabled={disabled} labelRef={label ? null : labelRef}>
        {prefix && (
          <SelectPrefix prefix={prefix} size={size}>
            {prefix}
          </SelectPrefix>
        )}
        {customValueText && (
          <StyledCustomValue filled={filled} size={size} prefix={prefix}>
            {customValueText}
          </StyledCustomValue>
        )}
        <StyledSelect
          dataTest={dataTest}
          size={size}
          disabled={disabled}
          error={error}
          value={value == null ? "" : value}
          prefix={prefix}
          name={name}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          filled={filled}
          customValueText={customValueText}
          tabIndex={tabIndex}
          id={id}
          required={required}
          ref={ref}
        >
          {placeholder && (
            <option label={placeholder} value="">
              {placeholder}
            </option>
          )}
          {options.map(option => (
            <option key={`option-${option.value}`} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <SelectSuffix size={size} disabled={disabled}>
          <ChevronDown />
        </SelectSuffix>
      </SelectContainer>
      <FormFeedback
        help={help}
        error={error}
        iconRef={iconRef}
        labelRef={labelRef}
        tooltipShown={tooltipShown}
        tooltipShownHover={tooltipShownHover}
      />
    </Label>
  );
});

// otherwise Unknown in storybook
Select.displayName = "Select";

export default Select;
