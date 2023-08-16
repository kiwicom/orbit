"use client";

import * as React from "react";
import styled, { css } from "styled-components";

import type * as Common from "../common/types";
import defaultTheme from "../defaultTheme";
import ChevronBackward from "../icons/ChevronBackward";
import getSpacingToken from "../common/getSpacingToken";
import { right } from "../utils/rtl";
import TextLink from "../TextLink";
import Hide from "../Hide";
import type { Props } from "./types";
import type { Props as BreadcrumbsItemProps } from "./BreadcrumbsItem/types";

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
  const childEls = React.Children.toArray(
    props.children,
  ) as React.ReactElement<BreadcrumbsItemProps>[];

  const { children, dataTest, onGoBack, goBackTitle = "Back", spaceAfter, backHref, id } = props;
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
            iconLeft={<ChevronBackward reverseOnRtl />}
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
