import * as React from "react";
import styled, { css } from "styled-components";

import type { DataAttrs } from "../common/types";
import defaultTheme from "../defaultTheme";
import FormLabel from "../FormLabel";
import { FakeInput } from "../InputField";
import ChevronDown from "../icons/ChevronDown";
import AlertCircle from "../icons/AlertCircle";
import InformationCircle from "../icons/InformationCircle";
import ErrorFormTooltip from "../ErrorFormTooltip";
import { right, left, rtlSpacing } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import getFieldDataState from "../common/getFieldDataState";
import useErrorTooltip from "../ErrorFormTooltip/hooks/useErrorTooltip";
import formElementFocus from "../InputField/helpers/formElementFocus";
import mq from "../utils/mediaQuery";
import useRandomId from "../hooks/useRandomId";
import type { Props } from "./types";

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

const StyledInlineLabel = styled.div<{ hasFeedback?: boolean }>`
  ${({ theme, hasFeedback }) => css`
    height: 100%;
    display: flex;
    align-items: center;
    pointer-events: none;
    justify-content: center;
    padding: ${rtlSpacing(
      `0 0 0 ${hasFeedback ? theme.orbit.spaceXXSmall : theme.orbit.spaceSmall}`,
    )};

    ${FormLabel} {
      margin-bottom: 0;
      font-size: ${theme.orbit.fontSizeInputNormal};
      line-height: ${theme.orbit.lineHeightTextNormal};
      z-index: 3;
      white-space: nowrap;
    }
  `}
`;

StyledInlineLabel.defaultProps = {
  theme: defaultTheme,
};

const StyledIconWrapper = styled.span`
  display: flex;
`;

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
  ${({ theme, filled, customValueText }) => css`
    appearance: none;
    background: transparent;
    cursor: pointer;
    color: ${filled ? theme.orbit.colorTextInput : theme.orbit.colorPlaceholderInput};
    font-family: ${theme.orbit.fontFamily};
    font-size: ${theme.orbit.fontSizeInputNormal};
    height: ${theme.orbit.heightInputNormal};
    padding: ${rtlSpacing(`0 ${theme.orbit.spaceXXLarge} 0 ${theme.orbit.spaceSmall}`)};
    outline: none;
    flex: 1 1 20%;
    width: 100%;
    height: 100%;
    border: 0;
    color: ${customValueText && "transparent !important"};
    transition: box-shadow ${theme.orbit.durationFast} ease-in-out;

    border-radius: ${theme.orbit.borderRadiusLarge};
    ${mq.tablet(css`
      border-radius: ${theme.orbit.borderRadiusNormal};
    `)};

    > option {
      color: ${theme.orbit.colorTextInput};
    }

    &::-ms-expand {
      display: none;
    }

    &::-ms-value {
      background: transparent;
      color: ${filled ? theme.orbit.colorTextInput : theme.orbit.colorPlaceholderInput};
      color: ${customValueText && "rgba(255, 255, 255, 0)"};
    }

    &:focus {
      outline: none;
      & ~ ${FakeInput} {
        ${formElementFocus}
      }
    }

    &:disabled {
      color: ${theme.orbit.colorTextInputDisabled};
      cursor: not-allowed;
    }

    ${customValueText &&
    `
      &:-webkit-autofill,
      &:-internal-autofill-selected {
        -webkit-text-fill-color: transparent;
      }
    `}
  `}
`;

StyledSelect.defaultProps = {
  theme: defaultTheme,
};

export const SelectContainer = styled.div<{ disabled?: boolean; error?: boolean }>`
  ${({ theme, disabled, error }) => css`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    height: ${theme.orbit.heightInputNormal};
    color: ${disabled ? theme.orbit.colorTextInputDisabled : theme.orbit.colorTextInput};
    cursor: ${disabled ? "not-allowed" : "pointer"};

    &:hover > ${FakeInput} {
      ${!disabled &&
      `box-shadow: inset 0 0 0 ${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputErrorHover : theme.orbit.borderColorInputHover
      }`};
    }
  `}
`;

SelectContainer.defaultProps = {
  theme: defaultTheme,
};

const SelectPrefix = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${rtlSpacing(`0 0 0 ${theme.orbit.spaceSmall}`)};
    pointer-events: none;
    z-index: 3;
    height: ${theme.orbit.heightInputNormal};
  `};
`;

SelectPrefix.defaultProps = {
  theme: defaultTheme,
};

const SelectSuffix = styled.div<{ disabled?: boolean }>`
  ${({ theme, disabled }) => css`
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
  `};
`;

SelectSuffix.defaultProps = {
  theme: defaultTheme,
};

const StyledCustomValue = styled(({ _theme, _filled, _disabled, ...props }) => <div {...props} />)`
  ${({ theme, _filled, disabled }) => css`
    color: ${(disabled && theme.orbit.paletteInkLight) ||
    (_filled ? theme.orbit.colorTextInput : theme.orbit.colorPlaceholderInput)};

    font-family: ${theme.orbit.fontFamily};
    font-size: ${theme.orbit.fontSizeInputNormal};
    z-index: 3;
    position: absolute;
    height: 100%;
    top: 0;
    ${left}: ${theme.orbit.spaceSmall};
    bottom: 0;
    pointer-events: none;
  `}
`;

StyledCustomValue.defaultProps = {
  theme: defaultTheme,
};

const StyledSelectWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 3;
`;

const Select = React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const {
    label,
    inlineLabel,
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
      {label && !inlineLabel && (
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
      <SelectContainer ref={label ? null : labelRef} disabled={disabled} error={!!error}>
        {inlineLabel && (error || help) ? (
          <SelectPrefix>
            {help && !error && (
              <StyledIconWrapper ref={iconRef}>
                <InformationCircle color="info" size="small" />
              </StyledIconWrapper>
            )}
            {error && (
              <StyledIconWrapper ref={iconRef}>
                <AlertCircle color="critical" size="small" />
              </StyledIconWrapper>
            )}
          </SelectPrefix>
        ) : (
          prefix && <SelectPrefix>{prefix}</SelectPrefix>
        )}
        {label && inlineLabel && (
          <StyledInlineLabel hasFeedback={!!(error || help)} ref={labelRef}>
            <FormLabel
              filled={!!value}
              required={required}
              error={!!error}
              help={!!help}
              inlineLabel={inlineLabel}
            >
              {label}
            </FormLabel>
          </StyledInlineLabel>
        )}
        <StyledSelectWrapper>
          {customValueText && (
            <StyledCustomValue disabled={disabled} _filled={filled}>
              {customValueText}
            </StyledCustomValue>
          )}
          <StyledSelect
            dataTest={dataTest}
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
        </StyledSelectWrapper>

        <SelectSuffix disabled={disabled}>
          <ChevronDown color="secondary" />
        </SelectSuffix>
        <FakeInput disabled={disabled} error={error} />
      </SelectContainer>
      {!insideInputGroup && hasTooltip && (
        <ErrorFormTooltip
          id={`${selectId}-feedback`}
          help={help}
          error={error}
          helpClosable={helpClosable}
          shown={shown}
          onShown={setTooltipShown}
          inlineLabel={inlineLabel}
          referenceElement={inlineLabel ? iconRef : inputRef}
        />
      )}
    </StyledLabel>
  );
});

// otherwise Unknown in storybook
Select.displayName = "Select";

export default Select;
