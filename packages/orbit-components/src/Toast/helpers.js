// @flow
import { css, keyframes } from "styled-components";
import type { CSSRules, InterpolationBase } from "styled-components";

type resolveAnimation = ({|
  animate: boolean,
  isHovered: boolean,
|}) => CSSRules | null;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const fadeOut: InterpolationBase = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-10px);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const lightAnimation: InterpolationBase = keyframes`
  0% {
    transform: translateX(-100%);
  }
  25% {
    transform: translateX(-75%);
  }
  50% {
    transform: translateX(-50%);
  }
  75% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(0%);
  }
}`;

export const resolveFadeAnimations: resolveAnimation = ({ animate, isHovered }) => {
  if (animate) {
    return css`
      animation: ${fadeIn} 1s linear, ${fadeOut} 1s linear 5s forwards;
      animation-play-state: ${isHovered ? "paused" : "running"};
    `;
  }

  return null;
};
