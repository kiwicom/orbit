import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";
import mq from "../../../utils/mediaQuery";

const StyledText = styled.div<{ active?: boolean }>`
  ${({ theme, active }) => css`
    > p {
      color: ${active ? theme.orbit.paletteInkDark : theme.orbit.paletteInkLight};
    }
    ${mq.desktop(css`
      min-height: ${theme.orbit.spaceMedium};
    `)};
  `};
`;

StyledText.defaultProps = {
  theme: defaultTheme,
};

export default StyledText;
