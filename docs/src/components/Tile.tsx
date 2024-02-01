import React from "react";
import { Link } from "gatsby";
import { Heading, Stack, Hide, mediaQueries as mq } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

import { boxShadowDefault, boxShadowActive } from "./mixins";
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
  isBookmark?: boolean;
  inline?: boolean;
  onClick?: () => void;
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

interface StyledContainerProps {
  href?: string;
  to?: string;
  $hasContent: boolean;
  $fullWidth: boolean;
  $inline?: boolean;
}

const StyledWrapper = styled.div<StyledContainerProps>`
  ${({ theme, $fullWidth, href, to, $hasContent: hasContent, $inline }) => css`
    padding: 2rem;
    border-radius: 1rem;
    background: ${theme.orbit.paletteWhite};
    transition: box-shadow ${theme.orbit.durationFast};
    display: flex;
    width: ${$fullWidth && "100%"};
    ${boxShadowDefault};
    ${hasContent
      ? css`
          flex-direction: ${$inline ? "row" : "column"};
        `
      : css`
          align-items: center;
          justify-content: space-between;
        `}
    ${(href || to) &&
    css`
      &:hover {
        ${boxShadowActive};
      }
    `};
  `}
`;

interface TileWrapperProps {
  href?: string;
  $fullWidth: boolean;
  $hasContent: boolean;
  $inline?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

function TileWrapper({ href, ...props }: TileWrapperProps) {
  const isExternal = useIsUrlExternal(href);

  if (href) {
    return isExternal ? (
      <StyledWrapper as="a" href={href} target="_blank" rel="noopener noreferrer" {...props} />
    ) : (
      <StyledWrapper as={Link} to={href} {...props} />
    );
  }

  return <StyledWrapper {...props} />;
}

const StyledIcon = styled.div<{ isBookmark?: boolean }>`
  ${({ theme, isBookmark }) => `
    align-self: start;
    flex-shrink: 0;
    display: grid;
    justify-content: center;
    align-content: center;
    width: ${ICON_SIZE};
    height: ${ICON_SIZE};
    background: ${isBookmark ? theme.orbit.paletteOrangeLight : theme.orbit.paletteProductLight};
    border-radius: ${theme.orbit.borderRadiusFull};
    color: ${isBookmark ? theme.orbit.paletteOrangeNormal : theme.orbit.paletteProductDark};

    svg {
      width: 20px;
      height: 20px;
      stroke: currentColor;
    }


  `}
`;

const StyledEndLinkWrapper = styled.span`
  pointer-events: none;
`;

const StyledTextLink = styled.span`
  ${({ theme }) => `
    font-weight: ${theme.orbit.fontWeightLinks};
    color: ${theme.orbit.colorTextLinkPrimary};
    text-decoration: underline;
    ${StyledWrapper}:hover & {
      color: ${theme.orbit.paletteProductNormalHover};
      text-decoration: none;
    }
  `};
`;

const StyledLinkTextWrapper = styled.div`
  text-align: right;
`;

const StyledLinkText = styled(StyledTextLink)`
  display: inline-flex;
  align-items: center;
  > * + * {
    margin-left: 0.25rem;
  }
`;

const StyledLinkNode = styled.span`
  ${({ theme }) => `
    color: ${theme.orbit.colorTextLinkPrimary};
    ${StyledWrapper}:hover & {
      color: ${theme.orbit.colorTextLinkPrimaryHover};
    }
  `};
`;

interface EndLinkProps {
  href: string;
  children?: React.ReactNode;
}

function EndLink({ href, children }: EndLinkProps) {
  const isExternal = useIsUrlExternal(href);

  if (isExternal) {
    return <StyledTextLink>{children}</StyledTextLink>;
  }

  if (typeof children === "string") {
    return (
      <StyledLinkTextWrapper>
        <StyledLinkText>
          <span>{children}</span>
          <ArrowRight />
        </StyledLinkText>
      </StyledLinkTextWrapper>
    );
  }

  return <StyledLinkNode>{children}</StyledLinkNode>;
}

export default function Tile({
  href,
  icon,
  linkContent,
  title,
  inline,
  children,
  fullWidth = true,
  isBookmark,
  onClick,
}: Props) {
  return (
    <TileWrapper
      onClick={onClick}
      href={href}
      $fullWidth={fullWidth}
      $hasContent={Boolean(children)}
      $inline={inline}
    >
      <div
        css={css`
          flex: 1;
          display: flex;
          height: 100%;
          ${mq.largeMobile(`
            > * + * {
              margin-left: 0.75rem;
            };
          `)};
        `}
      >
        {icon && (
          <Hide on={["smallMobile", "mediumMobile"]}>
            <StyledIcon isBookmark={isBookmark}>{icon}</StyledIcon>
          </Hide>
        )}
        {children ? (
          <div>
            <TileTitle>{title}</TileTitle>
            <div
              css={css`
                margin: 0.5rem 0 ${href && linkContent ? "1.5rem" : "0"};
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
        <StyledEndLinkWrapper>
          <EndLink href={href}>{linkContent}</EndLink>
        </StyledEndLinkWrapper>
      )}
    </TileWrapper>
  );
}
