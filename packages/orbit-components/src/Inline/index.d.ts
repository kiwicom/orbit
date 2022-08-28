// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export type SpacingToken =
  | "none"
  | "XXXSmall"
  | "XXSmall"
  | "XSmall"
  | "small"
  | "medium"
  | "large"
  | "XLarge"
  | "XXLarge"
  | "XXXLarge";

export type Align = "start" | "end" | "center";
export type Justify = "start" | "end" | "center" | "between" | "around";

interface MediaQuery {
  readonly spacing?: SpacingToken;
  readonly align?: Align;
  readonly justify?: Justify;
}

export interface Props extends Common.Globals, MediaQuery {
  readonly as?: string;
  readonly className?: string;
  readonly mediumMobile?: MediaQuery;
  readonly largeMobile?: MediaQuery;
  readonly tablet?: MediaQuery;
  readonly desktop?: MediaQuery;
  readonly largeDesktop?: MediaQuery;
  readonly children?: React.ReactNode;
}

declare const Inline: React.FunctionComponent<Props>;
export { Inline, Inline as default };
