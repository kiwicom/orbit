// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

export interface Props extends Common.Global {
  readonly size?: "small" | "medium" | "large";
  readonly color?: "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "critical";
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
