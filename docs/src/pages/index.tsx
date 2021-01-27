import React from "react";
import { Link } from "gatsby";
import { Heading, Inline } from "@kiwicom/orbit-components";
import ArrowRight from "../components/ArrowRight";
import { StarEmpty } from "@kiwicom/orbit-components/icons";
import Layout from "../components/Layout";
import RocketImage from "../components/RocketImage";
import ButtonLink from "../components/ButtonLink";
import Card from "../components/Card";
import styled, { css } from "styled-components";

const CardWrapper = styled.div`
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  > :only-child {
    flex: 1;
  }
`;

export default function Home() {
  return (
    <Layout>
      <RocketImage />
      <div
        css={css`
          /* so that the rest of the content has a higher z-order than the image */
          position: relative;
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;

          > * + * {
            margin-top: 5.25rem;
          }
        `}
      >
        <div>
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
                size="large"
                as={Link}
                iconRight={<ArrowRight />}
                to="/getting-started/for-designers/"
              >
                Get started
              </ButtonLink>
              <ButtonLink
                type="secondary"
                size="large"
                iconLeft={<StarEmpty />}
                href="https://github.com/kiwicom/orbit"
                target="_blank"
                rel="noopener noreferer"
              >
                Star us on GitHub
              </ButtonLink>
            </Inline>
          </div>
        </div>

        <Inline spacing="XLarge">
          <CardWrapper>
            <Card
              title="Components"
              moreText="See our components"
              linkTo="/components/action/button/"
            >
              Our components are a collection of interface elements that can be reused across the
              Orbit design system.
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card
              title="Patterns"
              moreText="See our patterns"
              linkTo="/design-patterns/progressive-disclosure/"
            >
              Missing description for patterns card.
            </Card>
          </CardWrapper>
        </Inline>

        <div
          css={css`
            > * + * {
              margin-top: 2rem;
            }
          `}
        >
          <Heading as="h2">Foundation</Heading>
          <Inline spacing="XLarge">
            <CardWrapper>
              <Card title="Colors" linkTo="/foundation/colors/">
                Color is used to signal structure on a page, to highlight or emphasize...
              </Card>
            </CardWrapper>
            <CardWrapper>
              <Card title="Typography">
                Typography is critical for communicating the hierarchy of a page.
              </Card>
            </CardWrapper>
            <CardWrapper>
              <Card title="Spacings">
                Consistent spacing makes an interface more clear and easy to scan.
              </Card>
            </CardWrapper>
          </Inline>
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
          <Inline spacing="XLarge">
            <CardWrapper>
              <Card title="Voice & tone" linkTo="/kiwi-use/content/specific-areas/social-media/">
                How we write at Kiwi.com.
              </Card>
            </CardWrapper>
            <CardWrapper>
              <Card title="Grammar & mechanics" linkTo="/kiwi-use/content/grammar-and-mechanics/">
                Typography is critical for communicating the hierarchy of a page.Basic grammar
                guidelines for writing with Orbit.
              </Card>
            </CardWrapper>
            <CardWrapper>
              <Card title="Glossary" linkTo="/kiwi-use/content/glossary/">
                A list of most used words and phrases in Kiwi.com products.
              </Card>
            </CardWrapper>
          </Inline>
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
      </div>
    </Layout>
  );
}
