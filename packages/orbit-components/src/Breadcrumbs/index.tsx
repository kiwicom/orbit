import * as React from "react";
import styled, { css } from "styled-components";

import Common from "../common/common";
import defaultTheme from "../defaultTheme";
import ChevronLeft from "../icons/ChevronLeft";
import getSpacingToken from "../common/getSpacingToken";
import useTranslate from "../hooks/useTranslate";
import { right } from "../utils/rtl";
import TextLink from "../TextLink";
import Hide from "../Hide";
import { Props } from "./index.d";
import { Props as BreadcrumbsItemProps } from "./BreadcrumbsItem/index.d";

const StyledBreadcrumbs = styled.nav<{ spaceAfter?: Common.SpaceAfterSizes }>`
  ${({ theme }) => css`
    font-family: ${theme.orbit.fontFamily};
    font-size: ${theme.orbit.fontSizeTextSmall};
    margin-bottom: ${getSpacingToken};
  `}
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
  ${({ theme }) => css`
    margin-${right}: ${theme.orbit.spaceSmall};
`};
`;

StyledBackButtonWrapper.defaultProps = {
  theme: defaultTheme,
};

const Breadcrumbs = (props: Props) => {
  const translate = useTranslate();
  const childEls = React.Children.toArray(
    props.children,
  ) as React.ReactElement<BreadcrumbsItemProps>[];

  const {
    children,
    dataTest,
    onGoBack,
    goBackTitle = translate("breadcrumbs_back"),
    spaceAfter,
    backHref,
    id,
  } = props;
  return (
    <>
      <Hide on={["smallMobile", "mediumMobile"]}>
        <StyledBreadcrumbs
          aria-label="Breadcrumb"
          id={id}
          data-test={dataTest}
          spaceAfter={spaceAfter}
        >
          <StyledBreadcrumbsList itemScope itemType="http://schema.org/BreadcrumbList">
            {React.Children.map(childEls, (item, key) => {
              if (React.isValidElement(item)) {
                return React.cloneElement<BreadcrumbsItemProps>(item, {
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
        {onGoBack || backHref ? (
          <TextLink
            standAlone
            type="secondary"
            id={id}
            iconLeft={<ChevronLeft reverseOnRtl />}
            dataTest="BreadcrumbsBack"
            onClick={onGoBack}
            href={backHref}
          >
            {goBackTitle}
          </TextLink>
        ) : null}
      </Hide>
    </>
  );
};

export default Breadcrumbs;

export { default as BreadcrumbsItem } from "./BreadcrumbsItem";
