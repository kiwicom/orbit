// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
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
    },
    [TOKENS.color]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.colorTextBadgeNeutral,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextBadgeInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextBadgeSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextBadgeWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextBadgeCritical,
      [TYPE_OPTIONS.DARK]: theme.orbit.colorTextBadgeDark,
      [TYPE_OPTIONS.WHITE]: theme.orbit.colorTextBadgeWhite,
    },
  };

  return tokens[name][type];
};

const StyledBadge = styled(({ className, children, dataTest }) => (
  <div className={className} data-test={dataTest}>
    {children}
  </div>
))`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  display: inline-flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.orbit.heightBadge};
  line-height: ${({ theme }) => theme.orbit.heightBadge};
  width: ${({ circled, theme }) => circled && theme.orbit.widthBadgeCircled};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
  font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  background-color: ${getTypeToken(TOKENS.background)};
  color: ${getTypeToken(TOKENS.color)};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusBadge};
  padding: ${({ theme, circled }) => !circled && theme.orbit.paddingBadge};
`;

StyledBadge.defaultProps = {
  theme: defaultTokens,
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
  theme: defaultTokens,
};

const StyledBadgeContent = styled.div``;

const Badge = (props: Props) => {
  const { type = TYPE_OPTIONS.NEUTRAL, icon, children, circled, dataTest } = props;

  return (
    <StyledBadge type={type} circled={circled} dataTest={dataTest}>
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
