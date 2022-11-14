import styled, { css } from "styled-components";
import { mediaQueries } from "@kiwicom/orbit-components";

const StyledMiddle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    box-sizing: content-box;
    border-left: 1px solid ${theme.orbit.paletteCloudNormal};
    ${mediaQueries.largeDesktop(css`
      > * + * {
        margin-left: ${theme.orbit.spaceLarge};
      }
    `)};
  `}
`;

export default StyledMiddle;
