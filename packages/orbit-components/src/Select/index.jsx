// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import type { DataAttrs } from "../common/common.js.flow";
import defaultTheme from "../defaultTheme";
import FormLabel from "../FormLabel";
import ChevronDown from "../icons/ChevronDown";
import ErrorFormTooltip from "../ErrorFormTooltip";
import SIZE_OPTIONS from "./consts";
import { right, left, rtlSpacing } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import getFieldDataState from "../common/getFieldDataState";
import useErrorTooltip from "../ErrorFormTooltip/hooks/useErrorTooltip";
import formElementFocus from "../InputField/helpers/formElementFocus";
import mq from "../utils/mediaQuery";

import type { Props } from ".";

const getSelectSize = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.formBoxSmallHeight,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.formBoxNormalHeight,
  };
  return tokens[size];
};

const Label = styled.label`
  ${({ $width }) => css`
    position: relative;
    display: block;
    width: ${$width};
    margin-bottom: ${getSpacingToken};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Label.defaultProps = {
  theme: defaultTheme,
};

type StyledSelectType = Props & {|
  className: string,
  children: React.Node,
  error: boolean,
  ...DataAttrs,
|};

const StyledSelect: any = styled(
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
        dataAttrs,
        readOnly,
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
        readOnly={readOnly}
        onBlur={onBlur}
        disabled={disabled}
        name={name}
        tabIndex={tabIndex}
        ref={ref}
        {...dataAttrs}
      >
        {children}
      </select>
    ),
  ),
)`
  ${({ theme, size, filled, prefix, customValueText, error }) => css`
    appearance: none;
    background: ${theme.orbit.formElementBackground};
    cursor: pointer;
    color: ${filled ? theme.orbit.formElementFilledForeground : theme.orbit.formElementForeground};
    font-family: ${theme.orbit.fontFamily};
    font-size: ${size === SIZE_OPTIONS.SMALL
      ? theme.orbit.formElementSmallFontSize
      : theme.orbit.formElementNormalFontSize};
    height: ${getSelectSize};
    padding: ${rtlSpacing(
      (size === SIZE_OPTIONS.SMALL &&
        !prefix &&
        `0 ${theme.orbit.spaceEightX} 0 ${theme.orbit.spaceThreeX}`) ||
        (size === SIZE_OPTIONS.SMALL && prefix && `0 ${theme.orbit.spaceEightX} 0 48px`) ||
        (prefix && `0 ${theme.orbit.spaceTenX} 0 48px`) ||
        `0 ${theme.orbit.spaceTenX} 0 ${theme.orbit.spaceThreeX}`,
    )};
    outline: none;
    width: 100%;
    color: ${customValueText && "transparent !important"};
    transition: box-shadow ${theme.orbit.durationFast} ease-in-out;
    z-index: 2;

    border-radius: 6px;
    ${mq.tablet(css`
      border-radius: ${theme.orbit.borderRadiusNormal};
    `)};

    > option {
      color: ${theme.orbit.formElementFilledForeground};
    }

    &::-ms-expand {
      display: none;
    }

    // IE Bug fix: highlighted background color and color of text
    &::-ms-value {
      background: transparent;
      color: ${filled
        ? theme.orbit.formElementFilledForeground
        : theme.orbit.formElementForeground};
      // needs to rgba, transparent is not allow in IE
      color: ${customValueText && "rgba(255, 255, 255, 0)"};
    }

    /* Based on state of select */
    border: 0;
    box-shadow: inset 0 0 0
      ${`1px ${
        error ? theme.orbit.formElementBorderColorError : theme.orbit.formElementBorderColor
      }`};

    &:hover {
      box-shadow: inset 0 0 0
        ${`1px ${
          error ? theme.orbit.paletteRedNormalSecondary : theme.orbit.formElementBorderColorHover
        }`};
    }

    &:focus {
      ${formElementFocus}
    }

    &:disabled {
      color: ${theme.orbit.formElementDisabledForeground};
      background: ${theme.orbit.formElementDisabledBackground};
      cursor: not-allowed;

      &:hover {
        box-shadow: inset 0 0 0 1px ${theme.orbit.formElementBorderColor};
      }
    }

    /*
  This fix is needed for case where Select has customValueText and it's autofilled by webkit based browser.
  In that case autofilled value would be displayed, overflowing customValueText.
*/
    ${customValueText &&
    `
  &:-webkit-autofill,
  &:-internal-autofill-selected {
    -webkit-text-fill-color: transparent;
  }
`}
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSelect.defaultProps = {
  theme: defaultTheme,
};

