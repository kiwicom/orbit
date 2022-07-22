import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";

const StyledText = styled.div<{ active?: boolean }>`
  ${({ theme, active }) => css`
    > p {
      color: ${active ? theme.orbit.paletteInkDark : theme.orbit.paletteInkLight};
    }
  `};
`;

StyledText.defaultProps = {
  theme: defaultTheme,
};

export default StyledText;
