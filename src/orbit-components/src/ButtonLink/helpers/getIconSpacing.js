// @flow
import { SIZES, TOKENS } from "../consts";
import { rtlSpacing } from "../../utils/rtl";
import type { GetIconSpacing } from "./getIconSpacing";

const getIconSpacing: GetIconSpacing = () => ({ theme, right, size, onlyIcon }) => {
  if (onlyIcon) {
    return null;
  }
  const tokens = {
    [TOKENS.marginRightIcon]: {
      [SIZES.LARGE]: theme.orbit.marginButtonIconLarge,
      [SIZES.NORMAL]: theme.orbit.marginButtonIconNormal,
      [SIZES.SMALL]: theme.orbit.marginButtonIconSmall,
    },
  };
  return rtlSpacing(
    right
      ? `0 0 0 ${tokens[TOKENS.marginRightIcon][size]}`
      : `0 ${tokens[TOKENS.marginRightIcon][size]} 0 0`,
  )({ theme });
};

export default getIconSpacing;
