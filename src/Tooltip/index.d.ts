// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Tooltip";

type Size = "small" | "medium";
type Position = "right" | "left" | "top" | "bottom";
type Align = "center" | "start" | "end";

interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly content: React.ReactNode;
  readonly size?: Size;
  readonly preferredPosition?: Position;
  readonly enabled?: boolean;
  readonly tabIndex?: string;
}

declare const Tooltip: React.FunctionComponent<Props>;
export { Tooltip, Tooltip as default };
