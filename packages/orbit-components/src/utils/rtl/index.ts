import type { RtlSpacing } from "./types";

export const rtlSpacing: RtlSpacing =
  value =>
  ({ theme }) => {
    if (!theme.rtl) return value;
    const parts = value.split(" ").filter(part => !Number.isNaN(parseFloat(part)) && part);
    return parts.length === 4 ? [parts[0], parts[3], parts[2], parts[1]].join(" ") : value;
  };
