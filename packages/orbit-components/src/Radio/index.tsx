"use client";

import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { rtlSpacing } from "../utils/rtl";
import getFieldDataState from "../common/getFieldDataState";
import cloneWithTooltip from "../utils/cloneWithTooltip";
import media from "../utils/mediaQuery";
import { defaultFocus } from "../utils/common";
import type { Props } from "./types";

const getBorderColor =
  () =>
  ({
    theme,
    hasError,
    disabled,
    checked,
  }: {
    theme: typeof defaultTheme;
    hasError?: boolean;
    disabled?: boolean;
    checked?: boolean;
  }) => {
    if (disabled) return theme.orbit.paletteCloudNormal;
    if (checked) return theme.orbit.paletteBlueNormal;
    if (hasError && !disabled && !checked) return theme.orbit.borderColorCheckboxRadioError;

    return theme.orbit.borderColorCheckboxRadio;
  };

const getBackground =
  () =>
  ({
    theme,
    disabled,
    checked,
  }: {
    theme: typeof defaultTheme;
    disabled?: boolean;
    checked?: boolean;
  }) => {
    if (disabled) return theme.orbit.paletteCloudNormal;

    return checked ? theme.orbit.paletteBlueNormal : theme.orbit.backgroundInput;
  };

const getGlyphBackground = ({
  theme,
  checked,
  disabled,
}: {
  theme: typeof defaultTheme;
  checked: Props["checked"];
  disabled: Props["disabled"];
}) => {
  if (disabled && checked) return theme.orbit.paletteCloudLight;
  if (disabled) return theme.orbit.paletteCloudNormal;
  return theme.orbit.paletteWhite;
};

const Glyph = styled.span<{ disabled?: boolean; checked?: boolean }>`
  ${({ theme, checked, disabled }) => css`
    visibility: hidden;
    width: 8px;
    height: 8px;
    background-color: ${getGlyphBackground({ theme, disabled, checked })};
    border-radius: ${theme.orbit.borderRadiusCircle};
    flex-shrink: 0;
  `};
`;

Glyph.defaultProps = {
  theme: defaultTheme,
};

const StyledIconContainer = styled.div<{ disabled?: boolean; checked?: boolean }>`
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
  `};
`;

StyledIconContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledTextContainer = styled.div<{ disabled?: boolean }>`
  ${({ theme, disabled }) => css`
    display: flex;
    flex-direction: column;
    font-weight: ${theme.orbit.fontWeightMedium};
    margin: ${rtlSpacing(`0 0 0 ${theme.orbit.spaceXSmall}`)};
    flex: 1;
    opacity: ${disabled ? theme.orbit.opacityRadioButtonDisabled : "1"};
  `};
`;

StyledTextContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledInfo = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.orbit.fontSizeFormFeedback};
    color: ${theme.orbit.colorInfoCheckBoxRadio};
    line-height: ${theme.orbit.lineHeightTextSmall};
  `};
`;

StyledInfo.defaultProps = {
  theme: defaultTheme,
};

const StyledLabelText = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.orbit.fontWeightMedium};
    font-size: ${theme.orbit.fontSizeFormLabel};
    color: ${theme.orbit.colorFormLabel};
    line-height: ${theme.orbit.heightCheckbox};

    .orbit-text {
      font-weight: ${theme.orbit.fontWeightMedium};
      font-size: ${theme.orbit.fontSizeFormLabel};
      color: ${theme.orbit.colorFormLabel};
      line-height: ${theme.orbit.heightCheckbox};
    }
  `};
`;

StyledLabelText.defaultProps = {
  theme: defaultTheme,
};

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + ${StyledIconContainer} > ${Glyph} {
    visibility: visible;
  }

  &:focus + ${StyledIconContainer} {
    ${defaultFocus};

    ${media.largeMobile(css`
      border-width: 1px;
    `)}
  }
`;

StyledInput.defaultProps = {
  theme: defaultTheme,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const StyledLabel = styled(({ disabled, theme, type, hasError, ...props }) => (
  <label {...props}>{props.children}</label>
))`
  ${({ theme, disabled }) => css`
    font-family: ${theme.orbit.fontFamily};
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: self-start;
    cursor: ${disabled ? "not-allowed" : "pointer"};
    position: relative;

    ${StyledIconContainer} {
      border: 2px solid ${getBorderColor};
    }

    &:hover ${StyledIconContainer} {
      border-color: ${!disabled && theme.orbit.paletteBlueLightActive};
    }

    &:active ${StyledIconContainer} {
      border-color: ${disabled ? getBorderColor : theme.orbit.paletteBlueNormal};
      transform: ${!disabled && `scale(${theme.orbit.modifierScaleCheckboxRadioActive})`};
    }

    ${media.largeMobile(css`
      ${StyledIconContainer} {
        border: 1px solid ${getBorderColor};
      }
    `)}
  `};
`;

StyledLabel.defaultProps = {
  theme: defaultTheme,
};

const Radio = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
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
    <StyledLabel disabled={disabled} hasError={hasError} checked={checked}>
      <StyledInput
        data-test={dataTest}
        data-state={getFieldDataState(hasError)}
        value={value}
        type="radio"
        disabled={disabled}
        checked={checked}
        id={id}
        onChange={onChange}
        name={name}
        tabIndex={tabIndex ? Number(tabIndex) : undefined}
        ref={ref}
        readOnly={readOnly}
      />
      {cloneWithTooltip(
        tooltip,
        <StyledIconContainer disabled={disabled} checked={checked}>
          <Glyph disabled={disabled} checked={checked} />
        </StyledIconContainer>,
      )}
      {(label || info) && (
        <StyledTextContainer disabled={disabled}>
          {label && <StyledLabelText>{label}</StyledLabelText>}
          {info && <StyledInfo>{info}</StyledInfo>}
        </StyledTextContainer>
      )}
    </StyledLabel>
  );
});

Radio.displayName = "Radio";

export default Radio;
