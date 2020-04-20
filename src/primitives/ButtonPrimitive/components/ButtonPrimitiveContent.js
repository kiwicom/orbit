// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mq from "../../../utils/mediaQuery";
import defaultTheme from "../../../defaultTheme";
import type { Props } from "./ButtonPrimitiveContent";
// media query only for IE 10+, not Edge
const onlyIE = (style, breakpoint = "all") =>
  css`
    @media ${breakpoint} and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      ${style};
    }
  `;

const StyledButtonPrimitiveContent = styled(({ theme, loading, ...props }) => <div {...props} />)`
  visibility: ${({ loading }) => loading && "hidden"};
  height: 100%;
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  align-items: center;
  // IE flexbox bug
  ${onlyIE(css`
    min-width: 100%;
    max-width: 1px;
  `)};
  ${mq.tablet(css`
    justify-content: center;
  `)};
`;

StyledButtonPrimitiveContent.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitiveContent = ({ children, loading }: Props) => (
  <StyledButtonPrimitiveContent loading={loading}>{children}</StyledButtonPrimitiveContent>
);

export default ButtonPrimitiveContent;
