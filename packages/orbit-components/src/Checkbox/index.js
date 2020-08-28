// @flow
import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import defaultTheme from "../defaultTheme";
import TOKENS from "./consts";
import Check from "../icons/Check";
import { StyledText } from "../Text";
import { rtlSpacing } from "../utils/rtl";
import getFieldDataState from "../common/getFieldDataState";
import cloneWithTooltip from "../utils/cloneWithTooltip";
import media from "../utils/mediaQuery";

import type { Props } from "./index";

const getToken = name => ({ theme, hasError, disabled, checked }) => {
  const resolveBorderColor = () => {
    if (disabled) {
      return theme.orbit.paletteInkLighter;
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
      return theme.orbit.paletteInkLighter;
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
      ? theme.orbit.paletteCloudNormal
      : theme.orbit.colorIconCheckboxRadio,
  };

  return tokens[name];
};

const IconContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${getToken(TOKENS.background)};
  height: ${({ theme }) => theme.orbit.heightCheckbox};
  width: ${({ theme }) => theme.orbit.widthCheckbox};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusLarge};
  transform: scale(1);
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  & > svg {
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: ${({ theme, checked }) =>
      checked ? theme.orbit.paletteBlueDark : theme.orbit.backgroundInput};
  }

  ${media.tablet(css`
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  `)}
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceXSmall}`)};
  flex: 1; // IE wrapping fix
`;

TextContainer.defaultProps = {
  theme: defaultTheme,
};

const Info = styled.span`
  font-size: ${({ theme }) => theme.orbit.fontSizeFormFeedback};
  color: ${({ theme }) => theme.orbit.colorInfoCheckBoxRadio};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextSmall};
`;

Info.defaultProps = {
  theme: defaultTheme,
};

const LabelText = styled.span`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
  font-size: ${({ theme }) => theme.orbit.fontSizeFormLabel};
  color: ${({ theme }) => theme.orbit.colorFormLabel};
  line-height: ${({ theme }) => theme.orbit.heightCheckbox};

  ${StyledText} {
    font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
    font-size: ${({ theme }) => theme.orbit.fontSizeFormLabel};
    color: ${({ theme }) => theme.orbit.colorFormLabel};
    line-height: ${({ theme }) => theme.orbit.heightCheckbox};
  }
`;

LabelText.defaultProps = {
  theme: defaultTheme,
};

const Input = styled.input`
  opacity: 0;
  z-index: -1;
  position: absolute;

  &:checked ~ ${TextContainer} > ${LabelText} {
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
    & > ${StyledText} {
      font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
    }
  }

  &:checked + ${IconContainer} > svg {
    visibility: visible;
  }

  &:focus + ${IconContainer} {
    border: ${({ theme, error }) =>
      `1px ${theme.orbit.borderStyleInput} ${
        error ? theme.orbit.paletteRedNormal : theme.orbit.borderColorCheckboxRadioFocus
      }`};
    box-shadow: 0 0 0 3px
      ${({ theme, error }) =>
        convertHexToRgba(
          error ? theme.orbit.paletteRedNormal : theme.orbit.borderColorInputFocus,
          15,
        )};
  }
`;

Input.defaultProps = {
  theme: defaultTheme,
};

export const Label = styled(({ className, children, dataTest }) => (
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
    border: 2px solid ${getToken(TOKENS.borderColor)};
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

  ${media.largeMobile(css`
    ${IconContainer} {
      border-width: 1px;
    }
  `)};
`;

Label.defaultProps = {
  theme: defaultTheme,
};

const Checkbox = React.forwardRef<Props, HTMLElement>((props, ref) => {
  const {
    label,
    value,
    hasError = false,
    disabled = false,
    checked = false,
    name,
    onChange,
    dataTest,
    info,
    readOnly,
    tabIndex,
    tooltip,
  } = props;

  const preventOnClick = useCallback(ev => {
    ev.preventDefault();
  }, []);
  return (
    <Label disabled={disabled} hasError={hasError} checked={checked}>
      <Input
        data-test={dataTest}
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
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
