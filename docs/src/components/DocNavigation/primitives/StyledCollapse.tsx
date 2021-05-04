import { mediaQueries } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

export const StyledCollapseWrapper = styled.div`
  > * {
    border-bottom: 0;
  }
`;
export const StyledCollapseLabel = styled.div`
  font-size: 16px;
`;
export const StyledCollapseContent = styled.div<{ hasCategories: boolean }>`
  ${({ hasCategories }) => css`
    ${hasCategories
      ? `
        padding-left: 0.5rem;
        > * + * {
          margin-top: 0.5rem;
        }
      `
      : css`
          ${mediaQueries.desktop(css`
            padding-left: 0.5rem;
          `)};
          > * {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            ${mediaQueries.desktop(css`
              padding-left: 0;
              padding-right: 0;
            `)};
          }
        `}
  `};
`;
