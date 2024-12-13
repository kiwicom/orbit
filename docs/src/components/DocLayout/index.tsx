import React from "react";
import { Collapse, Grid, Hide } from "@kiwicom/orbit-components";
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
import Container from "../Container";
import FigmaIframe from "../FigmaIframe";
import Footer from "../Footer";
import Wrapper from "./primitives/Wrapper";
import Main from "./primitives/Main";
import Middle from "./primitives/Middle";
import MobileOutdent from "./primitives/MobileOutdent";
import DocNavigationWidth from "./primitives/DocNavigationWidth";
import DocNavigationWrapper from "./primitives/DocNavigationWrapper";
import TocWrapper from "./primitives/TocWrapper";
import Prose from "./primitives/Prose";
import MobileTocWrapper from "./primitives/MobileTocWrapper";
import { getDocumentPageTitle } from "../../utils/document";
import TopBar from "./TopBar";

interface InnerWrapperProps {
  children: React.ReactNode;
}

const InnerWrapper = ({ children }: InnerWrapperProps) => (
  <div className="largeDesktop:px-8 mx-auto box-border flex w-full max-w-[90rem]">{children}</div>
);

interface Props {
  children: React.ReactNode;
  description?: string;
  hasHeaderLink?: boolean;
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
  noTopBar?: boolean;
  hasStorybook?: boolean;
  storybookLink?: string;
}

export default function DocLayout({
  children,
  description,
  hasHeaderLink,
  headerLink,
  location,
  noElevation,
  path,
  tabs,
  title,
  breadcrumbs = title ? [{ name: title, url: path }] : undefined,
  custom,
  noTopBar,
  hasStorybook,
  storybookLink,
}: Props) {
  const { tableOfContents } = useTableOfContents();
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
        <Wrapper>
          <Navbar
            location={location}
            docNavigation={
              <DocNavigation
                currentUrl={path}
                onCollapse={() => {
                  setTimeout(() => {
                    window.dispatchEvent(new Event("resize"));
                  }, 70);
                }}
              />
            }
          />
          <InnerWrapper>
            <Hide on={["smallMobile", "mediumMobile", "largeMobile", "tablet", "desktop"]}>
              <DocNavigationWidth>
                <DocNavigationWrapper>
                  <DocNavigation currentUrl={path} />
                </DocNavigationWrapper>
              </DocNavigationWidth>
            </Hide>
            <Middle>
              {!noTopBar && (
                <TopBar
                  breadcrumbs={breadcrumbs}
                  hasHeaderLink={hasHeaderLink}
                  headerLink={headerLink}
                  tocHasItems={tocHasItems}
                  tabs={tabs}
                  location={location}
                  description={description}
                  custom={custom}
                  noElevation={noElevation}
                  title={title}
                  hasStorybook={hasStorybook}
                  storybookLink={storybookLink}
                >
                  {children}
                </TopBar>
              )}
              <Main>
                <MobileOutdent>
                  <Grid columns="100%" tablet={{ columns: `${tocHasItems ? "80% 20%" : "100%"}` }}>
                    {tocHasItems && (
                      <TocWrapper>
                        <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>
                          <TableOfContents />
                        </Hide>
                      </TocWrapper>
                    )}
                    <Prose
                      padding={
                        noElevation
                          ? { top: "none", bottom: "800", left: "800", right: "800" }
                          : {
                              top: "1000",
                              bottom: "1000",
                              left: "800",
                              right: "800",
                            }
                      }
                    >
                      {headerLink && (
                        <Hide on={["largeMobile", "tablet", "desktop", "largeDesktop"]}>
                          <HeaderButton href={headerLink} />
                        </Hide>
                      )}
                      {tocHasItems && (
                        <MobileTocWrapper>
                          <Hide on={["tablet", "desktop", "largeDesktop"]}>
                            <Collapse label="Table of contents">
                              <TableOfContents />
                            </Collapse>
                          </Hide>
                        </MobileTocWrapper>
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
                          Container,
                          FigmaIframe,
                        }}
                      >
                        {children}
                      </MDXProvider>
                    </Prose>
                  </Grid>
                </MobileOutdent>
              </Main>
            </Middle>
          </InnerWrapper>
          <Footer />
        </Wrapper>
      </BookmarkProvider>
    </>
  );
}
