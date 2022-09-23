import React from "react";
import styled, { css } from "styled-components";
import { Grid, Text, useRandomIdSeed, mediaQueries as mq } from "@kiwicom/orbit-components";
import KEY_CODE from "@kiwicom/orbit-components/lib/common/keyMaps";

import { StyledAnchor } from "../HeadingWithLink";
import docsTheme from "../../theme";

// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
// https://dev.to/eevajonnapanula/keyboard-accessible-tabs-with-react-5ch4

const StyledContainer = styled.div`
  ${({ theme }) => css`
    ${StyledAnchor} + & {
      margin-top: ${theme.orbit.spaceXSmall} !important;
    }
    & + ${StyledAnchor} {
      margin-top: ${theme.orbit.spaceXLarge} !important;
    }
  `}
`;
StyledContainer.defaultProps = { theme: docsTheme };

const StyledTabList = styled.div`
  display: flex;
  gap: 4px;
  padding: 0 20px;
`;

const StyledTab = styled.button<{ active: boolean }>`
  ${({ theme, active }) => css`
    padding: 14px ${theme.orbit.spaceMedium};
    margin-bottom: -1px;
    border-top-left-radius: ${theme.orbit.borderRadiusLarge};
    border-top-right-radius: ${theme.orbit.borderRadiusLarge};
    border: 1px solid transparent;
    border-bottom: none;
    ${active &&
    css`
      background: ${theme.orbit.paletteWhite};
      border-color: ${theme.orbit.paletteCloudNormal};
    `};
  `};
`;
StyledTab.defaultProps = { theme: docsTheme };

const StyledPanel = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.orbit.paletteCloudNormal};
    border-radius: ${theme.orbit.borderRadiusLarge};
  `};
`;
StyledPanel.defaultProps = { theme: docsTheme };

const StyledImageContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    place-content: center;
    padding: ${theme.orbit.spaceXXLarge};
  `};
`;
StyledImageContainer.defaultProps = { theme: docsTheme };

const StyledComponentParts = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-content: center;
    padding: ${theme.orbit.spaceXLarge};
    border-top: 1px solid ${theme.orbit.paletteCloudNormal};

    ${mq.largeDesktop(css`
      border-top: 0;
      border-left: 1px solid ${theme.orbit.paletteCloudNormal};
    `)};

    ol {
      list-style: none;
      counter-reset: component-parts;
      display: flex;
      flex-direction: column;
      gap: ${theme.orbit.spaceXSmall};

      li {
        counter-increment: component-parts;
        display: flex;
        gap: ${theme.orbit.spaceSmall};

        &::before {
          flex-shrink: 0;
          content: counter(component-parts);
          display: grid;
          place-content: center;
          width: 24px;
          height: 24px;
          background: #ec5192;
          border-radius: 100%;
          color: ${theme.orbit.paletteWhite};
          font-size: ${theme.orbit.fontSizeTextSmall};
          font-weight: bold;
        }

        > :first-child {
          margin-top: 4px;
        }
      }
    }
  `}
`;
StyledComponentParts.defaultProps = { theme: docsTheme };

const StyledDescription = styled.span`
  font-size: 12px;
`;

interface Structure {
  Image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  imageWidth: number;
  parts: Array<{
    name: string;
    description: string;
  }>;
}

interface Props {
  component: string;
  web?: Structure;
  ios?: Structure;
  android?: Structure;
}

export default function ComponentStructure({ component, web, ios, android }: Props) {
  const seed = useRandomIdSeed();

  const tabsCount = (web ? 1 : 0) + (ios ? 1 : 0) + (android ? 1 : 0);
  const [focusedTab, setFocusedTab] = React.useState<number | null>(null);
  const focusedTabRef = React.useRef<HTMLButtonElement | null>(null);
  const [activeTab, setActiveTab] = React.useState<number>(0);

  const pairs: Array<[string, Structure]> = [
    web && ["Web", web],
    ios && ["iOS", ios],
    android && ["Android", android],
  ].filter(Boolean);

  const items = pairs
    .filter(([, structure]) => structure)
    .map(([platform, { Image, imageWidth, parts }], index) => {
      const tabId = seed(`${platform}-tab`);
      const panelId = seed(`${platform}-panel`);
      const isActive = activeTab === index;
      const isFocused = focusedTab === index;

      const tab = (
        <StyledTab
          key={`tab-${platform}`}
          ref={isFocused ? focusedTabRef : null}
          active={isActive}
          type="button"
          role="tab"
          aria-selected={isActive}
          aria-controls={panelId}
          id={tabId}
          tabIndex={isFocused || (isActive && focusedTab === null) ? 0 : -1}
          onClick={() => setActiveTab(index)}
          onFocus={() => setFocusedTab(index)}
        >
          {platform}
        </StyledTab>
      );

      const panel = (
        <StyledPanel
          key={`panel-${platform}`}
          {...(tabsCount > 1
            ? {
                id: panelId,
                role: "tabpanel",
                // if it's not focusable, screen readers might miss it
                tabIndex: 0,
                "aria-labelledby": tabId,
                hidden: !isActive,
              }
            : {})}
        >
          <Grid largeMobile={{ columns: "repeat(2, 1fr)" }}>
            <StyledImageContainer>
              <Image
                role="img"
                aria-label={`${component} component structure for ${platform}`}
                style={{ width: imageWidth }}
              />
            </StyledImageContainer>
            <StyledComponentParts>
              <ol>
                {parts.map(part => (
                  <li key={`part-${part.name}`}>
                    <div>
                      <Text as="div" size="small" weight="bold">
                        {part.name}
                      </Text>
                      <Text as="p" size="small">
                        <StyledDescription>{part.description}</StyledDescription>
                      </Text>
                    </div>
                  </li>
                ))}
              </ol>
            </StyledComponentParts>
          </Grid>
        </StyledPanel>
      );

      return { tab, panel };
    });

  React.useEffect(() => {
    focusedTabRef.current?.focus();
  }, [focusedTab]);

  // just in case ComponentStructure loses one of its structures
  // during the lifecycle, and active tab is out of bounds
  // we need to move it to the first tab
  React.useEffect(() => {
    setActiveTab(prevFocusedTab => (prevFocusedTab > tabsCount - 1 ? 0 : prevFocusedTab));
  }, [tabsCount]);

  return (
    <StyledContainer>
      {tabsCount > 1 && (
        <StyledTabList
          role="tablist"
          aria-orientation="horizontal"
          onKeyDown={event => {
            setFocusedTab(prevFocusedTab => {
              if (prevFocusedTab === null) return prevFocusedTab;
              if (event.keyCode === KEY_CODE.ARROW_RIGHT || event.code === "ArrowRight") {
                return prevFocusedTab === tabsCount - 1 ? 0 : prevFocusedTab + 1;
              }
              if (event.keyCode === KEY_CODE.ARROW_LEFT || event.code === "ArrowLeft") {
                return prevFocusedTab === 0 ? tabsCount - 1 : prevFocusedTab - 1;
              }
              return prevFocusedTab;
            });
          }}
          onBlur={() => setFocusedTab(null)}
        >
          {items.map(({ tab }) => tab)}
        </StyledTabList>
      )}
      {items.map(({ panel }) => panel)}
    </StyledContainer>
  );
}
