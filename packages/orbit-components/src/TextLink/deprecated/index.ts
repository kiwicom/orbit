import { css } from "styled-components";

import type { Theme } from "../../defaultTheme";
import type { Type, Props } from "../types";
import { TYPE_OPTIONS } from "../consts";

type GetTextLinkTokensType = ({
  $type,
}: {
  $type?: Type;
}) => ({ theme }: { theme: Theme }) => string | null;

const getColor: GetTextLinkTokensType =
  ({ $type }) =>
  ({ theme }) => {
    const tokens = {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextLinkPrimary,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextLinkSecondary,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDark,
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDark,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDark,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDark,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteWhite,
    };

    if (!$type) return null;

    return tokens[$type];
  };

const getHoverColor: GetTextLinkTokensType =
  ({ $type }) =>
  ({ theme }) => {
    const tokens = {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.paletteProductDarkHover,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.paletteProductDarkHover,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDarkHover,
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDarkHover,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDarkHover,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDarkHover,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteProductLight,
    };

    if (!$type) return null;

    return tokens[$type];
  };

const getActiveColor: GetTextLinkTokensType =
  ({ $type }) =>
  ({ theme }) => {
    const tokens = {
      [TYPE_OPTIONS.PRIMARY]: theme.orbit.paletteProductDarkActive,
      [TYPE_OPTIONS.SECONDARY]: theme.orbit.paletteProductDarkActive,
      [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenDarker,
      [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueDarker,
      [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeDarker,
      [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedDarker,
      [TYPE_OPTIONS.WHITE]: theme.orbit.paletteProductLight,
    };

    if (!$type) return null;

    return tokens[$type];
  };

const resolveUnderline = ({
  $type,
  theme,
  $noUnderline,
}: {
  $type: Type;
  theme: Theme;
  $noUnderline: boolean;
}) => {
  if ($noUnderline) return "none";
  return $type === TYPE_OPTIONS.SECONDARY
    ? theme.orbit.textDecorationTextLinkSecondary
    : theme.orbit.textDecorationTextLinkPrimary;
};

/**
 * @deprecated kept until Alert is refactored to TW
 */
export const getLinkStyle = ({
  theme,
  $type,
  includeBase = true,
}: {
  theme: Theme;
  $type: Props["type"];
  includeBase?: boolean;
}) => {
  const baseStyles = css`
    &,
    &:link,
    &:visited {
      color: ${getColor} ${$type === TYPE_OPTIONS.SECONDARY && `!important`};
      text-decoration: ${resolveUnderline} ${$type === TYPE_OPTIONS.SECONDARY && `!important`};
      font-weight: ${theme.orbit.fontWeightLinks}
        ${$type === TYPE_OPTIONS.SECONDARY && `!important`};
    }
  `;
  return css`
    ${includeBase && baseStyles};
    &:hover {
      outline: none;
      text-decoration: none;
      color: ${getHoverColor};
    }

    &:active {
      outline: none;
      text-decoration: none;
      color: ${getActiveColor};
    }
  `;
};
