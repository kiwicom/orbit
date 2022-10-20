import React from "react";
import {
  Box,
  Collapse,
  Grid,
  Heading,
  Hide,
  Stack,
  Text,
  ButtonLink,
} from "@kiwicom/orbit-components";
import { MDXProvider } from "@mdx-js/react";
import { WindowLocation } from "@reach/router";
import styled, { css } from "styled-components";

import * as components from "../../mdx-components";
import Head from "../Head";
import BaseStyles from "../BaseStyles";
import { AddBookmark } from "../Bookmarks";
import FancyLink from "../FancyLink";
import Guideline from "../Guidelines";
import InlineToken from "../InlineToken";
import Usage, { UsageUse, UsageDontUse } from "../Usage";
import GuidelinesSideBySide, { Do, Dont } from "../Guidelines/GuidelinesSideBySide";
import GuidelineImages, { DoImage, DontImage } from "../Guidelines/GuidelineImages";
import { HeaderButton, HeaderButtonLink } from "../HeaderLink";
import ImageContainer from "../ImageContainer";
import Navbar from "../Navbar";
import { BookmarkProvider } from "../../services/bookmarks";
import DocNavigation from "../DocNavigation";
import Breadcrumbs from "../Breadcrumbs";
import { ComponentStatus } from "../ComponentStatus";
import ComponentStructure from "../ComponentStructure";
import TableOfContents from "../TableOfContents";
import { useTableOfContents } from "../../services/table-of-contents";
import Tabs, { TabObject, getTabShadowReachLeft } from "../Tabs";
import ReactExample from "../ReactExample";
import FigmaIframe from "../FigmaIframe";
import Footer from "../Footer";
import StyledWrapper from "./primitives/StyledWrapper";
import StyledMiddle from "./primitives/StyledMiddle";
import StyledMain from "./primitives/StyledMain";
import StyledMobileOutdent from "./primitives/StyledMobileOutdent";
import StyledDocNavigationWidth from "./primitives/StyledDocNavigationWidth";
import StyledDocNavigationWrapper from "./primitives/StyledDocNavigationWrapper";
import StyledTocWrapper from "./primitives/StyledTocWrapper";
import StyledProse from "./primitives/StyledProse";
import StyledMobileTocWrapper from "./primitives/StyledMobileTocWrapper";
import { getDocumentPageTitle } from "../../utils/document";
import StorybookLogo from "../../images/storybook-logo.svg";

const StyledDescription = styled.span`
  display: flex;
  line-height: 22px;
`;

const StyledTopWrapper = styled.div<{ $hasTabs: boolean }>`
  ${({ theme, $hasTabs }) => css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: end;
    padding: 0 ${theme.orbit.spaceXLarge};
    ${$hasTabs &&
    // maintain alignment of tabs with the content
    css`
      padding-left: calc(${theme.orbit.spaceXLarge} - ${getTabShadowReachLeft});
    `};
  `}
`;

const StyledGrayBg = styled.div`
  position: relative;
  margin-right: -2rem;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    z-index: -1;
    height: 238px;
    width: 100%;
    background: linear-gradient(85.39deg, #f1f4f7 3.73%, #f5f7f9 53.77%);
  }
