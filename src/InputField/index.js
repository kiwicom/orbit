// @flow
import React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { SIZE_OPTIONS, TYPE_OPTIONS, TOKENS } from "./consts";
import { StyledServiceLogo } from "../ServiceLogo";
import { rtlSpacing } from "../utils/rtl";
import InputTags from "./InputTags";
import getSpacingToken from "../common/getSpacingToken";
import getFieldDataState from "../common/getFieldDataState";
import { StyledButtonLink } from "../ButtonLink/index";
import randomID from "../utils/randomID";
import FormFeedback from "../FormFeedback";
import AlertCircle from "../icons/AlertCircle";
import InformationCircle from "../icons/InformationCircle";
import FormLabel from "../FormLabel";
import useErrorTooltip from "../FormFeedback/hooks/useErrorTooltip";

import type { Props } from "./index";

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

const Field = styled(
  ({ component: Component, className, children, spaceAfter, theme, ...props }) => {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  },
)`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  position: relative;
  display: block;
  z-index: 2;
  flex: 1 1 100%;
  width: 100%;
  margin-bottom: ${getSpacingToken};
`;

Field.defaultProps = {
  theme: defaultTheme,
};

export const FakeInput = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: ${getToken(TOKENS.heightInput)};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput
      }`};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.backgroundInputDisabled : theme.orbit.backgroundInput};
  font-size: ${getToken(TOKENS.fontSizeInput)};
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in-out;
`;

FakeInput.defaultProps = {
  theme: defaultTheme,
};

export const InputContainer = styled(({ children, className, labelRef }) => (
  <div ref={labelRef} className={className}>
    {children}
  </div>
))`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: ${getToken(TOKENS.heightInput)};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.colorTextInputDisabled : theme.orbit.colorTextInput};
  font-size: ${getToken(TOKENS.fontSizeInput)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

  &:hover > ${FakeInput} {
    ${({ disabled, theme, error }) =>
      !disabled &&
      `box-shadow: inset 0 0 0 ${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputErrorHover : theme.orbit.borderColorInputHover
      }`};
  }

  ${StyledButtonLink}:active {
    box-shadow: none;
  }
`;

InputContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledInlineLabel = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceSmall}`)};

  ${FormLabel} {
    margin-bottom: 0;
    font-size: ${getToken(TOKENS.fontSizeInput)};
    line-height: normal;
    z-index: 3;
    white-space: nowrap;
  }
`;

StyledInlineLabel.defaultProps = {
  theme: defaultTheme,
};

export const Prefix = styled(({ children, className, iconRef }) => (
  <div className={className} ref={iconRef}>
    {children}
  </div>
))`
  height: 100%;
  color: ${({ theme }) => theme.orbit.colorTextInputPrefix};
  display: flex;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceSmall}`)};
  z-index: 3;

  & > svg {
    color: ${({ theme }) => theme.orbit.colorIconInput};
  }

  & * svg,
  & > svg {
    width: ${getToken(TOKENS.iconSize)};
    height: ${getToken(TOKENS.iconSize)};
  }
`;

Prefix.defaultProps = {
  theme: defaultTheme,
};

const Suffix = styled(({ children, className }) => <div className={className}>{children}</div>)`
  height: ${getToken(TOKENS.heightInput)};
  color: ${({ theme }) => theme.orbit.colorTextInputPrefix};
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  pointer-events: ${({ disabled }) => disabled && "none"};
  z-index: 3;

  & svg {
    color: ${({ theme }) => theme.orbit.colorIconSecondary};
  }
  ${StyledServiceLogo} {
    height: 16px;
    padding: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceSmall} 0 0`)};
  }
`;

Suffix.defaultProps = {
  theme: defaultTheme,
};

export const Input = styled(
  // $FlowExpected
  React.forwardRef(({ type, size, theme, error, help, inlineLabel, ...props }, ref) => (
    <input type={getDOMType(type)} {...props} ref={ref} />
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
      box-shadow: inset 0 0 0
        ${({ theme }) =>
          `${theme.orbit.borderWidthInputFocus} ${theme.orbit.borderColorInputFocus}`};
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.orbit.colorPlaceholderInput};
    /* Firefox */
    opacity: 1;
  }

  /* Internet Explorer 10-11 */
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.orbit.colorPlaceholderInput};
  }

  /* Microsoft Edge */
  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.orbit.colorPlaceholderInput};
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
  }
`;

Input.defaultProps = {
  theme: defaultTheme,
};

const StyledIconWrapper = styled.span`
  display: flex;
`;

const InputField = React.forwardRef<Props, HTMLInputElement>((props, ref) => {
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
    spaceAfter,
    id,
    inputMode,
  }: Props = props;

  const forID = React.useMemo(() => {
    if (id) return id;
    return randomID("inputFieldID");
  }, [id]);

  const [
    tooltipShown,
    tooltipShownHover,
    setTooltipShownHover,
    labelRef,
    iconRef,
    handleFocus,
    handleBlur,
  ] = useErrorTooltip(onFocus, onBlur);

  return (
    <Field
      component={label ? "label" : "div"}
      spaceAfter={spaceAfter}
      htmlFor={label ? forID : undefined}
    >
      {label && !inlineLabel && (
        <FormLabel
          inlineLabel={inlineLabel}
          filled={!!value}
          required={required}
          error={!!error}
          help={!!help}
          labelRef={labelRef}
          iconRef={iconRef}
          onMouseEnter={() => setTooltipShownHover(true)}
          onMouseLeave={() => setTooltipShownHover(false)}
        >
          {label}
        </FormLabel>
      )}
      <InputContainer
        size={size}
        disabled={disabled}
        error={error}
        labelRef={label ? null : labelRef}
      >
        {inlineLabel && !tags && (error || help) ? (
          <Prefix size={size}>
            {help && !error && (
              <StyledIconWrapper ref={iconRef}>
                <InformationCircle color="secondary" size="small" />
              </StyledIconWrapper>
            )}
            {error && (
              <StyledIconWrapper ref={iconRef}>
                <AlertCircle color="critical" size="small" />
              </StyledIconWrapper>
            )}
          </Prefix>
        ) : (
          prefix && <Prefix size={size}>{prefix}</Prefix>
        )}
        {label && inlineLabel && (
          <StyledInlineLabel ref={labelRef} size={size}>
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
        <Input
          data-test={dataTest}
          data-state={getFieldDataState(!!error)}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
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
          id={forID}
          inputMode={inputMode}
        />
        {tags && <InputTags>{tags}</InputTags>}
        {suffix && <Suffix size={size}>{suffix}</Suffix>}
        <FakeInput size={size} disabled={disabled} error={error} />
      </InputContainer>
      <FormFeedback
        help={help}
        error={error}
        iconRef={iconRef}
        labelRef={labelRef}
        tooltipShown={tooltipShown}
        inlineLabel={inlineLabel}
        tooltipShownHover={tooltipShownHover}
      />
    </Field>
  );
});

InputField.displayName = "InputField";

export default InputField;
