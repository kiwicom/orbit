// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Stack";

export type Direction = "row" | "column" | "row-reverse" | "column-reverse";
export type Align = "start" | "end" | "center" | "stretch";
export type Justify = "start" | "end" | "center" | "between" | "around";
export type Spacing =
  | "none"
  | "extraTight"
  | "tight"
  | "condensed"
  | "compact"
  | "natural"
  | "comfy"
  | "loose"
  | "extraLoose";

interface MediaQuery extends Common.SpaceAfter {
  readonly inline?: boolean;
  readonly direction?: Direction;
  readonly wrap?: boolean;
  readonly grow?: boolean;
  readonly shrink?: boolean;
  readonly basis?: string;
  readonly align?: Align;
  readonly justify?: Justify;
  readonly spacing?: Spacing;
}

interface Props extends Common.Global, Common.SpaceAfter {
  readonly inline?: boolean;
  readonly direction?: Direction;
  readonly flex?: boolean;
  readonly wrap?: boolean;
  readonly grow?: boolean;
  readonly shrink?: boolean;
  readonly basis?: string;
  readonly align?: Align;
  readonly justify?: Justify;
  readonly spacing?: Spacing;
  readonly mediumMobile?: MediaQuery;
  readonly largeMobile?: MediaQuery;
  readonly tablet?: MediaQuery;
  readonly desktop?: MediaQuery;
  readonly largeDesktop?: MediaQuery;
  readonly children: React.ReactNode;
}

declare const Stack: React.FunctionComponent<Props>;
export { Stack, Stack as default };
