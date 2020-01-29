// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";

// media query only for IE 10+, not Edge
const onlyIE = (style, breakpoint = "all") =>
  css`
    @media ${breakpoint} and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      ${style};
    }
  `;

const StyledButtonContent = styled(({ theme, loading, ...props }) => <div {...props} />)`
  visibility: ${({ loading }) => loading && "hidden"};
  height: 100%;
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;

  // IE flexbox bug
  ${onlyIE(css`
    min-width: 100%;
    max-width: 1px;
  `)};
`;

StyledButtonContent.defaultProps = {
  theme: defaultTheme,
};

export default StyledButtonContent;
