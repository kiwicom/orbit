import React from "react";
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
import Wrapper from "../DocLayout/primitives/Wrapper";
import Middle from "../DocLayout/primitives/Middle";
import Main from "../DocLayout/primitives/Main";
import MobileOutdent from "../DocLayout/primitives/MobileOutdent";
import Prose from "../DocLayout/primitives/Prose";
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
        <Wrapper>
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
          <div className="mx-auto flex w-full max-w-[90rem]">
            <Middle>
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
                headerLink={undefined}
                tabs={undefined}
                storybookLink={undefined}
              >
                {children}
              </TopBar>
              <Main>
                <MobileOutdent>
                  <Prose padding={{ top: "none", bottom: "800" }}>
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
                  </Prose>
                </MobileOutdent>
              </Main>
            </Middle>
          </div>
          <Footer />
        </Wrapper>
      </BookmarkProvider>
    </>
  );
}
