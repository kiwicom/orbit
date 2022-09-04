import { keyframes, css, FlattenSimpleInterpolation, Keyframes } from "styled-components";

import { ThemeProps } from "../defaultTheme";
import { translate3d } from "../utils/rtl";
import { Placement } from "./index.d";

export const lightAnimation = ({ theme }: ThemeProps): Keyframes => keyframes`
  0% {
    transform: ${translate3d("-100%, 0, 0")({ theme })};
  }
  100% {
    transform: ${translate3d("0%, 0, 0")({ theme })};
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
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

export const getPositionStyle = (placement: Placement): FlattenSimpleInterpolation => {
  return css`
    left: 0;
    right: 0;
    display: flex;
    position: absolute;
    justify-content: ${resolveHorizontal(placement)};
    ${placement.includes("top") ? "top: 0" : "bottom: 0"};
  `;
};

type createReactRef = (onRect: (rect: ClientRect) => void) => (el: HTMLElement | null) => void;

// https://github.com/timolins/react-hot-toast/blob/main/src/components/toaster.tsx#L100
export const createRectRef: createReactRef = onRect => (el: HTMLElement | null) => {
  if (el) {
    setTimeout(() => {
      const boundingRect = el.getBoundingClientRect();
      onRect(boundingRect);
    });
  }
};
