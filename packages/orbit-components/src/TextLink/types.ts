// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export type Type = "primary" | "secondary" | "info" | "success" | "warning" | "critical" | "white";

export interface Props extends Common.Globals {
  readonly ariaCurrent?: string;
  readonly asComponent?: Common.Component;
  readonly children: React.ReactNode;
  readonly external?: boolean;
  readonly href?: string;
  readonly iconLeft?: React.ReactNode;
  readonly iconRight?: React.ReactNode;
  readonly noUnderline?: boolean;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLAnchorElement>>;
  readonly rel?: string;
  readonly size?: Common.Size;
  readonly standAlone?: boolean;
  readonly stopPropagation?: boolean;
  readonly tabIndex?: string | number;
  readonly title?: string;
  readonly type?: Type;
}
