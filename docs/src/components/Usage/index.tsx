import React from "react";
import { Stack, mediaQueries as mq } from "@kiwicom/orbit-components";
import { Check, Close } from "@kiwicom/orbit-components/icons";
import styled, { css } from "styled-components";
import { MDXProvider } from "@mdx-js/react";

import { StyledAnchor } from "../HeadingWithLink";
import * as components from "../../mdx-components";
import docsTheme from "../../theme";

const H2 = components.h2;
const H3 = components.h3;
const A = components.a;

interface Props {
  children: React.ReactNode;
}

const StyledContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.orbit.spaceSixX};
    flex-direction: column;
    ${mq.desktop(css`
      flex-direction: row;
    `)};
    ${StyledAnchor} + & {
      margin-top: ${theme.orbit.spaceTwoX} !important;
    }
    & + ${StyledAnchor} {
      margin-top: ${theme.orbit.spaceEightX} !important;
    }
  `};
`;

export default function Usage({ children }: Props) {
  return (
    <MDXProvider
      components={{
        ...components,
        a: (props: React.ComponentProps<typeof A>) => <A orbitType="secondary" {...props} />,
      }}
    >
      <H2>Usage of the component</H2>
      <StyledContainer>{children}</StyledContainer>
    </MDXProvider>
  );
}

const StyledSection = styled.div`
  ${({ theme }) => css`
    ul {
      list-style: none;
      margin-left: 4px;
    }

    li + li {
      margin-top: ${theme.orbit.spaceOneX};
    }
  `};
`;

const StyledHeadingIcon = styled.div<{ $color: string }>`
  ${({ theme, $color }) => css`
    display: grid;
    place-content: center;
    width: ${theme.orbit.iconMediumSize};
    height: ${theme.orbit.iconMediumSize};
    background-color: ${$color};
    border-radius: ${theme.orbit.borderRadiusCircle};
    padding: 2px;
    svg {
      width: 100%;
      height: 100%;
    }
  `}
`;

const StyledListIcon = styled.div`
  margin-top: -2px !important;
`;

function ListWithIcon({ children, icon }) {
  return React.Children.map(children, ul => ({
    ...ul,
    props: {
      ...ul.props,
      children: React.Children.map(ul.props.children, li => (
        <li>
          <Stack inline>
            <StyledListIcon>{icon}</StyledListIcon>
            <div>{li.props.children}</div>
          </Stack>
        </li>
      )),
    },
  }));
}

export function UsageUse({ children }: Props) {
  return (
    <StyledSection>
      <Stack inline spacing="XSmall">
        <StyledHeadingIcon $color={docsTheme.orbit.paletteGreenLight}>
          <Check color="success" />
        </StyledHeadingIcon>
        <H3>Use</H3>
      </Stack>
      <ListWithIcon icon={<Check size="small" color="success" />}>{children}</ListWithIcon>
    </StyledSection>
  );
}

export function UsageDontUse({ children }: Props) {
  return (
    <StyledSection>
      <Stack inline spacing="XSmall">
        <StyledHeadingIcon $color={docsTheme.orbit.paletteRedLight}>
          <Close color="critical" />
        </StyledHeadingIcon>
        <H3>Don&apos;t use</H3>
      </Stack>
      <ListWithIcon icon={<Close size="small" color="critical" />}>{children}</ListWithIcon>
    </StyledSection>
  );
}
