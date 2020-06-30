// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import Button from "../Button";
import ChevronLeft from "../icons/ChevronLeft";
import getSpacingToken from "../common/getSpacingToken";
import useTranslate from "../hooks/useTranslate";
import { right } from "../utils/rtl";
import ButtonLink from "../ButtonLink";
import Hide from "../Hide";

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
  margin-${right}: ${({ theme }) => theme.orbit.spaceSmall};
`;

StyledBackButtonWrapper.defaultProps = {
  theme: defaultTheme,
};

const GoBackButton = ({ onClick }) => {
  const translate = useTranslate();
  return (
    <StyledBackButtonWrapper>
      <Button
        iconLeft={<ChevronLeft reverseOnRtl />}
        circled
        type="secondary"
        size="small"
        onClick={onClick}
        title={translate("breadcrumbs_back")}
      />
    </StyledBackButtonWrapper>
  );
};

const Breadcrumbs = (props: Props) => {
  const translate = useTranslate();
  const {
    children,
    dataTest,
    onGoBack,
    goBackTitle = translate("breadcrumbs_back"),
    spaceAfter,
  } = props;
  return (
    <>
      <Hide on={["smallMobile", "mediumMobile"]}>
        <StyledBreadcrumbs
          aria-label="Breadcrumb"
          role="navigation"
          data-test={dataTest}
          spaceAfter={spaceAfter}
        >
          <StyledBreadcrumbsList itemScope itemType="http://schema.org/BreadcrumbList">
            {onGoBack && <GoBackButton onClick={onGoBack} />}
            {React.Children.map(children, (item, key) => {
              if (React.isValidElement(item)) {
                return React.cloneElement(item, {
                  active: key === React.Children.count(children) - 1,
                  contentKey: key + 1,
                });
              }
              return null;
            })}
          </StyledBreadcrumbsList>
        </StyledBreadcrumbs>
      </Hide>
      <Hide on={["largeMobile", "tablet", "desktop", "largeDesktop"]}>
        <ButtonLink
          type="inline"
          compact
          iconLeft={<ChevronLeft reverseOnRtl />}
          dataTest="BreadcrumbsBack"
          onClick={onGoBack}
        >
          {goBackTitle}
        </ButtonLink>
      </Hide>
    </>
  );
};

export default Breadcrumbs;

export { default as BreadcrumbsItem } from "./BreadcrumbsItem";
