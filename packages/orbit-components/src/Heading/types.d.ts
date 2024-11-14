// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export type Type =
  | "display"
  | "displaySubtitle"
  | "title0"
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "title5"
  | "title6";

export type As = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

type Align = "start" | "center" | "end" | "justify";

type LevelProps =
  | {
      as: Exclude<As, "div">;
      role?: never;
      level?: never;
    }
  | {
      as?: "div";
      role: "heading";
      level: number;
    }
  | {
      as?: "div";
      role?: undefined;
      level?: never;
    };

interface MediaQuery extends Common.SpaceAfter {
  readonly type?: Type;
  readonly align?: Align;
}
export interface BaseProps extends Common.Globals, Common.SpaceAfter {
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

export type Props = BaseProps & LevelProps;
