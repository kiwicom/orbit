// @flow
import * as React from "react";

import BadgePrimitive from "../../../primitives/BadgePrimitive";
import { TYPE_OPTIONS, TOKENS } from "../consts";
import useTheme from "../../../hooks/useTheme";
import type { Type } from "../index";

type Props = {|
  type?: Type,
  children: React$Node,
|};

const getTypeToken = ({ name, theme, type }) => {
  const tokens = {
    [TOKENS.background]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteCloudLight,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenLight,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeLight,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedLight,
    },
    [TOKENS.color]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteInkLight,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDark,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDark,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDark,
    },
    [TOKENS.border]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteCloudDark,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenLightHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeLightHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedLightHover,
    },
  };
  return tokens[name][type];
};

const Badge = ({ type = TYPE_OPTIONS.NEUTRAL, children }: Props) => {
  const theme = useTheme();

  return (
    <BadgePrimitive
      background={getTypeToken({ name: TOKENS.background, theme, type })}
      foregroundColor={getTypeToken({ name: TOKENS.color, theme, type })}
      borderColor={getTypeToken({ name: TOKENS.border, theme, type })}
    >
      {children}
    </BadgePrimitive>
  );
};

export default Badge;
