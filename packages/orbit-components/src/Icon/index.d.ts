// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import defaultTheme from "../defaultTheme";
import * as Common from "../common/common";

export type Size = "small" | "medium" | "large";

export type Color =
  | "primary"
  | "secondary"
  | "tertiary"
  | "info"
  | "success"
  | "warning"
  | "critical";

export interface Props extends Common.Globals {
  readonly size?: Size;
  readonly color?: Color;
  readonly className?: string;
  readonly customColor?: string;
  readonly reverseOnRtl?: boolean;
  readonly ariaLabel?: string;
  readonly ariaHidden?: boolean;
}

export interface FactoryProps extends Props {
  readonly children: React.ReactNode;
  readonly viewBox: string;
}

export type GetSize = (size: Size) => ({ theme }: { theme: typeof defaultTheme }) => string;

declare const Icon: React.FunctionComponent<FactoryProps>;
declare const getSize: GetSize;

export { Icon, getSize, Icon as default };
