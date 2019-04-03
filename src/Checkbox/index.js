// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import TOKENS from "./consts";
import Check from "../icons/Check";
import { StyledText } from "../Text";
import { rtlSpacing } from "../utils/rtl";
import type { Ref } from "../common/common.js.flow";

import type { Props } from "./index";

const getToken = name => ({ theme, hasError, disabled, checked }) => {
  const tokens = {
    [TOKENS.borderColor]:
      hasError && !disabled && !checked
        ? theme.orbit.borderColorCheckboxRadioError
        : theme.orbit.borderColorCheckboxRadio,
    [TOKENS.iconColor]: disabled
      ? theme.orbit.colorIconCheckboxRadioDisabled
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
  background-color: ${({ theme }) => theme.orbit.backgroundInput};
  height: ${({ theme }) => theme.orbit.heightCheckbox};
  width: ${({ theme }) => theme.orbit.widthCheckbox};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
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
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
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
    border: ${({ theme }) =>
      `2px ${theme.orbit.borderStyleInput} ${theme.orbit.borderColorCheckboxRadioFocus}`};
  }

  &:active + ${IconContainer} {
    border-color: ${({ disabled, theme }) =>
      disabled ? getToken(TOKENS.borderColor) : theme.orbit.borderColorCheckboxRadioActive};
    transform: ${({ disabled, theme }) =>
      !disabled && `scale(${theme.orbit.modifierScaleCheckboxRadioActive})`};
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
    border: 1px solid ${getToken(TOKENS.borderColor)};
  }

  &:hover ${IconContainer} {
    border-color: ${({ disabled, theme }) =>
      !disabled && theme.orbit.borderColorCheckboxRadioHover};
  }
`;

Label.defaultProps = {
  theme: defaultTheme,
};

// $FlowExpected
const Checkbox = React.forwardRef((props: Props, ref: Ref) => {
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
  } = props;

  return (
    <Label disabled={disabled} hasError={hasError} checked={checked}>
      <Input
        data-test={dataTest}
        value={value}
        type="checkbox"
        disabled={disabled}
        name={name}
        tabIndex={tabIndex}
        checked={checked}
        onChange={onChange}
        ref={ref}
        readOnly={readOnly}
      />
      <IconContainer>
        <Check />
      </IconContainer>
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
