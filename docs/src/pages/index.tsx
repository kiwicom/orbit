import React from "react";
import { Link } from "gatsby";
import { Heading, Inline, Stack, Button, Grid } from "@kiwicom/orbit-components";
import Slide from "@kiwicom/orbit-components/lib/utils/Slide";
import useBoundingRect from "@kiwicom/orbit-components/lib/hooks/useBoundingRect";
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

function GatsbyLinkToButton({ href, ...props }: { href: string }) {
  return <Link to={href} {...props} />;
}

export default function Home({ location, path }: Props) {
  const [searchOpen, setSearchOpen] = React.useState<boolean>(false);
  const [isExpandedFoundation, setExpandedFoundation] = React.useState(false);
  const [isExpandedContent, setExpandedContent] = React.useState(false);
  const [{ height: foundationHeight }, foundationRef] = useBoundingRect({
    height: isExpandedFoundation ? null : 0,
  });
  const [{ height: contentHeight }, contentRef] = useBoundingRect({
    height: isExpandedFoundation ? null : 0,
  });

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
                line-height: 1.3;
              `}
            >
              Open source design system for your next travel project.
            </div>
          </Heading>

          <div
            css={css`
              margin-top: 3rem;
              button,
              a {
                height: 64px;
              }
            `}
          >
            <Inline spacing="small">
              <Button
                size="large"
                type="primary"
                circled
                iconRight={<ArrowRight />}
                // @ts-expect-error asComponent has wrong type declaration
                asComponent={GatsbyLinkToButton}
                href="/getting-started/"
              >
                Get started
              </Button>
              <Button
                size="large"
                circled
                iconLeft={<SearchIcon />}
                type="primarySubtle"
                onClick={() => setSearchOpen(true)}
              >
                Search
              </Button>
              {searchOpen && <Search onClose={() => setSearchOpen(false)} />}
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
            href="/components"
            icon={<PuzzleIcon />}
          >
            Our components are a collection of interface elements that can be reused across the
            Orbit design system.
          </Tile>
          <Tile
            title="Patterns"
            linkContent="See our patterns"
            href="/design-patterns"
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
          <Grid columns="1fr" rowGap="2rem" columnGap="1rem" tablet={{ columns: "repeat(3, 1fr)" }}>
            <Tile
              title="Colors"
              linkContent="Learn more"
              href="/foundation/color/"
              icon={<ColorBrushIcon />}
            >
              Color is used to signal structure on a page, to highlight or emphasize...
            </Tile>
            <Tile
              title="Typography"
              href="/foundation/typography/"
              linkContent="Learn more"
              icon={<TypograhpyIcon />}
            >
              Typography is critical for communicating the hierarchy of a page.
            </Tile>
            <Tile
              title="Spacings"
              href="/foundation/spacing/"
              linkContent="Learn more"
              icon={<ExpandDiagonalIcon />}
            >
              Consistent spacing makes an interface more clear and easy to scan.
            </Tile>
          </Grid>
          <Slide maxHeight={foundationHeight} expanded={isExpandedFoundation}>
            <div ref={foundationRef as React.RefObject<HTMLDivElement>}>
              <Grid
                columns="1fr"
                rowGap="2rem"
                columnGap="1rem"
                tablet={{ columns: "repeat(3, 1fr)" }}
              >
                <Tile
                  title="Orbit principles"
                  href="/foundation/principles/"
                  linkContent="Learn more"
                  icon={<ExpandDiagonalIcon />}
                >
                  How we create Orbit as an open-source design system for travel projects.
                </Tile>
                <Tile
                  title="Icons"
                  href="/foundation/icons/"
                  linkContent="Learn more"
                  icon={<ExpandDiagonalIcon />}
                >
                  Use icons to draw an attention to specific actions.
                </Tile>
                <Tile
                  title="Overview"
                  href="/foundation/accessibility/"
                  linkContent="Learn more"
                  icon={<ExpandDiagonalIcon />}
                >
                  We build Orbit to ensure all users have the most pleasant experience possible,
                  with basic accessibility support automatically in your project by following the
                  Web Content Accessibility Guidelines.
                </Tile>
                <Tile
                  title="Border radiuses"
                  href="/foundation/border-radiuses/"
                  linkContent="Learn more"
                  icon={<ExpandDiagonalIcon />}
                >
                  What border radiuses are used within Orbit.
                </Tile>
                <Tile
                  title="Design tokens"
                  href="/foundation/design-tokens/"
                  linkContent="Learn more"
                  icon={<ExpandDiagonalIcon />}
                >
                  Design tokens store visual design attributes. They help us make our UI more
                  consistent and support custom themes.
                </Tile>
                <Tile
                  title="Elevation"
                  href="/foundation/elevation/"
                  linkContent="Learn more"
                  icon={<ExpandDiagonalIcon />}
                >
                  Use shadows to bring the content closer to users.
                </Tile>
                <Tile
                  title="Illustrations"
                  href="/foundation/illustrations/"
                  linkContent="Learn more"
                  icon={<ExpandDiagonalIcon />}
                >
                  Illustrations should support the overall message, not just be visual ornaments.
                </Tile>
              </Grid>
            </div>
          </Slide>
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
            `}
          >
            <Button
              size="large"
              onClick={() => setExpandedFoundation(prev => !prev)}
              circled
              type="primarySubtle"
            >
              Show all items
            </Button>
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
          <Grid columns="1fr" rowGap="2rem" columnGap="1rem" tablet={{ columns: "repeat(3, 1fr)" }}>
            <Tile
              title="Voice & tone"
              linkContent="Learn more"
              href="/kiwi-use/content/voice-and-tone"
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
          </Grid>
          <Slide maxHeight={contentHeight} expanded={isExpandedContent}>
            <div ref={contentRef as React.RefObject<HTMLDivElement>}>
              <Grid
                columns="1fr"
                rowGap="2rem"
                columnGap="1rem"
                tablet={{ columns: "repeat(3, 1fr)" }}
              >
                <Tile
                  title="Social media"
                  linkContent="Learn more"
                  href="/kiwi-use/content/specific-areas/social-media/"
                  icon={<ArrangeLetterIcon />}
                >
                  How we write and use images in social media.
                </Tile>
                <Tile
                  title="Technical content"
                  linkContent="Learn more"
                  href="/kiwi-use/content/specific-areas/technical-content/"
                  icon={<ArrangeLetterIcon />}
                >
                  How we produce technical content at Kiwi.com.
                </Tile>
                <Tile
                  title="Brand guidelines"
                  linkContent="Learn more"
                  href="/kiwi-use/brand/brand-guidelines/"
                  icon={<ArrangeLetterIcon />}
                >
                  Basic brand guidelines and assets to help with your designs.
                </Tile>
                <Tile
                  title="Biz Dev assets"
                  linkContent="Learn more"
                  href="/kiwi-use/guides/bizdev/"
                  icon={<ArrangeLetterIcon />}
                >
                  Lists of assets created for GoodData reports by Biz Dev.
                </Tile>
                <Tile
                  title="Preparing carrier logos"
                  linkContent="Learn more"
                  href="/kiwi-use/guides/preparing-carrier-logos/"
                  icon={<ArrangeLetterIcon />}
                >
                  Guidelines for preparing carrier logo at a high quality.
                </Tile>
                <Tile
                  title="Figma"
                  linkContent="Learn more"
                  href="kiwi-use/guides/working-with-figma/"
                  icon={<ArrangeLetterIcon />}
                >
                  Learn how to work with Figma, structure your design files, and collaborate on
                  deliverables.{" "}
                </Tile>
              </Grid>
            </div>
          </Slide>
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
            `}
          >
            <Button
              size="large"
              onClick={() => setExpandedContent(prev => !prev)}
              circled
              type="primarySubtle"
            >
              Show all items
            </Button>
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
          <Stack flex direction="column" tablet={{ direction: "row", align: "stretch" }}>
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
          </Stack>
        </div>
      </div>
    </Layout>
  );
}