export const SelectContainer: React.AbstractComponent<any, HTMLDivElement> = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.orbit.formElementBackground};
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
SelectContainer.defaultProps = {
  theme: defaultTheme,
};

const SelectPrefix = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: absolute;
    padding: ${`0 ${theme.orbit.spaceThreeX}`};
    pointer-events: none;
    z-index: 3;
    top: 0;
    height: ${getSelectSize};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
SelectPrefix.defaultProps = {
  theme: defaultTheme,
};

const SelectSuffix = styled.div`
  ${({ theme, disabled, size }) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    ${right}: ${theme.orbit.spaceTwoX};
    color: ${disabled
      ? theme.orbit.formElementDisabledForeground
      : theme.orbit.formElementFilledForeground};
    pointer-events: none;
    z-index: 3;
    height: 100%;

    & > * {
      width: ${size === SIZE_OPTIONS.SMALL && theme.orbit.iconExtraSmallSize};
      height: ${size === SIZE_OPTIONS.SMALL && theme.orbit.iconExtraSmallSize};
      margin-bottom: ${size === SIZE_OPTIONS.SMALL && theme.orbit.spaceHalfX};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
SelectSuffix.defaultProps = {
  theme: defaultTheme,
};

const StyledCustomValue = styled(({ prefix, theme, size, filled, disabled, ...props }) => (
  <div {...props} />
))`
  ${({ theme, filled, disabled, size, prefix }) => css`
    color: ${(disabled && theme.orbit.paletteInkLighter) ||
    (filled ? theme.orbit.formElementFilledForeground : theme.orbit.formElementForeground)};

    font-family: ${theme.orbit.fontFamily};
    font-size: ${size === SIZE_OPTIONS.SMALL
      ? theme.orbit.formElementSmallFontSize
      : theme.orbit.formElementNormalFontSize};
    z-index: 3;
    position: absolute;
    height: 100%;
    line-height: ${getSelectSize};
    top: 0;
    ${left}: ${prefix ? "48px" : theme.orbit.spaceThreeX};
    bottom: 0;
    pointer-events: none;
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledCustomValue.defaultProps = {
  theme: defaultTheme,
};

const Select: React.AbstractComponent<
  Props,
  React.AbstractComponent<StyledSelectType, HTMLSelectElement>,
> = React.forwardRef((props, ref) => {
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

  const {
    tooltipShown,
    tooltipShownHover,
    setTooltipShownHover,
    labelRef,
    iconRef,
    setTooltipShown,
    handleFocus,
  } = useErrorTooltip({ onFocus });

  const inputRef = React.useRef(null);

  const shown = tooltipShown || tooltipShownHover;

  return (
    <Label spaceAfter={spaceAfter} ref={inputRef} $width={width}>
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
        {prefix && (
          <SelectPrefix prefix={prefix} size={size}>
            {prefix}
          </SelectPrefix>
        )}
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
          tabIndex={tabIndex}
          id={id}
          readOnly={readOnly}
          required={required}
          ref={ref}
          dataAttrs={dataAttrs}
        >
          {placeholder && (
            <option label={placeholder} value="">
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
      {!insideInputGroup && (
        <ErrorFormTooltip
          help={help}
          error={error}
          inputSize={size}
          helpClosable={helpClosable}
          shown={shown}
          onShown={setTooltipShown}
          referenceElement={inputRef}
        />
      )}
    </Label>
  );
});

// otherwise Unknown in storybook
Select.displayName = "Select";

export default Select;
