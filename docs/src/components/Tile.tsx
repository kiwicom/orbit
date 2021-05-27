import React from "react";
import { Link } from "gatsby";
import { Heading, Stack, Hide, mediaQueries as mq, TextLink } from "@kiwicom/orbit-components";
import useTheme from "@kiwicom/orbit-components/lib/hooks/useTheme";
import styled, { css } from "styled-components";

import ArrowRight from "./ArrowRight";
import useIsUrlExternal from "../hooks/useIsUrlExternal";

export const ICON_SIZE = "2rem";

interface Props {
  icon?: React.ReactNode;
  title: string;
  fullWidth?: boolean;
  linkContent?: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
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

interface StyledContainerProps extends Pick<Props, "fullWidth"> {
  hasContent: boolean;
}

const StyledWrapper = styled.a<StyledContainerProps>`
  ${({ theme, fullWidth, hasContent }) => `
    display: block;
    padding: 2rem;
    border-radius: 1rem;
    background: ${theme.orbit.paletteWhite};
    box-shadow: ${theme.orbit.boxShadowRaisedSubtle};
    transition: box-shadow ${theme.orbit.durationFast};
    display: flex;
    ${
      fullWidth &&
      `
        width: 100%;
      `
    };
    ${
      hasContent
        ? css`
            flex-direction: column;
          `
        : css`
            align-items: center;
            justify-content: space-between;
          `
    }
    &:hover {
      box-shadow: ${theme.orbit.boxShadowRaised};
    }
  `}
`;

const StyledLinkText = styled(Link)`
  display: inline-flex;
  align-items: center;
  > * + * {
    margin-left: 0.25rem;
  }
  color: ${({ theme }) => theme.orbit.colorTextLinkPrimary};
  font-weight: 500;
  text-decoration: underline;
  &:hover {
    color: ${({ theme }) => theme.orbit.colorTextLinkPrimaryHover};
    text-decoration: none;
  }
`;
const StyledIcon = styled.div`
  ${({ theme }) => `
    align-self: start;
    flex-shrink: 0;
    display: grid;
    justify-content: center;
    align-content: center;
    width: ${ICON_SIZE};
    height: ${ICON_SIZE};
    background: ${theme.orbit.paletteProductLight};
    border-radius: ${theme.orbit.borderRadiusCircle};
    color: ${theme.orbit.paletteProductDark};

    svg {
      width: 20px;
      height: 20px;
    }

    [stroke] {
      stroke: currentColor;
    }
  `}
`;

export default function Tile({
  href,
  icon,
  linkContent,
  title,
  children,
  fullWidth = true,
}: Props) {
  const theme = useTheme();

  const isExternal = useIsUrlExternal(href);

  const getEndLink = () => {
    if (!href) return undefined;
    if (isExternal)
      return (
        <TextLink external href={href}>
          {linkContent}
        </TextLink>
      );
    if (typeof linkContent === "string")
      return (
        <div
          css={css`
            text-align: right;
          `}
        >
          <StyledLinkText to={href}>
            <span>{linkContent}</span>
            <ArrowRight />
          </StyledLinkText>
        </div>
      );
    return (
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
    );
  };
  return (
    <StyledWrapper href={href} fullWidth={fullWidth} hasContent={Boolean(children)}>
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
            <StyledIcon>{icon}</StyledIcon>
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
      {href && getEndLink()}
    </StyledWrapper>
  );
}
