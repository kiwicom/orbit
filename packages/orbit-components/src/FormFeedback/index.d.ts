// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/FormFeedback";

export interface Props extends Common.Global {
  readonly error?: React.ReactNode;
  readonly help?: React.ReactNode;
}

declare const FormFeedback: React.FunctionComponent<Props>;
export { FormFeedback, FormFeedback as default };
