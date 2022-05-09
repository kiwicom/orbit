// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import { SIZE_OPTIONS, TYPE_OPTIONS, TOKENS } from "./consts";
import FormFeedback from "../FormFeedback";
import DefaultFormLabel from "../../FormLabel";
import { StyledServiceLogo } from "../../ServiceLogo";
import { rtlSpacing } from "../../utils/rtl";
import InputTags from "./InputTags";
import type { Translation } from "../../common/common.js.flow";
import getSpacingToken from "../../common/getSpacingToken";
import getFieldDataState from "../../common/getFieldDataState";
import randomID from "../../utils/randomID";
import formElementFocus from "./helpers/formElementFocus";
import { StyledButtonPrimitiveIconContainer } from "../../primitives/ButtonPrimitive/components/ButtonPrimitiveIconContainer";
import mq from "../../utils/mediaQuery";

import type { Props } from ".";

const getToken = name => ({ theme, size }) => {
  const tokens = {
    [TOKENS.heightInput]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.heightInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.heightInputNormal,
    },
    [TOKENS.fontSizeInput]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeInputNormal,
    },
    [TOKENS.iconSize]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.widthIconSmall,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.widthIconMedium,
    },
  };

  return tokens[name][size];
};

const getPadding = () => ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.paddingInputSmall,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingInputNormal,
  };
  return rtlSpacing(tokens[size]);
};

const getDOMType = type => {
  if (type === TYPE_OPTIONS.PASSPORTID) {
    return TYPE_OPTIONS.TEXT;
  }
  return type;
};

const Field: any = styled(
  React.forwardRef(
    ({ component: Component, className, children, spaceAfter, theme, $width, ...props }, ref) => {
      return (
        <Component className={className} ref={ref} {...props}>
          {children}
        </Component>
      );
    },
  ),
)`
  ${({ theme, $width }) => css`
    font-family: ${theme.orbit.fontFamily};
    position: relative;
    display: block;
    flex: 1 1 100%;
    width: ${$width};
    margin-bottom: ${getSpacingToken};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Field.defaultProps = {
  theme: defaultTheme,
};

