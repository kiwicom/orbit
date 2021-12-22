// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";
import { StyledComponent } from "styled-components";

import * as Common from "../common/common";
import DefaultTheme from "../defaultTheme";
import { Devices } from "../utils/mediaQuery/consts";

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

export interface Props extends Common.Global, Common.SpaceAfter {
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

declare const Heading: React.FunctionComponent<Props>;
export { Heading, Heading as default };

interface StyledProps extends Omit<Props, "as" | Devices> {
  readonly element?: Props["as"];
  readonly viewports: Pick<Props, Exclude<Devices, "smallMobile">>;
}

export declare const StyledHeading: StyledComponent<"div", typeof DefaultTheme, StyledProps>;
