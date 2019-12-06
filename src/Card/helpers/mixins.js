// @flow
import { css } from "styled-components";

import mq from "../../utils/mediaQuery";
import defaultTheme from "../../defaultTheme";
import { getBorder } from "./borders";

// eslint-disable-next-line import/prefer-default-export
export const CardElement = css`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  box-shadow: ${({ expanded, theme }) => expanded && theme.orbit.boxShadowActionActive};
  border-top: ${({ expanded }) => !expanded && getBorder};
  background: ${({ theme }) => theme.orbit.backgroundCard};
  ${mq.tablet(css`
    border-left: ${({ expanded }) => !expanded && getBorder};
    border-right: ${({ expanded }) => !expanded && getBorder};
  `)}
`;

CardElement.defaultProps = {
  theme: defaultTheme,
};
