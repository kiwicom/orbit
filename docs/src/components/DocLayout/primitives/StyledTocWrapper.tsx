import styled, { css } from "styled-components";

import mediaQueries from "../../MediaQueries";

const StyledTocWrapper = styled.div`
  ${({ theme }) => css`
    ${mediaQueries.tablet(css`
      padding-top: ${theme.orbit.spaceXXLarge};
      order: 2;
    `)}

    > * {
      position: sticky;
      overflow: hidden;
      top: 0;
      transition: top ${theme.orbit.durationNormal} ease-in-out;
    }
  `}
`;

export default StyledTocWrapper;
