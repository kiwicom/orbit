// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/TextLink";

export type Type = "primary" | "secondary";

export interface Props extends Common.Global {
  readonly ariaCurrent: string;
  readonly children: React.ReactNode;
  readonly href?: string;
  readonly icon?: React.ReactNode;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLLinkElement>>;
  readonly external?: boolean;
  readonly type?: Type;
  readonly size?: Common.Size;
  readonly rel?: string;
  readonly tabIndex?: string | number;
  readonly asComponent?: Common.Component;
  readonly stopPropagation?: boolean;
  readonly title?: string;
}

declare const TextLink: React.FunctionComponent<Props>;
export { TextLink, TextLink as default };
