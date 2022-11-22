import * as React from "react";
import styled, { css } from "styled-components";

import type * as Common from "../common/types";
import type { Theme } from "../defaultTheme";
import defaultTheme from "../defaultTheme";
import type { Type, Props } from "./types";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import createRel from "../primitives/ButtonPrimitive/common/createRel";

type GetTextLinkTokensType = ({
  type,
}: {
  type?: Type;
}) => ({ theme }: { theme: Theme }) => string | null;

const getColor: GetTextLinkTokensType = ({ type }) => ({ theme }) => {
  const tokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextLinkPrimary,
    [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextLinkSecondary,
    [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDark,
    [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDark,
    [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDark,
    [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDark,
    [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhite,
  };

  if (!type) return null;

  return tokens[type];
};

const getHoverColor: GetTextLinkTokensType = ({ type }) => ({ theme }) => {
  const tokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.orbit.paletteProductDarkHover,
    [TYPE_OPTIONS.SECONDARY]: theme.orbit.paletteProductDarkHover,
    [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDarkHover,
    [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDarkHover,
    [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDarkHover,
    [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDarkHover,
    [TYPE_OPTIONS.WHITE]: theme.orbit.paletteProductLight,
  };

  if (!type) return null;

  return tokens[type];
};

const getActiveColor: GetTextLinkTokensType = ({ type }) => ({ theme }) => {
  const tokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.orbit.paletteProductDarker,
    [TYPE_OPTIONS.SECONDARY]: theme.orbit.paletteProductDarker,
    [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDarker,
    [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDarker,
    [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDarker,
    [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDarker,
    [TYPE_OPTIONS.WHITE]: theme.orbit.paletteProductLight,
  };

  if (!type) return null;

  return tokens[type];
};

const getSizeToken = ({ theme, size }: { theme: Theme; size: Common.Size }): string => {
  const sizeTokens = {
    [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeTextLarge,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeTextNormal,
    [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeTextSmall,
  };

  return sizeTokens[size];
};

const StyledIconContainer = styled(({ children, className }) => (
  <span className={className}>{children}</span>
))`
  ${({ theme }: { theme: Theme }) => css`
    display: flex;
    align-items: center;

    svg {
      width: ${theme.orbit.widthIconSmall};
      height: ${theme.orbit.heightIconSmall};
    }
  `}
`;

StyledIconContainer.defaultProps = {
  theme: defaultTheme,
};

const resolveUnderline = ({
  type,
  theme,
  $noUnderline,
}: {
  type: Type;
  theme: Theme;
  $noUnderline: boolean;
}) => {
  if ($noUnderline) return "none";
  return type === TYPE_OPTIONS.SECONDARY
    ? theme.orbit.textDecorationTextLinkSecondary
    : theme.orbit.textDecorationTextLinkPrimary;
};

// Common styles for TextLink and "a" in Text
export const getLinkStyle = ({ theme }: { theme: Theme; type: Props["type"] }) => css`
  &,
  &:link,
  &:visited {
    color: ${getColor};
    text-decoration: ${resolveUnderline};
    font-weight: ${theme.orbit.fontWeightLinks};
  }

  &:hover {
    outline: none;
    text-decoration: none;
    color: ${getHoverColor};
  }

  &:active {
    outline: none;
    text-decoration: none;
    color: ${getActiveColor};
  }
`;

export const StyledTextLink = styled(({ asComponent: Component, ...props }) => (
  <Component {...props}>{props.children}</Component>
))`
  ${({ theme, $standAlone, size }) => css`
    font-family: ${theme.orbit.fontFamily};
    font-weight: ${theme.orbit.fontWeightLinks};
    font-size: ${getSizeToken({ theme, size })};
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    transition: color ${theme.orbit.durationFast} ease-in-out;
    height: ${$standAlone && theme.orbit.heightButtonNormal};
    ${getLinkStyle};
  `}
`;

StyledTextLink.defaultProps = {
  theme: defaultTheme,
};

// eslint-disable-next-line jsx-a11y/anchor-has-content
const DefaultComponent = props => <a {...props} />;

const IconContainer = ({ children }) => {
  if (!children) return null;
  return <StyledIconContainer>{children}</StyledIconContainer>;
};

const TextLink = ({
  ariaCurrent,
  type = TYPE_OPTIONS.PRIMARY,
  size,
  children,
  href,
  external = false,
  rel,
  iconLeft,
  iconRight,
  onClick,
  dataTest,
  id,
  tabIndex,
  asComponent = DefaultComponent,
  stopPropagation = false,
  title,
  standAlone,
  noUnderline,
}: Props) => {
  const onClickHandler = (ev: React.SyntheticEvent<HTMLAnchorElement>) => {
    if (stopPropagation) {
      ev.stopPropagation();
    }
    if (onClick) onClick(ev);
  };

  return (
    <StyledTextLink
      aria-current={ariaCurrent}
      id={id}
      type={type}
      size={size}
      href={href}
      target={external ? "_blank" : undefined}
      rel={createRel({ href, external, rel })}
      onClick={onClickHandler}
      data-test={dataTest}
      tabIndex={tabIndex || (!href ? 0 : undefined)}
      role={!href ? "button" : undefined}
      asComponent={asComponent}
      title={title}
      $noUnderline={noUnderline}
      $standAlone={standAlone}
    >
      <IconContainer>{iconLeft}</IconContainer>
      {children}
      <IconContainer>{iconRight}</IconContainer>
    </StyledTextLink>
  );
};

export default TextLink;
