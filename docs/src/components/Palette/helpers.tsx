import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";
import { css } from "styled-components";

import { BorderProps } from "./ColorContainer";

import { tokenString } from ".";

export type Order = "first" | "last" | "middle" | "only";

export const normalizeName = (tokenName: tokenString) =>
  tokenName
    .replace(/^palette/, "")
    .replace(/^color/, "")
    .replace(/([a-z])([A-Z])/, "$1 $2")
    .replace("Hover", ":hover")
    .replace("Active", ":active");

export const isLight = (hex: string) => {
  const rgba = convertHexToRgba(hex, 100);
  const found = rgba.match(/\((?<red>\d+), (?<green>\d+), (?<blue>\d+)/);

  if (!found || !found.groups) {
    throw new Error("Could not parse color");
  }

  const red = Number(found.groups.red);
  const green = Number(found.groups.green);
  const blue = Number(found.groups.blue);

  // HSP equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue));

  return hsp > 140;
};

export const resolveBorders = ({
  order,
  isFull,
  isMiddle,
  isLeft,
  isFullBottom,
  isRight,
  isExpanded,
}: BorderProps) => ({ theme }) => {
  const radius = theme.orbit.borderRadiusLarge;

  if (order === "only") {
    if (isExpanded) {
      if (isMiddle) return null;
      if (isLeft)
        return css`
          border-top-left-radius: ${radius};
          border-bottom-left-radius: ${radius};
        `;
      if (isRight) {
        return css`
          border-top-right-radius: ${radius};
          border-bottom-right-radius: ${radius};
        `;
      }
    }

    return css`
      border-radius: ${radius};
    `;
  }

  if (order === "first") {
    if (isFull) {
      return css`
        border-radius: ${radius} ${radius} 0 0;
      `;
    }

    if (isLeft) {
      return css`
        border-top-left-radius: ${radius};
      `;
    }

    if (isRight) {
      return css`
        border-top-right-radius: ${radius};
      `;
    }
  }

  if (order === "last") {
    if (isFull || isFullBottom) {
      return css`
        border-radius: 0 0 ${radius} ${radius};
      `;
    }

    if (isLeft) {
      return css`
        border-bottom-left-radius: ${radius};
      `;
    }

    if (isRight) {
      return css`
        border-bottom-right-radius: ${radius};
      `;
    }
  }

  return null;
};

export const determineOrder = (idx, arr): Order => {
  if (arr.length === 1) return "only";
  if (idx === 0) return "first";
  if (idx === arr.length - 1) return "last";
  return "middle";
};
