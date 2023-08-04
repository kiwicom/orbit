import React from "react";
import styled, { css } from "styled-components";

import SpacingTokenIcon from "../../../images/icons/SpacingToken.svg";
import ElevationTokenIcon from "../../../images/icons/ElevationToken.svg";
import TypographyTokenIcon from "../../../images/icons/TypographyToken.svg";
import SizeTokenIcon from "../../../images/icons/SizeToken.svg";
import BorderRadiusTokenIcon from "../../../images/icons/BorderRadiusToken.svg";
import BreakpointTokenIcon from "../../../images/icons/BreakpointToken.svg";
import ZIndexTokenIcon from "../../../images/icons/ZIndexToken.svg";
import DurationTokenIcon from "../../../images/icons/DurationToken.svg";
import OpacityTokenIcon from "../../../images/icons/OpacityToken.svg";

interface SizeProps {
  size?: "small" | "medium" | "large";
}

interface ColorProps extends SizeProps {
  $color?: string | number;
}

function getDimensions(size: ColorProps["size"]) {
  switch (size) {
    case "large":
      return `
        width: 32px;
        height: 32px;
      `;
    case "medium":
      return `
        width: 24px;
        height: 24px;
      `;
    default:
      return `
        width: 18px;
        height: 18px;
      `;
  }
}

export const StyledDesignTokenBase = styled.span<SizeProps>`
  ${({ size = "small" }) => css`
    display: inline-block;
    flex-shrink: 0;
    ${getDimensions(size)};
    svg {
      ${getDimensions(size)};
    }
  `}
`;

const StyledDesignTokenCircleShape = styled(StyledDesignTokenBase)<ColorProps>`
  ${({ theme }) =>
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${theme.orbit.borderRadiusCircle};
      background-color: ${theme.orbit.paletteCloudDark};
    `};
`;

export const StyledDesignTokenColor = styled(StyledDesignTokenBase)<ColorProps>`
  ${({ $color, theme, size }) => css`
    background: ${$color};
    border-radius: ${theme.orbit.borderRadiusCircle};
    box-shadow: 0 0 0 1px ${theme.orbit.paletteCloudLight};
    ${size !== "small" &&
    css`
      border: 3px solid ${theme.orbit.paletteWhiteNormal};
    `}
  `}
`;

export const StyledDesignTokenSpacing = ({ size }: SizeProps) => {
  return (
    <StyledDesignTokenCircleShape size={size}>
      <SpacingTokenIcon />
    </StyledDesignTokenCircleShape>
  );
};

export const StyledDesignTokenElevation = ({ size }: SizeProps) => {
  return (
    <StyledDesignTokenCircleShape size={size}>
      <ElevationTokenIcon />
    </StyledDesignTokenCircleShape>
  );
};

export const StyledDesignTokenTypography = ({ size }: SizeProps) => {
  return (
    <StyledDesignTokenCircleShape size={size}>
      <TypographyTokenIcon />
    </StyledDesignTokenCircleShape>
  );
};

export const StyledDesignTokenSize = ({ size }: SizeProps) => {
  return (
    <StyledDesignTokenCircleShape size={size}>
      <SizeTokenIcon />
    </StyledDesignTokenCircleShape>
  );
};

export const StyledDesignTokenBreakpoint = ({ size }: SizeProps) => {
  return (
    <StyledDesignTokenCircleShape size={size}>
      <BreakpointTokenIcon />
    </StyledDesignTokenCircleShape>
  );
};

export const StyledDesignTokenBorderRadius = ({ size }: SizeProps) => {
  return (
    <StyledDesignTokenCircleShape size={size}>
      <BorderRadiusTokenIcon />
    </StyledDesignTokenCircleShape>
  );
};

export const StyledDesignTokenZIndex = ({ size }: SizeProps) => {
  return (
    <StyledDesignTokenCircleShape size={size}>
      <ZIndexTokenIcon />
    </StyledDesignTokenCircleShape>
  );
};

export const StyledDesignTokenDuration = ({ size }: SizeProps) => {
  return (
    <StyledDesignTokenCircleShape size={size}>
      <DurationTokenIcon />
    </StyledDesignTokenCircleShape>
  );
};

export const StyledDesignTokenOpacity = ({ size }: SizeProps) => {
  return (
    <StyledDesignTokenCircleShape size={size}>
      <OpacityTokenIcon />
    </StyledDesignTokenCircleShape>
  );
};
