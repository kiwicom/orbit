// @flow
import { SPACINGS } from "../consts";
import type { GetMobileSpacing } from "./getMobileSpacing";

const getMobileSpacing: GetMobileSpacing = () => ({
  [SPACINGS.EXTRATIGHT]: "2px",
  [SPACINGS.TIGHT]: "4px",
  [SPACINGS.CONDENSED]: "8px",
  [SPACINGS.COMPACT]: "12px",
  [SPACINGS.NATURAL]: "16px",
  [SPACINGS.COMFY]: "20px",
  [SPACINGS.LOOSE]: "28px",
  [SPACINGS.EXTRALOOSE]: "36px",
});

export default getMobileSpacing;
