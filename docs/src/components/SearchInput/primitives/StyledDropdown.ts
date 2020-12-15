import styled, { css } from "styled-components";

export const StyledDropdown = styled.ul<{ visible: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 60px;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusLarge};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowAction};
  visibility: ${({ visible }) => (visible ? `visible` : "hidden")}
  padding: 1em 0;
  background: #fff;
  min-width: 600px;
  width: 100%;
  z-index: 10;
`;

export const StyledDropdownItem = styled.li`
  ${({ theme }) => css`
    cursor: pointer;
    padding: 0.5em 1em;
    color: ${theme.orbit.paletteProductNormal};
    &:hover {
      color: ${theme.orbit.paletteProductNormalHover};
    }
    &:active {
      color: ${theme.orbit.paletteProductNormalActive};
    }
    &:nth-child(even) {
      background: ${theme.orbit.paletteCloudNormal};
    }
    outline: none;
    > p {
      font-size: calc(1em - 2px);
      color: ${theme.orbit.colorTextPrimary};
    }
  `}
`;
