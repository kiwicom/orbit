// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import TYPE_OPTIONS from "./consts";

import type { Props } from "./index";

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
  background-color: ${({ tokens, type }) => tokens.background[type]};
  color: ${({ tokens, type }) => tokens.color[type]};
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
    color: ${({ tokens, type }) => tokens.color[type]};
  }
`;

const Badge = (props: Props) => {
  const { type = TYPE_OPTIONS.NEUTRAL, theme = defaultTokens, icon, children } = props;

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

  return (
    <StyledBadge tokens={tokens} type={type} {...props}>
      {icon && (
        <IconContainer tokens={tokens} type={type}>
          {icon}
        </IconContainer>
      )}
      {children}
    </StyledBadge>
  );
};

export default Badge;
