// @flow
import { keyframes, css } from "styled-components";
import type { InterpolationBase, CSSRules } from "styled-components";

import type { Placement } from ".";

export const lightAnimation: InterpolationBase = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const fadeIn: InterpolationBase = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const fadeOut: InterpolationBase = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const resolveHorizontal = (placement: Placement) => {
  if (placement.includes("right")) return "flex-end";
  if (placement.includes("center")) return "center";

  return "flex-start";
};

export const getPositionStyle = (placement: Placement): CSSRules => {
  return css`
    left: 0;
    right: 0;
    display: flex;
    position: absolute;
    justify-content: ${resolveHorizontal(placement)};
    ${placement.includes("top") ? "top: 0" : "bottom: 0"};
  `;
};
