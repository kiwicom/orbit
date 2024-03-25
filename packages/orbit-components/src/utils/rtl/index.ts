import type { Theme } from "../../defaultTheme";
import type { RtlSpacing, LeftToRight } from "./types";

const leftToRight: LeftToRight =
  (left: string, right: string) =>
  ({ theme }: { theme: Theme }) =>
    theme.rtl ? right : left;

export const rtlSpacing: RtlSpacing =
  value =>
  ({ theme }) => {
    if (!theme.rtl) return value;
    const parts = value.split(" ").filter(part => !Number.isNaN(parseFloat(part)) && part);
    return parts.length === 4 ? [parts[0], parts[3], parts[2], parts[1]].join(" ") : value;
  };

export const left = leftToRight("left", "right");
export const right = leftToRight("right", "left");
