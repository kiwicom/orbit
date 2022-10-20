// @flow
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";

const StyledRelative: any = styled.div`
  ${({ inner, theme }) => css`
    position: relative;
    ${inner &&
    css`
      width: calc(100% + ${parseInt(theme.orbit.spaceSmall, 10) + 4}px);
      display: flex;
      align-items: center;
    `}
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledRelative.defaultProps = {
  theme: defaultTheme,
};

export default StyledRelative;
