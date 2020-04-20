// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import Button from "../Button";
import ChevronLeft from "../icons/ChevronLeft";
import ButtonLink from "../ButtonLink";
import getSpacingToken from "../common/getSpacingToken";
import useTranslate from "../hooks/useTranslate";
import useMediaQuery from "../hooks/useMediaQuery";

import type { Props } from "./index";

const StyledBreadcrumbs = styled.nav`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
  margin-bottom: ${getSpacingToken};
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

const GoBackButton = ({ onClick }) => {
  const translate = useTranslate();
  return (
    <StyledBackButtonWrapper>
      <Button
        iconLeft={<ChevronLeft />}
        circled
        type="secondary"
        size="small"
        onClick={onClick}
        title={translate("breadcrumbs_back")}
      />
    </StyledBackButtonWrapper>
  );
};

const getSecondToLast = children => {
  if (React.isValidElement(children)) {
    return children;
  }
  if (Array.isArray(children)) {
    const lastChild = children[children.length - 2];
    if (React.isValidElement(lastChild)) {
      return lastChild;
    }
  }
  return false;
};

const Breadcrumbs = ({ children, dataTest, onGoBack, spaceAfter }: Props) => {
  const { isMediumMobile } = useMediaQuery();
  const translate = useTranslate();

  // console.log(isMediumMobile, children);
  // console.log(Array.isArray(children));
  const secondToLast = getSecondToLast(children);

  return (
    <StyledBreadcrumbs
      aria-label="Breadcrumb"
      role="navigation"
      data-test={dataTest}
      spaceAfter={spaceAfter}
    >
      <StyledBreadcrumbsList itemScope itemType="http://schema.org/BreadcrumbList">
        {isMediumMobile ? (
          <>
            {onGoBack && <GoBackButton onClick={onGoBack} />}
            {React.Children.map(children, (item, key) => {
              if (React.isValidElement(item)) {
                return React.cloneElement(item, {
                  active: key === React.Children.count(children) - 1,
                  contentKey: key + 1,
                });
              }
            })}
          </>
        ) : (
          <ButtonLink
            iconLeft={<ChevronLeft />}
            type="secondary"
            size="normal"
            href={secondToLast.props.href}
          >
            {translate("breadcrumbs_back")}
          </ButtonLink>
        )}
      </StyledBreadcrumbsList>
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;

export { default as BreadcrumbsItem } from "./BreadcrumbsItem";
