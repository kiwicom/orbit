// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";
import CircleSmall from "../../icons/CircleSmall";

import type { Props } from "./index";

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.orbit.spaceXXSmall};

  &:last-child,
  &:last-of-type {
    margin: 0;
  }
`;

Item.defaultProps = {
  theme: defaultTokens,
};

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.orbit.spaceXSmall};
`;

IconContainer.defaultProps = {
  theme: defaultTokens,
};

const ListItem = ({ children, icon = <CircleSmall />, dataTest }: Props) => (
  <Item data-test={dataTest}>
    <IconContainer>{icon}</IconContainer>
    {children}
  </Item>
);

export default ListItem;
