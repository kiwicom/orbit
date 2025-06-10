// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type defaultTheme from "../defaultTheme";
import type * as Common from "../common/types";

export type Size = "small" | "medium" | "large";

export type Color =
  | "primary"
  | "secondary"
  | "tertiary"
  | "info"
  | "success"
  | "warning"
  | "critical";

export type LabelOrHidden =
  | {
      ariaLabel?: never;
      ariaHidden: true;
    }
  | {
      ariaLabel: string;
      ariaHidden?: false;
    };

interface IconProps extends Common.Globals {
  readonly size?: Size;
  readonly color?: Color;
  readonly className?: string;
  readonly customColor?: string;
  readonly reverseOnRtl?: boolean;
}

export type Props = IconProps & LabelOrHidden;

export interface FactoryProps {
  readonly children: React.ReactNode;
  readonly viewBox: string;
}

export type GetSize = (size: Size) => ({ theme }: { theme: typeof defaultTheme }) => string;
