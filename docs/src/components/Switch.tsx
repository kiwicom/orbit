import React from "react";
import styled from "styled-components";
import Stack from "@kiwicom/orbit-components/lib/Stack";

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const StyledCircle = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.orbit.paletteCloudDark};
  border-radius: 34px;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: ${({ theme }) => theme.orbit.borderRadiusCircle};
    background-color: ${({ theme }) => theme.orbit.paletteWhite};
    transition: ${({ theme }) => theme.orbit.durationFast};
  }
`;

const StyledInput = styled.input`
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
  &:focus + ${StyledCircle} {
    box-shadow: rgba(95, 115, 140, 0.3) 0px 0px 0px 3px;
  }
  &:checked + ${StyledCircle} {
    background: ${({ theme }) => theme.orbit.paletteProductNormal};
    &:before {
      transform: translateX(26px);
    }
  }
`;

const StyledContent = styled.span`
  color: ${({ theme }) => theme.orbit.colorTextSecondary};
`;

interface Props {
  children?: React.ReactNode;
  onFocus?: () => any;
  onBlur?: () => any;
  onChange?: () => any;
  onKeyPress?: () => any;
  checked?: boolean;
  ariaLabelledby?: string;
  reverseLabel?: boolean;
}

const InputSwitch = ({
  children,
  onFocus,
  onBlur,
  onChange,
  checked,
  ariaLabelledby,
  onKeyPress,
  reverseLabel,
}: Props) => {
  return (
    <Stack inline direction={reverseLabel ? "row-reverse" : "row"} align="center" spacing="medium">
      <StyledLabel>
        <StyledInput
          type="checkbox"
          tabIndex={0}
          aria-labelledby={ariaLabelledby}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onKeyPress={onKeyPress}
          checked={checked}
        />
        <StyledCircle />
      </StyledLabel>
      {children && <StyledContent>{children}</StyledContent>}
    </Stack>
  );
};

export default InputSwitch;
