// @flow
import * as React from "react";

import BadgePrimitive from "../primitives/BadgePrimitive";
import { TYPE_OPTIONS, TOKENS } from "./consts";
import useTheme from "../hooks/useTheme";

import type { Props } from "./index";

const getTypeToken = ({ name, theme, type }) => {
  const tokens = {
    [TOKENS.background]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.backgroundBadgeNeutral,
      [TYPE_OPTIONS.INFO]: theme.orbit.backgroundBadgeInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.backgroundBadgeSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.backgroundBadgeWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.backgroundBadgeCritical,
      [TYPE_OPTIONS.DARK]: theme.orbit.backgroundBadgeDark,
      [TYPE_OPTIONS.WHITE]: theme.orbit.backgroundBadgeWhite,
      [TYPE_OPTIONS.INFO_INVERTED]: theme.orbit.paletteBlueNormal,
      [TYPE_OPTIONS.CRITICAL_INVERTED]: theme.orbit.paletteRedNormal,
      [TYPE_OPTIONS.SUCCESS_INVERTED]: theme.orbit.paletteGreenNormal,
      [TYPE_OPTIONS.WARNING_INVERTED]: theme.orbit.paletteOrangeNormal,
    },
    [TOKENS.color]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.colorTextBadgeNeutral,
      [TYPE_OPTIONS.INFO]: theme.orbit.colorTextBadgeInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextBadgeSuccess,
      [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextBadgeWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextBadgeCritical,
      [TYPE_OPTIONS.DARK]: theme.orbit.colorTextBadgeDark,
      [TYPE_OPTIONS.WHITE]: theme.orbit.colorTextBadgeWhite,
      [TYPE_OPTIONS.INFO_INVERTED]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.CRITICAL_INVERTED]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.SUCCESS_INVERTED]: theme.orbit.paletteWhite,
      [TYPE_OPTIONS.WARNING_INVERTED]: theme.orbit.paletteWhite,
    },
  };
  return tokens[name][type];
};

const Badge = (props: Props) => {
  const theme = useTheme();
  const { type = TYPE_OPTIONS.NEUTRAL, icon, children, ariaLabel, dataTest } = props;

  return (
    <BadgePrimitive
      background={getTypeToken({ name: TOKENS.background, theme, type })}
      foregroundColor={getTypeToken({ name: TOKENS.color, theme, type })}
      icon={icon}
      ariaLabel={ariaLabel}
      dataTest={dataTest}
    >
      {children}
    </BadgePrimitive>
  );
};

export default Badge;
