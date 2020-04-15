// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Icon";

type Size = "small" | "medium" | "large";

type Color = "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "critical";

export interface Props extends Common.Global {
  readonly size?: Size;
  readonly color?: Color;
  readonly className?: string;
  readonly customColor?: string;
  readonly children: React.ReactNode;
  readonly viewBox: string;
  readonly ariaHidden?: boolean;
  readonly reverseOnRtl?: boolean;
  readonly ariaLabel?: string;
}

const Icon: React.FunctionComponent<Props>;
export { Icon, Icon as default };
