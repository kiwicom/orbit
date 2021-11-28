// @flow
import { css } from "styled-components";
import type { Placement } from "@popperjs/core/lib/enums";
import type { CSSRules } from "styled-components";

import type { ThemeProps } from "../../../defaultTheme";

export type ResolveColor = ({| error?: boolean, help?: boolean, ...ThemeProps |}) => string;

export const resolveColor: ResolveColor = ({ error, help, theme }) => {
  if (error) return theme.orbit.paletteRedNormal;
  if (help) return theme.orbit.paletteBlueNormal;
  return theme.orbit.paletteInkNormal;
};

export type Props = {|
  error?: boolean,
  help?: boolean,
  placement: Placement,
  ...ThemeProps,
|};

const BORDER_SIZE = 7;

export const resolveArrowPlacement = ({
  placement,
}: {|
  placement: Placement,
|}): CSSRules | null => {
  if (placement) {
    if (placement.includes("top")) {
      return css`
        left: -${BORDER_SIZE}px;
        bottom: 0;
      `;
    }

    if (placement.includes("left")) {
      return css`
        top: -${BORDER_SIZE}px;
        right: 0;
      `;
    }

    if (placement.includes("right")) {
      return css`
        top: -${BORDER_SIZE}px;
        left: -${BORDER_SIZE}px; ;
      `;
    }

    return css`
      left: -${BORDER_SIZE}px;
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
