import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(Link)<{ $active: boolean; level: number }>`
  ${({ theme, $active, level }) => `
    position: relative;
    display: block;
    padding-top: 6px;
    padding-bottom: 6px;
    color: ${theme.orbit.paletteInkNormal};
    transition: all ${theme.orbit.durationFast};
    &:hover,
    &:focus {
      color: ${theme.orbit.paletteProductNormal};
    }
    ${
      level === 3 &&
      `
        padding-left: 12px;
        border-left: 2px solid transparent;
      `
    }
    ${
      $active &&
      `
        font-weight: 500;
        color: ${theme.orbit.paletteProductNormal};
      `
    }
    ${
      $active &&
      level === 3 &&
      `
        border-left-color: ${theme.orbit.paletteProductNormal};
      `
    }
  `}
`;

export default StyledLink;
