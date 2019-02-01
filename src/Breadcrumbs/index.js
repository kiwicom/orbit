// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";

import type { Props } from "./index";

const StyledBreadcrumbs = styled.nav`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
`;

StyledBreadcrumbs.defaultProps = {
  theme: defaultTokens,
};

const StyledBreadcrumbsList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Breadcrumbs = ({ children, dataTest }: Props) => (
  <StyledBreadcrumbs aria-label="Breadcrumb" role="navigation" data-test={dataTest}>
    <StyledBreadcrumbsList vocab="http://schema.org/" typeof="BreadcrumbList">
      {React.Children.map(children, (item, key) =>
        React.cloneElement(item, {
          active: key === React.Children.count(children) - 1,
          contentKey: key + 1,
        }),
      )}
    </StyledBreadcrumbsList>
  </StyledBreadcrumbs>
);

export default Breadcrumbs;

export { default as BreadcrumbsItem } from "./BreadcrumbsItem";
