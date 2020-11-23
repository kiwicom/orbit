// @flow
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";

const StyledIconWrapper = styled.div`
  min-width: ${({ theme, mobile }) => mobile && theme.orbit.spaceLarge};
  min-height: ${({ theme }) => theme.orbit.spaceLarge};
  z-index: 1;
  text-align: center;
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledIconWrapper.defaultProps = {
  theme: defaultTheme,
};

export default StyledIconWrapper;
