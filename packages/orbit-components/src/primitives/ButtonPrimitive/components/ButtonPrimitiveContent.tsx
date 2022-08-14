// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";
import type { Props } from "./ButtonPrimitiveContent";

const StyledButtonPrimitiveContent = styled(
  ({ theme, loading, hasCenteredContent, onlyIcon, contentAlign, ...props }) => <div {...props} />,
)`
  ${({ contentAlign, loading }) => css`
    visibility: ${loading && "hidden"};
    height: 100%;
    display: flex;
    justify-content: ${contentAlign};
    flex-basis: 100%;
    align-items: center;
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledButtonPrimitiveContent.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitiveContent = ({ children, ...props }: Props): React.Node => (
  <StyledButtonPrimitiveContent {...props}>{children}</StyledButtonPrimitiveContent>
);

export default ButtonPrimitiveContent;
