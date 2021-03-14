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
  size?: "medium" | "large";
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

function getBgColorHover({
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

function getBgColorFocus({
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

function getBgColorActive({
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

const StyledComponent = styled(DefaultComponent)<{
  type?: "primary" | "secondary";
  color?: string;
  dark: boolean;
  size: "medium" | "large";
}>`
  ${({ theme, type, color, dark, size }) => `
    display: inline-flex;
    align-items: center;

    ${
      size === "medium" &&
      `
        padding: 0.875rem 1.5rem;
      `
    };

    ${
      size === "large" &&
      `
        padding: 1.25rem 2rem;
      `
    };

    border-radius: 100px; /* value safely greater than button height to achieve pill effect */
    font-weight: 500;

    > * + * {
      margin-left: 10px;
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
  type,
  color,
  dark = false,
  size = "medium",
  iconLeft,
  iconRight,
  children,
  ...restProps
}: Props<T>) {
  const Component = asProp || DefaultComponent;

  return (
    <StyledComponent
      as={Component}
      type={type}
      color={color}
      dark={dark}
      size={size}
      {...restProps}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </StyledComponent>
  );
}
