import * as React from "react";
import styled, { css } from "styled-components";
import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import defaultTheme, { Theme } from "../defaultTheme";
import TOKENS from "./consts";
import Check from "../icons/Check";
import { StyledText } from "../Text";
import { rtlSpacing } from "../utils/rtl";
import getFieldDataState from "../common/getFieldDataState";
import cloneWithTooltip from "../utils/cloneWithTooltip";
import media from "../utils/mediaQuery";
import { Props } from "./index.d";

interface StyledInputProps extends Props {
  error: boolean;
}

const getToken = (name: keyof typeof TOKENS) => ({
  theme,
  hasError,
  disabled,
  checked,
}: {
  theme: Theme;
  hasError?: boolean;
  disabled?: boolean;
  checked?: boolean;
}): string => {
  const resolveBorderColor = () => {
    if (disabled) return theme.orbit.paletteCloudDarker;
    if (checked) return theme.orbit.paletteBlueNormal;
    if (hasError && !disabled && !checked) {
      return theme.orbit.borderColorCheckboxRadioError;
    }

    return theme.orbit.borderColorCheckboxRadio;
  };

  const getBackground = () => {
    if (disabled && checked) return theme.orbit.paletteCloudDarker;
    if (disabled && !checked) return theme.orbit.paletteCloudNormal;
    return checked ? theme.orbit.paletteBlueNormal : theme.orbit.backgroundInput;
  };

  const tokens = {
    [TOKENS.background]: getBackground(),
    [TOKENS.borderColor]: resolveBorderColor(),
    [TOKENS.iconColor]: disabled
      ? theme.orbit.paletteCloudNormal
      : theme.orbit.colorIconCheckboxRadio,
  };

  return tokens[name];
};

const StyledIconContainer = styled.div<{ checked: boolean; disabled: boolean }>`
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

StyledIconContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceXSmall}`)};
  flex: 1; // IE wrapping fix
`;

StyledTextContainer.defaultProps = {
  theme: defaultTheme,
};

const Info = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.orbit.fontSizeFormFeedback};
    color: ${theme.orbit.colorInfoCheckBoxRadio};
    line-height: ${theme.orbit.lineHeightTextSmall};
  `};
`;

Info.defaultProps = {
  theme: defaultTheme,
};

const StyledLabelText = styled.span`
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

StyledLabelText.defaultProps = {
  theme: defaultTheme,
};

const StyledInput = styled.input<StyledInputProps>`
  ${({ theme, error }) => css`
    opacity: 0;
    z-index: -1;
    position: absolute;
    &:checked + ${StyledIconContainer} > svg {
      visibility: visible;
    }

    &:focus + ${StyledIconContainer} {
      border: ${`1px ${theme.orbit.borderStyleInput} ${
        error ? theme.orbit.paletteRedNormal : theme.orbit.borderColorCheckboxRadioFocus
      }`};
      box-shadow: 0 0 0 3px
        ${convertHexToRgba(
          error ? theme.orbit.paletteRedNormal : theme.orbit.borderColorInputFocus,
          15,
        )};
    }
  `}
`;

StyledInput.defaultProps = {
  theme: defaultTheme,
};

export const StyledLabel = styled(({ className, children, dataTest }) => (
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

  ${StyledIconContainer} {
    color: ${getToken(TOKENS.iconColor)};
    border: 1px solid ${getToken(TOKENS.borderColor)};
  }

  &:hover ${StyledIconContainer} {
    border-color: ${({ disabled, theme, checked }) =>
      !disabled && checked ? theme.orbit.paletteBlueDark : theme.orbit.paletteBlueLightActive};
    box-shadow: none;
  }

  &:active ${StyledIconContainer} {
    border-color: ${({ disabled, theme }) =>
      disabled ? getToken(TOKENS.borderColor) : theme.orbit.paletteBlueNormal};
    transform: ${({ disabled, theme }) =>
      !disabled && `scale(${theme.orbit.modifierScaleCheckboxRadioActive})`};
  }
`;

StyledLabel.defaultProps = {
  theme: defaultTheme,
};

const Checkbox = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
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

  const preventOnClick: React.MouseEventHandler<HTMLDivElement> = ev => ev.preventDefault();

  return (
    <StyledLabel disabled={disabled} hasError={hasError} checked={checked}>
      <StyledInput
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
        <StyledIconContainer
          disabled={disabled}
          checked={checked}
          onClick={readOnly ? preventOnClick : undefined}
        >
          <Check customColor="white" />
        </StyledIconContainer>,
      )}
      {(label || info) && (
        <StyledTextContainer>
          {label && <StyledLabelText>{label}</StyledLabelText>}
          {info && <Info>{info}</Info>}
        </StyledTextContainer>
      )}
    </StyledLabel>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
