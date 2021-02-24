import React from "react";
import { Heading, Stack } from "@kiwicom/orbit-components";
import useTheme from "@kiwicom/orbit-components/lib/hooks/useTheme";
import { css } from "styled-components";

import ButtonLink from "./ButtonLink";

interface Props {
  title: string;
  linkContent: string;
  href: string;
  logo: React.ReactNode;
  color: string;
  children: React.ReactNode;
}

export default function BrandedTile({ title, linkContent, href, logo, color, children }: Props) {
  const theme = useTheme();

  // Wrap plain strings in a p tag and otherwise render children
  const content = typeof children !== "string" ? <Stack>{children}</Stack> : <p>{children}</p>;
  return (
    <div
      css={css`
        padding: 2rem;
        border-radius: 1rem;
        background: ${color};
        color: ${theme.orbit.colorTextWhite};
        box-shadow: ${theme.orbit.boxShadowRaised};
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          flex: 1;
          display: flex;
        `}
      >
        <div
          css={css`
            align-self: start;
            flex-shrink: 0;
            width: 2rem;
            height: 2rem;
            background: hsla(0, 0%, 100%, 20%);
            border-radius: ${theme.orbit.borderRadiusCircle};
          `}
        />
        <div
          css={css`
            margin-left: 0.75rem;
            h3 {
              margin-top: 0;
            }
          `}
        >
          <Heading inverted type="title2" as="h3">
            {title}
          </Heading>
          <div
            css={css`
              margin: 0.5rem 0 1.5rem;
            `}
          >
            {content}
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <ButtonLink type="dark" href={href} target="_blank" rel="noopener noreferrer">
          {linkContent}
        </ButtonLink>
        <div
          css={css`
            img {
              max-width: none;
            }
          `}
        >
          {logo}
        </div>
      </div>
    </div>
  );
}
