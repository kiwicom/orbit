import styled from "styled-components";

const StyledMain = styled.main`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.orbit.fontFamily};

  > *:last-child {
    flex: 1;
  }
`;

export default StyledMain;
