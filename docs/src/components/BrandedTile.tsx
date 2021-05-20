import React from "react";
import { Heading, Stack, mediaQueries as mq } from "@kiwicom/orbit-components";
import useTheme from "@kiwicom/orbit-components/lib/hooks/useTheme";
import styled, { css } from "styled-components";

import ButtonLink from "./ButtonLink";
import { ICON_SIZE } from "./Tile";

interface Props {
  title: string;
  icon: React.ReactNode;
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

const StyledWrapper = styled.div<{ primary: string }>`
  ${({ theme, primary }) => `
    padding: 2rem;
    border-radius: 1rem;
    background: ${primary};
    color: ${theme.orbit.colorTextWhite};
    box-shadow: 0px 8px 24px 0px rgba(37, 42, 49, 0.16), 0px 4px 8px 0px rgba(37, 42, 49, 0.08);
    display: flex;
    width: 100%;
    flex-direction: column;
  `};
`;

const StyledIcon = styled.div<{ secondary: string }>`
  ${({ theme, secondary }) => css`
    align-self: start;
    flex-shrink: 0;
    width: ${ICON_SIZE};
    height: ${ICON_SIZE};
    display: none;
    background: ${secondary};
    border-radius: ${theme.orbit.borderRadiusCircle};
    ${mq.largeMobile(`
      display: grid;
      align-content: center;
      justify-content: center;
    `)};

    svg {
      width: 20px;
      height: 20px;
    }

    [stroke] {
      stroke: currentColor;
    }
  `}
`;

const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  h3 {
    margin-top: 0;
    line-height: ${ICON_SIZE};
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-shrink: 1;
  height: 100%;
  margin: 0.5rem 0 1.5rem;
`;

export default function BrandedTile({
  title,
  icon,
  linkContent,
  href,
  logo,
  color,
  children,
}: Props) {
  const theme = useTheme();

  // Wrap plain strings in a p tag and otherwise render children
  const content = typeof children !== "string" ? <Stack>{children}</Stack> : <p>{children}</p>;
  const colorPrimary = color === "product" ? theme.orbit.paletteProductDark : color.primary;
  const colorSecondary = color === "product" ? theme.orbit.paletteProductNormal : color.secondary;

  return (
    <StyledWrapper primary={colorPrimary}>
      <Stack inline>
        <StyledIcon secondary={colorSecondary}>{icon}</StyledIcon>
        <StyledHeading>
          <Heading inverted type="title2" as="h3">
            {title}
          </Heading>
          <StyledContent>{content}</StyledContent>
        </StyledHeading>
      </Stack>
      <Stack
        inline
        direction="column"
        largeMobile={{ direction: "row" }}
        align="center"
        justify="between"
      >
        <ButtonLink
          {...(color === "product" ? { type: "primary" } : { color: colorSecondary })}
          dark
          href={href}
          target="_blank"
          title={linkContent}
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
      </Stack>
    </StyledWrapper>
  );
}
