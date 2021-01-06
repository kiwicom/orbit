import styled from "styled-components";

const StyledInputContainer = styled.div`
  display: flex;
  position: relative;
  box-shadow: ${({ theme }) => theme.orbit.boxShadowAction};
  padding: 1em 1.5em;
  border-radius: 22px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  font-size: 1em;
  cursor: text;
  width: 100%;
`;

export default StyledInputContainer;
