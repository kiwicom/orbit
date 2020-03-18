// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common.d.ts";

declare module "@kiwicom/orbit-components/lib/Text";

export { Text, Text as default };

declare namespace Text {
  type Align = "left" | "center" | "right";
  type Element = "p" | "span" | "div";
  type Type =
    | "primary"
    | "secondary"
    | "attention"
    | "info"
    | "success"
    | "warning"
    | "critical"
    | "white";
  type Weight = "normal" | "bold";

  interface Props extends Common.Global, Common.SpaceAfter {
    readonly type?: Type;
    readonly size?: Common.Size;
    readonly weight?: Weight;
    readonly align?: Align;
    readonly italic?: boolean;
    readonly uppercase?: boolean;
    readonly element?: Element;
    readonly children: React.ReactNode;
    readonly id?: string;
  }
}

declare class Text extends React.Component<Text.Props> {}
