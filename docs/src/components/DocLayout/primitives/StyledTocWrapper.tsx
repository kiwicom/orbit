import { mediaQueries } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

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
