// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";
import CircleSmall from "../../icons/CircleSmall";
import { rtlSpacing } from "../../utils/rtl";

import type { Props } from "./index";

export const Item = styled.li`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
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
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceXSmall} 0 0`)};
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
