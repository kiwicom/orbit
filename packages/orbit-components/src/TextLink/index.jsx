// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import createRel from "../primitives/ButtonPrimitive/common/createRel";

import type { Props, GetLinkStyleProps } from ".";

const getColor = ({ type }) => ({ theme }) => {
  const tokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextLinkPrimary,
    [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextLinkSecondary,
    [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDark,
    [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDark,
    [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDark,
    [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDark,
    [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhite,
  };

  return tokens[type];
};

const getHoverColor = ({ type }) => ({ theme }) => {
  const tokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.orbit.paletteProductDarkHover,
    [TYPE_OPTIONS.SECONDARY]: theme.orbit.paletteProductDarkHover,
    [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDarkHover,
    [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDarkHover,
    [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDarkHover,
    [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDarkHover,
    [TYPE_OPTIONS.WHITE]: theme.orbit.paletteProductLight,
  };
  return tokens[type];
};

const getActiveColor = ({ type }) => ({ theme }) => {
  const tokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.orbit.paletteProductDarker,
    [TYPE_OPTIONS.SECONDARY]: theme.orbit.paletteProductDarker,
    [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDarker,
    [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDarker,
    [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDarker,
    [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDarker,
    [TYPE_OPTIONS.WHITE]: theme.orbit.paletteProductLight,
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

const StyledIconContainer = styled(({ children, className }) => (
  <span className={className}>{children}</span>
))`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    svg {
      width: ${theme.orbit.widthIconSmall};
      height: ${theme.orbit.heightIconSmall};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledIconContainer.defaultProps = {
  theme: defaultTheme,
};

const resolveUnderline = ({ type, theme, noUnderline }) => {
  if (noUnderline) return "none";
  return type === TYPE_OPTIONS.SECONDARY
    ? theme.orbit.textDecorationTextLinkSecondary
    : theme.orbit.textDecorationTextLinkPrimary;
};

export const getLinkStyle = ({ theme }: GetLinkStyleProps): any => css`
  // Common styles for TextLink and "a" in Text

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

  &:active,
  &:focus {
    outline: none;
    text-decoration: none;
    color: ${getActiveColor};
  }
`;

export const StyledTextLink: any = styled(
  ({ theme, type, standAlone, noUnderline, asComponent: Component, ...props }) => (
    <Component {...props}>{props.children}</Component>
  ),
)`
  ${({ theme, standAlone }) => css`
    font-family: ${theme.orbit.fontFamily};
    font-weight: ${theme.orbit.fontWeightLinks};
    font-size: ${getSizeToken};
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    transition: color ${theme.orbit.durationFast} ease-in-out;
    height: ${standAlone && theme.orbit.heightButtonNormal};
    ${getLinkStyle};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
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
  tabIndex,
  asComponent = DefaultComponent,
  stopPropagation = false,
  title,
  standAlone,
  noUnderline,
}: Props): React.Node => {
  const onClickHandler = ev => {
    if (stopPropagation) {
      ev.stopPropagation();
    }
    if (onClick) onClick(ev);
  };

  return (
    <StyledTextLink
      aria-current={ariaCurrent}
      type={type}
      size={size}
      href={href}
      target={external ? "_blank" : undefined}
      rel={createRel({ href, external, rel })}
      onClick={onClickHandler}
      data-test={dataTest}
      tabIndex={tabIndex || (!href ? "0" : undefined)}
      role={!href ? "button" : undefined}
      asComponent={asComponent}
      title={title}
      noUnderline={noUnderline}
      standAlone={standAlone}
    >
      {<IconContainer>{iconLeft}</IconContainer>}
      {children}
      {<IconContainer>{iconRight}</IconContainer>}
    </StyledTextLink>
  );
};

export default TextLink;
