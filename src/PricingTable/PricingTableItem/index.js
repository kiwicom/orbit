// @flow
import React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import Stack from "../../Stack";
import Text, { StyledText } from "../../Text";
import Radio from "../../Radio";
import Badge from "../../Badge";
import { StyledBadge } from "../../primitives/BadgePrimitive";
import media from "../../utils/mediaQuery";
import type { Props } from "./index.js.flow";
import STATES from "./consts";
import { IconContainer, Item as ListItem } from "../../List/ListItem";
import { rtlSpacing } from "../../utils/rtl";

const getBoxShadow = state => ({ theme, active, hasError }) => {
  const getActive = shadow => {
    if (hasError) return `${shadow}, inset 0 0 0 1px ${theme.orbit.borderColorInputError}`;
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
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  text-align: center;
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
    word-break: break-all;
  }

  ${media.desktop(css`
    bottom: calc(100% + ${({ hasIcon }) => (hasIcon ? "11px" : "5px")});
  `)}
`;

StyledBadgeWrapperContent.defaultProps = {
  theme: defaultTheme,
};

const Item = styled.div``;

/*
  This causes rewrite of a list so list is ussable in in PricingTable, this is not at all elegant solution.
*/
export const StyledListWrapper = styled.div`
  ${({ theme }) =>
    css`
      width: 100%;
      ${ListItem} {
        border-bottom: 1px solid ${theme.orbit.paletteCloudDark};
        padding: ${theme.orbit.spaceSmall};
        align-items: center;

        &,
        ${StyledText} {
          font-weight: ${theme.orbit.fontWeightMedium};
        }

        :last-child {
          border-bottom: none;
        }

        ${media.tablet(css`
          padding: ${theme.orbit.spaceXSmall};
        `)}
      }

      ${IconContainer} {
        margin: ${rtlSpacing(`${theme.orbit.spaceXXSmall} ${theme.orbit.spaceXSmall} 0 0`)};
        height: ${theme.heightIconLarge};

        svg {
          height: ${theme.orbit.heightIconMedium};
          width: ${theme.orbit.widthIconMedium};
        }
      }
    `}
`;

StyledListWrapper.defaultProps = {
  theme: defaultTheme,
};

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
  hasError,
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
      data-test={dataTest}
      hasError={hasError}
    >
      {badge && (
        <StyledBadgeWrapper>
          <StyledBadgeWrapperContent hasIcon={!!featureIcon}>
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
              <StyledListWrapper>{children && children}</StyledListWrapper>
              {action && (
                <Stack justify="center" grow={false}>
                  {action}
                </Stack>
              )}
            </Stack>
          ) : (
            <Stack justify="center" align="center" grow={false}>
              <Item>
                <Radio checked={active} onChange={onClickHandler} hasError={hasError} />
              </Item>
            </Stack>
          )}
        </Stack>
      </Stack>
    </StyledPricingTableItem>
  );
};

export default PricingTableItem;
