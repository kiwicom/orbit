// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import defaultTheme from "../defaultTheme";
import { StyledText } from "../Text";
import { rtlSpacing } from "../utils/rtl";
import getFieldDataState from "../common/getFieldDataState";
import cloneWithTooltip from "../utils/cloneWithTooltip";
import media from "../utils/mediaQuery";

import type { Props } from ".";

const getBorderColor = () => ({ theme, hasError, disabled, checked }) => {
  if (disabled) return theme.orbit.paletteCloudNormal;
  if (checked) return theme.orbit.paletteBlueNormal;
  if (hasError && !disabled && !checked) return theme.orbit.borderColorCheckboxRadioError;

  return theme.orbit.borderColorCheckboxRadio;
};

const getBackground = () => ({ theme, disabled, checked }) => {
  if (disabled && checked) return theme.orbit.paletteCloudNormal;
  if (disabled && !checked) return theme.orbit.paletteCloudNormal;

  return checked ? theme.orbit.paletteBlueNormal : theme.orbit.backgroundInput;
};

const Glyph = styled.span`
  visibility: hidden;
  width: 8px;
  height: 8px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.orbit.paletteCloudNormal : theme.orbit.paletteWhite};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusCircle};
  flex-shrink: 0;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Glyph.defaultProps = {
  theme: defaultTheme,
};

const IconContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    box-sizing: border-box;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${getBackground};
    height: ${theme.orbit.heightCheckbox};
    width: ${theme.orbit.widthCheckbox};
    border-radius: ${theme.orbit.borderRadiusCircle};
    transform: scale(1);
    transition: all ${theme.orbit.durationFast} ease-in-out;
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
IconContainer.defaultProps = {
  theme: defaultTheme,
};

const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-weight: ${theme.orbit.fontWeightMedium};
    margin: ${rtlSpacing(`0 0 0 ${theme.orbit.spaceXSmall}`)};
    flex: 1; // IE wrapping fix
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
TextContainer.defaultProps = {
  theme: defaultTheme,
};

const Info = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.orbit.fontSizeFormFeedback};
    color: ${theme.orbit.colorInfoCheckBoxRadio};
    line-height: ${theme.orbit.lineHeightTextSmall};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Info.defaultProps = {
  theme: defaultTheme,
};

const LabelText = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.orbit.fontWeightMedium};
    font-size: ${theme.orbit.fontSizeFormLabel};
    color: ${theme.orbit.colorFormLabel};
    line-height: ${theme.orbit.heightCheckbox};

    ${StyledText} {
      font-weight: ${theme.orbit.fontWeightMedium};
      font-size: ${theme.orbit.fontSizeFormLabel};
      color: ${theme.orbit.colorFormLabel};
      line-height: ${theme.orbit.heightCheckbox};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
LabelText.defaultProps = {
  theme: defaultTheme,
};

const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + ${IconContainer} > ${Glyph} {
    visibility: visible;
  }

  &:focus + ${IconContainer} {
    outline: 0;
    border: ${({ theme, hasError }) =>
      `2px ${theme.orbit.borderStyleInput} ${
        hasError ? theme.orbit.paletteRedNormal : theme.orbit.borderColorCheckboxRadioFocus
      }`};
    box-shadow: 0 0 0 2px
      ${({ theme, hasError }) =>
        convertHexToRgba(
          hasError ? theme.orbit.paletteRedNormal : theme.orbit.borderColorInputFocus,
          15,
        )};

    ${media.largeMobile(css`
      border-width: 1px;
    `)}
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Input.defaultProps = {
  theme: defaultTheme,
};

const Label = styled(({ disabled, theme, type, hasError, ...props }) => (
  <label {...props}>{props.children}</label>
))`
  ${({ theme, disabled }) => css`
    font-family: ${theme.orbit.fontFamily};
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: self-start;
    opacity: ${disabled ? theme.orbit.opacityCheckboxDisabled : "1"};
    cursor: ${disabled ? "default" : "pointer"};
    position: relative;

    ${IconContainer} {
      border: 2px solid ${getBorderColor};
    }

    &:hover ${IconContainer} {
      border-color: ${!disabled && theme.orbit.paletteBlueLightActive};
    }

    &:active ${IconContainer} {
      border-color: ${disabled ? getBorderColor : theme.orbit.paletteBlueNormal};
      transform: ${!disabled && `scale(${theme.orbit.modifierScaleCheckboxRadioActive})`};
    }

    ${media.largeMobile(css`
      ${IconContainer} {
        border: 1px solid ${getBorderColor};
      }
    `)}
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Label.defaultProps = {
  theme: defaultTheme,
};

const Radio: React.AbstractComponent<Props, HTMLElement> = React.forwardRef<Props, HTMLElement>(
  (props, ref) => {
    const {
      label,
      value,
      hasError = false,
      disabled = false,
      checked = false,
      onChange,
      name,
      info,
      readOnly,
      id,
      tabIndex,
      dataTest,
      tooltip,
    } = props;
    return (
      <Label disabled={disabled} hasError={hasError} checked={checked}>
        <Input
          data-test={dataTest}
          data-state={getFieldDataState(hasError)}
          value={value}
          type="radio"
          disabled={disabled}
          checked={checked}
          id={id}
          onChange={onChange}
          name={name}
          tabIndex={tabIndex}
          ref={ref}
          readOnly={readOnly}
          hasError={hasError}
        />
        {cloneWithTooltip(
          tooltip,
          <IconContainer disabled={disabled} checked={checked}>
            <Glyph disabled={disabled} />
          </IconContainer>,
        )}
        {(label || info) && (
          <TextContainer>
            {label && <LabelText>{label}</LabelText>}
            {info && <Info>{info}</Info>}
          </TextContainer>
        )}
      </Label>
    );
  },
);

Radio.displayName = "Radio";

export default Radio;
