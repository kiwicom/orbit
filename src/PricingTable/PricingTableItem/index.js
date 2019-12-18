// @flow
import React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import Stack from "../../Stack";
import Text from "../../Text";
import Radio from "../../Radio";
import Badge, { StyledBadge } from "../../Badge";
import media from "../../utils/mediaQuery";
import type { Props } from "./index.js.flow";
import STATES from "./consts";

const getBoxShadow = state => ({ theme, active }) => {
  const getActive = shadow => {
    if (active) return `${shadow}, inset 0 0 0 2px ${theme.orbit.paletteProductNormal}`;
    return shadow;
  };
  if (state === STATES.HOVER) {
    return getActive(theme.orbit.boxShadowActionActive);
  }
  return getActive(theme.orbit.boxShadowAction);
};

const StyledPricingTableItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  max-width: 33%;
  position: relative;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  box-shadow: ${getBoxShadow()};
  transition: ${({ theme }) => theme.orbit.durationNormal};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal}; /* TODO: Add token */
  padding: ${({ theme }) => theme.orbit.spaceMedium}; /* TODO: Add token */
  cursor: pointer;

  &:hover {
    box-shadow: ${getBoxShadow(STATES.HOVER)};
  }

  ${({ basis }) =>
    basis &&
    css`
      flex-basis: ${basis};
    `}

  ${({ featureIcon }) =>
    featureIcon &&
    css`
      ${media.desktop(css`
        padding-top: ${({ theme }) => theme.orbit.spaceLarge}; /* TODO: Add token */
        padding-bottom: ${({ theme }) => theme.orbit.spaceLarge}; /* TODO: Add token */
      `)}
    `}
`;

StyledPricingTableItem.defaultProps = {
  theme: defaultTheme,
};

const StyledBadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const StyledBadgeWrapperContent = styled.div`
  /*
    This is a bit ugly and unnecessarily complex,
    but due how IE works with flex and absolute positioning
    it has to be like this.  
  */
  position: absolute;
  bottom: calc(100% + 3px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  left: 0;
  right: 0;
  ${StyledBadge} {
    align-self: center;
    max-width: 100%;
  }
`;

const Item = styled.div``;

const PricingTableItem = ({
  dataTest,
  name,
  price,
  priceBadge,
  featureIcon,
  badge,
  action,
  active = false,
  compact = false,
  children,
  onClick,
  basis,
}: Props) => {
  const onClickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledPricingTableItem
      onClick={onClickHandler}
      basis={basis}
      featureIcon={!!featureIcon}
      active={active}
      dataTest={dataTest}
    >
      {badge && (
        <StyledBadgeWrapper>
          <StyledBadgeWrapperContent>
            {typeof badge === "string" ? <Badge type="infoInverted">{badge}</Badge> : badge}
          </StyledBadgeWrapperContent>
        </StyledBadgeWrapper>
      )}
      <Stack flex direction="column" spacing="condensed" desktop={{ spacing: "natural" }}>
        {featureIcon && (
          <Stack justify="center" grow={false}>
            {featureIcon}
          </Stack>
        )}
        <Stack justify="between" direction="column">
          <Stack spacing="tight" direction="column" flex align="stretch" desktop={{ grow: false }}>
            {name && (
              <Text type="primary" align="center" weight={featureIcon ? "normal" : "bold"}>
                {name}
              </Text>
            )}
            {price && (
              <Text size="large" weight="bold" type="primary" align="center">
                {price}
              </Text>
            )}
            {priceBadge && (
              <Stack justify="center" align="end" desktop={{ grow: false }}>
                {priceBadge}
              </Stack>
            )}
          </Stack>
          {!compact ? (
            <Stack justify="between" direction="column">
              {children && children}
              {action && (
                <Stack justify="center" grow={false}>
                  {action}
                </Stack>
              )}
            </Stack>
          ) : (
            <Stack justify="center" align="center" grow={false}>
              <Item>
                <Radio checked={active} onChange={onClickHandler} />
              </Item>
            </Stack>
          )}
        </Stack>
      </Stack>
    </StyledPricingTableItem>
  );
};

export default PricingTableItem;
