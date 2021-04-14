import styled from "styled-components";

export const StyledMenu = styled.ul<{ hasResults?: boolean }>`
  ${({ hasResults = false }) => `
    padding-top: ${hasResults ? "2rem" : "1rem"};
  `}
`;

export const StyledMenuItemTitle = styled.div`
  ${({ theme }) => `
    font-size: 22px;
    font-weight: ${theme.orbit.fontWeightMedium};
    color: ${theme.orbit.paletteProductDark};
    text-decoration: underline;
  `}
`;

export const StyledMenuItem = styled.li`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 1em 1.5em;
    border-radius: 9px;
    outline: none;
    font-size: 16px;
    color: ${theme.orbit.paletteInkNormal};

    &[aria-selected=true],
    &:hover {
      background: ${theme.orbit.paletteCloudLight};
      ${StyledMenuItemTitle} {
        color: ${theme.orbit.paletteProductDarkHover};
      }
    }

    > *:first-child {
      flex: 1;
    }
  `}
`;
