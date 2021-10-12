// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export type Type =
  | "display"
  | "displaySubtitle"
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "title5";
export type As = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

interface MediaQuery extends Common.SpaceAfter {
  readonly type?: Type;
}

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly as?: As;
  readonly type?: Type;
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

declare const Heading: React.FunctionComponent<Props>;
export { Heading, Heading as default };
