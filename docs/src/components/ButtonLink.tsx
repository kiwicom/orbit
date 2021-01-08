import React from "react";
import styled, { css } from "styled-components";
import { PolymorphicPropsWithoutRef } from "react-polymorphic-types";

const DefaultComponent = "a";

interface OwnProps {
  type: "primary" | "secondary";
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
  ${({ theme, type, size = "medium" }) => css`
    display: inline-flex;
    align-items: center;
    ${size === "medium" &&
    css`
      padding: 0.875rem 1.5rem;
    `}
    ${size === "large" &&
    css`
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
      &:hover {
        background: ${theme.orbit.paletteProductLightHover};
      }
      &:active {
        background: ${theme.orbit.paletteProductLightActive};
      }
      &:focus {
        background: ${theme.orbit.paletteProductLightHover};
      }
    `}
  `}
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
    <StyledComponent as={Component} {...restProps}>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </StyledComponent>
  );
}
