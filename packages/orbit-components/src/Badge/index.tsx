import React from "react";

import BadgePrimitive from "../primitives/BadgePrimitive";
import { TYPE_OPTIONS, TOKENS } from "./consts";
import useTheme from "../hooks/useTheme";
import type { Theme } from "../defaultTheme";
import type { Props, Type } from "./types";

const getTypeToken = ({ name, theme, type }: { name: string; theme: Theme; type: Type }) => {
  const tokens = {
    [TOKENS.background]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteCloudLight,
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueLight,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.paletteGreenLight,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.paletteOrangeLight,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedLight,
      [TYPE_OPTIONS.DARK]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueNormal,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedNormal,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenNormal,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeNormal,
      [TYPE_OPTIONS.BUNDLE_BASIC]: theme.orbit.backgroundBadgeBundleBasic,
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: theme.orbit.backgroundBadgeBundleMedium,
      [TYPE_OPTIONS.BUNDLE_TOP]: theme.orbit.backgroundBadgeBundleTop,
    },
    [TOKENS.color]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.INFO_SUBTLE]: theme.orbit.paletteBlueDark,
      [TYPE_OPTIONS.SUCCESS_SUBTLE]: theme.orbit.paletteGreenDark,
      [TYPE_OPTIONS.WARNING_SUBTLE]: theme.orbit.paletteOrangeDark,
      [TYPE_OPTIONS.CRITICAL_SUBTLE]: theme.orbit.paletteRedDark,
      [TYPE_OPTIONS.DARK]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteInkDark,
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.BUNDLE_BASIC]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.BUNDLE_TOP]: theme.orbit.paletteWhite,
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
