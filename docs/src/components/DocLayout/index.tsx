import React from "react";
import { css } from "styled-components";
import { Collapse, Grid, Hide, Stack } from "@kiwicom/orbit-components";
import { MDXProvider } from "@mdx-js/react";
import { WindowLocation } from "@reach/router";

import * as components from "../../mdx-components";
import Head from "../Head";
import BaseStyles from "../BaseStyles";
import FancyLink from "../FancyLink";
import Guideline from "../Guidelines";
import InlineToken from "../InlineToken";
import Usage, { UsageUse, UsageDontUse } from "../Usage";
import GuidelinesSideBySide, { Do, Dont } from "../Guidelines/GuidelinesSideBySide";
import GuidelineImages, { DoImage, DontImage } from "../Guidelines/GuidelineImages";
import { HeaderButton } from "../HeaderLink";
import ImageContainer from "../ImageContainer";
import Navbar from "../Navbar";
import { BookmarkProvider } from "../../services/bookmarks";
import DocNavigation from "../DocNavigation";
import { ComponentStatus } from "../ComponentStatus";
import ComponentStructure from "../ComponentStructure";
import TableOfContents from "../TableOfContents";
import { useTableOfContents } from "../../services/table-of-contents";
import { TabObject } from "../Tabs";
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
import TopBar from "./TopBar";

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
          <div
            css={css`
              display: flex;
              margin: 0 auto;
              max-width: 80rem;
            `}
          >
            <Hide on={["smallMobile", "mediumMobile", "largeMobile", "tablet", "desktop"]}>
              <StyledDocNavigationWidth hasOutdent={tabs && tabs.length > 0}>
                <StyledDocNavigationWrapper>
                  <DocNavigation currentUrl={path} />
                </StyledDocNavigationWrapper>
              </StyledDocNavigationWidth>
            </Hide>
            <StyledMiddle hasBorder={tabs && tabs.length > 0}>
              <TopBar
                breadcrumbs={breadcrumbs}
                headerLink={headerLink}
                tocHasItems={tocHasItems}
                tabs={tabs}
                location={location}
                description={description}
                custom={custom}
                noElevation={noElevation}
                title={title}
              >
                {children}
              </TopBar>
              <StyledMain>
                <StyledMobileOutdent>
                  <Grid columns="100%" tablet={{ columns: `${tocHasItems ? "80% 20%" : "100%"}` }}>
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
              </StyledMain>
            </StyledMiddle>
          </div>
          <Footer />
        </StyledWrapper>
      </BookmarkProvider>
    </>
  );
}
