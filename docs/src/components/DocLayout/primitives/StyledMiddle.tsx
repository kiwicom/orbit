import styled, { css } from "styled-components";
import { mediaQueries } from "@kiwicom/orbit-components";

const StyledMiddle = styled.div<{ hasBorder?: boolean }>`
  ${({ theme, hasBorder }) => css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    box-sizing: content-box;
    border-left: ${hasBorder && `1px solid ${theme.orbit.paletteCloudNormal}`};
    ${mediaQueries.largeDesktop(css`
      > * + * {
        margin-left: ${theme.orbit.spaceLarge};
      }
    `)};
  `}
`;

export default StyledMiddle;
