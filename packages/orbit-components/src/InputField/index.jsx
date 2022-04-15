// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { SIZE_OPTIONS, TYPE_OPTIONS, TOKENS } from "./consts";
import { StyledServiceLogo } from "../ServiceLogo";
import { rtlSpacing } from "../utils/rtl";
import InputTags from "./InputTags";
import getSpacingToken from "../common/getSpacingToken";
import getFieldDataState from "../common/getFieldDataState";
import useRandomId from "../hooks/useRandomId";
import ErrorFormTooltip from "../ErrorFormTooltip";
import AlertCircle from "../icons/AlertCircle";
import InformationCircle from "../icons/InformationCircle";
import FormLabel from "../FormLabel";
import useErrorTooltip from "../ErrorFormTooltip/hooks/useErrorTooltip";
import formElementFocus from "./helpers/formElementFocus";
import { StyledButtonPrimitiveIconContainer } from "../primitives/ButtonPrimitive/components/ButtonPrimitiveIconContainer";
import mq from "../utils/mediaQuery";

import typeof InputFieldType from ".";
import type { Props } from ".";

const getToken = name => ({ theme, size }) => {
  const tokens = {
    [TOKENS.heightInput]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.formBoxSmallHeight,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.formBoxNormalHeight,
    },
    [TOKENS.fontSizeInput]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.formElementSmallFontSize,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.formElementNormalFontSize,
    },
    [TOKENS.iconSize]: {
      [SIZE_OPTIONS.SMALL]: theme.orbit.iconExtraSmallSize,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.iconMediumSize,
    },
  };

  return tokens[name][size];
};

