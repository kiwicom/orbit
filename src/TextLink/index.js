// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import TYPE_OPTIONS from "./consts";

import type { Props } from "./index";

const getColor = ({ theme, type }) => {
  const tokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextLinkPrimary,
    [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextLinkSecondary,
  };

  return tokens[type];
};

const IconContainer = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  color: ${getColor};
  transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  & svg {
    height: 16px;
    width: 16px;
  }
`;

IconContainer.defaultProps = {
  theme: defaultTokens,
};

export const StyledTextLink = styled(({ theme, type, ...props }) => (
  <a {...props}>{props.children}</a>
))`
  color: ${getColor};
  font-weight: ${({ theme }) => theme.orbit.fontWeightLinks};
  text-decoration: ${({ theme, type }) =>
    type === [TYPE_OPTIONS.SECONDARY]
      ? theme.orbit.textDecorationTextLinkSecondary
      : theme.orbit.textDecorationTextLinkPrimary};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  &:hover {
    text-decoration: ${({ theme, type }) =>
      type === [TYPE_OPTIONS.SECONDARY]
        ? theme.orbit.textDecorationTextLinkSecondaryHover
        : theme.orbit.textDecorationTextLinkPrimaryHover};
    color: ${({ theme, type }) =>
      type === [TYPE_OPTIONS.SECONDARY]
        ? theme.orbit.colorTextLinkSecondaryHover
        : theme.orbit.colorTextLinkPrimaryHover};

    ${IconContainer} {
      color: ${({ theme, type }) =>
        type === [TYPE_OPTIONS.SECONDARY]
          ? theme.orbit.colorTextLinkSecondaryHover
          : theme.orbit.colorTextLinkPrimaryHover};
    }
  }
  &:focus {
    outline-width: 3px;
  }
`;

StyledTextLink.defaultProps = {
  theme: defaultTokens,
};

const TextLink = ({
  type = TYPE_OPTIONS.PRIMARY,
  children,
  href,
  external = false,
  rel,
  icon,
  onClick,
  dataTest,
}: Props) => (
  <StyledTextLink
    type={type}
    href={href}
    target={external ? "_blank" : undefined}
    rel={rel}
    onClick={onClick}
    data-test={dataTest}
  >
    {children}
    {icon && <IconContainer type={type}>{icon}</IconContainer>}
  </StyledTextLink>
);
export default TextLink;
