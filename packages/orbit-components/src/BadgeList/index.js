// @flow
import React from "react";
import styled from "styled-components";

import type { Props } from "./index";

const StyledBadgeList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const BadgeList = ({ children, dataTest }: Props) => {
  return <StyledBadgeList data-test={dataTest}>{children}</StyledBadgeList>;
};

export { default as BadgeListItem } from "./BadgeListItem";
export default BadgeList;
