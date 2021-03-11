import styled from "styled-components";

const Prose = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  > h1 {
    margin-bottom: ${({ theme }) => theme.orbit.spaceLarge};
  }
`;

export default Prose;
