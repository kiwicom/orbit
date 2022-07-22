import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";

interface Props {
  loading?: boolean;
  contentAlign: string | null;
}

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

StyledButtonPrimitiveContent.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitiveContent = ({ children, ...props }: React.PropsWithChildren<Props>) => (
  <StyledButtonPrimitiveContent {...props}>{children}</StyledButtonPrimitiveContent>
);

export default ButtonPrimitiveContent;
