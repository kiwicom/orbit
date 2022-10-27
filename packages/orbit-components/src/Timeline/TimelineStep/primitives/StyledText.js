// @flow
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";

const StyledText: any = styled.div`
  ${({ theme, active }) => css`
    > p {
      color: ${active ? theme.orbit.paletteInkDark : theme.orbit.paletteInkLight};
    }
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledText.defaultProps = {
  theme: defaultTheme,
};

export default StyledText;