const getPadding = () => ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.formElementSmallPadding,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.formElementNormalPadding,
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
      ${`1px  ${
        error ? theme.orbit.formElementBorderColorError : theme.orbit.formElementBorderColor
      }`};
    background-color: ${disabled
      ? theme.orbit.formElementDisabledBackground
      : theme.orbit.formElementBackground};
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
    color: ${disabled
      ? theme.orbit.formElementDisabledForeground
      : theme.orbit.formElementFilledForeground};
    font-size: ${getToken(TOKENS.fontSizeInput)};
    cursor: ${disabled ? "not-allowed" : "text"};

    &:hover > ${FakeInput} {
      ${!disabled &&
      `box-shadow: inset 0 0 0 1px ${
        error ? theme.orbit.paletteRedNormalSecondary : theme.orbit.formElementBorderColorHover
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
      `0 0 0 ${!hasTags && hasFeedback ? theme.orbit.spaceOneX : theme.orbit.spaceThreeX}`,
    )};

    ${FormLabel} {
      margin-bottom: 0;
      font-size: ${getToken(TOKENS.fontSizeInput)};
      line-height: ${theme.orbit.lineHeightNormal};
      z-index: 3;
      white-space: nowrap;
    }
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
    color: ${theme.orbit.formElementPrefixForeground};
    display: flex;
    align-items: center;
    pointer-events: none;
    justify-content: center;
    padding: ${rtlSpacing(`0 0 0 ${theme.orbit.spaceThreeX}`)};
    z-index: 3;

    & > svg {
      color: ${theme.orbit.iconTertiaryForeground};
    }

    & * svg,
    & > svg {
      width: ${getToken(TOKENS.iconSize)};
      height: ${getToken(TOKENS.iconSize)};
    }

    ${StyledButtonPrimitiveIconContainer} {
      color: ${theme.orbit.iconForegroundSecondary};
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
    color: ${theme.orbit.formElementPrefixForeground};
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    pointer-events: ${({ disabled }) => disabled && "none"};
    z-index: 3;

    ${StyledButtonPrimitiveIconContainer} {
      color: ${theme.orbit.iconForegroundSecondary};
    }

    ${StyledServiceLogo} {
      height: 16px;
      padding: ${rtlSpacing(`0 ${theme.orbit.spaceThreeX} 0 0`)};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Suffix.defaultProps = {
  theme: defaultTheme,
};

export const Input: any = styled(
  React.forwardRef(
    (
      {
        type,
        size,
        theme,
        error,
        help,
        inlineLabel,
        dataAttrs,
        required,
        ariaLabelledby,
        ...props
      },
      ref,
    ) => {
      return (
        <input
          type={getDOMType(type)}
          {...props}
          {...dataAttrs}
          ref={ref}
          // aria-required is passed to make the field required for screen-reader
          // we do not pass required field by reason, to avoid native browser message
          aria-required={required}
          // in case when there is no label
          aria-labelledby={ariaLabelledby}
        />
      );
    },
  ),
)`
  ${({ theme, disabled, inlineLabel, type }) => css`
    appearance: none;
    -webkit-text-fill-color: ${disabled && theme.orbit.formElementDisabledForeground};
    font-family: ${theme.orbit.fontFamily};
    border: none;
    padding: ${getPadding()};
    font-size: inherit;
    font-weight: ${inlineLabel ? theme.orbit.fontWeightMedium : theme.orbit.fontWeightNormal};
    color: inherit;
    background-color: transparent;
    cursor: inherit;
    flex: 1 1 20%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: ${theme.orbit.borderRadiusNormal};
    z-index: 2;

    // FIREFOX Applies a box-shadow when err is present from HTML validation
    box-shadow: none;

    // FIREFOX flexbox bug: the input doesn't shrink properly
    min-width: 0;

    font-variant-numeric: ${type === TYPE_OPTIONS.PASSPORTID && "tabular-nums"};
    letter-spacing: ${type === TYPE_OPTIONS.PASSPORTID && "2px"};

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
      color: ${theme.orbit.formElementForeground};
      /* Firefox */
      opacity: 1;
    }

    /* Internet Explorer 10-11 */
    &:-ms-input-placeholder {
      color: ${theme.orbit.formElementForeground};
    }

    /* Microsoft Edge */
    &::-ms-input-placeholder {
      color: ${theme.orbit.formElementForeground};
    }

    &::-ms-clear,
    &::-ms-reveal {
      display: none;
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Input.defaultProps = {
  theme: defaultTheme,
};

const StyledIconWrapper = styled.span`
  display: flex;
`;

const InputField: InputFieldType = React.forwardRef((props, ref) => {
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
    helpClosable = true,
    value,
    tags,
    tabIndex,
    readOnly,
    autoComplete,
    autoFocus,
    spaceAfter,
    id,
    width = "100%",
    inputMode,
    insideInputGroup,
    dataAttrs,
  }: Props = props;

  const forID = useRandomId();
  const inputId = id || forID;

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
  const fieldRef = React.useRef<HTMLElement | null>(null);

  return (
    <>
      <Field
        component={label ? "label" : "div"}
        $width={width}
        spaceAfter={spaceAfter}
        ref={fieldRef}
        htmlFor={label ? inputId : undefined}
        // enable tooltip on hover, if it's disabled
        onMouseEnter={() => (disabled && inlineLabel ? setTooltipShownHover(true) : undefined)}
        onMouseLeave={() => (disabled && inlineLabel ? setTooltipShownHover(false) : undefined)}
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
                  <InformationCircle color="info" size="small" />
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
            <StyledInlineLabel
              hasTags={!!tags}
              hasFeedback={!!(error || help)}
              ref={labelRef}
              size={size}
            >
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
          {tags && <InputTags>{tags}</InputTags>}
          <Input
            data-test={dataTest}
            required={required}
            data-state={
              insideInputGroup && typeof error === "undefined"
                ? undefined
                : getFieldDataState(!!error)
            }
            onChange={onChange}
            onFocus={handleFocus}
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
            error={insideInputGroup ? undefined : error}
            ref={ref}
            tabIndex={tabIndex}
            ariaLabelledby={!label ? inputId : null}
            inlineLabel={inlineLabel}
            readOnly={readOnly}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            id={inputId}
            inputMode={inputMode}
            dataAttrs={dataAttrs}
          />
          {suffix && <Suffix size={size}>{suffix}</Suffix>}
          <FakeInput size={size} disabled={disabled} error={error} />
        </InputContainer>
        {!insideInputGroup && (
          <ErrorFormTooltip
            help={help}
            id={inputId}
            shown={shown}
            helpClosable={helpClosable}
            onShown={setTooltipShown}
            error={error}
            inputSize={size}
            inlineLabel={inlineLabel}
            referenceElement={inlineLabel && !tags ? iconRef : fieldRef}
          />
        )}
      </Field>
    </>
  );
});

InputField.displayName = "InputField";

export default InputField;
