// @flow
import type { LeftToRight, RtlSpacing, BorderRadius, TextAlign } from "./index";

const leftToRight: LeftToRight = (left, right) => ({ theme }) => (theme.rtl ? right : left);

export const rtlSpacing: RtlSpacing = value => ({ theme }) => {
  if (!theme.rtl) {
    return value;
  }
  const parts = value.split(" ").filter(part => !Number.isNaN(parseFloat(part)) && part);
  return parts.length === 4 ? [parts[0], parts[3], parts[2], parts[1]].join(" ") : value;
};

export const left = leftToRight("left", "right");

export const right = leftToRight("right", "left");

export const borderRadius: BorderRadius = value => ({ theme }) => {
  if (!theme.rtl) {
    return value;
  }
  const parts = value.split(" ").filter(part => !Number.isNaN(parseFloat(part)) && part);

  return parts.length === 4 ? [parts[1], parts[0], parts[3], parts[2]].join(" ") : value;
};

export const textAlign: TextAlign = value => ({ theme }) => {
  if (theme.rtl) {
    if (value === "left") {
      return leftToRight("left", "right")({ theme });
    }
    if (value === "right") {
      return leftToRight("right", "left")({ theme });
    }
  }
  return value;
};
