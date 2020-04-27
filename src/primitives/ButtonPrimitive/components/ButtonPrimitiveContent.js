// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";
import type { Props } from "./ButtonPrimitiveContent";
import onlyIE from "../../../utils/onlyIE";

const StyledButtonPrimitiveContent = styled(({ theme, loading, ...props }) => <div {...props} />)`
  visibility: ${({ loading }) => loading && "hidden"};
  height: 100%;
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  align-items: center;
  // IE flexbox bug
  ${onlyIE(css`
    min-width: 100%;
    max-width: 1px;
  `)};
`;

StyledButtonPrimitiveContent.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitiveContent = ({ children, loading }: Props) => (
  <StyledButtonPrimitiveContent loading={loading}>{children}</StyledButtonPrimitiveContent>
);

export default ButtonPrimitiveContent;
