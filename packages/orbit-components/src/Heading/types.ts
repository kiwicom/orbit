// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export type Type =
  | "display"
  | "displaySubtitle"
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "title5";

export type As = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

type Align = "start" | "center" | "end" | "justify";

interface MediaQuery extends Common.SpaceAfter {
  readonly type?: Type;
  readonly align?: Align;
}

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly as?: As;
  readonly type?: Type;
  readonly align?: Align;
  readonly children: React.ReactNode;
  readonly inverted?: boolean;
  readonly dataA11ySection?: string;
  readonly id?: string;
  readonly mediumMobile?: MediaQuery;
  readonly largeMobile?: MediaQuery;
  readonly tablet?: MediaQuery;
  readonly desktop?: MediaQuery;
  readonly largeDesktop?: MediaQuery;
}
