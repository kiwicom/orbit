// @flow
import { SIZE_OPTIONS, TOKENS } from "../consts";
import { rtlSpacing } from "../../utils/rtl/index";
import type { GetIconSpacing } from "./getIconSpacing";

const getIconSpacing: GetIconSpacing = () => ({ theme, right, size, onlyIcon }) => {
  if (onlyIcon) {
    return null;
  }

  const tokens = {
    [TOKENS.marginRightIcon]: {
      [SIZE_OPTIONS.LARGE]: theme.orbit.marginButtonIconLarge,
      [SIZE_OPTIONS.NORMAL]: theme.orbit.marginButtonIconNormal,
      [SIZE_OPTIONS.SMALL]: theme.orbit.marginButtonIconSmall,
    },
  };

  return rtlSpacing(
    right
      ? `0 0 0 ${tokens[TOKENS.marginRightIcon][size]}`
      : `0 ${tokens[TOKENS.marginRightIcon][size]} 0 0`,
  )({ theme });
};

export default getIconSpacing;
