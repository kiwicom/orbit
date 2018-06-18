// @flow
import * as React from "react";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import styled from "styled-components";

export const TYPE_OPTIONS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

type Props = {|
  children: React.Node,
  href: string,
  onClick?: (SyntheticEvent<HTMLLinkElement>) => any,
  external: boolean,
  type: $Values<typeof TYPE_OPTIONS>,
  rel?: string,
  theme: typeof defaultTokens,
|};

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
  const { type, children, href, external, theme, rel, onClick } = props;
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

TextLink.defaultProps = {
  type: "primary",
  external: false,
  theme: defaultTokens,
};

export default TextLink;
