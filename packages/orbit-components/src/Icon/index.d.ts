// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export interface Props extends Common.Global {
  readonly size?: "small" | "medium" | "large";
  readonly color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "info"
    | "success"
    | "warning"
    | "critical";
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

declare const Icon: React.FunctionComponent<FactoryProps>;
export { Icon, Icon as default };
