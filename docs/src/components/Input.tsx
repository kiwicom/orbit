import React from "react";
import styled from "styled-components";
import SearchIcon from "@kiwicom/orbit-components/lib/icons/Search";
import { rtlSpacing } from "@kiwicom/orbit-components/lib/utils/rtl";

interface Props {
  placeholder?: string;
  maxWidth?: number;
  onFocus: () => void;
  onChange: () => void;
}

const StyledWrapper = styled.div<{ maxWidth: number }>`
  position: relative;
  display: block;
  z-index: 2;
  width: 100%;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
`;

const StyledInputContainer = styled.div`
  display: flex;
  position: relative;
  box-shadow: ${({ theme }) => theme.orbit.boxShadowAction};
  padding: 1em 1.5em;
  border-radius: 22px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 44px;
  font-size: 1em;
  cursor: text;
  width: 100%;
`;

const StyledPreffix = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  z-index: 3;
  padding: ${rtlSpacing(`0 18px 0 0`)};

  & > svg {
    height: 20px;
    width: 20px;
  }
`;

const StyledInput = styled.input`
  appearance: none;
  border: none;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
  cursor: inherit;
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
  min-width: 0;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder {
    color: ${({ theme }) => theme.orbit.paletteInkLight};
    opacity: 0.5;
  }
  &:focus {
    &::placeholder {
      opacity: 1;
    }
    outline: none;
  }
  transition: opacity ${({ theme }) => theme.orbit.durationFast} ease-in;
`;

const Input = ({
  placeholder = "Search for components, foundation...",
  maxWidth = 360,
  onChange,
  onFocus,
}: Props) => {
  return (
    <StyledWrapper maxWidth={maxWidth}>
      <StyledInputContainer>
        <StyledPreffix>
          <SearchIcon />
        </StyledPreffix>
        <StyledInput placeholder={placeholder} onChange={onChange} onFocus={onFocus} />
      </StyledInputContainer>
    </StyledWrapper>
  );
};

export default Input;
