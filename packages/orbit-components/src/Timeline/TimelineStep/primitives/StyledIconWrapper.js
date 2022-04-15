// @flow
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";

const StyledIconWrapper: any = styled.div`
  ${({ theme, mobile }) => css`
    min-width: ${mobile && theme.orbit.spaceSixX};
    min-height: ${theme.orbit.spaceSixX};
    z-index: 1;
    text-align: center;
    line-height: 1.4;
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledIconWrapper.defaultProps = {
  theme: defaultTheme,
};

export default StyledIconWrapper;
