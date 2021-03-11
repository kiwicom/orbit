import React from "react";
import { Box, Heading, Stack, Text, ThemeProvider } from "@kiwicom/orbit-components";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { WindowLocation } from "@reach/router";

import defaultTheme from "../theme";
import Prose from "./Prose";
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
import Tabs, { TabObject } from "./Tabs";

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
`;

const StyledFooter = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ContentContainer = styled(Box)`
  border-radius: ${({ theme }) => theme.orbit.spaceMedium};
  > * + * {
    margin-top: ${({ theme }) => theme.orbit.spaceSmall};
  }
  > h1 {
    margin-bottom: ${({ theme }) => theme.orbit.spaceLarge};
  }
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    margin-top: ${({ theme }) => theme.orbit.spaceLarge};
  }
  > div + h2:nth-child(2),
  h2:first-child {
    margin-top: 0;
  }
  margin-top: 0;
`;

interface Props {
  children: React.ReactNode;
  location: WindowLocation;
  path: string;
  title?: string;
  description?: string;
  tabs: TabObject[];
}

export default function DocLayout({ children, description, location, path, tabs, title }: Props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BookmarkProvider page={path} location={location}>
        <StyledWrapper>
          <Navbar location={location} />
          <StyledMain>
            <Breadcrumbs location={location} />
            <Prose>
              <Box padding={{ bottom: "XLarge" }}>
                <Stack inline align="center" spaceAfter="small">
                  <AddBookmark />
                  <Heading as="h1" type="display">
                    {title}
                  </Heading>
                </Stack>
                {description && (
                  <Box padding={{ left: "XXLarge" }}>
                    {" "}
                    <Text>{description}</Text>
                  </Box>
                )}
              </Box>
              {tabs && <Tabs location={location.pathname} tabs={tabs} />}
              <ContentContainer padding="XLarge" elevation="raised">
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
            </Prose>
          </StyledMain>
          <StyledFooter />
        </StyledWrapper>
      </BookmarkProvider>
    </ThemeProvider>
  );
}
