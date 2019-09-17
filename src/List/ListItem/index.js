// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
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
  theme: defaultTheme,
};

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceXSmall} 0 0`)};
  flex: 0 0 auto;
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

export const StyledLabel = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  color: ${({ theme }) => theme.orbit.colorTextSecondary};
`;

StyledLabel.defaultProps = {
  theme: defaultTheme,
};

const ListItem = ({ label, children, icon = <CircleSmall />, dataTest }: Props) => (
  <Item data-test={dataTest}>
    <IconContainer>{icon}</IconContainer>
    <span>
      {label && <StyledLabel>{label}</StyledLabel>}
      {children}
    </span>
  </Item>
);

export default ListItem;
