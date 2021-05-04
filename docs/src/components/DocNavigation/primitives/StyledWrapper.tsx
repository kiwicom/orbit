import { mediaQueries } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  margin-bottom: 1rem;
`;

export default StyledWrapper;

export const StyledWrapperMobile = styled.div`
  ${mediaQueries.desktop(css`
    display: none;
  `)};
`;

export const StyledWrapperDesktop = styled.div`
  display: none;
  ${mediaQueries.desktop(css`
    display: block;
    width: 22ch;
    flex-shrink: 0;
    margin-top: -6px;
  `)}
`;
