import React from "react";
import { Box, Collapse, Grid, Heading, Hide, Stack, Text } from "@kiwicom/orbit-components";
import { MDXProvider } from "@mdx-js/react";
import { WindowLocation } from "@reach/router";
import styled, { css } from "styled-components";

import * as components from "../../mdx-components";
import Head from "../Head";
import BaseStyles from "../BaseStyles";
import AddBookmark from "../AddBookmark";
import FancyLink from "../FancyLink";
import Guideline from "../Guidelines";
import InlineToken from "../InlineToken";
import GuidelinesSideBySide, { Do, Dont } from "../Guidelines/GuidelinesSideBySide";
import GuidelineImages, { DoImage, DontImage } from "../Guidelines/GuidelineImages";
import { HeaderButton, HeaderButtonLink } from "../HeaderLink";
import ImageContainer from "../ImageContainer";
import Navbar from "../Navbar";
import { BookmarkProvider } from "../../services/bookmarks";
import DocNavigation from "../DocNavigation";
import Breadcrumbs from "../Breadcrumbs";
import ComponentStatus from "../ComponentStatus";
import TableOfContents from "../TableOfContents";
import { useTableOfContents } from "../../services/table-of-contents";
import Tabs, { TabObject } from "../Tabs";
import ReactExample from "../ReactExample";
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

const StyledDescription = styled.span`
  line-height: 22px;
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
  trail?: Array<{
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
  trail,
  custom,
}: Props) {
  const tableOfContents = useTableOfContents();
  const tocHasItems = tableOfContents.length > 0;
  return (
    <>
      <Head
        title={title ? getDocumentPageTitle(title, trail ? trail.map(t => t.name) : []) : "Orbit"}
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
            <Hide block on={["smallMobile", "mediumMobile", "largeMobile", "tablet", "desktop"]}>
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
                  {trail && <Breadcrumbs trail={trail} />}
                  <Box padding={{ bottom: "medium" }}>
                    <Stack inline align="center" spaceAfter="small">
                      <AddBookmark />
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
                  <StyledMobileOutdent>
                    {(tabs || headerLink) && (
                      <Box
                        display="flex"
                        align="end"
                        justify={tabs && tabs.length > 0 ? "between" : "end"}
                        tablet={{ maxWidth: tocHasItems ? "80%" : "100%" }}
                      >
                        {tabs && <Tabs activeTab={location.pathname} tabs={tabs} />}
                        {headerLink && (
                          <Hide on={["smallMobile", "mediumMobile"]}>
                            <HeaderButtonLink href={headerLink} />
                          </Hide>
                        )}
                      </Box>
                    )}
                    <Grid columns="1fr" tablet={{ columns: `${tocHasItems ? "80% 20%" : "100%"}` }}>
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
                            FancyLink,
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
          <Footer hasGradient={!noElevation} />
        </StyledWrapper>
      </BookmarkProvider>
    </>
  );
}
