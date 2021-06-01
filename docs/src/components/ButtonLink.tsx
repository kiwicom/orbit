import React from "react";
import styled from "styled-components";
import { PolymorphicPropsWithoutRef } from "react-polymorphic-types";
import { hex2hsl } from "@csstools/convert-colors";
import { ThemeProvider } from "@kiwicom/orbit-components";

const DefaultComponent = "a";

type ThemeShape = React.ComponentProps<typeof ThemeProvider>["theme"];

interface OwnProps {
  dark?: boolean;
  type?: "primary" | "secondary";
  color?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
}

type Props<T extends React.ElementType = typeof DefaultComponent> = PolymorphicPropsWithoutRef<
  OwnProps,
  T
>;

function getColor({ theme, type }: { theme: ThemeShape } & Pick<OwnProps, "type">): string {
  return type === "secondary" ? theme.orbit.paletteProductDark : theme.orbit.paletteWhite;
}

function getBgColor({
  theme,
  type,
  color,
}: { theme: ThemeShape } & Pick<OwnProps, "type" | "color">): string {
  switch (type) {
    case "primary":
      return theme.orbit.backgroundButtonPrimary;
    case "secondary":
      return theme.orbit.paletteProductLight;
    default:
      return typeof color !== "undefined" ? color : "";
  }
}

export function getBgColorHover({
  theme,
  type,
  color,
  dark,
}: { theme: ThemeShape } & Pick<OwnProps, "type" | "color" | "dark">): string {
  if (dark) {
    const [h, s, l] = hex2hsl(getBgColor({ theme, type, color })).map(num => Math.round(num));
    return `hsl(${h}, ${s}%, ${dark ? l + 4 : l - 4}%)`;
  }

  switch (type) {
    case "primary":
      return theme.orbit.backgroundButtonPrimaryHover;
    case "secondary":
      return theme.orbit.paletteProductLightHover;
    default:
      return "";
  }
}

export function getBgColorFocus({
  theme,
  type,
  color,
  dark,
}: { theme: ThemeShape } & Pick<OwnProps, "type" | "color" | "dark">): string {
  if (typeof color !== "undefined" || dark) {
    return getBgColorHover({ theme, type, color, dark });
  }

  switch (type) {
    case "primary":
      return theme.orbit.paletteProductNormal;
    case "secondary":
      return theme.orbit.paletteProductLightHover;
    default:
      return "";
  }
}

export function getBgColorActive({
  theme,
  type,
  color,
  dark,
}: { theme: ThemeShape } & Pick<OwnProps, "type" | "color" | "dark">): string {
  if (typeof color !== "undefined" || dark) {
    const [h, s, l] = hex2hsl(getBgColor({ theme, type, color })).map(num => Math.round(num));
    return `hsl(${h}, ${s}%, ${dark ? l + 8 : l - 8}%)`;
  }

  switch (type) {
    case "primary":
      return dark ? "" : theme.orbit.backgroundButtonPrimaryActive;
    case "secondary":
      return dark ? "" : theme.orbit.paletteProductLightActive;
    default:
      return "";
  }
}

interface StyledComponentProps extends Pick<OwnProps, "type" | "color" | "dark"> {
  hasIcon: boolean;
}

export const StyledComponent = styled(DefaultComponent)<StyledComponentProps>`
  ${({ theme, type, color, dark, hasIcon }) => `
    display: inline-flex;
    align-items: center;
    padding: 20px 28px;
    border-radius: 100px; /* value safely greater than button height to achieve pill effect */
    font-weight: 500;

    ${
      hasIcon &&
      `
        padding-left: 20px;
        padding-right: 20px;
      `
    };

    > * + * {
      margin-left: ${theme.orbit.marginButtonIconLarge};
    }

    background: ${getBgColor({ theme, type, color })};
    color: ${getColor({ theme, type })};
    &:hover {
      background: ${getBgColorHover({ theme, type, color, dark })};
    }
    &:active {
      background: ${getBgColorActive({ theme, type, color, dark })};
    }
    &:focus {
      background: ${getBgColorFocus({ theme, type, color, dark })};
    }
  `};
`;

export default function ButtonLink<T extends React.ElementType = typeof DefaultComponent>({
  as: asProp,
  iconLeft,
  iconRight,
  children,
  ...restProps
}: Props<T>) {
  const Component = asProp || DefaultComponent;

  return (
    // @ts-expect-error react-polymorphic-types is currently not compatible with styled-components
    <StyledComponent as={Component} hasIcon={Boolean(iconLeft || iconRight)} {...restProps}>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </StyledComponent>
  );
}
