import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";

import StackOfTabs from "./StackOfTabs";
import { TAB_HEIGHT, BORDER_RADIUS } from "./consts";
import { getTabShadowReachTop } from "./helpers";

export interface TabObject {
  slug: string;
  tabCollection: string | null;
  title: string;
}

const commonStyle = css`
  ${({ theme }) => css`
    font-size: ${theme.orbit.fontSizeTextLarge};
    font-weight: ${theme.orbit.fontWeightMedium};
    padding: ${theme.orbit.spaceSmall} ${theme.orbit.spaceMedium} ${theme.orbit.spaceXSmall}
      ${theme.orbit.spaceMedium};
  `}
`;

const StyledTabLink = styled(Link)`
  ${commonStyle};
  ${({ theme }) => css`
    display: flex;
    align-items: center; /* align text so it matches StyledTab */
    height: calc(${TAB_HEIGHT} - ${getTabShadowReachTop});
    color: ${theme.orbit.paletteInkDark};
    transition: color ${theme.orbit.durationFast};
    &:hover {
      color: ${theme.orbit.paletteInkDark};
    }
  `};
`;

export const commonTabStyle = css`
  ${({ theme }) => `
    height: calc(${TAB_HEIGHT} - ${getTabShadowReachTop});
    border-top-left-radius: ${BORDER_RADIUS};
    border-top-right-radius: ${BORDER_RADIUS};
    background: ${theme.orbit.paletteWhite};
  `};
`;

// needs to be a <span> to be a valid child of <StackOfTabs>
const StyledTab = styled.span<{ fullWidth?: boolean }>`
  ${commonStyle};
  ${commonTabStyle};
  ${({ theme, fullWidth }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.orbit.paletteInkDark};
    width: ${fullWidth && "100%"};
    > * + * {
      margin-left: ${theme.orbit.spaceSmall};
    }
  `};
`;

interface TabProps {
  href?: string;
  stacked?: boolean;
  children: React.ReactNode;
}

export default function Tab({ href, stacked, children }: TabProps) {
  if (href) {
    return <StyledTabLink to={href}>{children}</StyledTabLink>;
  }

  if (stacked) {
    return (
      <StackOfTabs>
        <StyledTab fullWidth>{children}</StyledTab>
      </StackOfTabs>
    );
  }

  return <StyledTab>{children}</StyledTab>;
}
