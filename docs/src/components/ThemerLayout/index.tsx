import React from "react";
import { css } from "styled-components";
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
import ImageContainer from "../ImageContainer";
import Navbar from "../Navbar";
import { BookmarkProvider } from "../../services/bookmarks";
import DocNavigation from "../DocNavigation";
import { ComponentStatus } from "../ComponentStatus";
import ComponentStructure from "../ComponentStructure";
import ReactExample from "../ReactExample";
import FigmaIframe from "../FigmaIframe";
import Footer from "../Footer";
import StyledWrapper from "../DocLayout/primitives/StyledWrapper";
import StyledMiddle from "../DocLayout/primitives/StyledMiddle";
import StyledMain from "../DocLayout/primitives/StyledMain";
import StyledMobileOutdent from "../DocLayout/primitives/StyledMobileOutdent";
import StyledProse from "../DocLayout/primitives/StyledProse";
import TopBar from "../DocLayout/TopBar";
import { getDocumentPageTitle } from "../../utils/document";

interface Props {
  children: React.ReactNode;
  description?: string;
  location: WindowLocation;
  noElevation?: boolean;
  path: string;
  title?: string;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

// Simplified version of DocLayout, using some of its primitives
export default function ThemerLayout({
  children,
  description,
  location,
  noElevation,
  path,
  title,
  breadcrumbs = title ? [{ name: title, url: path }] : undefined,
}: Props) {
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
              width: 100%;
              max-width: 90rem;
            `}
          >
            <StyledMiddle>
              <TopBar
                breadcrumbs={breadcrumbs}
                location={location}
                description={description}
                noElevation={noElevation}
                title={title}
                hasHeaderLink={false}
                tocHasItems={false}
                custom={false}
                hasStorybook={false}
                headerLink={null}
                tabs={null}
                storybookLink={null}
              >
                {children}
              </TopBar>
              <StyledMain>
                <StyledMobileOutdent>
                  <StyledProse padding={{ top: "none", bottom: "XLarge" }}>
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
