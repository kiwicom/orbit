// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import defaultTheme from "../defaultTheme";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";

import type { Props, GetLinkStyleProps } from "./index";

const getColor = ({ theme, type }) => {
  const tokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextLinkPrimary,
    [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextLinkSecondary,
  };

  return tokens[type];
};

const getFocusColor = ({ theme, type }) => {
  const tokens = {
    [TYPE_OPTIONS.PRIMARY]: convertHexToRgba(theme.orbit.paletteProductNormal, 10),
    [TYPE_OPTIONS.SECONDARY]: convertHexToRgba(theme.orbit.paletteInkLight, 10),
  };

  return tokens[type];
};

const getSizeToken = () => ({ theme, size }) => {
  const sizeTokens = {
    [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeTextLarge,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeTextNormal,
    [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeTextSmall,
  };
  return size && sizeTokens[size];
};

const IconContainer = styled(({ children, className }) => (
  <span className={className}>{children}</span>
))`
  display: flex;
  align-items: center;
  color: ${getColor};
  transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  & svg {
    width: ${({ theme }) => theme.orbit.widthIconSmall};
    height: ${({ theme }) => theme.orbit.heightIconSmall};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

export const getLinkStyle = ({
  theme,
  type,
}: GetLinkStyleProps) => css` // Common styles for TextLink and "a" in Text

  &, &:link, &:visited {
    color: ${getColor({ theme, type })};
    text-decoration: ${
      type === TYPE_OPTIONS.SECONDARY
        ? theme.orbit.textDecorationTextLinkSecondary
        : theme.orbit.textDecorationTextLinkPrimary
    };
      font-weight: ${theme.orbit.fontWeightLinks};
  }

  &:hover, &:active {
    text-decoration: ${
      type === TYPE_OPTIONS.SECONDARY
        ? theme.orbit.textDecorationTextLinkSecondaryHover
        : theme.orbit.textDecorationTextLinkPrimaryHover
    };
      color: ${
        type === TYPE_OPTIONS.SECONDARY
          ? theme.orbit.colorTextLinkSecondaryHover
          : theme.orbit.colorTextLinkPrimaryHover
      };
`;

export const StyledTextLink = styled(({ theme, type, asComponent: Component, ...props }) => (
  <Component {...props}>{props.children}</Component>
))`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-weight: ${({ theme }) => theme.orbit.fontWeightLinks};
  font-size: ${getSizeToken};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  ${getLinkStyle};

  ${IconContainer} {
    color: ${({ theme, type }) =>
      type === TYPE_OPTIONS.SECONDARY
        ? theme.orbit.colorTextLinkSecondaryHover
        : theme.orbit.colorTextLinkPrimaryHover};
  }
  }
  :focus {
    outline: none;
    background: ${getFocusColor};
    box-shadow: 0px 0px 0px 4px ${getFocusColor};
  }
  :focus:not(:focus-visible) {
    background: ${getFocusColor};
    box-shadow: 0px 0px 0px 4px ${getFocusColor}
  }
  :-moz-focusring,
  :focus-visible {
    background: ${getFocusColor};
    box-shadow: 0px 0px 0px 4px ${getFocusColor};
  }
`;

StyledTextLink.defaultProps = {
  theme: defaultTheme,
};

// eslint-disable-next-line jsx-a11y/anchor-has-content
const DefaultComponent = props => <a {...props} />;

const TextLink = ({
  type = TYPE_OPTIONS.PRIMARY,
  size,
  children,
  href,
  external = false,
  rel,
  icon,
  onClick,
  dataTest,
  tabIndex,
  asComponent = DefaultComponent,
}: Props) => {
  const relValues = rel ? rel.split(" ") : [];

  // add noopener and noreferrer whenever external
  if (relValues && external) {
    if (!relValues.includes("noopener")) {
      relValues.push("noopener");
    }
    if (!relValues.includes("noreferrer")) {
      relValues.push("noreferrer");
    }
  }

  return (
    <StyledTextLink
      type={type}
      size={size}
      href={href}
      target={external ? "_blank" : undefined}
      rel={relValues && relValues.join(" ")}
      onClick={onClick}
      data-test={dataTest}
      tabIndex={tabIndex || (!href ? "0" : undefined)}
      role={!href ? "button" : undefined}
      asComponent={asComponent}
    >
      {children}
      {icon && <IconContainer type={type}>{icon}</IconContainer>}
    </StyledTextLink>
  );
};
export default TextLink;
