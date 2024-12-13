import React from "react";
import { Box, Heading, Stack, Text, ButtonLink, Hide } from "@kiwicom/orbit-components";

import Tabs from "../Tabs";
import { HeaderButtonLink } from "../HeaderLink";
import { AddBookmark } from "../Bookmarks";
import Prose from "./primitives/Prose";
import Description from "./primitives/Description";
import Wrapper from "./primitives/Wrapper";
import TopWrapper from "./primitives/TopWrapper";
import Breadcrumbs from "../Breadcrumbs";
import StorybookLogo from "../../images/storybook-logo.svg";

interface Props {
  custom?: boolean;
  title?: string;
  noElevation?: boolean;
  children?: React.ReactNode;
  tabs?: Array<{
    slug: string;
    title: string;
    tabCollection: string | null;
  }>;
  location: { pathname: string };
  tocHasItems?: boolean;
  hasHeaderLink?: boolean;
  headerLink?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  description?: string;
  hasStorybook?: boolean;
  storybookLink?: string;
}

const TopBar = ({
  custom,
  title,
  noElevation,
  children,
  tabs,
  location,
  tocHasItems,
  hasHeaderLink,
  headerLink,
  breadcrumbs,
  description,
  hasStorybook,
  storybookLink,
}: Props) => {
  const hasTabs = tabs && tabs.length > 0;
  const hasLowerLayer = hasTabs || hasHeaderLink || hasStorybook;

  return custom ? (
    <Prose
      padding={
        noElevation
          ? { top: "none", bottom: "800", left: "800", right: "800" }
          : { top: "800", bottom: "1000", left: "800", right: "800" }
      }
      elevation={noElevation ? undefined : "level3"}
    >
      {children}
    </Prose>
  ) : (
    <Wrapper>
      <Box
        padding={{
          top: "1000",
          left: "1000",
          right: "1000",
          bottom: hasLowerLayer ? "none" : "1000",
        }}
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs
            breadcrumbs={breadcrumbs.map(({ name, url }) => ({
              name,
              url,
            }))}
          />
        )}
        <Box padding={{ bottom: hasLowerLayer ? "medium" : "none" }}>
          <Stack inline align="center" spaceAfter="small">
            <AddBookmark title={title} description={description} />
            <div className="relative top-px">
              <Heading as="h1" type="title0">
                {title}
              </Heading>
            </div>
          </Stack>
          {description && (
            <Box padding={{ left: "1000" }}>
              <Text>
                <Description>{description}</Description>
              </Text>
            </Box>
          )}
        </Box>
        {hasLowerLayer && (
          <Box
            display="flex"
            align="end"
            justify={hasTabs ? "between" : "end"}
            tablet={{ maxWidth: tocHasItems ? "80%" : "100%" }}
          >
            <TopWrapper hasTabs={Boolean(tabs)}>
              {hasTabs && <Tabs activeTab={location.pathname} tabs={tabs} />}
              <Hide on={["smallMobile", "mediumMobile"]}>
                <Stack flex spacing="100">
                  {hasHeaderLink && headerLink && <HeaderButtonLink href={headerLink} />}
                  {hasStorybook && (storybookLink || title) && (
                    <ButtonLink
                      type="secondary"
                      size="large"
                      iconLeft={<StorybookLogo />}
                      external
                      href={`https://kiwicom.github.io/orbit/?path=/story/${
                        storybookLink ?? title?.toLowerCase() ?? ""
                      }`}
                    />
                  )}
                </Stack>
              </Hide>
            </TopWrapper>
          </Box>
        )}
      </Box>
    </Wrapper>
  );
};

export default TopBar;
