import React from "react";
import { Link } from "gatsby";
import { Heading, Inline, Stack, Grid, Button } from "@kiwicom/orbit-components";
import { NewWindow } from "@kiwicom/orbit-components/icons";
import { css } from "styled-components";
import { WindowLocation } from "@reach/router";

import { RecentBookmarks } from "../components/Bookmarks";
// temporarily extract images from @streamlinehq/streamlinehq until they fix the install script
import ModulePuzzleIcon from "../images/streamline-light/module-puzzle.svg";
import ColorBrushIcon from "../images/streamline-light/color-brush.svg";
import ExpandDiagonalIcon from "../images/streamline-light/expand-diagonal-1.svg";
import LoveItTextIcon from "../images/streamline-light/love-it-text.svg";
import SpellingCheckIcon from "../images/streamline-light/spelling-check.svg";
import ArrangeLetterIcon from "../images/streamline-light/arrange-letter.svg";
import ComputerBugIcon from "../images/streamline-light/computer-bug.svg";
import LoveBirdIcon from "../images/streamline-light/love-bird.svg";
import StartupLaunchIcon from "../images/streamline-light/startup-launch-1.svg";
import ReadArt from "../images/streamline-light/read-art.svg";
import SearchButton from "../components/Search/SearchButton";
import TypographyIcon from "../components/icons/Typography";
import PuzzleIcon from "../components/icons/Puzzle";
import FigmaIcon from "../components/icons/Figma";
import GitHubIcon from "../components/icons/GitHub";
import Search from "../components/Search";
import ArrowRight from "../components/ArrowRight";
import Layout from "../components/Layout";
import RocketImage from "../components/RocketImage";
import Tile from "../components/Tile";
import HeaderBox from "../components/HeaderBox";
import BrandedTile from "../components/BrandedTile";
import GitHubLogo from "../images/github-full.svg";
import FigmaLogo from "../images/figma-logo.svg";
import TwitterLogo from "../images/twitter.svg";
import srcTequila from "../images/tequila.png";
import { MAX_CONTENT_WIDTH } from "../consts";
import ScreenReaderText from "../components/ScreenReaderText";
import { useKeyboard } from "../services/KeyboardProvider";
import { BookmarkProvider } from "../services/bookmarks";

interface Props {
  location: WindowLocation;
  path: string;
}

function GatsbyLinkToButton({ href, ...props }: { href: string }) {
  return <Link to={href} {...props} />;
}

export default function Home({ location, path }: Props) {
  const [isSearchOpen, setSearchOpen] = useKeyboard();

  return (
    <BookmarkProvider page={path} location={location}>
      <Layout
        location={location}
        title="Orbit design system"
        description="An open source design system for your next travel project."
        path="/"
        isHome
      >
        <HeaderBox>
          <RocketImage />
          <Heading type="display">
            <div
              css={css`
                max-width: 43rem;
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
                asComponent={GatsbyLinkToButton}
                href="/getting-started/"
              >
                Get started
              </Button>
              <SearchButton onClick={() => setSearchOpen(true)} />
              {isSearchOpen && <Search onClose={() => setSearchOpen(false)} />}
            </Inline>
          </div>
        </HeaderBox>
        <div
          css={css`
            /* so that the rest of the content has a higher z-order than the image */

            top: 100px;
            width: 100%;
            max-width: calc(${MAX_CONTENT_WIDTH} - 10rem);
            margin: 0 auto;
            z-index: 1;

            > * + * {
              margin-top: 5.25rem;
            }
          `}
        >
          <RecentBookmarks />
          <Stack
            flex
            direction="column"
            justify="between"
            largeMobile={{ direction: "row", align: "stretch" }}
          >
            <Tile
              title="Components"
              linkContent="See our components"
              href="/components/"
              icon={<PuzzleIcon />}
            >
              Our components are a collection of interface elements that can be reused across the
              Orbit design system.
            </Tile>
            <Tile
              title="Patterns"
              linkContent="See our patterns"
              href="/design-patterns/"
              icon={<ModulePuzzleIcon />}
            >
              Make the most of our components by using our design patterns to address common design
              problems.
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
            <Grid
              columns="1fr"
              tablet={{ columns: "repeat(2, 1fr)" }}
              desktop={{ columns: "repeat(3, 1fr)" }}
              gap="1rem"
            >
              <Tile
                title="Colors"
                linkContent="See our colors"
                href="/foundation/color/"
                icon={<ColorBrushIcon />}
              >
                Color is used to signal structure, highlight importance, and display different
                states.
              </Tile>
              <Tile
                title="Typography"
                linkContent="See our typography"
                href="foundation/typography/"
                icon={<TypographyIcon />}
              >
                Typography is critical for communicating the hierarchy of a page.
              </Tile>
              <Tile
                title="Spacing"
                linkContent="See our spacing"
                href="foundation/spacing/"
                icon={<ExpandDiagonalIcon />}
              >
                Consistent spacing makes an interface more clear and easy to scan.
              </Tile>
            </Grid>
            <div
              css={css`
                display: flex;
                justify-content: flex-end;
              `}
            >
              <Button href="/foundation/" size="large" circled type="primarySubtle">
                See all items
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
            <Grid
              columns="1fr"
              tablet={{ columns: "repeat(2, 1fr)" }}
              desktop={{ columns: "repeat(3, 1fr)" }}
              gap="1rem"
            >
              <Tile
                title="Voice & tone"
                linkContent="See our voice"
                href="/kiwi-use/content/voice-and-tone/"
                icon={<LoveItTextIcon />}
              >
                How we write at Kiwi.com.
              </Tile>
              <Tile
                title="Grammar & mechanics"
                linkContent="See our standards"
                href="/kiwi-use/content/grammar-and-mechanics/"
                icon={<SpellingCheckIcon />}
              >
                Basic grammar guidelines for writing with Orbit.
              </Tile>
              <Tile
                title="Glossary"
                linkContent="See our terms"
                href="/kiwi-use/content/glossary/"
                icon={<ArrangeLetterIcon />}
              >
                A list of commonly used words and phrases in Kiwi.com products.
              </Tile>
            </Grid>
            <div
              css={css`
                display: flex;
                justify-content: flex-end;
              `}
            >
              <Button href="/kiwi-use/content/" size="large" circled type="primarySubtle">
                See all items
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
            <Grid columns="1fr" gap="1rem" desktop={{ columns: "1fr 1fr" }}>
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
                If you find any bugs in our components, report them on Github and we’ll fix them as
                soon as possible. It’s our highest priority to have Orbit working as expected.
              </BrandedTile>
              <BrandedTile
                title="Get the Figma library"
                icon={<ReadArt />}
                href="https://www.figma.com/@orbitbykiwi"
                linkContent="Go to Figma profile"
                logo={<FigmaLogo />}
                color={{
                  primary: "#D1431A",
                  secondary: "#EC685A",
                }}
              >
                Visit our community profile and download all of our libraries and resources for
                free.
              </BrandedTile>
              <BrandedTile
                title="Follow us on Twitter"
                icon={<LoveBirdIcon />}
                href="https://twitter.com/OrbitKiwi"
                linkContent="Follow Orbit on Twitter"
                logo={<TwitterLogo />}
                color={{
                  primary: "#0989CF",
                  secondary: "#179CE3",
                }}
              >
                Twitter is one of our main platforms for sharing. Everything important that is
                happening around Orbit is published on Twitter.
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
            </Grid>
          </div>

          <div
            css={css`
              margin-bottom: 4rem;
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
    </BookmarkProvider>
  );
}
