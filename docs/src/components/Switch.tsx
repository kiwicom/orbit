import React from "react";
import styled from "styled-components";
import Stack from "@kiwicom/orbit-components/lib/Stack";

import ScreenReaderText from "./ScreenReaderText";

const StyledLabel = styled.label`
  cursor: pointer;
  display: inline-flex;
`;

const StyledSwitchContainer = styled.div`
  width: 50px;
  height: 28px;
`;

const StyledTrack = styled.div`
  ${({ theme }) => `
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${theme.orbit.paletteInkLight};
    border-radius: 28px;
    transition: background-color ${theme.orbit.durationFast} ease-in-out;
  `}
`;

const StyledHandle = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    position: absolute;
    top: -1px;
    transform: translateX(-1px);
    transition: transform ${theme.orbit.durationFast} ease-in-out;
    border: 1px solid rgba(7, 64, 92, 0.1);
    border-box: content;
    border-radius: ${theme.orbit.borderRadiusFull};
    background-color: ${theme.orbit.paletteWhite};
    background-clip: content-box;
    box-shadow: 0px 2px 3px 0px rgba(7, 64, 92, 0.16);
  `}
`;

const StyledCircle = styled.div`
  ${({ theme }) => `
    width: 10px;
    height: 10px;
    border-radius: ${theme.orbit.borderRadiusFull};
    background-color: ${theme.orbit.paletteInkLight};
    transition: background-color ${theme.orbit.durationFast};
  `}
`;

const StyledInput = styled.input`
  ${({ theme }) => `
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
    &:focus + ${StyledTrack} ${StyledHandle} {
      box-shadow: rgba(95, 115, 140, 0.3) 0px 0px 0px 2px;
    }
    &:checked + ${StyledTrack} {
      background: ${theme.orbit.paletteBlueNormal};
      ${StyledHandle} {
        transform: translateX(21px);
      }
      ${StyledCircle} {
        background-color: ${theme.orbit.paletteBlueNormal};
      }
    }
  `}
`;

const StyledContent = styled.span`
  color: ${({ theme }) => theme.orbit.colorTextSecondary};
`;

interface Props {
  name?: string;
  value?: string;
  children?: React.ReactNode;
  onFocus?: (ev: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (ev: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (ev: React.KeyboardEvent<HTMLInputElement>) => void;
  checked?: boolean;
  ariaLabelledby?: string;
  hideLabel?: boolean;
  reverseLabel?: boolean;
}

const InputSwitch = ({
  name,
  value,
  children,
  onFocus,
  onBlur,
  onChange,
  checked,
  ariaLabelledby,
  onKeyPress,
  hideLabel,
  reverseLabel,
}: Props) => {
  const ContentContainer = hideLabel ? ScreenReaderText : StyledContent;
  return (
    <StyledLabel>
      <Stack
        inline
        direction={reverseLabel ? "row-reverse" : "row"}
        align="center"
        spacing="medium"
      >
        <StyledSwitchContainer>
          <StyledInput
            name={name}
            value={value}
            type="checkbox"
            tabIndex={0}
            aria-labelledby={ariaLabelledby}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            onKeyPress={onKeyPress}
            checked={checked}
            role="switch"
          />
          <StyledTrack>
            <StyledHandle>
              <StyledCircle />
            </StyledHandle>
          </StyledTrack>
        </StyledSwitchContainer>
        {children && <ContentContainer>{children}</ContentContainer>}
      </Stack>
    </StyledLabel>
  );
};

export default InputSwitch;
