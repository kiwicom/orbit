import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";
import Stack from "../../../Stack";
import Text, { StyledText } from "../../../Text";
import Radio from "../../../Radio";
import Badge from "../../../Badge";
import { StyledBadge } from "../../../primitives/BadgePrimitive";
import media from "../../../utils/mediaQuery";
import STATES from "./consts";
import { IconContainer, Item as ListItem } from "../../../List/ListItem";
import { rtlSpacing } from "../../../utils/rtl";
import PricingTableContext from "../PricingTableContext";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Props } from "./types";

const getBoxShadow = ({
  theme,
  state,
  active,
  hasError,
}: {
  theme: typeof defaultTheme;
  active?: boolean;
  state?: string;
  hasError?: boolean;
}) => {
  const getActive = shadow => {
    if (hasError) return `${shadow}, inset 0 0 0 1px ${theme.orbit.borderColorInputError}`;
    if (active) return `${shadow}, inset 0 0 0 2px ${theme.orbit.paletteBlueNormal}`;
    return shadow;
  };

  if (state === STATES.HOVER) return getActive(theme.orbit.boxShadowActionActive);

  return getActive(theme.orbit.boxShadowAction);
};

const StyledPricingTableItem = styled.div<{
  active?: boolean;
  hasError?: boolean;
  basis?: string;
  featureIcon?: Props["featureIcon"];
  desktopRadio?: boolean;
}>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  box-shadow: ${({ theme, active, hasError }) => getBoxShadow({ theme, active, hasError })};
  transition: ${({ theme }) => theme.orbit.durationNormal};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal}; /* TODO: Add token */
  padding: ${({ theme }) => theme.orbit.spaceMedium}; /* TODO: Add token */
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme, active, hasError }) =>
      getBoxShadow({ theme, state: STATES.HOVER, active, hasError })};
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

const StyledBadgeWrapperContent = styled.div<{ hasIcon?: boolean }>`
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
    bottom: calc(100% + ${({ hasIcon }: { hasIcon?: boolean }) => (hasIcon ? "11px" : "5px")});
  `)}
`;

StyledBadgeWrapperContent.defaultProps = {
  theme: defaultTheme,
};

const Item = styled.div``;

const DesktopRadio = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

DesktopRadio.defaultProps = {
  theme: defaultTheme,
};

const Spacer = styled.div`
  margin-top: ${({ theme }) => theme.orbit.spaceSmall};
`;

Spacer.defaultProps = {
  theme: defaultTheme,
};

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
  children,
  onClick,
  compact,
  mobileDescription,
}: Props) => {
  const onClickHandler = () => {
    if (onClick) {
      onClick();
    }
  };
  const { isDesktop } = useMediaQuery();
  const trueCompact = typeof compact !== "undefined" ? compact : !isDesktop;
  const context = React.useContext(PricingTableContext);

  return (
    <>
      {context.isContent ? (
        <>
          {mobileDescription && (
            <Text weight="bold" size="normal">
              {mobileDescription}
            </Text>
          )}
          {children && children}
          {action && action}
        </>
      ) : (
        <StyledPricingTableItem
          onClick={onClickHandler}
          basis={context.basis}
          featureIcon={!!featureIcon}
          active={active}
          data-test={dataTest}
          hasError={context.hasError}
          desktopRadio={context.desktopRadio}
        >
          {!featureIcon && context.desktopRadio && !trueCompact && <Spacer />}
          {context.desktopRadio && !trueCompact && (
            <DesktopRadio>
              <Radio checked={active} onChange={onClickHandler} hasError={context.hasError} />
            </DesktopRadio>
          )}
          {badge && (
            <StyledBadgeWrapper>
              <StyledBadgeWrapperContent hasIcon={!!featureIcon}>
                {typeof badge === "string" ? <Badge type="infoInverted">{badge}</Badge> : badge}
              </StyledBadgeWrapperContent>
            </StyledBadgeWrapper>
          )}
          <Stack flex direction="column" spacing="XSmall" desktop={{ spacing: "medium" }}>
            {featureIcon && (
              <Stack justify="center" grow={false}>
                {featureIcon}
              </Stack>
            )}
            <Stack justify="between" direction="column">
              <Stack
                spacing="XXSmall"
                direction="column"
                flex
                align="stretch"
                desktop={{ grow: false }}
              >
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
              {trueCompact ? (
                <Stack justify="center" align="center" grow={false}>
                  <Item>
                    <Radio checked={active} onChange={onClickHandler} hasError={context.hasError} />
                  </Item>
                </Stack>
              ) : (
                <Stack justify="between" direction="column">
                  <StyledListWrapper>{children && children}</StyledListWrapper>
                  {action && (
                    <Stack justify="center" grow={false}>
                      {action}
                    </Stack>
                  )}
                </Stack>
              )}
            </Stack>
          </Stack>
        </StyledPricingTableItem>
      )}
    </>
  );
};

export default PricingTableItem;
