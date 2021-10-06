// @flow
import { keyframes, css } from "styled-components";
import type { CSSRules } from "styled-components";

type ResolveAnimation = ({|
  duration: string,
  interval: string,
  animate: boolean,
  color?: string,
|}) => CSSRules | null;

type ResolveHeight = ({|
  calculatedHeight: number,
  height: number | string,
|}) => string;

export const resolveValue = (value: string | number): string => {
  if (typeof value === "string") return value;
  if (typeof value === "number") return `${value}px`;

  return "100%";
};

export const resolveHeight: ResolveHeight = ({ calculatedHeight, height }): string => {
  if (calculatedHeight) return `${calculatedHeight}px`;
  if (height) return resolveValue(height);

  return "100%";
};

const pulseAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const resolvePulseAnimation: ResolveAnimation = ({ animate, duration, interval }) => {
  if (animate) {
    return css`
      animation: ${pulseAnimation} ${duration} ease-in-out ${interval} infinite;
    `;
  }

  return null;
};
