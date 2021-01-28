// @flow
import { css } from "styled-components";

import { TYPES } from "../consts";
import type { Theme } from "../../defaultTheme";
import type { Type } from "..";

type Params = {|
  +theme: Theme,
  +type?: Type,
  +selected?: boolean,
|};

export const resolveFillColor = ({ type, theme, selected }: Params) => {
  if (type === TYPES.LEGROOM)
    return selected ? theme.orbit.paletteBlueNormal : theme.orbit.paletteBlueLight;

  if (type === TYPES.UNAVAILABLE) return theme.orbit.paletteCloudLight;

  return selected ? theme.orbit.paletteProductNormal : theme.orbit.paletteProductLight;
};

export const resolveAccentColor = ({ type, theme, selected }: Params) => {
  if (type === TYPES.LEGROOM)
    return selected ? theme.orbit.paletteBlueNormal : theme.orbit.paletteBlueLightActive;

  if (type === TYPES.UNAVAILABLE) return theme.orbit.paletteCloudLightActive;

  return selected ? theme.orbit.paletteProductNormal : theme.orbit.paletteProductLightActive;
};

export const resolveTextColor = ({ type, theme, selected }: Params) => {
  if (selected) return theme.orbit.paletteWhite;
  if (type === TYPES.LEGROOM) return theme.orbit.paletteBlueDark;
  return theme.orbit.paletteProductDark;
};

export const resolveCloseIconColor = ({ type, theme }: Params) => {
  if (type === TYPES.LEGROOM) return theme.orbit.paletteBlueDarkHover;
  return theme.orbit.paletteProductDarkHover;
};

export const resolveCloseIconHover = ({ type, theme }: Params) => {
  if (type === TYPES.UNAVAILABLE) return "";
  if (type === TYPES.LEGROOM) return theme.orbit.paletteBlueDarker;
  return theme.orbit.paletteProductDarker;
};

export const resolveAccentColorAndSelected = ({ theme, type, selected }: Params) => {
  if (type === TYPES.UNAVAILABLE) return "";

  if (!selected) {
    return css`
      fill: ${resolveAccentColor};
    `;
  }

  return css`
    fill: ${type === TYPES.LEGROOM
      ? theme.orbit.paletteBlueNormalHover
      : theme.orbit.paletteProductNormalHover};
  `;
};
