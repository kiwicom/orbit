import * as React from "react";
import styled, { css } from "styled-components";

import * as Common from "../common/types";
import defaultTheme, { Theme } from "../defaultTheme";
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
import { Props } from "./types";

const getToken = (name: string) => ({ theme, size }: { theme: Theme; size: Props["size"] }) => {
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

interface StyledFieldProps extends React.PropsWithChildren<Partial<Props>> {
  component: string;
  className?: string;
  spaceAfter?: Common.SpaceAfterSizes;
  theme: Theme;
  htmlFor?: string;
  $width?: string;
  onMouseEnter?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const Field = styled(
  React.forwardRef<HTMLElement, StyledFieldProps>(
    ({ component: Component, className, children, spaceAfter, theme, $width, ...props }, ref) => {
      return (
        // @ts-expect-error TODO
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

Field.defaultProps = {
  theme: defaultTheme,
};

export const FakeInput = styled(({ children, className }) => (
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
    border-radius: ${theme.orbit.borderRadiusNormal};
    ${mq.tablet(css`
      border-radius: ${theme.orbit.borderRadiusNormal};
    `)};
  `}
`;

FakeInput.defaultProps = {
  theme: defaultTheme,
};

export const InputContainer = styled(({ children, className, labelRef }) => (
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

InputContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledInlineLabel = styled.div`
  ${({
    theme,
    hasTags,
    hasFeedback,
  }: {
    theme: Theme;
    hasTags?: boolean;
    hasFeedback?: boolean;
    size: Props["size"];
  }) => css`
    height: 100%;
    display: flex;
    align-items: center;
    pointer-events: none;
    justify-content: center;
    padding: ${rtlSpacing(
      `0 0 0 ${!hasTags && hasFeedback ? theme.orbit.spaceXXSmall : theme.orbit.spaceSmall}`,
    )};

    ${FormLabel} {
      margin-bottom: 0;
      font-size: ${getToken(TOKENS.fontSizeInput)};
      line-height: ${theme.orbit.lineHeightTextNormal};
      z-index: 3;
      white-space: nowrap;
    }
  `}
`;

StyledInlineLabel.defaultProps = {
  theme: defaultTheme,
};

export const Prefix = styled(({ children, className, iconRef }) => (
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

Prefix.defaultProps = {
  theme: defaultTheme,
};

const Suffix = styled(({ children, className }) => <div className={className}>{children}</div>)`
  ${({ theme, disabled }) => css`
    height: ${getToken(TOKENS.heightInput)};
    color: ${theme.orbit.colorTextInputPrefix};
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    pointer-events: ${disabled && "none"};
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

Suffix.defaultProps = {
  theme: defaultTheme,
};

interface StyledInputProps extends Partial<Props> {
  min: number;
  max: number;
  ariaLabelledby?: string;
}

export const Input = styled(
  React.forwardRef<HTMLInputElement, StyledInputProps>(
    (
      { type, size, error, help, inlineLabel, dataAttrs, required, ariaLabelledby, ...props },
      ref,
    ) => {
      return (
        // @ts-expect-error TODO
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
    -webkit-text-fill-color: ${disabled && theme.orbit.colorTextInputDisabled};
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
    box-shadow: none;
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
      color: ${theme.orbit.colorPlaceholderInput};
      /* Firefox */
      opacity: 1;
    }

    &::-ms-input-placeholder {
      color: ${theme.orbit.colorPlaceholderInput};
    }

    &::-ms-clear,
    &::-ms-reveal {
      display: none;
    }
  `}
`;

Input.defaultProps = {
  theme: defaultTheme,
};

const StyledIconWrapper = styled.span`
  display: flex;
`;

const InputField = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
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
    minValue = -Infinity,
    maxValue = Infinity,
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
  } = useErrorTooltip<HTMLInputElement, HTMLDivElement>({ onFocus });

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
            ariaLabelledby={!label ? inputId : undefined}
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
export { Props };
