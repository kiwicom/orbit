// @flow
import defaultTheme from "../defaultTheme";
import { firstToUpper } from "../utils/common";

type GetAnimationValue = (ration: number) => (frame: number) => string;

export const getColor = (token?: string): string | null =>
  token ? defaultTheme.orbit[`palette${firstToUpper(token)}`] : null;

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

export const getAnimationValue: GetAnimationValue = ratio => frame => {
  if (frame === 0) return `${-ratio}; ${-ratio}; 0`;
  if (frame === 0.25) return `${-ratio / 2.5}; ${-ratio / 2.5}; ${1 + ratio / 2.5}`;
  if (frame === 0.5) return `${-ratio / 2}; ${-ratio / 2}; ${1 + ratio / 2}`;
  if (frame === 0.75) return `${-ratio / 1.5}; ${-ratio / 1.5}; ${1 + ratio / 1.5}`;

  return `0; 0; ${1 + ratio}`;
};
