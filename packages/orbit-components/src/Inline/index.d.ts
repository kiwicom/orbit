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

interface MediaQuery {
  readonly spacing?: SpacingToken;
  readonly align?: Position;
  readonly justify?: Position;
}

export interface Props extends Common.Global, MediaQuery {
  readonly asComponent?: string;
  readonly mediumMobile?: MediaQuery;
  readonly largeMobile?: MediaQuery;
  readonly tablet?: MediaQuery;
  readonly desktop?: MediaQuery;
  readonly largeDesktop?: MediaQuery;
  readonly children?: React.ReactNode;
}

declare const Inline: React.FunctionComponent<Props>;
export { Inline, Inline as default };
