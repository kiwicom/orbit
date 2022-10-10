// @flow
import { css } from "styled-components";
import type { Placement } from "@popperjs/core/lib/enums";
import type { CSSRules } from "styled-components";

import type { Theme, ThemeProps } from "../../../defaultTheme";

export type ResolveColor = ({| error?: boolean, help?: boolean, ...ThemeProps |}) => string;

export const resolveColor: ResolveColor = ({ error, help, theme }) => {
  if (error) return theme.orbit.paletteRedNormal;
  if (help) return theme.orbit.paletteBlueNormal;
  return theme.orbit.paletteInkDark;
};

export type Props = {|
  error?: boolean,
  help?: boolean,
  placement: Placement,
  ...ThemeProps,
|};

const BORDER_SIZE = 6;

export const resolveArrowPlacement = ({
  placement,
  theme,
}: {|
  placement: Placement,
  theme: Theme,
|}): CSSRules | null => {
  const horizontalPlacement = theme.rtl ? `${BORDER_SIZE}px` : `-${BORDER_SIZE}px`;

  if (placement) {
    if (placement.includes("top")) {
      return css`
        left: ${horizontalPlacement};
        bottom: 0;
      `;
    }

    if (placement.includes("left")) {
      return css`
        top: -${BORDER_SIZE}px;
        right: ${theme.rtl ? `-${BORDER_SIZE}px` : `1px`};
      `;
    }

    if (placement.includes("right")) {
      return css`
        top: -${BORDER_SIZE}px;
        left: ${theme.rtl ? `0px` : `-${BORDER_SIZE}px`};
      `;
    }

    return css`
      left: ${horizontalPlacement};
      top: -${BORDER_SIZE}px;
    `;
  }

  return null;
};

export const resolveArrowStyle = ({ placement, theme, error, help }: Props): CSSRules | null => {
  if (placement) {
    if (placement.includes("top")) {
      return css`
        border-width: ${BORDER_SIZE}px ${BORDER_SIZE}px 0 ${BORDER_SIZE}px;
        border-color: ${resolveColor({ theme, error, help })} transparent transparent transparent;
      `;
    }

    if (placement.includes("left")) {
      return css`
        border-width: ${BORDER_SIZE}px 0 ${BORDER_SIZE}px ${BORDER_SIZE}px;
        border-color: transparent transparent transparent ${resolveColor({ theme, error, help })};
      `;
    }

    if (placement.includes("right")) {
      return css`
        border-width: ${BORDER_SIZE}px ${BORDER_SIZE}px ${BORDER_SIZE}px 0;
        border-color: transparent ${resolveColor({ theme, error, help })} transparent transparent;
      `;
    }

    return css`
      border-width: 0 ${BORDER_SIZE}px ${BORDER_SIZE}px ${BORDER_SIZE}px;
      border-color: transparent transparent ${resolveColor({ theme, error, help })} transparent;
    `;
  }

  return null;
};
