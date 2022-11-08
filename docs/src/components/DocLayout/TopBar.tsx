import React from "react";
import { Box, Heading, Stack, Text, ButtonLink, Hide } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

import Tabs, { getTabShadowReachLeft } from "../Tabs";
import { HeaderButtonLink } from "../HeaderLink";
import { AddBookmark } from "../Bookmarks";
import StyledProse from "./primitives/StyledProse";
import Breadcrumbs from "../Breadcrumbs";
import StorybookLogo from "../../images/storybook-logo.svg";

const StyledDescription = styled.span`
  display: flex;
  line-height: 22px;
`;

const StyledWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${`linear-gradient(
      85.39deg,
      ${theme.orbit.paletteWhiteHover} 3.73%,
      ${theme.orbit.paletteCloudLight} 53.77%
    )`};
    width: 100%;
  `};
`;

const StyledTopWrapper = styled.div<{ $hasTabs: boolean }>`
  ${({ theme, $hasTabs }) => css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: end;
    ${$hasTabs &&
    // maintain alignment of tabs with the content
    css`
      padding-left: calc(${theme.orbit.spaceXLarge} - ${getTabShadowReachLeft});
    `};
  `}
`;

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
}) => {
  const hasTabs = tabs && tabs.length > 1;
  const hasLowerLayer = hasTabs || hasHeaderLink || hasStorybook;

  return custom ? (
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
    <StyledWrapper>
      <Box
        padding={{
          top: "XXLarge",
          left: "XXLarge",
          right: "XXLarge",
          bottom: hasLowerLayer ? "none" : "XXLarge",
        }}
      >
        {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
        <Box padding={{ bottom: hasLowerLayer ? "medium" : "none" }}>
          <Stack inline align="center" spaceAfter="small">
            <AddBookmark title={title} description={description} />
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
        {hasLowerLayer && (
          <Box
            display="flex"
            align="end"
            justify={hasTabs ? "between" : "end"}
            tablet={{ maxWidth: tocHasItems ? "80%" : "100%" }}
          >
            <StyledTopWrapper $hasTabs={Boolean(tabs)}>
              {hasTabs && <Tabs activeTab={location.pathname} tabs={tabs} />}
              <Hide on={["smallMobile", "mediumMobile"]}>
                <Stack flex spacing="XXSmall">
                  {hasHeaderLink && headerLink && <HeaderButtonLink href={headerLink} />}
                  {hasStorybook && (storybookLink || title) && (
                    <ButtonLink
                      type="secondary"
                      size="large"
                      iconLeft={<StorybookLogo />}
                      external
                      href={`https://kiwicom.github.io/orbit/?path=/story/${
                        storybookLink ?? title.toLowerCase()
                      }`}
                    />
                  )}
                </Stack>
              </Hide>
            </StyledTopWrapper>
          </Box>
        )}
      </Box>
    </StyledWrapper>
  );
};

export default TopBar;
