// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";
import type { Props } from "./ButtonPrimitiveContent";
import onlyIE from "../../../utils/onlyIE";

const StyledButtonPrimitiveContent = styled(
  ({ theme, loading, hasCenteredContent, onlyIcon, contentAlign, ...props }) => <div {...props} />,
)`
  visibility: ${({ loading }) => loading && "hidden"};
  height: 100%;
  display: flex;
  justify-content: ${({ contentAlign }) => contentAlign};
  flex-basis: 100%;
  align-items: center;
  // IE flexbox bug
  ${onlyIE(css`
    min-width: 100%;
    max-width: 1px;
  `)};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledButtonPrimitiveContent.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitiveContent = ({ children, ...props }: Props): React.Node => (
  <StyledButtonPrimitiveContent {...props}>{children}</StyledButtonPrimitiveContent>
);

export default ButtonPrimitiveContent;
