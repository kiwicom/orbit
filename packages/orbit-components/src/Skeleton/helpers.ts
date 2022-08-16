import { keyframes, css, FlattenSimpleInterpolation } from "styled-components";

export const resolveValue = (value: string | number): string => {
  if (typeof value === "string") return value;
  if (typeof value === "number") return `${value}px`;

  return "100%";
};

export const resolveHeight = ({
  calculatedHeight,
  height,
}: {
  calculatedHeight: number;
  height: number | string;
}): string => {
  if (calculatedHeight) return `${calculatedHeight}px`;
  if (height) return resolveValue(height);

  return "100%";
};

const pulseAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
`;

export const resolvePulseAnimation = ({
  animate,
  duration,
  interval,
}: {
  animate?: boolean;
  duration?: string;
  interval?: string;
}): FlattenSimpleInterpolation | null => {
  if (animate) {
    return css`
      animation: ${pulseAnimation} ${duration} ease-in-out ${interval} infinite;
    `;
  }

  return null;
};
