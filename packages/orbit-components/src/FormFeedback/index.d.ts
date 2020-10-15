// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/FormFeedback";

export interface Props extends Common.Global {
  readonly error?: React.ReactNode;
  readonly help?: React.ReactNode;
  readonly tooltipShown?: boolean;
  readonly tooltipShownHover?: boolean;
  readonly labelRef?: Common.Ref;
  readonly iconRef?: Common.Ref;
  readonly inlineLabel?: boolean;
}

declare const FormFeedback: React.FunctionComponent<Props>;
export { FormFeedback, FormFeedback as default };