export const FakeInput: any = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  ${({ theme, error, disabled }) => css`
    width: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    box-sizing: border-box;
    height: ${getToken(TOKENS.heightInput)};
    box-shadow: inset 0 0 0
      ${`${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput
      }`};
    background-color: ${disabled
      ? theme.orbit.backgroundInputDisabled
      : theme.orbit.backgroundInput};
    font-size: ${getToken(TOKENS.fontSizeInput)};
    transition: all ${theme.orbit.durationFast} ease-in-out;
    border-radius: 6px;
    ${mq.tablet(css`
      border-radius: ${theme.orbit.borderRadiusNormal};
    `)};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
FakeInput.defaultProps = {
  theme: defaultTheme,
};

export const InputContainer: any = styled(({ children, className, labelRef }) => (
  <div ref={labelRef} className={className}>
    {children}
  </div>
))`
  ${({ theme, disabled, error }) => css`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    height: ${getToken(TOKENS.heightInput)};
    border-radius: ${theme.orbit.borderRadiusNormal};
    color: ${disabled ? theme.orbit.colorTextInputDisabled : theme.orbit.colorTextInput};
    font-size: ${getToken(TOKENS.fontSizeInput)};
    cursor: ${disabled ? "not-allowed" : "text"};

    &:hover > ${FakeInput} {
      ${!disabled &&
      `box-shadow: inset 0 0 0 ${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputErrorHover : theme.orbit.borderColorInputHover
      }`};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
InputContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledInlineLabel = styled.div`
  ${({ theme, hasTags, hasFeedback }) => css`
    height: 100%;
    display: flex;
    align-items: center;
    pointer-events: none;
    justify-content: center;
    padding: ${rtlSpacing(
      `0 0 0 ${!hasTags && hasFeedback ? theme.orbit.spaceXXSmall : theme.orbit.spaceSmall}`,
    )};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledInlineLabel.defaultProps = {
  theme: defaultTheme,
};

export const Prefix: any = styled(({ children, className, iconRef }) => (
  <div className={className} ref={iconRef}>
    {children}
  </div>
))`
  ${({ theme }) => css`
    height: 100%;
    color: ${theme.orbit.colorTextInputPrefix};
    display: flex;
    align-items: center;
    pointer-events: none;
    justify-content: center;
    padding: ${rtlSpacing(`0 0 0 ${theme.orbit.spaceSmall}`)};
    z-index: 3;

    & > svg {
      color: ${theme.orbit.colorIconInput};
    }

    & * svg,
    & > svg {
      width: ${getToken(TOKENS.iconSize)};
      height: ${getToken(TOKENS.iconSize)};
    }

    ${StyledButtonPrimitiveIconContainer} {
      color: ${theme.orbit.colorIconSecondary};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Prefix.defaultProps = {
  theme: defaultTheme,
};

const Suffix = styled(({ children, className }) => <div className={className}>{children}</div>)`
  ${({ theme }) => css`
    height: ${getToken(TOKENS.heightInput)};
    color: ${theme.orbit.colorTextInputPrefix};
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    pointer-events: ${({ disabled }) => disabled && "none"};
    z-index: 3;

    ${StyledButtonPrimitiveIconContainer} {
      color: ${theme.orbit.colorIconSecondary};
    }

    ${StyledServiceLogo} {
      height: 16px;
      padding: ${rtlSpacing(`0 ${theme.orbit.spaceSmall} 0 0`)};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Suffix.defaultProps = {
  theme: defaultTheme,
};

export const Input: any = styled(
  React.forwardRef(({ type, size, theme, error, help, inlineLabel, dataAttrs, ...props }, ref) => (
    <input type={getDOMType(type)} {...props} {...dataAttrs} ref={ref} />
  )),
)`
  appearance: none;
  -webkit-text-fill-color: ${({ disabled }) => disabled && "inherit"};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  border: none;
  padding: ${getPadding()};
  font-size: inherit;
  font-weight: ${({ inlineLabel, theme }) =>
    inlineLabel ? theme.orbit.fontWeightMedium : theme.orbit.fontWeightNormal};
  color: inherit;
  background-color: transparent;
  cursor: inherit;
  flex: 1 1 20%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  z-index: 2;

  // FIREFOX flexbox bug: the input doesn't shrink properly
  min-width: 0;

  font-variant-numeric: ${({ type }) => type === TYPE_OPTIONS.PASSPORTID && "tabular-nums"};
  letter-spacing: ${({ type }) => type === TYPE_OPTIONS.PASSPORTID && "2px"};

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[data-com-onepassword-filled] {
    background-color: inherit !important;
  }

  &:focus {
    outline: none;
    & ~ ${FakeInput} {
      ${formElementFocus}
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.orbit.formElementForeground};
    /* Firefox */
    opacity: 1;
  }

  /* Internet Explorer 10-11 */
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.orbit.formElementForeground};
  }

  /* Microsoft Edge */
  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.orbit.formElementForeground};
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Input.defaultProps = {
  theme: defaultTheme,
};

const FormLabel = ({
  label,
  isFilled,
  required,
}: {|
  label: Translation,
  isFilled: boolean,
  required?: boolean,
|}) => (
  <DefaultFormLabel filled={isFilled} required={required}>
    {label}
  </DefaultFormLabel>
);

const InputField: React.AbstractComponent<Props, HTMLInputElement> = React.forwardRef<
  Props,
  HTMLInputElement,
>((props, ref) => {
  const {
    disabled,
    size = SIZE_OPTIONS.NORMAL,
    type = TYPE_OPTIONS.TEXT,
    label,
    inlineLabel,
    dataTest,
    required,
    error,
    name,
    prefix,
    onChange,
    onFocus,
    onBlur,
    onSelect,
    onMouseUp,
    onMouseDown,
    onKeyUp,
    onKeyDown,
    placeholder,
    minValue,
    maxValue,
    minLength,
    maxLength,
    suffix,
    help,
    value,
    tags,
    tabIndex,
    readOnly,
    autoComplete,
    autoFocus,
    spaceAfter,
    id,
    inputMode,
    dataAttrs,
  } = props;

  const forID = React.useMemo(() => id || (label ? randomID("inputFieldID") : undefined), [
    id,
    label,
  ]);

  return (
    <Field
      component={label ? "label" : "div"}
      spaceAfter={spaceAfter}
      htmlFor={label ? forID : undefined}
    >
      {label && !inlineLabel && <FormLabel label={label} isFilled={!!value} required={required} />}
      <InputContainer size={size} disabled={disabled} error={error}>
        {prefix && <Prefix size={size}>{prefix}</Prefix>}
        {label && inlineLabel && (
          <StyledInlineLabel size={size}>
            <FormLabel label={label} isFilled={!!value} required={required} />
          </StyledInlineLabel>
        )}
        {tags && <InputTags>{tags}</InputTags>}
        <Input
          data-test={dataTest}
          data-state={getFieldDataState(!!error)}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          onSelect={onSelect}
          onMouseUp={onMouseUp}
          onMouseDown={onMouseDown}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          min={minValue}
          max={maxValue}
          minLength={minLength}
          maxLength={maxLength}
          size={size}
          error={error}
          ref={ref}
          tabIndex={tabIndex}
          inlineLabel={inlineLabel}
          readOnly={readOnly}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          id={forID}
          inputMode={inputMode}
          dataAttrs={dataAttrs}
        />
        {suffix && <Suffix size={size}>{suffix}</Suffix>}
        <FakeInput size={size} disabled={disabled} error={error} />
      </InputContainer>
      <FormFeedback help={help} error={error} />
    </Field>
  );
});

InputField.displayName = "InputField";

export default InputField;
