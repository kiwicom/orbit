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

StyledIconWrapper.defaultProps = {
  theme: defaultTheme,
};

export default StyledIconWrapper;
