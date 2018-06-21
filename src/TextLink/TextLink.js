// @flow
import * as React from "react";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";

import TYPE_OPTIONS from "./consts";
import type { Props } from "./TextLink";

const StyledTextLink = styled(({ tokens, theme, type, ...props }) => (
  <a {...props}>{props.children}</a>
))`
      color: ${({ tokens, type }) => tokens.colorTextLink[type]};
      font-weight: ${({ theme }) => theme.fontWeightLinks}; 
      text-decoration: ${({ theme, type }) =>
        type === "secondary" ? theme.textDecorationLinkSecondary : theme.textDecorationLinkPrimary};
      cursor: pointer;
      transition: color ${({ theme }) => theme.durationFast} ease-in-out;
    }
    &:hover {
      text-decoration: ${({ theme, type }) =>
        type === "secondary"
          ? theme.textDecorationLinkSecondaryHover
          : theme.textDecorationLinkPrimaryHover};
      color: ${({ theme }) => theme.colorLinkPrimaryHover};
    }
    &:focus {
      outline-width: 3px;
    }        
  `;

const TextLink = (props: Props) => {
  const {
    type = TYPE_OPTIONS.PRIMARY,
    children,
    href,
    external = false,
    theme = defaultTokens,
    rel,
    onClick,
  } = props;
  const tokens = {
    colorTextLink: {
      [TYPE_OPTIONS.PRIMARY]: theme.colorLinkPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.colorLinkSecondary,
    },
  };

  return (
    <StyledTextLink
      type={type}
      href={href}
      target={external ? "_blank" : undefined}
      rel={rel}
      tokens={tokens}
      theme={theme}
      onClick={onClick}
    >
      {children}
    </StyledTextLink>
  );
};

export default TextLink;
