// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import TYPE_OPTIONS from "./consts";

import type { Props } from "./index";

export const StyledTextLink = styled(({ tokens, theme, type, ...props }) => (
  <a {...props}>{props.children}</a>
))`
      color: ${({ tokens, type }) => tokens.colorTextLink[type]};
      font-weight: ${({ theme }) => theme.orbit.fontWeightLinks}; 
      text-decoration: ${({ theme, type }) =>
        type === [TYPE_OPTIONS.SECONDARY]
          ? theme.orbit.textDecorationTextLinkSecondary
          : theme.orbit.textDecorationTextLinkPrimary};
      cursor: pointer;
      transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
    }
    &:hover {
      text-decoration: ${({ theme, type }) =>
        type === [TYPE_OPTIONS.SECONDARY]
          ? theme.orbit.textDecorationTextLinkSecondaryHover
          : theme.orbit.textDecorationTextLinkPrimaryHover};
      color: ${({ theme, type }) =>
        type === [TYPE_OPTIONS.SECONDARY]
          ? theme.orbit.colorTextLinkSecondaryHover
          : theme.orbit.colorTextLinkPrimaryHover};
    }
    &:focus {
      outline-width: 3px;
    }        
  `;

StyledTextLink.defaultProps = {
  theme: defaultTokens,
};

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
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextLinkPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextLinkSecondary,
    },
  };

  return (
    <StyledTextLink
      type={type}
      href={href}
      target={external ? "_blank" : undefined}
      rel={rel}
      tokens={tokens}
      onClick={onClick}
    >
      {children}
    </StyledTextLink>
  );
};

export default TextLink;
