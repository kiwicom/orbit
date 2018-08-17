// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import FormLabel from "../FormLabel";
import ChevronDown from "../icons/ChevronDown";
import FormFeedback from "../FormFeedback";
import TYPE_OPTIONS from "../FormFeedback/consts";
import SIZE_OPTIONS from "./consts";

import type { Props } from "./index";

const StyledSelect = styled(
  ({ className, children, value, disabled, onChange, onFocus, onBlur }) => (
    <select
      value={value}
      className={className}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
    >
      {children}
    </select>
  ),
)`
  appearance: none;
  background: ${({ theme }) => theme.orbit.backgroundInput};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  cursor: pointer;
  color: ${({ theme, filled }) =>
    filled ? theme.orbit.colorTextInput : theme.orbit.paletteInkLight};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme, size }) =>
    size === SIZE_OPTIONS.SMALL ? theme.orbit.fontSizeInputSmall : theme.orbit.fontSizeInputNormal};
  height: ${({ theme, size }) =>
    size === SIZE_OPTIONS.SMALL ? theme.orbit.heightInputSmall : theme.orbit.heightInputNormal};
  padding: ${({ theme, size }) =>
    size === SIZE_OPTIONS.SMALL
      ? `0 ${theme.orbit.spaceXLarge} 0 ${theme.orbit.spaceSmall}`
      : `0 ${theme.orbit.spaceXXLarge} 0 ${theme.orbit.spaceSmall}`};
  outline: none;
  width: 100%;
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  &::-ms-expand {
    display: none;
  }

  /* With prefix */
  padding-left: ${({ prefix }) => prefix && "48px"}; // TODO: Create token

  /* Based on state of select */
  border: 0;
  box-shadow: inset 0 0 0 1px
    ${({ theme, error }) =>
      error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput};

  &:hover {
    box-shadow: inset 0 0 0 1px
      ${({ theme, error }) =>
        error
          ? theme.orbit.paletteRedNormalHover
          : theme.orbit.borderColorInputHover}; // TODO: Create hover token
  }

  &:focus {
    box-shadow: inset 0 0 0 ${({ theme }) => `2px ${theme.orbit.borderColorInputFocus}`};
  }

  &:disabled {
    color: ${({ theme }) => theme.orbit.colorTextInputDisabled};
    background: ${({ theme }) => theme.orbit.backgroundInputDisabled};
    cursor: default;

    &:hover {
      border-color: ${({ theme }) => theme.orbit.borderColorInput};
    }
  }
`;

StyledSelect.defaultProps = {
  theme: defaultTokens,
};

const SelectContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
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
  theme: defaultTokens,
};

const SelectPrefix = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  align-items: center;
  position: absolute;
  padding: ${({ theme }) => `0 ${theme.orbit.spaceSmall}`};
  pointer-events: none;
`;

SelectPrefix.defaultProps = {
  theme: defaultTokens,
};

const SelectSuffix = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  position: absolute;
  right: ${({ theme }) => theme.orbit.spaceXSmall};
  color: ${({ theme, disabled }) =>
    disabled ? theme.orbit.colorTextInputDisabled : theme.orbit.colorTextInput};
  pointer-events: none;

  & > * {
    width: ${({ theme, size }) => size === SIZE_OPTIONS.SMALL && theme.orbit.widthIconSmall};
    height: ${({ theme, size }) => size === SIZE_OPTIONS.SMALL && theme.orbit.heightIconSmall};
    margin-bottom: ${({ size }) =>
      size === SIZE_OPTIONS.SMALL && "2px"}; // temporary replacement for token spaceXXXSmall
  }
`;

SelectSuffix.defaultProps = {
  theme: defaultTokens,
};

const Select = ({
  size = SIZE_OPTIONS.NORMAL,
  label,
  placeholder,
  value,
  disabled = false,
  error,
  help,
  onChange,
  onBlur,
  onFocus,
  options,
  prefix,
}: Props) => {
  const filled = !!placeholder && value !== "";

  return (
    <label>
      {label && (
        <FormLabel filled={filled} disabled={disabled}>
          {label}
        </FormLabel>
      )}
      <SelectContainer disabled={disabled}>
        {prefix && <SelectPrefix prefix={prefix}>{prefix}</SelectPrefix>}
        <StyledSelect
          size={size}
          disabled={disabled}
          error={error}
          value={value}
          prefix={prefix}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          filled={filled}
        >
          {placeholder && (
            <option label={placeholder} value="" selected disabled>
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
      {help && !error && <FormFeedback type={TYPE_OPTIONS.HELP}>{help}</FormFeedback>}
      {error && <FormFeedback type={TYPE_OPTIONS.ERROR}>{error}</FormFeedback>}
    </label>
  );
};

export default Select;
