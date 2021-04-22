import { mediaQueries } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

const StyledTocWrapepr = styled.div`
  ${mediaQueries.tablet(css`
    order: 2;
  `)}

  padding-left: ${({ theme }) => theme.orbit.spaceSmall};
  > * {
    position: sticky;
    top: 0;
    transition: top ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
  }
`;

export default StyledTocWrapepr;
