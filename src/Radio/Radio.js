// @flow
import * as React from "react";
import styled from "styled-components";
import defaultTokens from "@kiwicom/orbit-design-tokens";

import type { Props } from "./Radio";

const Glyph = styled.span`
  visibility: hidden;
  width: 12px;
  height: 12px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colorIconCheckboxDisabled : theme.colorIconCheckbox};
  border-radius: ${({ theme }) => theme.borderRadiusCircle};
`;

const IconContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundInput};
  height: ${({ theme }) => theme.heightCheckbox};
  width: ${({ theme }) => theme.widthCheckbox};
  border-radius: ${({ theme }) => theme.borderRadiusCircle};
  overflow: hidden;
  border: 1px solid ${({ tokens }) => tokens.borderColor};
  transform: scale(1);
  transition: all ${({ theme }) => theme.durationFast} ease-in-out;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spaceXSmall};
`;

const Info = styled.span`
  font-size: ${({ theme }) => theme.fontSizeMessageForm};
  color: ${({ theme }) => theme.paletteInkLight}; // TODO create token
  line-height: ${({ theme }) => theme.lineHeightText};
`;

const LabelText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeightNormal};
  font-size: ${({ theme }) => theme.fontSizeLabelForm};
  color: ${({ theme }) => theme.colorLabelForm};
  height: ${({ theme }) => theme.heightCheckbox};
  line-height: ${({ theme }) => theme.heightCheckbox};
`;

const Input = styled.input`
  visibility: hidden;
  display: none;

  &:checked ~ ${TextContainer} > ${LabelText} {
    font-weight: ${({ theme }) => theme.fontWeightMedium};
  }

  &:checked + ${IconContainer} > ${Glyph} {
    visibility: visible;
  }
`;

const Label = styled(({ tokens, disabled, theme, type, ...props }) => (
  <label {...props}>{props.children}</label>
))`
  font-family: ${({ theme }) => theme.fontFamily};
  display: flex;
  flex-direction: row;
  align-items: self-start;
  opacity: ${({ disabled, theme }) => (disabled ? theme.opacityCheckboxDisabled : "1")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  position: relative;

  &:hover ${IconContainer} {
    border-color: ${({ disabled, theme }) =>
      disabled ? theme.borderColorInputHover : theme.paletteInkLight}; // TODO create token
  }
  &:active ${IconContainer} {
    border-color: ${({ disabled, theme, tokens }) =>
      disabled ? tokens.borderColor : theme.paletteInkNormal}; // TODO create token
    transform: ${({ disabled, theme }) => !disabled && `scale(${theme.modifierScaleButtonActive})`};
  }
  &:focus {
    outline: 0;
    & ${IconContainer} {
      box-shadow: 0 0 3px ${({ theme }) => theme.paletteBlueNormal}; // TODO create token
    }
  }
`;

const Radio = (props: Props) => {
  const {
    label,
    value,
    hasError = false,
    disabled = false,
    checked = false,
    onChange,
    theme = defaultTokens,
    info,
  } = props;

  const tokens = {
    borderColor:
      hasError && !disabled && !checked ? theme.borderColorInputError : theme.borderColorInput,
  };

  return (
    <Label theme={theme} disabled={disabled} tokens={tokens}>
      <Input
        value={value}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        theme={theme}
      />
      <IconContainer tokens={tokens} theme={theme}>
        <Glyph theme={theme} disabled={disabled} />
      </IconContainer>
      <TextContainer theme={theme}>
        {label && <LabelText theme={theme}>{label}</LabelText>}
        {info && <Info theme={theme}>{info}</Info>}
      </TextContainer>
    </Label>
  );
};

export default Radio;
