import styled, { css } from "styled-components";

export const StyledDropdown = styled.ul<{ visible: boolean }>`
  visibility: ${({ visible }) => (visible ? `visible` : "hidden")}
  padding: 1em 0;
  z-index: 10;
`;

export const StyledDropdownItem = styled.li<{ type?: "interactive" | "disabled" }>`
  ${({ theme, type = "interactive" }) => css`
    padding: 0.5em 1em;
    border-radius: ${theme.orbit.borderRadiusLarge};
    outline: none;
    > p {
      font-size: calc(1em - 2px);
    }

    ${type === "interactive" &&
    css`
      cursor: pointer;
      background: #fff;
      box-shadow: ${theme.orbit.boxShadowAction};
      color: ${theme.orbit.paletteProductNormal};
      &:hover {
        color: ${theme.orbit.paletteProductNormalHover};
      }
      &:active {
        color: ${theme.orbit.paletteProductNormalActive};
      }
      > p {
        color: ${theme.orbit.colorTextPrimary};
      }
    `}

    ${type === "disabled" &&
    css`
      background: ${theme.orbit.paletteCloudLight};
      border: 1px solid ${theme.orbit.paletteCloudDark};
      color: ${theme.orbit.paletteInkLight};
    `}

    & + & {
      margin-top: 0.5rem;
    }
  `}
`;
