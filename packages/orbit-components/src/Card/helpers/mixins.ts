import { css } from "styled-components";

import mq from "../../utils/mediaQuery";
import { getBorder } from "./borders";
import { Theme } from "../../defaultTheme";

export const CardElement = css`
  ${({ theme, expanded }: { theme: Theme; expanded?: boolean }) => css`
    width: 100%;
    box-sizing: border-box;
    position: relative;
    box-shadow: ${expanded && theme.orbit.boxShadowActionActive};
    border-top: ${!expanded && getBorder};
    background: ${theme.orbit.backgroundCard};
    ${mq.largeMobile(css`
      border-left: ${!expanded && getBorder};
      border-right: ${!expanded && getBorder};
    `)};
  `};
`;
