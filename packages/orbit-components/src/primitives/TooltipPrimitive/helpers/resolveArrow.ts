import { css, FlattenSimpleInterpolation } from "styled-components";
import { Placement } from "@popperjs/core/lib/enums";

import { Theme } from "../../../defaultTheme";

const BORDER_SIZE = 6;

export const resolveColor = ({
  error,
  help,
  theme,
}: {
  error?: boolean;
  help?: boolean;
  theme: Theme;
}): string => {
  if (error) return theme.orbit.paletteRedNormal;
  if (help) return theme.orbit.paletteBlueNormal;
  return theme.orbit.paletteInkNormal;
};

export const resolveArrowPlacement = ({
  placement,
  theme,
}: {
  placement?: Placement;
  theme: Theme;
}): FlattenSimpleInterpolation | null => {
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

export const resolveArrowStyle = ({
  placement,
  theme,
  error,
  help,
}: {
  placement?: Placement;
  theme: Theme;
  error?: boolean;
  help?: boolean;
}): FlattenSimpleInterpolation | null => {
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
