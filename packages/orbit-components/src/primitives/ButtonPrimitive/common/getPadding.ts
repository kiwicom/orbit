import type * as React from "react";

import { rtlSpacing } from "../../../utils/rtl";
import { SIZE_OPTIONS, TOKENS } from "./consts";
import type { Size } from "../types";
import type { Theme } from "../../../defaultTheme";

const getSpacing = (
  onlyIcon: boolean,
  iconRight: React.ReactNode,
  iconLeft: React.ReactNode,
  size: Size,
  theme: Theme,
): string => {
  const wrappedRtl = (value: string) => rtlSpacing(value)({ theme });
  if (onlyIcon) return wrappedRtl(theme.orbit.buttonWithoutTextPadding);
  const tokens = {
    [TOKENS.paddingButton]: {
      [SIZE_OPTIONS.LARGE]: `0 ${theme.orbit.space700}`,
      [SIZE_OPTIONS.NORMAL]: `0 ${theme.orbit.space400}`,
      [SIZE_OPTIONS.SMALL]: `0 ${theme.orbit.space300}`,
    },
    [TOKENS.paddingButtonWithIcons]: {
      [SIZE_OPTIONS.LARGE]: `0 ${theme.orbit.space400}`,
      [SIZE_OPTIONS.NORMAL]: `0 ${theme.orbit.space300}`,
      [SIZE_OPTIONS.SMALL]: `0 ${theme.orbit.space200}`,
    },
    [TOKENS.paddingButtonWithLeftIcon]: {
      [SIZE_OPTIONS.LARGE]: `0 ${theme.orbit.space700} 0 ${theme.orbit.space400}`,
      [SIZE_OPTIONS.NORMAL]: `0 ${theme.orbit.space400} 0 ${theme.orbit.space300}`,
      [SIZE_OPTIONS.SMALL]: `0 ${theme.orbit.space300} 0 ${theme.orbit.space200}`,
    },
    [TOKENS.paddingButtonWithRightIcon]: {
      [SIZE_OPTIONS.LARGE]: `0 ${theme.orbit.space400} 0 ${theme.orbit.space700}`,
      [SIZE_OPTIONS.NORMAL]: `0 ${theme.orbit.space300} 0 ${theme.orbit.space400}`,
      [SIZE_OPTIONS.SMALL]: `0 ${theme.orbit.space200} 0 ${theme.orbit.space300}`,
    },
  };
  if (iconLeft && iconRight) return wrappedRtl(tokens[TOKENS.paddingButtonWithIcons][size]);
  if (iconLeft && !iconRight) return wrappedRtl(tokens[TOKENS.paddingButtonWithLeftIcon][size]);
  if (!iconLeft && iconRight) return wrappedRtl(tokens[TOKENS.paddingButtonWithRightIcon][size]);

  return wrappedRtl(tokens[TOKENS.paddingButton][size]);
};

export default getSpacing;
