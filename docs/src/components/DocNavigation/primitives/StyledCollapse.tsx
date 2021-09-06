import styled, { css } from "styled-components";
import { mediaQueries } from "@kiwicom/orbit-components";

export const StyledCollapseWrapper = styled.div`
  padding: 1px;
  > * {
    border-bottom: 0;
  }
`;

export const StyledCollapseLabel = styled.div`
  font-size: 16px;
`;

export const StyledCollapseContent = styled.div<{ hasCategories: boolean }>`
  ${({ hasCategories }) => css`
    margin: -10px 0;
    ${hasCategories
      ? `
        > * + * {
          margin-top: 0.5rem;
        }
      `
      : css`
          > * {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        `}
  `};
`;
