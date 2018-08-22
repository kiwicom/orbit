// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import TYPE_OPTIONS from "./consts";

import type { Props } from "./index";

const getToken = (theme, type, name) => {

  // TODO: create tokens
  const tokens = {
    background: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteCloudLight,
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueLight,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenLight,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeLight,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedLight,
      [TYPE_OPTIONS.DARK]: theme.orbit.paletteInkNormal,
    },
    color: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueNormal,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenNormal,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeNormal,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedNormal,
      [TYPE_OPTIONS.DARK]: theme.orbit.paletteWhite,
    },
  };

  return tokens[name][type];
};

const StyledBadge = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  display: inline-flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: 24px; // TODO: create token
  line-height: 24px; // TODO: create token
  width: ${({ circled }) => circled && "24px"}; // TODO: create token
  font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
  font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  background-color: ${({ theme, type }) => getToken(theme, type, "background")};
  color: ${({ theme, type }) => getToken(theme, type, "color")};
  border-radius: 12px; // TODO: create token borderRadiusBadge
  padding: 0 8px;
`;

StyledBadge.defaultProps = {
  theme: defaultTokens,
};

const IconContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  margin-right: 4px; // TODO: create token

  svg {
    height: 16px;
    width: 16px;
    color: ${({ theme, type }) => getToken(theme, type, "color")};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTokens,
};

const Badge = (props: Props) => {
  const { type = TYPE_OPTIONS.NEUTRAL, icon, children } = props;

  return (
    <StyledBadge type={type} {...props}>
      {icon && <IconContainer type={type}>{icon}</IconContainer>}
      {children}
    </StyledBadge>
  );
};

export default Badge;
