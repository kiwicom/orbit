// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import TOKENS from "./consts";
import Check from "../icons/Check";
import { StyledText } from "../Text";
import { rtlSpacing } from "../utils/rtl";
import getFieldDataState from "../common/getFieldDataState";
import cloneWithTooltip from "../utils/cloneWithTooltip";
import media from "../utils/mediaQuery";
import { defaultFocus } from "../utils/common";

import type { Props } from ".";

const getToken = name => ({ theme, hasError, disabled, checked }) => {
  const resolveBorderColor = () => {
    if (disabled) {
      return theme.orbit.paletteCloudDark;
    }
    if (checked) {
      return theme.orbit.paletteBlueNormal;
    }
    if (hasError && !disabled && !checked) {
      return theme.orbit.borderColorCheckboxRadioError;
    }

    return theme.orbit.borderColorCheckboxRadio;
  };

  const getBackground = () => {
    if (disabled && checked) {
      return theme.orbit.paletteCloudDark;
    }
    if (disabled && !checked) {
      return theme.orbit.paletteCloudNormal;
    }
    return checked ? theme.orbit.paletteBlueNormal : theme.orbit.backgroundInput;
  };

  const tokens = {
    [TOKENS.background]: getBackground(),
    [TOKENS.borderColor]: resolveBorderColor(),
    [TOKENS.iconColor]: disabled
      ? theme.orbit.paletteCloudDark
      : theme.orbit.colorIconCheckboxRadio,
  };

  return tokens[name];
};

const IconContainer = styled.div`
  ${({ theme, checked }) => css`
    position: relative;
    box-sizing: border-box;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${getToken(TOKENS.background)};
    height: ${theme.orbit.heightCheckbox};
    width: ${theme.orbit.widthCheckbox};
    border-radius: ${theme.orbit.borderRadiusLarge};
    transform: scale(1);
    transition: all ${theme.orbit.durationFast} ease-in-out;

    & > svg {
      visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
    }

    &:hover {
      background-color: ${checked ? theme.orbit.paletteBlueDark : theme.orbit.backgroundInput};
    }

    ${media.desktop(css`
      border-radius: ${theme.orbit.borderRadiusNormal};
    `)}
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
IconContainer.defaultProps = {
  theme: defaultTheme,
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceXSmall}`)};
  flex: 1; // IE wrapping fix
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
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Info.defaultProps = {
  theme: defaultTheme,
};

const LabelText = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.orbit.fontFamily};
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
  opacity: 0;
  z-index: -1;
  position: absolute;
  &:checked + ${IconContainer} > svg {
    visibility: visible;
  }

  &:focus + ${IconContainer} {
    ${defaultFocus}
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Input.defaultProps = {
  theme: defaultTheme,
};

export const Label: any = styled(({ className, children, dataTest }) => (
  <label className={className} data-test={dataTest}>
    {children}
  </label>
))`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: self-start;
  opacity: ${({ disabled, theme }) => (disabled ? theme.orbit.opacityCheckboxDisabled : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  position: relative;

  ${IconContainer} {
    color: ${getToken(TOKENS.iconColor)};
    border: 1px solid ${getToken(TOKENS.borderColor)};
  }

  &:hover ${IconContainer} {
    border-color: ${({ disabled, theme, checked }) =>
      !disabled && checked ? theme.orbit.paletteBlueDark : theme.orbit.paletteBlueLightActive};
    box-shadow: none;
  }

  &:active ${IconContainer} {
    border-color: ${({ disabled, theme }) =>
      disabled ? getToken(TOKENS.borderColor) : theme.orbit.paletteBlueNormal};
    transform: ${({ disabled, theme }) =>
      !disabled && `scale(${theme.orbit.modifierScaleCheckboxRadioActive})`};
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
Label.defaultProps = {
  theme: defaultTheme,
};

const Checkbox: React.AbstractComponent<Props, HTMLElement> = React.forwardRef<Props, HTMLElement>(
  (props, ref) => {
    const {
      label,
      value,
      hasError = false,
      disabled = false,
      checked = false,
      name,
      onChange,
      dataTest,
      id,
      info,
      readOnly,
      tabIndex,
      tooltip,
    } = props;

    const preventOnClick = ev => ev.preventDefault();

    return (
      <Label disabled={disabled} hasError={hasError} checked={checked}>
        <Input
          data-test={dataTest}
          id={id}
          data-state={getFieldDataState(!!hasError)}
          value={value}
          type="checkbox"
          disabled={disabled}
          name={name}
          tabIndex={tabIndex}
          checked={checked}
          onChange={onChange}
          ref={ref}
          readOnly={readOnly}
          error={hasError}
        />
        {cloneWithTooltip(
          tooltip,
          <IconContainer
            disabled={disabled}
            checked={checked}
            onClick={readOnly ? preventOnClick : null}
          >
            <Check customColor="white" />
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

Checkbox.displayName = "Checkbox";

export default Checkbox;
