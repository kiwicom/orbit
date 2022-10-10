import { Link } from "gatsby";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)<{ $active: boolean }>`
  ${({ theme, $active }) => css`
    position: relative;
    display: block;
    padding: 6px 0px 6px 12px;
    color: ${theme.orbit.paletteInkDark};
    transition: all ${theme.orbit.durationFast};
    line-height: 1.375;
    border-left: 2px solid
      ${$active ? theme.orbit.paletteProductNormal : theme.orbit.paletteCloudNormal};
    &:hover,
    &:focus {
      color: ${theme.orbit.paletteProductNormal};
    }
    ${$active &&
    css`
      font-weight: 500;
      color: ${theme.orbit.paletteProductNormal};
    `}
  `}
`;

export default StyledLink;
