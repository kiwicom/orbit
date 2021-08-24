// @flow
import defaultTheme from "../defaultTheme";
import { firstToUpper } from "../utils/common";

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
