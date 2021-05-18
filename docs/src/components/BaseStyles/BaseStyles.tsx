import { mediaQueries } from "@kiwicom/orbit-components";
import { createGlobalStyle, css } from "styled-components";

const BaseStyles = createGlobalStyle`
  ${({ theme }) => css`
    html {
      font-family: ${theme.orbit.fontFamily};
      font-size: 14px;
    }

    ${mediaQueries.tablet(css`
      html {
        font-size: 16px;
      }
    `)};
  `}
`;

export default BaseStyles;
