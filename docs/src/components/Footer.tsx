import React from "react";
import styled, { css } from "styled-components";
import { Inline, Box, Text } from "@kiwicom/orbit-components";
import { Link } from "gatsby";

import Switch from "./Switch";
import Emoji from "./Emoji";
import GitHub from "../images/logos/github-circle.svg";
import Spectrum from "../images/logos/spectrum-circle.svg";
import Twitter from "../images/logos/twitter-circle.svg";
import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from "../consts";

const StyledContainer = styled.div<{ color: string }>`
  ${({ theme, color }) => `
    background: ${theme.orbit[color]}; `};
`;

const StyledInner = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    box-sizing: content-box;
    max-width: ${MAX_CONTENT_WIDTH};
    margin: 0 auto;
    padding: 0 ${CONTENT_PADDING};
  `}
`;

const StyledOutdent = styled.div<{
  amount: string;
}>`
  ${({ theme, amount }) => `
    margin: 0 -${theme.orbit[amount]};
  `}
`;

const StyledIconLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  ${({ theme }) => `
    display: block;
    padding: ${theme.orbit.spaceXSmall};
    border-radius: ${theme.orbit.borderRadiusCircle};
    color: ${theme.orbit.paletteInkNormal};
    &:hover,
    &:focus {
      color: ${theme.orbit.paletteProductNormalHover};
    }
  `}
`;

const StyledFooterLink = styled(Link)`
  ${({ theme }) => `
    display: block;
    padding: ${theme.orbit.spaceLarge} ${theme.orbit.spaceXXLarge};
    &:hover,
    &:focus {
      color: ${theme.orbit.paletteProductNormalHover};
    }
  `}
`;

export default function Footer() {
  return (
    <footer>
      <StyledContainer color="paletteCloudLight">
        <StyledInner>
          <Box display="flex" align="center" justify="between">
            <StyledOutdent amount="spaceXXLarge">
              <Inline align="center">
                <StyledFooterLink to="/component-status">Component status</StyledFooterLink>
                <div>·</div>
                <StyledFooterLink to="/roadmap">Roadmap</StyledFooterLink>
                <div>·</div>
                <StyledFooterLink to="#">Changelog</StyledFooterLink>
              </Inline>
            </StyledOutdent>
            <StyledOutdent amount="spaceXSmall">
              <Inline align="center">
                <StyledIconLink href="https://github.com/kiwicom/orbit">
                  <GitHub />
                </StyledIconLink>
                <StyledIconLink href="https://spectrum.chat/orbit">
                  <Spectrum />
                </StyledIconLink>
                <StyledIconLink href="https://twitter.com/OrbitKiwi">
                  <Twitter />
                </StyledIconLink>
              </Inline>
            </StyledOutdent>
          </Box>
        </StyledInner>
      </StyledContainer>
      <StyledContainer color="paletteCloudNormal">
        <StyledInner>
          <Inline align="center" justify="between">
            <Box display="flex" align="center">
              <Box padding={{ top: "large", bottom: "large" }}>
                <Text as="div" weight="bold">
                  Design tokens
                </Text>
                <Text as="div" type="secondary">
                  v0.11.0
                </Text>
              </Box>
              <Box padding={{ top: "large", bottom: "large", left: "XXLarge" }}>
                <Text as="div" weight="bold">
                  React components
                </Text>
                <Text as="div" type="secondary">
                  v0.11.0
                </Text>
              </Box>
              <Box
                display="flex"
                align="center"
                justify="between"
                padding={{ top: "large", bottom: "large", left: "XXLarge" }}
              >
                <Box shrink={0} padding={{ right: "XLarge" }}>
                  <Text as="div" weight="bold">
                    Developer mode
                  </Text>
                  <Text as="div" type="secondary">
                    Opens components on the React tab by default.
                  </Text>
                </Box>
                <Switch />
              </Box>
            </Box>
            <Text align="right">
              <Text as="div" weight="bold">
                Built & maintained by Kiwi.com
              </Text>
              <Text as="div" type="secondary">
                Open sourced with <Emoji>❤️</Emoji> for travel
              </Text>
            </Text>
          </Inline>
        </StyledInner>
      </StyledContainer>
    </footer>
  );
}
