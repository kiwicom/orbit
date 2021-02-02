import styled from "styled-components";

const Prose = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  > * + * {
    margin-top: ${({ theme }) => theme.orbit.spaceSmall};
  }
  > h1 {
    margin-bottom: ${({ theme }) => theme.orbit.spaceLarge};
  }
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    margin-top: ${({ theme }) => theme.orbit.spaceLarge};
  }
`;

export default Prose;
