// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { TYPE_OPTIONS, TOKENS } from "./consts";
import { rtlSpacing } from "../utils/rtl";

import type { Props } from "./index";

const getTypeToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.background]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.backgroundBadgeNeutral,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundBadgeInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundBadgeSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundBadgeWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundBadgeCritical,
      [TYPE_OPTIONS.DARK]: theme.orbit.backgroundBadgeDark,
      [TYPE_OPTIONS.WHITE]: theme.orbit.backgroundBadgeWhite,
      [TYPE_OPTIONS.INFO_INVERTED]: theme.orbit.paletteBlueNormal,
      [TYPE_OPTIONS.CRITICAL_INVERTED]: theme.orbit.paletteRedNormal,
    },
    [TOKENS.color]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.colorTextBadgeNeutral,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextBadgeInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextBadgeSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextBadgeWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextBadgeCritical,
      [TYPE_OPTIONS.DARK]: theme.orbit.colorTextBadgeDark,
      [TYPE_OPTIONS.WHITE]: theme.orbit.colorTextBadgeWhite,
      [TYPE_OPTIONS.INFO_INVERTED]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.CRITICAL_INVERTED]: theme.orbit.paletteWhite,
    },
  };
  return tokens[name][type];
};

export const StyledBadge = styled(({ className, children, dataTest, ariaLabel }) => (
  <div className={className} data-test={dataTest} aria-label={ariaLabel}>
    {children}
  </div>
))`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  display: inline-flex;
  flex: 0 0 auto;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.orbit.heightBadge};
  line-height: ${({ theme }) => theme.orbit.heightBadge};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
  font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  background-color: ${getTypeToken(TOKENS.background)};
  color: ${getTypeToken(TOKENS.color)};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusBadge};
  padding: ${({ theme }) => theme.orbit.paddingBadge};
`;

StyledBadge.defaultProps = {
  theme: defaultTheme,
};

const IconContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-shrink: 0;
  margin: ${({ theme, hasContent }) => hasContent && rtlSpacing(theme.orbit.marginBadgeIcon)};

  svg {
    height: ${({ theme }) => theme.orbit.widthIconSmall};
    width: ${({ theme }) => theme.orbit.heightIconSmall};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledBadgeContent = styled.div``;

const Badge = (props: Props) => {
  const { type = TYPE_OPTIONS.NEUTRAL, icon, children, ariaLabel, dataTest } = props;

  return (
    <StyledBadge type={type} dataTest={dataTest} ariaLabel={ariaLabel}>
      {icon && (
        <IconContainer type={type} hasContent={!!children}>
          {icon}
        </IconContainer>
      )}
      <StyledBadgeContent>{children}</StyledBadgeContent>
    </StyledBadge>
  );
};

export default Badge;
