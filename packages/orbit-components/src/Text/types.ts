// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/types";

type Align = "left" | "center" | "right" | "justify";
type As = "p" | "span" | "div";

export type Type =
  | "primary"
  | "secondary"
  | "attention"
  | "info"
  | "success"
  | "warning"
  | "critical"
  | "white";

export type Weight = "normal" | "medium" | "bold";

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly type?: Type;
  readonly size?: Common.Size;
  readonly weight?: Weight;
  readonly align?: Align;
  readonly italic?: boolean;
  readonly uppercase?: boolean;
  readonly strikeThrough?: boolean;
  readonly withBackground?: boolean;
  readonly as?: As;
  readonly children: React.ReactNode;
  readonly id?: string;
}
