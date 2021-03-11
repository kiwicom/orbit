import React from "react";
import { Link } from "gatsby";
import { Box } from "@kiwicom/orbit-components";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";
import styled, { css } from "styled-components";

export interface TabObject {
  frontmatter: {
    title: string;
  };
  fields: {
    slug: string;
    tabCollection: string | null;
  };
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
  `}
`;

const StyledTabWrapper = styled.div<SizeCheck>`
  ${({ isMediumMobile, theme }) => css`
    display: inline-block;
    ${StyledTab},${StyledTabLink} {
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
          <StyledTab>{tab.frontmatter.title}</StyledTab>
          <BottomShadowHider />
        </>
      ) : (
        <StyledTabLink to={tab.fields.slug}>{tab.frontmatter.title}</StyledTabLink>
      )}
    </StyledTabWrapper>
  );
};

interface TabsProps {
  tabs: TabObject[];
  location: string;
}

const Tabs = ({ location, tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = React.useState(location);
  React.useEffect(() => setActiveTab(location), [location]);
  return (
    <Box padding={{ left: "medium" }} margin={{ top: "none" }}>
      {tabs.map(tab => (
        <Tab key={tab.frontmatter.title} tab={tab} isActive={activeTab === tab.fields.slug} />
      ))}
    </Box>
  );
};

export default Tabs;
