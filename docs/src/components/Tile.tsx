import React from "react";
import { Link } from "gatsby";
import { Heading, Stack, Hide, mediaQueries as mq } from "@kiwicom/orbit-components";
import useTheme from "@kiwicom/orbit-components/lib/hooks/useTheme";
import { css } from "styled-components";

import ArrowRight from "./ArrowRight";

export const ICON_SIZE = "2rem";

interface Props {
  icon?: boolean;
  title: string;
  fullWidth?: boolean;
  linkContent?: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
}

function TileIcon() {
  const theme = useTheme();
  return (
    <div
      css={css`
        align-self: start;
        flex-shrink: 0;
        width: ${ICON_SIZE};
        height: ${ICON_SIZE};
        background: ${theme.orbit.paletteProductLight};
        border-radius: ${theme.orbit.borderRadiusCircle};
      `}
    />
  );
}

function TileTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        h3 {
          line-height: ${ICON_SIZE};
        }
      `}
    >
      <Heading type="title2" as="h3">
        {children}
      </Heading>
    </div>
  );
}

export default function Tile({
  href,
  icon,
  linkContent,
  title,
  children,
  fullWidth = true,
}: Props) {
  const theme = useTheme();

  return (
    <div
      css={css`
        padding: 2rem;
        border-radius: 1rem;
        background: ${theme.orbit.paletteWhite};
        box-shadow: 0px 8px 24px 0px rgba(37, 42, 49, 0.16), 0px 4px 8px 0px rgba(37, 42, 49, 0.08);
        display: flex;
        width: ${fullWidth && "100%"};
        ${children
          ? css`
              flex-direction: column;
            `
          : css`
              align-items: center;
              justify-content: space-between;
            `}
      `}
    >
      <div
        css={css`
          flex: 1;
          display: flex;
          ${mq.largeMobile(`
            > * + * {
              margin-left: 0.75rem;
            };
          `)};
        `}
      >
        {icon && (
          <Hide on={["smallMobile", "mediumMobile"]}>
            <TileIcon />
          </Hide>
        )}
        {children ? (
          <div>
            <TileTitle>{title}</TileTitle>
            <div
              css={css`
                margin: 0.5rem 0 ${href ? "1.5rem" : "0"};
              `}
            >
              {/* wrap plain strings in a p tag and otherwise render children */}
              {typeof children !== "string" ? <Stack>{children}</Stack> : <p>{children}</p>}
            </div>
          </div>
        ) : (
          <TileTitle>{title}</TileTitle>
        )}
      </div>
      {href && (
        <>
          {typeof linkContent === "string" ? (
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
                to={href}
              >
                <span>{linkContent}</span>
                <ArrowRight />
              </Link>
            </div>
          ) : (
            <Link
              css={css`
                color: ${theme.orbit.colorTextLinkPrimary};
                &:hover {
                  color: ${theme.orbit.colorTextLinkPrimaryHover};
                }
              `}
              to={href}
            >
              {linkContent}
            </Link>
          )}
        </>
      )}
    </div>
  );
}
