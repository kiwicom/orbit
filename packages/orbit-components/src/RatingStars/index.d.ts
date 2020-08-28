// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/RatingStars";

type Size = "small" | "medium" | "large";
type Color = "primary" | "secondary";

interface Props extends Common.Global {
  readonly rating: number;
  readonly size?: Size;
  readonly color?: Color;
  readonly showEmpty?: boolean;
}

declare const RatingStars: React.FunctionComponent<Props>;
export { RatingStars, RatingStars as default };
