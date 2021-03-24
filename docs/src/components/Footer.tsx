import React from "react";
import styled, { css } from "styled-components";
import { Box, Text, Desktop, mediaQueries } from "@kiwicom/orbit-components";
import { Link } from "gatsby";

import Switch from "./Switch";
import GitHub from "../images/logos/github-circle.svg";
import Spectrum from "../images/logos/spectrum-circle.svg";
import Twitter from "../images/logos/twitter-circle.svg";
import orbitHeart from "../images/orbit-heart.png";
import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from "../consts";

const StyledContainer = styled.div<{ color: string }>`
  ${({ theme, color }) => `
    background: ${theme.orbit[color]};
  `};
`;

const StyledInner = styled.div`
  ${({ theme }) => `
    overflow: hidden;
    box-sizing: content-box;
    max-width: ${MAX_CONTENT_WIDTH};
    margin: 0 auto;
    padding: ${theme.orbit.spaceSmall} ${CONTENT_PADDING};
  `}
`;

const StyledIconLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
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
    margin-left: -${CONTENT_PADDING};
    padding: ${theme.orbit.spaceSmall} ${CONTENT_PADDING};
    &:hover,
    &:focus {
      color: ${theme.orbit.paletteProductNormalHover};
    }
    &:first-child {
      margin-left: -${CONTENT_PADDING};
    }
    ${mediaQueries.tablet(`
      padding: ${theme.orbit.spaceSmall} ${theme.orbit.spaceLarge};
      margin-left: 0;
      &:first-child {
        margin-left: -${theme.orbit.spaceLarge};
      }
    `)}
    ${mediaQueries.desktop(`
      padding: ${theme.orbit.spaceMedium} ${theme.orbit.spaceXXLarge};
      &:first-child {
        margin-left: -${theme.orbit.spaceXXLarge};
      }
    `)}
    ${mediaQueries.largeDesktop(css`
      padding: ${theme.orbit.spaceLarge} ${theme.orbit.spaceXXLarge};
    `)}
  `}
`;

function Dot() {
  return <Desktop>·</Desktop>;
}

export default function Footer() {
  return (
    <footer>
      <StyledContainer color="paletteCloudLight">
        <StyledInner>
          <Box display="flex" align="center" justify="between">
            <Box tablet={{ display: "flex", direction: "row", align: "center" }}>
              <StyledFooterLink to="/component-status/">Component status</StyledFooterLink>
              <Dot />
              <StyledFooterLink to="/roadmap/">Roadmap</StyledFooterLink>
              <Dot />
              <StyledFooterLink to="#">Changelog</StyledFooterLink>
            </Box>
            <Box tablet={{ display: "flex", direction: "row", align: "center" }}>
              <StyledIconLink href="https://github.com/kiwicom/orbit">
                <GitHub />
              </StyledIconLink>
              <StyledIconLink href="https://spectrum.chat/orbit">
                <Spectrum />
              </StyledIconLink>
              <StyledIconLink href="https://twitter.com/OrbitKiwi">
                <Twitter />
              </StyledIconLink>
            </Box>
          </Box>
        </StyledInner>
      </StyledContainer>
      <StyledContainer color="paletteCloudNormal">
        <StyledInner>
          <Box
            largeDesktop={{
              display: "flex",
              align: "center",
              direction: "row",
              justify: "between",
            }}
          >
            <Box tablet={{ display: "flex", align: "center" }}>
              <Box
                padding={{ top: "XSmall", bottom: "XSmall" }}
                desktop={{ padding: { right: "XXLarge" } }}
                largeDesktop={{ padding: { top: "large", bottom: "large" } }}
              >
                <Text as="div" weight="bold">
                  Design tokens
                </Text>
                <Text as="div" type="secondary">
                  v0.11.0
                </Text>
              </Box>
              <Dot />
              <Box
                padding={{ top: "XSmall", bottom: "XSmall" }}
                tablet={{ padding: { top: "XSmall", bottom: "XSmall", left: "XXLarge" } }}
                desktop={{
                  padding: { right: "XXLarge", left: "XXLarge" },
                }}
                largeDesktop={{
                  padding: { top: "large", right: "XXLarge", bottom: "large", left: "XXLarge" },
                }}
              >
                <Text as="div" weight="bold">
                  React components
                </Text>
                <Text as="div" type="secondary">
                  v0.11.0
                </Text>
              </Box>
              <Dot />
              <Box
                display="flex"
                align="center"
                padding={{ top: "XSmall", bottom: "XSmall" }}
                tablet={{ padding: { top: "XSmall", bottom: "XSmall", left: "XXLarge" } }}
                desktop={{ padding: { left: "XXLarge" } }}
                largeDesktop={{ padding: { top: "large", bottom: "large", left: "XXLarge" } }}
              >
                <Box padding={{ right: "XLarge" }} desktop={{ shrink: 0 }}>
                  <Text as="div" weight="bold">
                    Developer mode
                  </Text>
                  <Text as="div" type="secondary">
                    Opens components on the React tab by default.
                  </Text>
                </Box>
                <Box shrink={0}>
                  <Switch />
                </Box>
              </Box>
            </Box>
            <Box
              padding={{ top: "XSmall", bottom: "XSmall" }}
              largeDesktop={{ display: "flex", direction: "column", align: "end" }}
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
            </Box>
          </Box>
        </StyledInner>
      </StyledContainer>
    </footer>
  );
}
