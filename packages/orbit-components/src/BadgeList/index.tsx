import * as React from "react";
import styled from "styled-components";

import { Props } from "./index.d";

const StyledBadgeList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const BadgeList = ({ children, dataTest, id }: Props) => {
  return (
    <StyledBadgeList data-test={dataTest} id={id}>
      {children}
    </StyledBadgeList>
  );
};

export { default as BadgeListItem } from "./BadgeListItem";
export default BadgeList;
