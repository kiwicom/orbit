import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";

const StyledText = styled.div`
  ${({ theme }) => css`
    height: ${theme.orbit.spaceMedium};
    text-align: center;
  `};
`;

StyledText.defaultProps = {
  theme: defaultTheme,
};

export default StyledText;
