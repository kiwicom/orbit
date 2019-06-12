// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import Button from "../Button";
import ChevronLeft from "../icons/ChevronLeft";
import { withDictionary } from "../Dictionary";

import type { InnerProps } from "./index";

const StyledBreadcrumbs = styled.nav`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
`;

StyledBreadcrumbs.defaultProps = {
  theme: defaultTheme,
};

const StyledBreadcrumbsList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledBackButtonWrapper = styled.span`
  margin-right: ${({ theme }) => theme.orbit.spaceSmall};
`;

StyledBackButtonWrapper.defaultProps = {
  theme: defaultTheme,
};

const Breadcrumbs = ({ children, dataTest, onGoBack, translate }: InnerProps) => (
  <StyledBreadcrumbs aria-label="Breadcrumb" role="navigation" data-test={dataTest}>
    <StyledBreadcrumbsList vocab="http://schema.org/" typeof="BreadcrumbList">
      {onGoBack && (
        <StyledBackButtonWrapper>
          <Button
            iconLeft={<ChevronLeft />}
            circled
            type="secondary"
            size="small"
            onClick={onGoBack}
            title={translate("breadcrumbs_back")}
          />
        </StyledBackButtonWrapper>
      )}
      {React.Children.map(children, (item, key) => {
        return React.cloneElement(item, {
          active: key === React.Children.count(children) - 1,
          contentKey: key + 1,
        });
      })}
    </StyledBreadcrumbsList>
  </StyledBreadcrumbs>
);

export default withDictionary(Breadcrumbs);

export { default as BreadcrumbsItem } from "./BreadcrumbsItem";
