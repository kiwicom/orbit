import React from "react";
import { Link } from "gatsby";
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

const Container = styled.div`
  ${({ theme }) => `
    padding-top: 16px;
    padding-left: ${theme.orbit.spaceMedium};
    overflow: hidden;
  `};
`;

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

interface TabProps {
  isActive?: boolean;
  tab: TabObject;
}

const Tab = ({ isActive, tab }: TabProps) => {
  const { isMediumMobile } = useMediaQuery();
  return (
    <StyledTabWrapper isMediumMobile={isMediumMobile}>
      {isActive ? (
        <StyledTab>{tab.title}</StyledTab>
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

const Tabs = ({ activeTab, tabs }: Props) => {
  if (tabs.length === 0) return null;
  return (
    <Container>
      {tabs.map(tab => (
        <Tab key={tab.title} tab={tab} isActive={activeTab === tab.slug} />
      ))}
    </Container>
  );
};

export default Tabs;
