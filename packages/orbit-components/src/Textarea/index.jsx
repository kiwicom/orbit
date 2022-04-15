// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import ErrorFormTooltip from "../ErrorFormTooltip";
import FormLabel from "../FormLabel";
import { SIZE_OPTIONS, RESIZE_OPTIONS } from "./consts";
import { rtlSpacing } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";
import useErrorTooltip from "../ErrorFormTooltip/hooks/useErrorTooltip";
import formElementFocus from "../InputField/helpers/formElementFocus";
import getFieldDataState from "../common/getFieldDataState";
import mq from "../utils/mediaQuery";

import type { Props } from ".";

const Field = styled.label`
  ${({ theme, fullHeight }) => css`
    font-family: ${theme.orbit.fontFamily};
    display: flex;
    width: 100%;
    position: relative;
    height: ${fullHeight && "100%"};
    flex-direction: column;
    // for usage with Stack
    flex: ${fullHeight && "1"};
    margin-bottom: ${getSpacingToken};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Field.defaultProps = {
  theme: defaultTheme,
};

const getFontSize = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.formElementSmallFontSize,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.formElementNormalFontSize,
  };

  return tokens[size];
};

const getLineHeight = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.lineHeightSmall,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.lineHeightNormal,
  };
  return tokens[size];
};

const getPadding = ({ size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: "8px 12px",
    [SIZE_OPTIONS.NORMAL]: "12px",
  };
  return rtlSpacing(tokens[size]);
};

const StyledTextArea = styled.textarea`
  ${({ theme, error, disabled, resize, fullHeight }) => css`
    appearance: none;
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: ${fullHeight && "100%"};
    padding: ${getPadding};
    box-shadow: inset 0 0 0
      ${`1px ${
        error ? theme.orbit.formElementBorderColorError : theme.orbit.formElementBorderColor
      }`};
    background-color: ${disabled
      ? theme.orbit.formElementDisabledBackground
      : theme.orbit.formElementBackground};
    color: ${disabled
      ? theme.orbit.formElementDisabledForeground
      : theme.orbit.formElementFilledForeground};
    font-size: ${getFontSize};
    line-height: ${getLineHeight};
    cursor: ${disabled ? "not-allowed" : "text"};
    font-family: ${theme.orbit.fontFamily};
    resize: ${resize};
    transition: box-shadow ${theme.orbit.durationFast} ease-in-out;
    min-height: 44px; // TODO: create token

    /* for usage with Stack */
    border-radius: 6px;
    ${mq.tablet(css`
      border-radius: ${theme.orbit.borderRadiusNormal};
    `)};

    // for usage with Stack
    flex: ${fullHeight && "1"};

    /* IE 11 bug fix, border: 0 won't work - the box-shadow will be hidden */
    border: 1px solid transparent;

    /* IE 11 bug fix, hide scrollbar by default (shown only when scrollable) */
    overflow: auto;

    &::placeholder {
      color: ${theme.orbit.formElementForeground};
    }

    &:hover {
      box-shadow: ${!disabled &&
      `inset 0 0 0 1px ${
        error ? theme.orbit.paletteRedNormalSecondary : theme.orbit.formElementBorderColorHover
      }`};
    }

    &:focus {
      ${formElementFocus}
      outline: none;
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTextArea.defaultProps = {
  theme: defaultTheme,
};

const Textarea: React.AbstractComponent<Props, HTMLElement> = React.forwardRef<
  Props,
  HTMLTextAreaElement,
>((props, ref) => {
  const {
    size = SIZE_OPTIONS.NORMAL,
    disabled,
    resize = RESIZE_OPTIONS.VERTICAL,
    dataTest,
    spaceAfter,
    fullHeight,
    value,
    label,
    name,
    error,
    placeholder,
    helpClosable = true,
    maxLength,
    onChange,
    onFocus,
    onBlur,
    tabIndex,
    help,
    rows,
    readOnly,
  }: Props = props;

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

  return (
    <Field fullHeight={fullHeight} spaceAfter={spaceAfter} ref={labelRef}>
      {label && (
        <FormLabel
          filled={!!value}
          error={!!error}
          help={!!help}
          disabled={disabled}
          iconRef={iconRef}
          onMouseEnter={() => setTooltipShownHover(true)}
          onMouseLeave={() => setTooltipShownHover(false)}
        >
          {label}
        </FormLabel>
      )}

      <StyledTextArea
        data-state={getFieldDataState(!!error)}
        data-test={dataTest}
        name={name}
        value={value}
        size={size}
        fullHeight={fullHeight}
        disabled={disabled}
        error={error}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        rows={rows}
        onFocus={handleFocus}
        onBlur={onBlur}
        resize={resize}
        tabIndex={tabIndex}
        readOnly={readOnly}
        ref={ref}
      />
      <ErrorFormTooltip
        help={help}
        inputSize={size}
        helpClosable={helpClosable}
        error={error}
        onShown={setTooltipShown}
        shown={shown}
        referenceElement={labelRef}
      />
    </Field>
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
