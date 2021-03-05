// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { StyledCarrierLogo } from "../../CarrierLogo";
import defaultTheme from "../../defaultTheme";
import { rtlSpacing, left } from "../../utils/rtl";

import type { Props } from ".";

export const StyledBadge: any = styled(({ className, children, dataTest, ariaLabel }) => (
  <div className={className} data-test={dataTest} aria-label={ariaLabel}>
    {children}
  </div>
))`
  ${({ theme, borderColor, background, foregroundColor }) => css`
    position: relative;
    font-family: ${theme.orbit.fontFamily};
    display: inline-flex;
    flex: 0 0 auto;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    min-height: ${theme.orbit.heightBadge};
    line-height: 14px;
    font-size: ${theme.orbit.fontSizeTextSmall};
    font-weight: ${theme.orbit.fontWeightMedium};
    background: ${background};
    color: ${foregroundColor};
    border-radius: ${theme.orbit.borderRadiusBadge};
    padding: ${theme.orbit.paddingBadge};
    border: ${borderColor && `1px solid ${borderColor}`};
    ${StyledCarrierLogo} {
      position: absolute;
      ${left}: -2px;
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
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

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
IconContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledBadgeContent = styled.div`
  ${({ theme, $isCarrier }) => css`
    padding: 5px 0;
    line-height: 1;
    margin-${left}: ${
    $isCarrier && parseInt(theme.orbit.widthIconMedium, 10) - parseInt(theme.orbit.spaceXXSmall, 10)
  }px;
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBadgeContent.defaultProps = {
  theme: defaultTheme,
};

const BadgePrimitive = (props: Props): React.Node => {
  const { icon, children, ariaLabel, dataTest, background, foregroundColor, borderColor } = props;

  return (
    <StyledBadge
      background={background}
      foregroundColor={foregroundColor}
      dataTest={dataTest}
      ariaLabel={ariaLabel}
      borderColor={borderColor}
    >
      {icon && <IconContainer hasContent={!!children}>{icon}</IconContainer>}
      <StyledBadgeContent>{children}</StyledBadgeContent>
    </StyledBadge>
  );
};

export default BadgePrimitive;
