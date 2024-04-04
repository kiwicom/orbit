import styled, { css } from "styled-components";

import mediaQueries from "../../MediaQueries";

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
    flex-shrink: 0;
  `)}
`;
