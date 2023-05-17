import styled from "styled-components";

export const StyledMenu = styled.ul<{ hasResults?: boolean }>`
  ${({ hasResults, theme }) => `
    padding-top: ${hasResults ? "2rem" : "1rem"};
    font-family: ${theme.orbit.fontFamily};
    z-index: 100;
  `}
`;

export const StyledMenuItemTitle = styled.div`
  ${({ theme }) => `
    font-size: 18px;
    font-weight: ${theme.orbit.fontWeightMedium};
    color: ${theme.orbit.paletteProductDark};
    text-decoration: underline;
  `}
`;

export const StyledMenuItem = styled.li<{ tile?: boolean }>`
  ${({ theme, tile }) => `
    display: flex;
    height: 100%;
    align-items: center;
    cursor: pointer;
    padding: ${!tile && "1em 1.5em"};
    border-radius: 9px;
    outline: none;
    font-size: 16px;
    color: ${theme.orbit.paletteInkDark};

    &[aria-selected=true],
    &:hover {
      background: ${!tile && theme.orbit.paletteCloudLight};
      ${StyledMenuItemTitle} {
        color: ${theme.orbit.paletteProductDarkHover};
      }
    }

    > *:first-child {
      flex: 1;
      height: 100%;
      a:first-child {
        height: 100%;
      }
    }
  `}
`;
