import { QUERIES } from "../../utils/mediaQuery/consts";
import type { Devices } from "../../utils/mediaQuery/types";

enum SHRINK {
  shrink = "shrink",
  shrink0 = "shrink-0",
}

export const shrinkClasses: {
  [C in QUERIES | SHRINK]: C extends QUERIES ? Record<SHRINK, string> : string;
} = {
  [SHRINK.shrink0]: "shrink-0",
  [SHRINK.shrink]: "shrink",
  [QUERIES.MEDIUMMOBILE]: { [SHRINK.shrink0]: "mm:shrink-0", [SHRINK.shrink]: "mm:shrink" },
  [QUERIES.LARGEMOBILE]: { [SHRINK.shrink0]: "lm:shrink-0", [SHRINK.shrink]: "lm:shrink" },
  [QUERIES.TABLET]: { [SHRINK.shrink0]: "tb:shrink-0", [SHRINK.shrink]: "tb:shrink" },
  [QUERIES.DESKTOP]: { [SHRINK.shrink0]: "de:shrink-0", [SHRINK.shrink]: "de:shrink" },
  [QUERIES.LARGEDESKTOP]: { [SHRINK.shrink0]: "ld:shrink-0", [SHRINK.shrink]: "ld:shrink" },
};

export const getShrinkToken = (shrink: boolean, viewport?: Devices) => {
  const root = viewport ? shrinkClasses[viewport] : shrinkClasses;

  return shrink ? root.shrink1 : root.shrink0;
};

export default getShrinkToken;
