// @flow
import { css } from "styled-components";

import mq from "../../utils/mediaQuery";
import defaultTheme from "../../defaultTheme";
import { getBorder } from "./borders";

export const CardElement = css`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  box-shadow: ${({ expanded, theme }) => expanded && theme.orbit.boxShadowActionActive};
  border-top: ${({ expanded }) => !expanded && getBorder};
  background: ${({ theme }) => theme.orbit.backgroundCard};
  ${mq.largeMobile(css`
    border-left: ${({ expanded }) => !expanded && getBorder};
    border-right: ${({ expanded }) => !expanded && getBorder};
  `)}
`;

// $FlowFixMe: unsure what this is supposed to be, it's not a component
CardElement.defaultProps = {
  theme: defaultTheme,
};
