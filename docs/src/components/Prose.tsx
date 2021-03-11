import styled from "styled-components";
import { Box } from "@kiwicom/orbit-components";

const Prose = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  > * + * {
    margin-top: ${({ theme }) => theme.orbit.spaceSmall};
  }
  > h1 {
    margin-bottom: ${({ theme }) => theme.orbit.spaceLarge};
  }
`;

export default Prose;
