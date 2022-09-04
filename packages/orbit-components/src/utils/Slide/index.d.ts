// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import type { TransitionDuration } from "../transition";

export interface State {
  maxHeight: number | null;
  transitionFinished: boolean;
  visible: boolean;
}

export interface Props {
  readonly children: React.ReactNode;
  readonly maxHeight: number | null;
  readonly expanded?: boolean;
  readonly ariaLabelledBy?: string;
  readonly id?: string;
  readonly transitionDuration?: TransitionDuration;
}

declare const Slide: React.FunctionComponent<Props>;
export { Slide, Slide as default };
