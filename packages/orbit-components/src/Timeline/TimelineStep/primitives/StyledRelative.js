// @flow
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";

const StyledRelative: any = styled.div`
  position: relative;
  ${({ inner, theme }) =>
    inner &&
    css`
      width: calc(100% + ${parseInt(theme.orbit.spaceSmall, 10) * 2}px);
      display: flex;
      align-items: center;
    `};
`;

StyledRelative.defaultProps = {
  theme: defaultTheme,
};

export default StyledRelative;
