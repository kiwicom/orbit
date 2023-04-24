import React from "react";

import BadgePrimitive from "../primitives/BadgePrimitive";
import { TYPE_OPTIONS, TOKENS } from "./consts";
import useTheme from "../hooks/useTheme";
import type { Theme } from "../defaultTheme";
import type { Props, Type } from "./types";

const getTypeToken = ({ name, theme, type }: { name: string; theme: Theme; type: Type }) => {
  const tokens = {
    [TOKENS.background]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.badgeNeutralBackground,
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueLight,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.badgeSuccessSubtleBackground,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.badgeWarningSubtleBackground,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.badgeCriticalSubtleBackground,
      [TYPE_OPTIONS.DARK]: theme.orbit.badgeDarkBackground,
      [TYPE_OPTIONS.WHITE]: theme.orbit.badgeWhiteBackground,
      [TYPE_OPTIONS.INFO]: theme.orbit.badgeInfoBackground,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.badgeCriticalBackground,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.badgeSuccessBackground,
      [TYPE_OPTIONS.WARNING]: theme.orbit.badgeWarningBackground,
      [TYPE_OPTIONS.BUNDLE_BASIC]: theme.orbit.badgeBundleBasicBackground,
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: theme.orbit.badgeBundleMediumBackground,
      [TYPE_OPTIONS.BUNDLE_TOP]: theme.orbit.badgeBundleTopBackground,
    },
    [TOKENS.color]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.badgeNeutralForeground,
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.badgeInfoSubtleForeground,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.badgeSuccessSubtleForeground,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.badgeWarningSubtleForeground,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.badgeCriticalSubtleForeground,
      [TYPE_OPTIONS.DARK]: theme.orbit.badgeDarkForeground,
      [TYPE_OPTIONS.WHITE]: theme.orbit.badgeWhiteForeground,
      [TYPE_OPTIONS.INFO]: theme.orbit.badgeInfoForeground,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.badgeCriticalForeground,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.badgeSuccessForeground,
      [TYPE_OPTIONS.WARNING]: theme.orbit.badgeWarningForeground,
      [TYPE_OPTIONS.BUNDLE_BASIC]: theme.orbit.badgeBundleBasicForeground,
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: theme.orbit.badgeBundleMediumForeground,
      [TYPE_OPTIONS.BUNDLE_TOP]: theme.orbit.badgeBundleTopForeground,
    },
  };
  return tokens[name][type];
};

const Badge = ({
  type = TYPE_OPTIONS.NEUTRAL,
  icon,
  children,
  ariaLabel,
  dataTest,
  id,
  carriers,
}: Props) => {
  const theme = useTheme();

  return (
    <BadgePrimitive
      carriers={carriers}
      background={getTypeToken({ name: TOKENS.background, theme, type })}
      foregroundColor={getTypeToken({ name: TOKENS.color, theme, type })}
      icon={icon}
      id={id}
      ariaLabel={ariaLabel}
      dataTest={dataTest}
    >
      {children}
    </BadgePrimitive>
  );
};

export default Badge;
