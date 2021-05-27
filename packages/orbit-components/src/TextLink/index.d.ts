// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/TextLink";

export type Type = "primary" | "secondary" | "info" | "success" | "warning" | "critical";

export interface Props extends Common.Global {
  readonly ariaCurrent?: string;
  readonly asComponent?: Common.Component;
  readonly children: React.ReactNode;
  readonly external?: boolean;
  readonly href?: string;
  readonly iconLeft?: React.ReactNode;
  readonly iconRight?: React.ReactNode;
  readonly noUnderline?: boolean;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLLinkElement>>;
  readonly rel?: string;
  readonly size?: Common.Size;
  readonly standAlone?: boolean;
  readonly stopPropagation?: boolean;
  readonly tabIndex?: string | number;
  readonly title?: string;
  readonly type?: Type;
}

declare const TextLink: React.FunctionComponent<Props>;
export { TextLink, TextLink as default };
