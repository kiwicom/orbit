import React from "react";
import styled, { css } from "styled-components";
import { Text, Desktop, Stack, mediaQueries } from "@kiwicom/orbit-components";
import { Link, useStaticQuery, graphql } from "gatsby";

import Switch from "./Switch";
import GitHub from "../images/logos/github-circle.svg";
import Spectrum from "../images/logos/spectrum-circle.svg";
import Twitter from "../images/logos/twitter-circle.svg";
import orbitHeart from "../images/orbit-heart.png";
import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from "../consts";
import useDevMode from "../hooks/useDevMode";

const StyledContainer = styled.div<{ color: string }>`
  ${({ theme, color }) => `
    background: ${theme.orbit[color]};
  `};
`;

const StyledInner = styled.div<{ thick?: boolean }>`
  ${({ theme, thick }) => `
    overflow: hidden;
    box-sizing: content-box;
    max-width: ${MAX_CONTENT_WIDTH};
    margin: 0 auto;
    padding: ${thick ? `28px 2rem` : `${theme.orbit.spaceSmall} ${CONTENT_PADDING}`};
  `}
`;

const StyledIconLink = styled.a.attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.orbit.spaceXSmall};
    margin-right: -${theme.orbit.spaceXSmall};
    border-radius: ${theme.orbit.borderRadiusCircle};
    color: ${theme.orbit.paletteInkNormal};
    &:hover,
    &:focus {
      color: ${theme.orbit.paletteProductNormalHover};
    }
    ${mediaQueries.tablet(css`
      margin-right: 0;
      &:last-child {
        margin-right: -${theme.orbit.spaceXSmall};
      }
    `)}
  `}
`;

const StyledFooterLink = styled(Link)`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.orbit.spaceMedium} 0;
    &:hover,
    &:focus {
      color: ${theme.orbit.paletteProductNormalHover};
    }
  `}
`;

function Dot() {
  return <Desktop>·</Desktop>;
}

export default function Footer() {
  const [devMode, setDevMode] = useDevMode();

  const data: {
    site: {
      siteMetadata: {
        version: {
          components: number;
          tokens: number;
        };
      };
    };
  } = useStaticQuery(graphql`
    query PackageVersions {
      site {
        siteMetadata {
          version {
            components
            tokens
          }
        }
      }
    }
  `);

  const pkgVersion = data.site.siteMetadata.version;

  return (
    <footer>
      <StyledContainer color="paletteCloudLight">
        <StyledInner>
          <Stack flex align="center" justify="between">
            <Stack
              inline
              direction="column"
              spacing="none"
              tablet={{ direction: "row", align: "center", spacing: "XXLarge" }}
            >
              <StyledFooterLink to="/component-status/">Component status</StyledFooterLink>
              <Dot />
              <StyledFooterLink to="/roadmap/">Roadmap</StyledFooterLink>
            </Stack>
            <Stack
              inline
              direction="column"
              spacing="none"
              align="end"
              tablet={{ direction: "row", justify: "end" }}
            >
              <StyledIconLink href="https://github.com/kiwicom/orbit" aria-label="GitHub">
                <GitHub />
              </StyledIconLink>
              <StyledIconLink href="https://spectrum.chat/orbit" aria-label="Spectrum">
                <Spectrum />
              </StyledIconLink>
              <StyledIconLink href="https://twitter.com/OrbitKiwi" aria-label="Twitter">
                <Twitter />
              </StyledIconLink>
            </Stack>
          </Stack>
        </StyledInner>
      </StyledContainer>
      <StyledContainer color="paletteCloudNormal">
        <StyledInner thick>
          <Stack
            direction="column"
            largeDesktop={{
              align: "center",
              direction: "row",
              justify: "between",
            }}
          >
            <Stack
              inline
              direction="column"
              tablet={{ direction: "row", align: "center", spacing: "XXLarge" }}
            >
              <Stack inline grow={false} direction="column" spacing="none">
                <Text as="div" weight="bold">
                  Design tokens
                </Text>
                <Text as="div" type="secondary">
                  v{pkgVersion.tokens}
                </Text>
              </Stack>
              <Dot />
              <Stack inline grow={false} direction="column" spacing="none">
                <Text as="div" weight="bold">
                  React components
                </Text>
                <Text as="div" type="secondary">
                  v{pkgVersion.components}
                </Text>
              </Stack>
              <Dot />
              <Stack flex shrink spacing="medium" align="center">
                <Stack flex shrink direction="column" spacing="none">
                  <Text as="div" weight="bold">
                    Developer mode
                  </Text>
                  <Text as="div" type="secondary">
                    Opens components on the React tab by default.
                  </Text>
                </Stack>
                <Switch checked={devMode} onChange={() => setDevMode(!devMode)} hideLabel>
                  Turn {devMode ? "off" : "on"} dev mode
                </Switch>
              </Stack>
            </Stack>
            <Stack
              flex
              spacing="none"
              direction="column"
              align="center"
              mediumMobile={{ align: "start" }}
              largeDesktop={{ shrink: true, align: "end" }}
            >
              <Text as="div" weight="bold">
                Built & maintained by Kiwi.com
              </Text>
              <Text as="div" type="secondary">
                Open sourced with{" "}
                <img
                  alt="❤"
                  src={orbitHeart}
                  width={20}
                  height={20}
                  style={{ display: "inline", verticalAlign: -5 }}
                />{" "}
                for travel
              </Text>
            </Stack>
          </Stack>
        </StyledInner>
      </StyledContainer>
    </footer>
  );
}
