// @flow
import { keyframes, css } from "styled-components";
import type { CSSRules } from "styled-components";

import type { Animation } from ".";

type ResolveAnimation = ({|
  duration: string,
  interval: string,
  animation: Animation,
  color?: string,
|}) => CSSRules | null;

export const resolveHeight = ({
  calculatedHeight,
  height,
}: {|
  calculatedHeight: number,
  height: number,
|}): string => {
  if (calculatedHeight) return `${calculatedHeight}px`;
  if (height) return `${height}px`;
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

export const resolvePulseAnimation: ResolveAnimation = ({ animation, duration, interval }) => {
  if (animation === "pulse") {
    return css`
      animation: ${pulseAnimation} ${duration} ease-in-out ${interval} infinite;
    `;
  }

  return null;
};
