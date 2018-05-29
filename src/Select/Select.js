// @flow
import * as React from "react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";

import FormLabel from "../FormLabel/FormLabel";
import ChevronDown from "../icons/ChevronDown";
import FormFeedback from "../FormFeedback/FormFeedback";
import TYPE_OPTIONS from "../FormFeedback/consts";
import SIZE_OPTIONS from "./consts";
import type { Props } from "./Select";

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
  background: ${({ theme }) => theme.backgroundInput};
  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  cursor: pointer;
  color: ${({ theme, filled }) => (filled ? theme.colorTextInput : theme.paletteInkLight)};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme, size }) =>
    size === SIZE_OPTIONS.SMALL ? theme.fontSizeInputSmall : theme.fontSizeInputNormal};
  height: ${({ theme, size }) =>
    size === SIZE_OPTIONS.SMALL ? theme.heightInputSmall : theme.heightInputNormal};
  padding: ${({ theme, size }) =>
    size === SIZE_OPTIONS.SMALL
      ? `0 ${theme.spaceXLarge} 0 ${theme.spaceSmall}`
      : `0 ${theme.spaceXXLarge} 0 ${theme.spaceSmall}`};
  outline: none;
  width: 100%;

  &::-ms-expand {
    display: none;
  }

  /* With prefix */
  padding-left: ${({ prefix }) => prefix && "48px"}; // TODO: Create token

  /* Based on state of select */
  border-color: ${({ theme, error }) =>
    error ? theme.borderColorInputError : theme.borderColorInput};

  &:hover {
    border-color: ${({ theme, error }) =>
      error ? theme.paletteRedNormal : theme.borderColorInputHover}; // TODO: Create hover token
  }

  &:focus {
    border-color: ${({ theme, error }) =>
      error
        ? theme.borderColorInputErrorFocus
        : theme.borderColorInputFocus}; // TODO: check focus color
    box-shadow: ${({ theme, error }) =>
      error ? theme.boxShadowInputErrorFocus : theme.boxShadowInputFocus};
  }

  &:disabled {
    color: ${({ theme }) => theme.colorTextInputDisabled};
    background: ${({ theme }) => theme.backgroundInputDisabled};
    cursor: default;

    &:hover {
      border-color: ${({ theme }) => theme.borderColorInput};
    }
  }
`;

const SelectContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.backgroundInput};
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;

const SelectPrefix = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  align-items: center;
  position: absolute;
  padding: ${({ theme }) => `0 ${theme.spaceSmall}`};
  pointer-events: none;
`;

const SelectSuffix = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  position: absolute;
  right: ${({ theme }) => theme.spaceXSmall};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colorTextInputDisabled : theme.colorTextInput};
  pointer-events: none;

  & > * {
    width: ${({ theme, size }) => size === SIZE_OPTIONS.SMALL && theme.widthIconSmall};
    height: ${({ theme, size }) => size === SIZE_OPTIONS.SMALL && theme.heightIconSmall};
    margin-bottom: ${({ size }) =>
      size === SIZE_OPTIONS.SMALL && "2px"}; // temporary replacement for token spaceXXXSmall
  }
`;

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
  theme = defaultTokens,
}: Props) => {
  const filled = !!placeholder && value !== "";

  return (
    <label>
      {label && (
        <FormLabel theme={theme} filled={filled} disabled={disabled}>
          {label}
        </FormLabel>
      )}
      <SelectContainer theme={theme} disabled={disabled}>
        {prefix && (
          <SelectPrefix theme={theme} prefix={prefix}>
            {prefix}
          </SelectPrefix>
        )}
        <StyledSelect
          size={size}
          disabled={disabled}
          error={error}
          value={value}
          theme={theme}
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

        <SelectSuffix theme={theme} size={size} disabled={disabled}>
          <ChevronDown />
        </SelectSuffix>
      </SelectContainer>
      {help &&
        !error && (
          <FormFeedback type={TYPE_OPTIONS.HELP} theme={theme}>
            {help}
          </FormFeedback>
        )}
      {error && (
        <FormFeedback type={TYPE_OPTIONS.ERROR} theme={theme}>
          {error}
        </FormFeedback>
      )}
    </label>
  );
};

export default Select;
