import styled, { css } from "styled-components";

import mediaQueries from "../../MediaQueries";

export const StyledCategoryContainer = styled.div`
  width: 100%;
  ${mediaQueries.desktop(css`
    width: auto;
  `)};
`;

export const StyledCategoryName = styled.div`
  ${({ theme }) => `
    padding: 4px 0;
    font-size: 14px;
    font-weight: 500;
    color: ${theme.orbit.paletteInkDark};
  `}
`;