`;

interface Props {
  children: React.ReactNode;
  description?: string;
  headerLink?: string;
  location: WindowLocation;
  noElevation?: boolean;
  path: string;
  tabs?: TabObject[];
  title?: string;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  custom?: boolean;
}

export default function DocLayout({
  children,
  description,
  headerLink,
  location,
  noElevation,
  path,
  tabs,
  title,
  breadcrumbs = title ? [{ name: title, url: path }] : undefined,
  custom,
}: Props) {
  const [tableOfContents] = useTableOfContents();
  const tocHasItems = tableOfContents.length > 0;

  return (
    <>
      <Head
        title={
          title
            ? getDocumentPageTitle(title, breadcrumbs ? breadcrumbs.map(t => t.name) : [])
            : "Orbit"
        }
        hasSiteName={Boolean(title)}
        description={description}
        path={path}
      />
      <BookmarkProvider page={path} location={location}>
        <BaseStyles />
        <StyledWrapper>
          <Navbar
            location={location}
            docNavigation={
              <DocNavigation
                currentUrl={path}
                onCollapse={() => {
                  // hack for when collapsing an overflowing DocNavigationItem in Modal
                  // causes the fixed ModalFooter to be stuck at the bottom of the screen
                  setTimeout(() => {
                    // causing Modal to reposition ModalFooter
                    window.dispatchEvent(new Event("resize"));
                  }, 70); // not sure why, but this delay is necessary (the exact threshold is 62)
                }}
              />
            }
          />
          <StyledMiddle>
            <Hide on={["smallMobile", "mediumMobile", "largeMobile", "tablet", "desktop"]}>
              <StyledDocNavigationWidth>
                <StyledDocNavigationWrapper>
                  <DocNavigation currentUrl={path} />
                </StyledDocNavigationWrapper>
              </StyledDocNavigationWidth>
            </Hide>
            <StyledMain>
              {custom ? (
                <StyledProse
                  padding={
                    noElevation
                      ? { top: "none", bottom: "XLarge", left: "XLarge", right: "XLarge" }
                      : { top: "XLarge", bottom: "XXLarge", left: "XLarge", right: "XLarge" }
                  }
                  elevation={noElevation ? undefined : "raised"}
                >
                  {children}
                </StyledProse>
              ) : (
                <>
                  <Box background="cloudLight" padding="XXLarge" width="100%">
                    {/* <StyledGrayBg /> */}
                    {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
                    <Box padding={{ bottom: "medium" }}>
                      <Stack inline align="center" spaceAfter="small">
                        <AddBookmark title={title} description={description} />
                        <div
                          css={css`
                            /* align with the bookmark icon */
                            position: relative;
                            top: 1px;
                          `}
                        >
                          <Heading as="h1" type="title1">
                            {title}
                          </Heading>
                        </div>
                      </Stack>
                      {description && (
                        <Box padding={{ left: "XXLarge" }}>
                          <Text>
                            <StyledDescription>{description}</StyledDescription>
                          </Text>
                        </Box>
                      )}
                    </Box>
                    {(tabs || headerLink) && (
                      <Box
                        display="flex"
                        align="end"
                        justify={tabs && tabs.length > 0 ? "between" : "end"}
                        tablet={{ maxWidth: tocHasItems ? "80%" : "100%" }}
                      >
                        <StyledTopWrapper $hasTabs={Boolean(tabs)}>
                          {tabs && <Tabs activeTab={location.pathname} tabs={tabs} />}
                          {headerLink && (
                            <Hide on={["smallMobile", "mediumMobile"]}>
                              <Stack flex spacing="XXSmall">
                                <HeaderButtonLink href={headerLink} />
                                {title && (
                                  <ButtonLink
                                    type="secondary"
                                    iconRight={<StorybookLogo />}
                                    external
                                    href={`https://kiwicom.github.io/orbit/?path=/story/${title.toLowerCase()}`}
                                  >
                                    Storybook
                                  </ButtonLink>
                                )}
                              </Stack>
                            </Hide>
                          )}
                        </StyledTopWrapper>
                      </Box>
                    )}
                  </Box>
                  <StyledMobileOutdent>
                    <Grid
                      columns="100%"
                      tablet={{ columns: `${tocHasItems ? "80% 20%" : "100%"}` }}
                    >
                      {tocHasItems && (
                        <StyledTocWrapper>
                          <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>
                            <TableOfContents />
                          </Hide>
                        </StyledTocWrapper>
                      )}
                      <StyledProse
                        padding={
                          noElevation
                            ? { top: "none", bottom: "XLarge", left: "XLarge", right: "XLarge" }
                            : {
                                top: "XLarge",
                                bottom: "XXLarge",
                                left: "XLarge",
                                right: "XLarge",
                              }
                        }
                        elevation={noElevation ? undefined : "raised"}
                      >
                        {headerLink && (
                          <Hide on={["largeMobile", "tablet", "desktop", "largeDesktop"]}>
                            <HeaderButton href={headerLink} />
                          </Hide>
                        )}
                        {tocHasItems && (
                          <StyledMobileTocWrapper>
                            <Hide on={["tablet", "desktop", "largeDesktop"]}>
                              <Collapse label="Table of contents">
                                <TableOfContents />
                              </Collapse>
                            </Hide>
                          </StyledMobileTocWrapper>
                        )}
                        <MDXProvider
                          components={{
                            ...components,
                            ComponentStatus,
                            ComponentStructure,
                            FancyLink,
                            Usage,
                            UsageUse,
                            UsageDontUse,
                            Guideline,
                            GuidelineImages,
                            DoImage,
                            DontImage,
                            GuidelinesSideBySide,
                            Do,
                            Dont,
                            ImageContainer,
                            InlineToken,
                            ReactExample,
                            FigmaIframe,
                          }}
                        >
                          {children}
                        </MDXProvider>
                      </StyledProse>
                    </Grid>
                  </StyledMobileOutdent>
                </>
              )}
            </StyledMain>
          </StyledMiddle>
          <Footer />
        </StyledWrapper>
      </BookmarkProvider>
    </>
  );
}
