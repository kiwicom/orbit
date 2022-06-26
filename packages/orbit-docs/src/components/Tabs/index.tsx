import React from "react";
import { Link } from "gatsby";
import { Popover, mediaQueries } from "@kiwicom/orbit-components";
import { ChevronUp, ChevronDown, ChevronRight } from "@kiwicom/orbit-components/icons";
import styled, { css } from "styled-components";
import debounce from "lodash/debounce";

import Tab, { TabObject } from "./Tab";
import useFontLoaded from "../../hooks/useFontLoaded";
import { TAB_HEIGHT, FULL_WIDTH_BREAKPOINT } from "./consts";
import { getTabShadowReachTop, getTabShadowReachLeft, getTabShadowReachRight } from "./helpers";

const StyledContainer = styled.div<{ collapsed: boolean }>`
  ${({ theme, collapsed }) => css`
    .js & {
      /* lock height to avoid layout shift, but only if JavaScript is enabled */
      /* without JS wrapped tabs will be visible as well and it will look terrible */
      /* but they will be usable, following the principle of graceful degradation */
      height: ${TAB_HEIGHT};
    }

    position: relative;
    z-index: 1; /* place tabs above the main container */
    display: flex;
    flex-wrap: wrap; /* so that we can detect whether tabs wrap, and in that case collapse them */
    padding-top: ${getTabShadowReachTop};
    padding-left: ${getTabShadowReachLeft};
    padding-right: ${getTabShadowReachRight};
    /* prevents box shadow and tabs stack from overflowing at the bottom in order to */
    /* achieve the effect of attached tabs, also prevents wrapped tabs from showing */
    overflow: hidden;

    > * + * {
      margin-left: ${theme.orbit.spaceMedium};
    }

    ${collapsed &&
    css`
      flex-grow: 1;
      /* Popover container */
      > * {
        width: 100%;
      }
      ${mediaQueries[FULL_WIDTH_BREAKPOINT](css`
        flex-grow: 0;
      `)};
    `};
  `};
`;

const StyledPopoverContent = styled.div`
  ${({ theme }) => css`
    /* close gap between content and Close button on mobile */
    margin-bottom: -${theme.orbit.spaceMedium};
    ${mediaQueries.largeMobile(css`
      margin-bottom: 0;
    `)};
    > * + * {
      border-top: 1px solid ${theme.orbit.paletteCloudDark};
    }
  `};
`;
const StyledPopoverTab = styled(Link)<{ $active: boolean }>`
  ${({ theme, $active }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 0;
    font-size: ${theme.orbit.fontSizeTextLarge};
    font-weight: ${theme.orbit.fontWeightMedium};
    &:hover {
      color: ${theme.orbit.paletteProductNormal};
    }
    ${
      $active &&
      `
        color: ${theme.orbit.paletteProductNormal};
      `
    };

    > * + * {
      margin-left: ${theme.orbit.spaceMedium};
    }
  `};
`;

interface Props {
  tabs: TabObject[];
  activeTab: string;
}

export default function Tabs({ activeTab: activeTabSlug, tabs }: Props) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const [tabsOpen, setTabsOpen] = React.useState<boolean>(false);

  function collapseIfTabsWrapped() {
    const { firstElementChild, lastElementChild } = containerRef.current || {};
    const didWrap =
      firstElementChild?.getBoundingClientRect().top !==
      lastElementChild?.getBoundingClientRect().top;
    setCollapsed(didWrap);
  }

  React.useEffect(() => {
    const collapseIfTabsWrappedListener = debounce(() => {
      setCollapsed(prevCollapsed => {
        if (!prevCollapsed) {
          collapseIfTabsWrapped();
        }
        // in order to check whether tabs still needs to be collapsed
        // we need to uncollapse it so that we can check whether tabs still wrap
        // it will be checked in the useEffect which depends on `collapsed`
        return false;
      });
    }, 200);

    window.addEventListener("resize", collapseIfTabsWrappedListener);
    return () => {
      window.removeEventListener("resize", collapseIfTabsWrappedListener);
    };
  }, []);

  const fontLoaded = useFontLoaded();
  React.useEffect(() => {
    if (fontLoaded) {
      collapseIfTabsWrapped();
    }
  }, [fontLoaded]);

  // if children happen to change, check if we need to (un)collapse tabs,
  // children chaning is highly unlikely, but we want to be ready for that
  React.useEffect(() => {
    if (collapsed) {
      setCollapsed(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabs, activeTabSlug]);

  React.useEffect(() => {
    if (!collapsed) {
      // we can only check if tabs need to be collapsed if they aren't collapsed,
      // this also includes when this component is mounted, which we must not forget
      collapseIfTabsWrapped();
    }
  }, [collapsed]);

  if (tabs.length === 0) return null;

  const activeTabTitle = tabs.find(tab => tab.slug === activeTabSlug)?.title;

  return (
    <StyledContainer ref={containerRef} collapsed={collapsed}>
      {collapsed ? (
        <Popover
          content={
            <StyledPopoverContent>
              {tabs.map(tab => (
                <StyledPopoverTab
                  key={tab.title}
                  to={tab.slug}
                  $active={tab.slug === activeTabSlug}
                >
                  <span>{tab.title}</span>
                  <ChevronRight />
                </StyledPopoverTab>
              ))}
            </StyledPopoverContent>
          }
          onOpen={() => setTabsOpen(true)}
          onClose={() => setTabsOpen(false)}
        >
          <Tab stacked>
            <span>{activeTabTitle}</span>
            {tabsOpen ? <ChevronUp /> : <ChevronDown />}
          </Tab>
        </Popover>
      ) : (
        tabs.map(tab => (
          <Tab key={tab.title} href={activeTabSlug === tab.slug ? undefined : tab.slug}>
            {tab.title}
          </Tab>
        ))
      )}
    </StyledContainer>
  );
}

export { TabObject, getTabShadowReachLeft };
