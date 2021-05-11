import { mediaQueries } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

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
    color: ${theme.orbit.paletteInkLight};
  `}
`;

export const StyledCategoryItems = styled.div`
  ${({ theme }) => `
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 2px;
      border-radius: 2px;
      background: ${theme.orbit.paletteCloudDark};
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
    }
  `}
`;
