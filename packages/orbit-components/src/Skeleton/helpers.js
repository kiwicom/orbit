// @flow
import defaultTheme from "../defaultTheme";

const firstToUpper = string => string.charAt(0).toUpperCase() + string.slice(1);

export const getColor = (token?: string): string | null => {
  if (token) return defaultTheme.orbit[`palette${firstToUpper(token)}`];
  return null;
};

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
