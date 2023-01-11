import * as React from "react";
import styled, { css } from "styled-components";

import type { DataAttrs, Size } from "../common/types";
import type { Theme } from "../defaultTheme";
import defaultTheme from "../defaultTheme";
import FormLabel from "../FormLabel";
import ChevronDown from "../icons/ChevronDown";
import ErrorFormTooltip from "../ErrorFormTooltip";
import { SIZE_OPTIONS } from "./consts";
import { right, left, rtlSpacing } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import getFieldDataState from "../common/getFieldDataState";
import useErrorTooltip from "../ErrorFormTooltip/hooks/useErrorTooltip";
import formElementFocus from "../InputField/helpers/formElementFocus";
import mq from "../utils/mediaQuery";
import useRandomId from "../hooks/useRandomId";
import type { Props } from "./types";

const getSelectSize = ({ theme, size }: { theme: Theme; size: Size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.heightInputSmall,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.heightInputNormal,
  };
  return tokens[size];
};

const StyledLabel = styled.label<{ $width: string; spaceAfter?: Props["spaceAfter"] }>`
  ${({ $width }) => css`
    position: relative;
    display: block;
    width: ${$width};
    margin-bottom: ${getSpacingToken};
  `}
`;

StyledLabel.defaultProps = {
  theme: defaultTheme,
};

interface StyledSelectType extends Partial<Props>, DataAttrs {
  className?: string;
  children: React.ReactNode;
  error?: React.ReactNode;
  filled: boolean;
  ariaDescribedby?: string;
  ariaInvalid?: boolean;
}

const StyledSelect = styled(
  React.forwardRef<HTMLSelectElement, StyledSelectType>(
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
        dataAttrs,
        readOnly,
        ariaDescribedby,
        ariaInvalid,
      },
      ref,
    ) => (
      <select
        id={id}
        data-test={dataTest}
        data-state={getFieldDataState(!!error)}
        value={value}
        className={className}
        onChange={onChange}
        onFocus={onFocus}
        // @ts-expect-error TODO
        readOnly={readOnly}
        onBlur={onBlur}
        disabled={disabled}
        name={name}
        tabIndex={tabIndex ? Number(tabIndex) : undefined}
        ref={ref}
        aria-describedby={ariaDescribedby}
        aria-invalid={ariaInvalid}
        {...dataAttrs}
      >
        {children}
      </select>
    ),
  ),
)`
  appearance: none;
  background: ${({ theme }) => theme.orbit.backgroundInput};
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
  color: ${({ customValueText }) => customValueText && "transparent !important"};
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  z-index: 2;

  border-radius: 6px;
  ${mq.tablet(css`
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  `)};

  > option {
    color: ${({ theme }) => theme.orbit.colorTextInput};
  }

  &::-ms-expand {
    display: none;
  }

  &::-ms-value {
    background: transparent;
    color: ${({ theme, filled }) =>
      filled ? theme.orbit.colorTextInput : theme.orbit.colorPlaceholderInput};
    color: ${({ customValueText }) => customValueText && "rgba(255, 255, 255, 0)"};
  }

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
    ${formElementFocus}
  }

  &:disabled {
    color: ${({ theme }) => theme.orbit.colorTextInputDisabled};
    background: ${({ theme }) => theme.orbit.backgroundInputDisabled};
    cursor: not-allowed;

    &:hover {
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.orbit.borderColorInput};
    }
  }

  ${({ customValueText }) =>
    customValueText &&
    `
    &:-webkit-autofill,
    &:-internal-autofill-selected {
      -webkit-text-fill-color: transparent;
    }
  `}
`;

StyledSelect.defaultProps = {
  theme: defaultTheme,
};

export const SelectContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    background: ${theme.orbit.backgroundInput};
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
  `};
`;

SelectContainer.defaultProps = {
  theme: defaultTheme,
};

const SelectPrefix = styled.div<{ size: Size }>`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: absolute;
    padding: 0 ${theme.orbit.spaceSmall};
    pointer-events: none;
    z-index: 3;
    top: 0;
    height: ${getSelectSize};
  `};
`;

SelectPrefix.defaultProps = {
  theme: defaultTheme,
};

const SelectSuffix = styled.div<{ disabled?: boolean; size: Size }>`
  ${({ theme, size, disabled }) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    ${right}: ${theme.orbit.spaceXSmall};
    color: ${disabled ? theme.orbit.colorTextInputDisabled : theme.orbit.colorTextInput};
    pointer-events: none;
    z-index: 3;
    height: 100%;

    & > * {
      width: ${size === SIZE_OPTIONS.SMALL && theme.orbit.widthIconSmall};
      height: ${size === SIZE_OPTIONS.SMALL && theme.orbit.heightIconSmall};
      margin-bottom: ${size === SIZE_OPTIONS.SMALL && theme.orbit.spaceXXXSmall};
    }
  `};
`;

SelectSuffix.defaultProps = {
  theme: defaultTheme,
};

const StyledCustomValue = styled(({ prefix, theme, size, filled, disabled, ...props }) => (
  <div {...props} />
))`
  color: ${({ theme, filled, disabled }) =>
    (disabled && theme.orbit.paletteInkLight) ||
    (filled ? theme.orbit.colorTextInput : theme.orbit.colorPlaceholderInput)};

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

const Select = React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
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
    width = "100%",
    options,
    tabIndex,
    id,
    required,
    helpClosable = true,
    dataTest,
    prefix,
    spaceAfter,
    customValueText,
    insideInputGroup,
    dataAttrs,
    readOnly,
  } = props;
  const filled = !(value == null || value === "");

  const forID = useRandomId();
  const selectId = id || forID;

  const hasTooltip = Boolean(error || help);

  const {
    tooltipShown,
    tooltipShownHover,
    setTooltipShownHover,
    labelRef,
    iconRef,
    setTooltipShown,
    handleFocus,
  } = useErrorTooltip<HTMLSelectElement, HTMLDivElement>({ onFocus, hasTooltip });

  const inputRef = React.useRef<HTMLLabelElement | null>(null);

  const shown = tooltipShown || tooltipShownHover;

  return (
    <StyledLabel spaceAfter={spaceAfter} ref={inputRef} $width={width}>
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
      <SelectContainer ref={label ? null : labelRef}>
        {prefix && <SelectPrefix size={size}>{prefix}</SelectPrefix>}
        {customValueText && (
          <StyledCustomValue disabled={disabled} filled={filled} size={size} prefix={prefix}>
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
          onBlur={onBlur}
          onChange={onChange}
          filled={filled}
          customValueText={customValueText}
          tabIndex={tabIndex ? Number(tabIndex) : undefined}
          id={selectId}
          readOnly={readOnly}
          required={required}
          ref={ref}
          dataAttrs={dataAttrs}
          ariaDescribedby={shown ? `${selectId}-feedback` : undefined}
          ariaInvalid={error ? true : undefined}
        >
          {placeholder && (
            <option label={placeholder.toString()} value="">
              {placeholder}
            </option>
          )}
          {options.map(option => (
            <option
              key={`option-${option.key || option.value}`}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <SelectSuffix size={size} disabled={disabled}>
          <ChevronDown color="secondary" />
        </SelectSuffix>
      </SelectContainer>
      {!insideInputGroup && hasTooltip && (
        <ErrorFormTooltip
          id={`${selectId}-feedback`}
          help={help}
          error={error}
          inputSize={size}
          helpClosable={helpClosable}
          shown={shown}
          onShown={setTooltipShown}
          referenceElement={inputRef}
        />
      )}
    </StyledLabel>
  );
});

// otherwise Unknown in storybook
Select.displayName = "Select";

export default Select;
