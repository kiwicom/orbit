import React from "react";
import { Link } from "gatsby";
import { Heading } from "@kiwicom/orbit-components";
import ArrowRight from "./ArrowRight";
import useTheme from "@kiwicom/orbit-components/lib/hooks/useTheme";
import { css } from "styled-components";

interface Props {
  grow?: number;
  title: string;
  icon?: React.ComponentType;
  moreText?: string;
  linkTo?: string;
  children: React.ReactNode;
}

export default function Tile({ title, moreText = "Learn more", linkTo, children }: Props) {
  const theme = useTheme();
  return (
    <div
      css={css`
        padding: 2rem;
        border-radius: 1rem;
        background: ${theme.orbit.paletteWhite};
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
            background: ${theme.orbit.paletteProductLight};
            border-radius: 50%;
          `}
        />
        <div
          css={css`
            margin-left: 0.75rem;
          `}
        >
          <Heading type="title2" as="h3">
            {title}
          </Heading>
          <p
            css={css`
              margin-top: 0.5rem;
              margin-bottom: 1.5rem;
            `}
          >
            {children}
          </p>
        </div>
      </div>
      {linkTo && (
        <div
          css={css`
            text-align: right;
          `}
        >
          <Link
            css={css`
              display: inline-flex;
              align-items: center;
              > * + * {
                margin-left: 0.25rem;
              }
              color: ${theme.orbit.colorTextLinkPrimary};
              font-weight: 500;
              text-decoration: underline;
              &:hover {
                color: ${theme.orbit.colorTextLinkPrimaryHover};
                text-decoration: none;
              }
            `}
            to={linkTo}
          >
            <span>{moreText}</span>
            <ArrowRight />
          </Link>
        </div>
      )}
    </div>
  );
}
