import React from "react";
import { Link } from "gatsby";
import { Box } from "@kiwicom/orbit-components";
import mediaQueries from "@kiwicom/orbit-components/lib/utils/mediaQuery";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";
import styled, { css } from "styled-components";

export interface TabObject {
  slug: string;
  tabCollection: string | null;
  title: string;
}

interface SizeCheck {
  isMediumMobile?: boolean | null;
}

const StyledTabLink = styled(Link)`
  color: ${({ theme }) => theme.orbit.paletteInkLight};
`;

const StyledTab = styled.div`
  ${({ theme }) => css`
    border-top-left-radius: ${theme.orbit.borderRadiusLarge};
    border-top-right-radius: ${theme.orbit.borderRadiusLarge};
    color: ${theme.orbit.paletteInkNormal};
    box-shadow: ${theme.orbit.boxShadowRaised};
    background: linear-gradient(180deg, transparent, ${theme.orbit.paletteWhite} 27%);
    display: inline-block;
    position: relative;
  `}
`;

const StyledTabWrapper = styled.div<SizeCheck>`
  ${({ isMediumMobile, theme }) => css`
    display: inline-block;
    z-index: ${theme.orbit.zIndexSticky};
    ${StyledTab}, ${StyledTabLink} {
      padding: ${theme.orbit.spaceSmall}
        ${isMediumMobile ? theme.orbit.spaceMedium : theme.orbit.spaceXSmall};
      margin: 0 ${isMediumMobile ? theme.orbit.spaceMedium : theme.orbit.spaceXSmall};
    }
  `}
`;

const BottomShadowHider = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.orbit.paletteWhite};
    height: ${theme.orbit.spaceXLarge};
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 calc(2rem + 12px);
    ${mediaQueries.tablet(css`
      margin: 0 calc(2rem + 20%) 0 calc(2rem + 12px);
    `)}
  `}
`;

interface TabProps {
  isActive?: boolean;
  tab: TabObject;
}

const Tab = ({ isActive, tab }: TabProps) => {
  const { isMediumMobile } = useMediaQuery();
  return (
    <StyledTabWrapper isMediumMobile={isMediumMobile}>
      {isActive ? (
        <>
          <StyledTab>{tab.title}</StyledTab>
          <BottomShadowHider />
        </>
      ) : (
        <StyledTabLink to={tab.slug}>{tab.title}</StyledTabLink>
      )}
    </StyledTabWrapper>
  );
};

interface Props {
  tabs: TabObject[];
  activeTab: string;
}

const Tabs = ({ activeTab, tabs }: Props) => (
  <Box padding={{ left: "medium" }} margin={{ top: "none" }}>
    {tabs.map(tab => (
      <Tab key={tab.title} tab={tab} isActive={activeTab === tab.slug} />
    ))}
  </Box>
);

export default Tabs;
