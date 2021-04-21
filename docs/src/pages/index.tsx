import React from "react";
import { Link } from "gatsby";
import { Heading, Inline, Stack } from "@kiwicom/orbit-components";
import { NewWindow } from "@kiwicom/orbit-components/icons";
import { css } from "styled-components";
import { WindowLocation } from "@reach/router";

import SearchInput, { Size } from "../components/SearchInput";
import ArrowRight from "../components/ArrowRight";
import Layout from "../components/Layout";
import RocketImage from "../components/RocketImage";
import ButtonLink from "../components/ButtonLink";
import Tile from "../components/Tile";
import BrandedTile from "../components/BrandedTile";
import GitHubLogo from "../images/github-full.svg";
import SpectrumLogo from "../images/spectrum.svg";
import TwitterLogo from "../images/twitter.svg";
import srcTequila from "../images/tequila.png";
import { MAX_CONTENT_WIDTH } from "../consts";

interface Props {
  location: WindowLocation;
}

export default function Home({ location }: Props) {
  return (
    <Layout location={location}>
      <RocketImage />
      <div
        css={css`
          /* so that the rest of the content has a higher z-order than the image */
          position: relative;
          width: 100%;
          max-width: ${MAX_CONTENT_WIDTH};
          margin: 0 auto;

          > * + * {
            margin-top: 5.25rem;
          }
        `}
      >
        <>
          <Heading type="display">
            <div
              css={css`
                max-width: 20ch;
                font-size: 3rem;
                line-height: 1.35;
              `}
            >
              Open source design system for your next travel project.
            </div>
          </Heading>

          <div
            css={css`
              margin-top: 3rem;
            `}
          >
            <Inline spacing="small">
              <ButtonLink
                type="primary"
                size="large"
                as={Link}
                iconRight={<ArrowRight />}
                to="/getting-started/for-designers/"
              >
                Get started
              </ButtonLink>
              <SearchInput size={Size.Large} />
            </Inline>
          </div>
        </>

        <Stack
          flex
          direction="column"
          justify="between"
          largeMobile={{ direction: "row", align: "stretch" }}
        >
          <Tile
            title="Components"
            linkContent="See our components"
            href="/components/action/button/"
            icon
          >
            Our components are a collection of interface elements that can be reused across the
            Orbit design system.
          </Tile>
          <Tile
            title="Patterns"
            linkContent="See our patterns"
            href="/design-patterns/progressive-disclosure/"
            icon
          >
            Missing description for patterns card.
          </Tile>
        </Stack>

        <div
          css={css`
            > * + * {
              margin-top: 2rem;
            }
          `}
        >
          <Heading as="h2">Foundation</Heading>
          <Stack flex direction="column" tablet={{ direction: "row", align: "stretch" }}>
            <Tile title="Colors" linkContent="Learn more" href="/foundation/color/" icon>
              Color is used to signal structure on a page, to highlight or emphasize...
            </Tile>
            <Tile title="Typography" linkContent="Learn more" icon>
              Typography is critical for communicating the hierarchy of a page.
            </Tile>
            <Tile title="Spacings" linkContent="Learn more" icon>
              Consistent spacing makes an interface more clear and easy to scan.
            </Tile>
          </Stack>
          <div
            css={css`
              text-align: right;
            `}
          >
            <ButtonLink type="secondary" href="#">
              Show all items
            </ButtonLink>
          </div>
        </div>
        <div
          css={css`
            margin-top: 0;
            > * + * {
              margin-top: 2rem;
            }
          `}
        >
          <Heading as="h2">Content</Heading>
          <Stack flex direction="column" tablet={{ direction: "row", align: "stretch" }}>
            <Tile
              title="Voice & tone"
              linkContent="Learn more"
              href="/kiwi-use/content/specific-areas/social-media/"
              icon
            >
              How we write at Kiwi.com.
            </Tile>
            <Tile
              title="Grammar & mechanics"
              linkContent="Learn more"
              href="/kiwi-use/content/grammar-and-mechanics/"
              icon
            >
              Typography is critical for communicating the hierarchy of a page.Basic grammar
              guidelines for writing with Orbit.
            </Tile>
            <Tile title="Glossary" linkContent="Learn more" href="/kiwi-use/content/glossary/" icon>
              A list of most used words and phrases in Kiwi.com products.
            </Tile>
          </Stack>
          <div
            css={css`
              text-align: right;
            `}
          >
            <ButtonLink type="secondary" href="#">
              Show all items
            </ButtonLink>
          </div>
        </div>

        <div
          css={css`
            margin-top: 0;
            > * + * {
              margin-top: 2rem;
            }
          `}
        >
          <Heading as="h2">Support</Heading>
          <Stack flex direction="column">
            <Stack flex direction="column" tablet={{ direction: "row" }} align="stretch">
              <BrandedTile
                title="Report a bug"
                href="https://github.com/kiwicom/orbit/issues/new/choose"
                linkContent="Report bug on GitHub"
                logo={<GitHubLogo />}
                color={{
                  primary: "#252A31",
                  secondary: "#515C6C",
                }}
              >
                If you found any bugs in our components, report them on Github and we’ll fix them
                asap. It’s the highest priority to have Orbit working as expected.
              </BrandedTile>
              <BrandedTile
                title="Engage with us"
                href="https://spectrum.chat/orbit"
                linkContent="Go to Spectrum chat"
                logo={<SpectrumLogo />}
                color={{
                  primary: "#330B94",
                  secondary: "#7441F1",
                }}
              >
                We aim to provide the best possible support for all designers and developers using
                Orbit. That’s why we an Orbit community on Spectrum – an open discussion platform to
                get feedback from you.
              </BrandedTile>
            </Stack>
            <Stack flex direction="column" tablet={{ direction: "row" }} align="stretch">
              <BrandedTile
                title="Follow us on Twitter"
                href="https://twitter.com/OrbitKiwi"
                linkContent="Go to Orbit.kiwi’s Twitter"
                logo={<TwitterLogo />}
                color={{
                  primary: "#0989CF",
                  secondary: "#179CE3",
                }}
              >
                Twitter is one of the main platform for sharing, everything important that is
                happening around Orbit is published on Twitter
              </BrandedTile>
              <BrandedTile
                title="Connect Orbit to Tequila"
                href="https://partners.kiwi.com"
                linkContent="Explore Tequila possibilities"
                logo={<img alt="Tequila logo" src={srcTequila} width={144} height={64} />}
                color="product"
              >
                Tequila is an online B2B platform powered by Kiwi.com that allows anyone to access
                our content, technology, and services.
              </BrandedTile>
            </Stack>
          </Stack>
        </div>

        <div
          css={css`
            > * + * {
              margin-top: 2rem;
            }
          `}
        >
          <Heading as="h2">Resources</Heading>
          <Tile
            title="Figma library"
            linkContent={<NewWindow />}
            href="https://www.figma.com/@orbitbykiwi"
            icon
          />
          <Tile
            title="Orbit repository"
            linkContent={<NewWindow />}
            href="https://github.com/kiwicom/orbit"
            icon
          />
        </div>
      </div>
    </Layout>
  );
}
