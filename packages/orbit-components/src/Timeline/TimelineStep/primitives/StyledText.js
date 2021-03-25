// @flow
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";

const StyledText: any = styled.div`
  height: ${({ theme }) => theme.orbit.spaceMedium};
  text-align: center;
`;

StyledText.defaultProps = {
  theme: defaultTheme,
};

export default StyledText;
