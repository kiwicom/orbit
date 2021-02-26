import React from "react";
import { Heading, Stack, Inline } from "@kiwicom/orbit-components";
import useTheme from "@kiwicom/orbit-components/lib/hooks/useTheme";
import { css } from "styled-components";

import ButtonLink from "./ButtonLink";
import { ICON_SIZE } from "./Tile";

interface Props {
  title: string;
  linkContent: string;
  href: string;
  logo: React.ReactNode;
  color:
    | {
        primary: string;
        secondary: string;
      }
    | "product";
  children: React.ReactNode;
}

export default function BrandedTile({ title, linkContent, href, logo, color, children }: Props) {
  const theme = useTheme();

  // Wrap plain strings in a p tag and otherwise render children
  const content = typeof children !== "string" ? <Stack>{children}</Stack> : <p>{children}</p>;
  const colorPrimary = color === "product" ? theme.orbit.paletteProductDark : color.primary;
  const colorSecondary = color === "product" ? theme.orbit.paletteProductNormal : color.secondary;
  return (
    <div
      css={css`
        padding: 2rem;
        border-radius: 1rem;
        background: ${colorPrimary};
        color: ${theme.orbit.colorTextWhite};
        box-shadow: 0px 8px 24px 0px rgba(37, 42, 49, 0.16), 0px 4px 8px 0px rgba(37, 42, 49, 0.08);
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          flex: 1;
          display: flex;
          > * + * {
            margin-left: 0.75rem;
          }
        `}
      >
        <div
          css={css`
            align-self: start;
            flex-shrink: 0;
            width: ${ICON_SIZE};
            height: ${ICON_SIZE};
            background: ${colorSecondary};
            border-radius: ${theme.orbit.borderRadiusCircle};
          `}
        />
        <div
          css={css`
            h3 {
              margin-top: 0;
              line-height: ${ICON_SIZE};
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
          <Inline justify="between" align="center">
            <ButtonLink
              {...(color === "product" ? { type: "primary" } : { color: colorSecondary })}
              dark
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
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
          </Inline>
        </div>
      </div>
    </div>
  );
}
