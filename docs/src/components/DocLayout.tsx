import React from "react";
import {
  Box,
  Collapse,
  Grid,
  Heading,
  Hide,
  mediaQueries,
  Stack,
  Text,
  ThemeProvider,
} from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { WindowLocation } from "@reach/router";

import defaultTheme from "../theme";
import * as components from "../mdx-components";
import AddBookmark from "./AddBookmark";
import FancyLink from "./FancyLink";
import Guideline from "./Guidelines";
import InlineToken from "./InlineToken";
import GuidelinesSideBySide, { Do, Dont } from "./Guidelines/GuidelinesSideBySide";
import GuidelineImages, { DoImage, DontImage } from "./Guidelines/GuidelineImages";
import HeaderLink from "./HeaderLink";
import ImageContainer from "./ImageContainer";
import Navbar from "./Navbar";
import { BookmarkProvider } from "../services/bookmarks";
import Breadcrumbs from "./Breadcrumbs";
import ComponentStatus from "./ComponentStatus";
import { StyledAnchorWrapper } from "./HeadingWithLink";
import TableOfContents, { TocItemObject } from "./TableOfContents";
import Tabs, { TabObject } from "./Tabs";
import ReactExample from "./ReactExample";
import Footer from "./Footer";
import { CONTENT_PADDING, MAX_CONTENT_WIDTH } from "../consts";

const StyledWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${CONTENT_PADDING};
  max-width: ${MAX_CONTENT_WIDTH};
  margin: 0 auto;
  box-sizing: content-box;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
`;

const ContentContainer = styled(Box)`
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  border-radius: ${({ theme }) => theme.orbit.spaceMedium};
  > * + * {
    margin-top: ${({ theme }) => theme.orbit.spaceSmall};
  }
  > h1 {
    margin-bottom: ${({ theme }) => theme.orbit.spaceLarge};
  }
  > ${StyledAnchorWrapper} {
    margin-top: ${({ theme }) => theme.orbit.spaceLarge};

    /* Handle spacing after headings through the heading,
       rather than the generic margin-top for all elements in the layout */
    + * {
      margin-top: 0;
    }
  }
  > div + h2:nth-child(2),
  h2:first-child {
    margin-top: 0;
  }
  margin-top: 0;
`;

const TocWrapper = styled.div`
  ${mediaQueries.tablet(css`
    order: 2;
  `)}

  padding-left: ${({ theme }) => theme.orbit.spaceSmall};
  > * {
    position: sticky;
    top: 0;
    transition: top ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
  }
`;

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
}: Props) {
  const Toc = <TableOfContents items={tableOfContents} />;
  const tocHasItems = tableOfContents?.length > 0;
  return (
    <ThemeProvider theme={defaultTheme}>
      <BookmarkProvider page={path} location={location}>
        <StyledWrapper>
          <Navbar location={location} />
          <StyledMain>
            <Breadcrumbs location={location} />
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
            {(tabs || headerLink) && (
              <Box display="flex" justify="between" tablet={{ maxWidth: "80%" }}>
                {tabs && <Tabs activeTab={location.pathname} tabs={tabs} />}
                {headerLink && <HeaderLink href={headerLink} />}
              </Box>
            )}
            <Grid columns="1fr" tablet={{ columns: `${tocHasItems ? "80% 20%" : "100%"}` }}>
              {tocHasItems && (
                <TocWrapper>
                  <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>{Toc}</Hide>
                </TocWrapper>
              )}
              <ContentContainer
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
                    InlineToken,
                    Stack,
                  }}
                >
                  {children}
                </MDXProvider>
              </ContentContainer>
            </Grid>
          </StyledMain>
          <Footer />
        </StyledWrapper>
      </BookmarkProvider>
    </ThemeProvider>
  );
}
