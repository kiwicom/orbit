// @flow
import { SPACINGS } from "../consts";
import type { GetDesktopSpacing } from "./getDesktopSpacing";

const getDesktopSpacing: GetDesktopSpacing = () => ({
  [SPACINGS.EXTRATIGHT]: "2px",
  [SPACINGS.TIGHT]: "4px",
  [SPACINGS.CONDENSED]: "8px",
  [SPACINGS.COMPACT]: "12px",
  [SPACINGS.NATURAL]: "16px",
  [SPACINGS.COMFY]: "24px",
  [SPACINGS.LOOSE]: "32px",
  [SPACINGS.EXTRALOOSE]: "40px",
});

export default getDesktopSpacing;
