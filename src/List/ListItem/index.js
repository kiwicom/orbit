// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";
import CircleSmall from "../../icons/CircleSmall";

import type { Props } from "./index";

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.orbit.spaceXSmall};

  &:only-child {
    margin: 0;
  }
`;

Item.defaultProps = {
  theme: defaultTokens,
};

const IconContainer = styled.div`
  display: flex;
  margin-right: ${({ theme }) => theme.orbit.spaceXSmall};
`;

IconContainer.defaultProps = {
  theme: defaultTokens,
};

const ListItem = ({ children, icon = <CircleSmall /> }: Props) => (
  <Item>
    <IconContainer>{icon}</IconContainer>
    {children}
  </Item>
);

export default ListItem;
