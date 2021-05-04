import React from "react";
import {
  Box,
  Collapse,
  Grid,
  Heading,
  Hide,
  Stack,
  Text,
  ThemeProvider,
} from "@kiwicom/orbit-components";
import { MDXProvider } from "@mdx-js/react";
import { WindowLocation } from "@reach/router";

import defaultTheme from "../../theme";
import * as components from "../../mdx-components";
import { DevModeProvider } from "../../hooks/useDevMode";
import AddBookmark from "../AddBookmark";
import FancyLink from "../FancyLink";
import Guideline from "../Guidelines";
import GuidelinesSideBySide, { Do, Dont } from "../Guidelines/GuidelinesSideBySide";
import GuidelineImages, { DoImage, DontImage } from "../Guidelines/GuidelineImages";
import HeaderLink from "../HeaderLink";
import ImageContainer from "../ImageContainer";
import Navbar from "../Navbar";
import { BookmarkProvider } from "../../services/bookmarks";
import DocNavigation from "../DocNavigation";
import Breadcrumbs from "../Breadcrumbs";
import ComponentStatus from "../ComponentStatus";
import TableOfContents, { TocItemObject } from "../TableOfContents";
import Tabs, { TabObject } from "../Tabs";
import ReactExample from "../ReactExample";
import Footer from "../Footer";
import StyledWrapper from "./primitives/StyledWrapper";
import StyledMiddle from "./primitives/StyledMiddle";
import StyledMain from "./primitives/StyledMain";
import StyledMobileOutdent from "./primitives/StyledMobileOutdent";
import StyledTocWrapper from "./primitives/StyledTocWrapper";
import StyledProse from "./primitives/StyledProse";

interface Props {
  children: React.ReactNode;
  description?: string;
  headerLink?: string;
  location: WindowLocation;
  noElevation?: boolean;
  path: string;
  tableOfContents: TocItemObject[];
  tabs?: TabObject[];
  title?: string;
  trail?: Array<{
    name: string;
    url: string;
  }>;
}

export default function DocLayout({
  children,
  description,
  headerLink,
  location,
  noElevation,
  path,
  tableOfContents,
  tabs,
  title,
  trail,
}: Props) {
  const Toc = <TableOfContents items={tableOfContents} />;
  const tocHasItems = tableOfContents?.length > 0;
  const navigation = <DocNavigation currentUrl={path} />;
  return (
    <ThemeProvider theme={defaultTheme}>
      <DevModeProvider>
        <BookmarkProvider page={path} location={location}>
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
              <Stack
                flex
                direction="column"
                desktop={{ direction: "row", spacing: "large", align: "stretch" }}
              >
                {trail && (
                  <Hide block on={["smallMobile", "mediumMobile", "largeMobile", "tablet"]}>
                    <DocNavigation currentUrl={path} />
                    {navigation}
                  </Hide>
                )}
                <StyledMain>
                  {trail && <Breadcrumbs trail={trail} />}
                  <Box padding={{ bottom: "XLarge" }}>
                    <Stack inline align="center" spaceAfter="small">
                      <AddBookmark />
                      <Heading as="h1" type="display">
                        {title}
                      </Heading>
                    </Stack>
                    {description && (
                      <Box padding={{ left: "XXLarge" }}>
                        <Text>{description}</Text>
                      </Box>
                    )}
                  </Box>
                  <StyledMobileOutdent>
                    {(tabs || headerLink) && (
                      <Box
                        display="flex"
                        align="end"
                        justify="between"
                        tablet={{ maxWidth: "80%" }}
                      >
                        {tabs && <Tabs activeTab={location.pathname} tabs={tabs} />}
                        {headerLink && (
                          // align with tabs
                          <Box padding={{ bottom: "XXSmall" }}>
                            <HeaderLink href={headerLink} />
                          </Box>
                        )}
                      </Box>
                    )}
                    <Grid columns="1fr" tablet={{ columns: `${tocHasItems ? "80% 20%" : "100%"}` }}>
                      {tocHasItems && (
                        <StyledTocWrapper>
                          <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>{Toc}</Hide>
                        </StyledTocWrapper>
                      )}
                      <StyledProse
                        padding={
                          noElevation
                            ? { top: "none", bottom: "XLarge", left: "XLarge", right: "XLarge" }
                            : "XLarge"
                        }
                        elevation={noElevation ? undefined : "raised"}
                      >
                        {tocHasItems && (
                          <Hide on={["tablet", "desktop", "largeDesktop"]}>
                            <Collapse label="Table of contents">{Toc}</Collapse>
                          </Hide>
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
                            ReactExample,
                          }}
                        >
                          {children}
                        </MDXProvider>
                      </StyledProse>
                    </Grid>
                  </StyledMobileOutdent>
                </StyledMain>
              </Stack>
            </StyledMiddle>
            <Footer />
          </StyledWrapper>
        </BookmarkProvider>
      </DevModeProvider>
    </ThemeProvider>
  );
}
