import React from "react";
import { Heading, Stack, Button, Grid, mediaQueries as mq } from "@kiwicom/orbit-components";
import { StyledButtonPrimitive } from "@kiwicom/orbit-components/lib/primitives/ButtonPrimitive";
import useTheme from "@kiwicom/orbit-components/lib/hooks/useTheme";
import styled, { css } from "styled-components";

import { boxShadowDefault, boxShadowActive } from "./mixins";
import { getBgColor, getBgColorHover, getBgColorActive } from "../utils/dark-button";
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

const StyledWrapper = styled.a<{ primary: string; type?: "primary" | "secondary"; color?: string }>`
  ${({ theme, primary, type, color }) => `
    display: block;
    padding: 2rem;
    border-radius: 1rem;
    background: ${primary};
    color: ${theme.orbit.colorTextWhite};
    transition: box-shadow ${theme.orbit.durationFast};
    display: flex;
    width: 100%;
    flex-direction: column;
    ${boxShadowDefault};
    &:hover {
      ${boxShadowActive};
    }

    ${StyledButtonPrimitive} {
      pointer-events: none;
      background: ${getBgColor({ theme, type, color })};
    }

    &:hover ${StyledButtonPrimitive} {
      background: ${getBgColorHover({ theme, type, color })}
    }
    &:focus ${StyledButtonPrimitive} {
      background: ${getBgColor({ theme, type, color })}
    }
    &:active ${StyledButtonPrimitive} {
      background: ${getBgColorActive({ theme, type, color })}
    }
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
      stroke: currentColor;
    }
  `}
`;

const StyledHeading = styled.div`
  h3 {
    line-height: ${ICON_SIZE};
  }
`;

const StyledContent = styled.div`
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
    <StyledWrapper
      className="BrandedTile"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      primary={colorPrimary}
      {...(color === "product" ? { type: "primary" } : { color: colorSecondary })}
    >
      <Stack flex shrink direction="column" justify="between">
        <StyledHeading>
          <Stack inline align="center">
            <StyledIcon secondary={colorSecondary}>{icon}</StyledIcon>
            <Heading inverted type="title2" as="h3">
              {title}
            </Heading>
          </Stack>
        </StyledHeading>
        <StyledContent>{content}</StyledContent>
        <Stack
          flex
          shrink
          direction="column"
          align="center"
          justify="between"
          spacing="small"
          tablet={{ direction: "row" }}
        >
          <Button
            size="large"
            circled
            // interactive elements shouldn't be nested, so we're making this a click-through div
            asComponent="div"
            {...(color === "product" ? { type: "primary" } : { color: colorSecondary })}
          >
            {linkContent}
          </Button>
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
      </Stack>
    </StyledWrapper>
  );
}
