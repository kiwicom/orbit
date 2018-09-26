// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import Check from "../icons/Check";

import type { Props } from "./index";

const IconContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.orbit.backgroundInput};
  height: ${({ theme }) => theme.orbit.heightCheckbox};
  width: ${({ theme }) => theme.orbit.widthCheckbox};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border: 1px solid ${({ tokens }) => tokens.borderColor};
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
  theme: defaultTokens,
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.orbit.spaceXSmall};
`;

TextContainer.defaultProps = {
  theme: defaultTokens,
};

const Info = styled.span`
  font-size: ${({ theme }) => theme.orbit.fontSizeFormFeedback};
  color: ${({ theme }) => theme.orbit.colorInfoCheckBoxRadio};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
`;

Info.defaultProps = {
  theme: defaultTokens,
};

const LabelText = styled.span`
  font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
  font-size: ${({ theme }) => theme.orbit.fontSizeFormLabel};
  color: ${({ theme }) => theme.orbit.colorFormLabel};
  height: ${({ theme }) => theme.orbit.heightCheckbox};
  line-height: ${({ theme }) => theme.orbit.heightCheckbox};
`;

LabelText.defaultProps = {
  theme: defaultTokens,
};

const Input = styled.input`
  visibility: hidden;
  display: none;

  &:checked ~ ${TextContainer} > ${LabelText} {
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  }

  &:checked + ${IconContainer} > svg {
    visibility: visible;
  }
`;

Input.defaultProps = {
  theme: defaultTokens,
};

const Label = styled(({ tokens, disabled, theme, type, ...props }) => (
  <label {...props}>{props.children}</label>
))`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  display: flex;
  flex-direction: row;
  align-items: self-start;
  opacity: ${({ disabled, theme }) => (disabled ? theme.orbit.opacityCheckboxDisabled : "1")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  position: relative;

  &:hover ${IconContainer} {
    border-color: ${({ disabled, theme }) =>
      !disabled && theme.orbit.borderColorCheckboxRadioHover};
  }

  &:active ${IconContainer} {
    border-color: ${({ disabled, theme, tokens }) =>
      disabled ? tokens.borderColor : theme.orbit.borderColorCheckboxRadioActive};
    transform: ${({ disabled, theme }) =>
      !disabled && `scale(${theme.orbit.modifierScaleCheckboxRadioActive})`};
  }
  &:focus {
    outline: 0;
    & ${IconContainer} {
      border: ${({ theme }) =>
        `2px ${theme.orbit.borderStyleInput} ${theme.orbit.borderColorCheckboxRadioFocus}`};
    }
  }
`;

Label.defaultProps = {
  theme: defaultTokens,
};

const Checkbox = (props: Props) => {
  const {
    label,
    value,
    hasError = false,
    disabled = false,
    checked = false,
    onChange,
    theme = defaultTokens,
    dataTest,
    info,
  } = props;

  const tokens = {
    borderColor:
      hasError && !disabled && !checked
        ? theme.orbit.borderColorCheckboxRadioError
        : theme.orbit.borderColorCheckboxRadio,
    iconColor: disabled
      ? theme.orbit.colorIconCheckboxRadioDisabled
      : theme.orbit.colorIconCheckboxRadio,
  };

  return (
    <Label disabled={disabled} tokens={tokens} data-test={dataTest}>
      <Input
        value={value}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <IconContainer tokens={tokens}>
        <Check customColor={tokens.iconColor} />
      </IconContainer>
      <TextContainer>
        {label && <LabelText>{label}</LabelText>}
        {info && <Info>{info}</Info>}
      </TextContainer>
    </Label>
  );
};

export default Checkbox;
