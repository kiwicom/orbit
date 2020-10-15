// @flow
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ theme, mobile }) => mobile && theme.orbit.spaceLarge};
  min-height: ${({ theme }) => theme.orbit.spaceLarge};
  z-index: 1;
`;

StyledIconWrapper.defaultProps = {
  theme: defaultTheme,
};

export default StyledIconWrapper;
