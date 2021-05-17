import React from "react";
import { Link } from "gatsby";
import { Heading, Inline, Stack, Button } from "@kiwicom/orbit-components";
import { NewWindow, Search as SearchIcon } from "@kiwicom/orbit-components/icons";
import { css } from "styled-components";
import { WindowLocation } from "@reach/router";
import ModulePuzzleIcon from "@streamlinehq/streamlinehq/img/streamline-light/module-puzzle-hNE9va.svg";
import ColorBrushIcon from "@streamlinehq/streamlinehq/img/streamline-light/color-brush-itsMso.svg";
import ExpandDiagonalIcon from "@streamlinehq/streamlinehq/img/streamline-light/expand-diagonal-1-n8OXeu.svg";
import LoveItTextIcon from "@streamlinehq/streamlinehq/img/streamline-light/love-it-text-9ULGdc.svg";
import SpellingCheckIcon from "@streamlinehq/streamlinehq/img/streamline-light/spelling-check-9ULReF.svg";
import ArrangeLetterIcon from "@streamlinehq/streamlinehq/img/streamline-light/arrange-letter-4pQIv2.svg";
import ComputerBugIcon from "@streamlinehq/streamlinehq/img/streamline-light/computer-bug-rjtzBu.svg";
import ConversationChatTextIcon from "@streamlinehq/streamlinehq/img/streamline-light/conversation-chat-text-jUAzcc.svg";
import LoveBirdIcon from "@streamlinehq/streamlinehq/img/streamline-light/love-bird-T2F62M.svg";
import StartupLaunchIcon from "@streamlinehq/streamlinehq/img/streamline-light/startup-launch-1-af7xxf.svg";

import TypograhpyIcon from "../components/icons/Typography";
import PuzzleIcon from "../components/icons/Puzzle";
import FigmaIcon from "../components/icons/Figma";
import GitHubIcon from "../components/icons/GitHub";
import Search from "../components/Search";
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
import ScreenReaderText from "../components/ScreenReaderText";

interface Props {
  location: WindowLocation;
  path: string;
}

export default function Home({ location, path }: Props) {
  const [searchOpen, setSearchOpen] = React.useState<boolean>(false);
  return (
    <Layout
      location={location}
      title="Orbit design system"
      description="An open source design system for your next travel project."
      path={path}
      isHome
    >
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
              <div
                css={css`
                  button {
                    /* to match the height of the ButtonLink above */
                    height: 64px;
                  }
                `}
              >
                <Button
                  size="large"
                  circled
                  iconLeft={<SearchIcon />}
                  type="primarySubtle"
                  onClick={() => setSearchOpen(true)}
                >
                  Search…
                </Button>
                {searchOpen && <Search onClose={() => setSearchOpen(false)} />}
              </div>
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
            icon={<PuzzleIcon />}
          >
            Our components are a collection of interface elements that can be reused across the
            Orbit design system.
          </Tile>
          <Tile
            title="Patterns"
            linkContent="See our patterns"
            href="/design-patterns/progressive-disclosure/"
            icon={<ModulePuzzleIcon />}
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
            <Tile
              title="Colors"
              linkContent="Learn more"
              href="/foundation/color/"
              icon={<ColorBrushIcon />}
            >
              Color is used to signal structure on a page, to highlight or emphasize...
            </Tile>
            <Tile title="Typography" linkContent="Learn more" icon={<TypograhpyIcon />}>
              Typography is critical for communicating the hierarchy of a page.
            </Tile>
            <Tile title="Spacings" linkContent="Learn more" icon={<ExpandDiagonalIcon />}>
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
              icon={<LoveItTextIcon />}
            >
              How we write at Kiwi.com.
            </Tile>
            <Tile
              title="Grammar & mechanics"
              linkContent="Learn more"
              href="/kiwi-use/content/grammar-and-mechanics/"
              icon={<SpellingCheckIcon />}
            >
              Typography is critical for communicating the hierarchy of a page.Basic grammar
              guidelines for writing with Orbit.
            </Tile>
            <Tile
              title="Glossary"
              linkContent="Learn more"
              href="/kiwi-use/content/glossary/"
              icon={<ArrangeLetterIcon />}
            >
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
                icon={<ComputerBugIcon />}
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
                icon={<ConversationChatTextIcon />}
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
                icon={<LoveBirdIcon />}
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
                icon={<StartupLaunchIcon />}
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
            linkContent={
              <>
                <ScreenReaderText>
                  Open Orbit&apost;s public Figma library in a new window
                </ScreenReaderText>
                <NewWindow />
              </>
            }
            href="https://www.figma.com/@orbitbykiwi"
            icon={<FigmaIcon />}
          />
          <Tile
            title="Orbit repository"
            linkContent={
              <>
                <ScreenReaderText>Open GitHub repository in a new window</ScreenReaderText>
                <NewWindow />
              </>
            }
            href="https://github.com/kiwicom/orbit"
            icon={<GitHubIcon />}
          />
        </div>
      </div>
    </Layout>
  );
}
