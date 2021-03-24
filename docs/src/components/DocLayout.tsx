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
import GuidelinesSideBySide, { Do, Dont } from "./Guidelines/GuidelinesSideBySide";
import GuidelineImages, { DoImage, DontImage } from "./Guidelines/GuidelineImages";
import Navbar from "./Navbar";
import { BookmarkProvider } from "../services/bookmarks";
import Breadcrumbs from "./Breadcrumbs";
import ComponentStatus from "./ComponentStatus";
import { StyledAnchorWrapper } from "./HeadingWithLink";
import TableOfContents, { TocItemObject } from "./TableOfContents";
import Tabs, { TabObject } from "./Tabs";
import ReactExample from "./ReactExample";

const StyledWrapper = styled.div`
  display: grid;
  position: relative;
  overflow: hidden;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 2rem;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
`;

const StyledFooter = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  location: WindowLocation;
  path: string;
  title?: string;
  description?: string;
  tableOfContents: TocItemObject[];
  tabs: TabObject[];
}

export default function DocLayout({
  children,
  description,
  location,
  path,
  tableOfContents,
  tabs,
  title,
}: Props) {
  const Toc = <TableOfContents items={tableOfContents} />;
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
            {tabs && <Tabs activeTab={location.pathname} tabs={tabs} />}
            <Grid columns="1fr" tablet={{ columns: "80% 20%" }}>
              {typeof Toc !== "undefined" && (
                <TocWrapper>
                  <Hide on={["smallMobile", "mediumMobile", "largeMobile"]}>{Toc}</Hide>
                </TocWrapper>
              )}
              <ContentContainer padding="XLarge" elevation="raised">
                {typeof Toc !== "undefined" && (
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
                  }}
                >
                  {children}
                </MDXProvider>
              </ContentContainer>
            </Grid>
          </StyledMain>
          <StyledFooter />
        </StyledWrapper>
      </BookmarkProvider>
    </ThemeProvider>
  );
}
