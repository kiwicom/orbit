import styled from "styled-components";

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
    color: ${({ theme }) => theme.orbit.paletteInkDark};
    opacity: 0.7;
  }
  &:focus {
    &::placeholder {
      opacity: 1;
    }
    outline: none;
  }
  transition: opacity ${({ theme }) => theme.orbit.durationFast} ease-in;
`;

export default StyledInput;
