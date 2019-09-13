// @flow
import React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import Stack from "../../Stack";
import Text from "../../Text";
import Radio from "../../Radio";
import Badge from "../../Badge";
import type { Props } from "./index.js.flow";

const StyledPricingTableItem = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
  background: #ffffff;
  box-shadow: 0 0 2px 0 rgba(37, 42, 49, 0.16), 0 1px 4px 0 rgba(37, 42, 49, 0.12); /* TODO: Add elevation token */
  transition: ${({ theme }) => theme.orbit.durationNormal};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal}; /* TODO: Add token */
  padding: ${({ theme }) => theme.orbit.spaceMedium}; /* TODO: Add token */
  background: #ffffff;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 4px 0 rgba(37, 42, 49, 0.16), 0 4px 8px 0 rgba(37, 42, 49, 0.12);
  }
`;

StyledPricingTableItem.defaultProps = {
  theme: defaultTheme,
};

const StyledBadge = styled.div`
  position: absolute;
  top: -${({ theme }) => theme.orbit.spaceMedium}; /* TODO: Add token */
  left: 50%;
  transform: translate(-50%, 3px);
`;

StyledBadge.defaultProps = {
  theme: defaultTheme,
};

const Item = styled.div``;

const PricingTableItem = ({
  name,
  price,
  priceBadge,
  promoIcon,
  badge,
  action,
  active = false,
  compact = false,
  children,
  onClick,
}: Props) => {
  const onClickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledPricingTableItem
      onClick={() => {
        onClickHandler();
      }}
    >
      {badge && (
        <StyledBadge>
          {typeof badge === "string" ? <Badge type="infoInverted">{badge}</Badge> : badge}
        </StyledBadge>
      )}
      <Stack spacing="compact">
        <Stack spacing="extraTight">
          {name && (
            <Text type="primary" align="center" weight={promoIcon ? "normal" : "bold"}>
              {name}
            </Text>
          )}
          {price && (
            <Text size="large" weight="bold" type="primary" align="center">
              {price}
            </Text>
          )}
          {priceBadge && <Stack justify="center"> {priceBadge} </Stack>}
        </Stack>
        {!compact && children}
        {!compact && action && <Stack justify="center">{action}</Stack>}
        {compact && (
          <Stack justify="center" align="center">
            <Item>
              <Radio
                checked={active}
                onChange={() => {
                  onClickHandler();
                }}
              />
            </Item>
          </Stack>
        )}
      </Stack>
    </StyledPricingTableItem>
  );
};

export default PricingTableItem;
