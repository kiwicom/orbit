// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";
import { AnyStyledComponent } from "styled-components";

import * as Common from "../common/common";

type Align = "left" | "center" | "right" | "justify";
type As = "p" | "span" | "div";
type Type =
  | "primary"
  | "secondary"
  | "attention"
  | "info"
  | "success"
  | "warning"
  | "critical"
  | "white";
type Weight = "normal" | "medium" | "bold";

export interface Props extends Common.Global, Common.SpaceAfter {
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

declare const Text: React.FunctionComponent<Props>;
declare const StyledText: AnyStyledComponent;
export { Text, Text as default, StyledText };
