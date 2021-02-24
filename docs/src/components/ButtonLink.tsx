import React from "react";
import styled, { css } from "styled-components";
import { PolymorphicPropsWithoutRef } from "react-polymorphic-types";

const DefaultComponent = "a";

interface OwnProps {
  type?: "primary" | "secondary" | "dark";
  size?: "medium" | "large";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
}

type Props<T extends React.ElementType = typeof DefaultComponent> = PolymorphicPropsWithoutRef<
  OwnProps,
  T
>;

const StyledComponent = styled(DefaultComponent)<Props>`
  ${({ theme, type, size }) => css`
    display: inline-flex;
    align-items: center;
    ${size === "medium" &&
    `
      padding: 0.875rem 1.5rem;
    `}
    ${size === "large" &&
    `
      padding: 1.25rem 2rem;
    `}
    border-radius: 100px; /* value safely greater than button height to achieve pill effect */
    font-weight: 500;

    > * + * {
      margin-left: 10px;
    }

    ${type === "primary" &&
    css`
      background: ${theme.orbit.backgroundButtonPrimary};
      color: ${theme.orbit.paletteWhite};
      &:hover {
        background: ${theme.orbit.backgroundButtonPrimaryHover};
      }
      &:active {
        background: ${theme.orbit.backgroundButtonPrimaryActive};
      }
      &:focus {
        background: ${theme.orbit.paletteProductNormal};
      }
    `}

    ${type === "secondary" &&
    css`
      background: ${theme.orbit.paletteProductLight};
      color: ${theme.orbit.paletteProductDark};
      &:hover,
      &:focus {
        background: ${theme.orbit.paletteProductLightHover};
      }
      &:active {
        background: ${theme.orbit.paletteProductLightActive};
      }
    `}

    ${type === "dark" &&
    css`
      background: hsla(0, 0%, 100%, 20%);
      color: ${theme.orbit.paletteWhite};
      &:hover,
      &:focus {
        background: hsla(0, 0%, 100%, 25%);
      }
      &:active {
        background: hsla(0, 0%, 100%, 30%);
      }
    `}
  `}
`;

export default function ButtonLink<T extends React.ElementType = typeof DefaultComponent>({
  as: asProp,
  type = "primary",
  size = "medium",
  iconLeft,
  iconRight,
  children,
  ...restProps
}: Props<T>) {
  const Component = asProp || DefaultComponent;

  return (
    // @ts-expect-error react-polymorphic-types is currently not compatible with styled-components
    <StyledComponent as={Component} type={type} size={size} {...restProps}>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </StyledComponent>
  );
}
