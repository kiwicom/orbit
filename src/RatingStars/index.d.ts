// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common.d.ts";

declare module "@kiwicom/orbit-components/lib/RatingStars";

export { RatingStars, RatingStars as default };

declare namespace RatingStars {
  type Size = "small" | "medium" | "large";
  type Color = "attention" | "primary" | "secondary";

  interface Props extends Common.Global {
    readonly rating: number;
    readonly size?: Size;
    readonly color?: Color;
    readonly showEmpty?: boolean;
  }
}

declare class RatingStars extends React.Component<RatingStars.Props> {}
