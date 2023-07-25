import { createGlobalStyle, css } from "styled-components";

const BaseStyles = createGlobalStyle`
  ${({ theme }) => css`
    html {
      font-family: ${theme.orbit.fontFamily};
      font-size: 16px;
    }

    button {
      border: none;
    }
  `}
`;

export default BaseStyles;
