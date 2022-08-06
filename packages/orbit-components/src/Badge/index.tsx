import React from "react";

import BadgePrimitive from "../primitives/BadgePrimitive";
import { TYPE_OPTIONS, TOKENS } from "./consts";
import useTheme from "../hooks/useTheme";
import type { Props } from "./index.d";

const getTypeToken = ({ name, theme, type }) => {
  const tokens = {
    [TOKENS.background]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteCloudLight,
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueLight,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenLight,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeLight,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedLight,
      [TYPE_OPTIONS.DARK]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.INFO_INVERTED]: theme.orbit.paletteBlueNormal,
      [TYPE_OPTIONS.CRITICAL_INVERTED]: theme.orbit.paletteRedNormal,
      [TYPE_OPTIONS.SUCCESS_INVERTED]: theme.orbit.paletteGreenNormal,
      [TYPE_OPTIONS.WARNING_INVERTED]: theme.orbit.paletteOrangeNormal,
      [TYPE_OPTIONS.BUNDLE_BASIC]: theme.orbit.backgroundBadgeBundleBasic,
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: theme.orbit.backgroundBadgeBundleMedium,
      [TYPE_OPTIONS.BUNDLE_TOP]: theme.orbit.backgroundBadgeBundleTop,
    },
    [TOKENS.color]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDark,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDark,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDark,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDark,
      [TYPE_OPTIONS.DARK]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteInkNormal,
      [TYPE_OPTIONS.INFO_INVERTED]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.CRITICAL_INVERTED]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.SUCCESS_INVERTED]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.WARNING_INVERTED]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.BUNDLE_BASIC]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.BUNDLE_TOP]: theme.orbit.paletteWhite,
    },
    [TOKENS.border]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueLightHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenLightHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeLightHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedLightHover,
      [TYPE_OPTIONS.DARK]: null,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.INFO_INVERTED]: null,
      [TYPE_OPTIONS.CRITICAL_INVERTED]: null,
      [TYPE_OPTIONS.SUCCESS_INVERTED]: null,
      [TYPE_OPTIONS.WARNING_INVERTED]: null,
      [TYPE_OPTIONS.BUNDLE_BASIC]: null,
      [TYPE_OPTIONS.BUNDLE_MEDIUM]: null,
      [TYPE_OPTIONS.BUNDLE_TOP]: null,
    },
  };
  return tokens[name][type];
};

const Badge = ({
  type = TYPE_OPTIONS.NEUTRAL,
  border = true,
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
      borderColor={border ? getTypeToken({ name: TOKENS.border, theme, type }) : "transparent"}
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
