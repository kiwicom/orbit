// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

export interface Props extends Common.Globals {
  readonly error?: React.ReactNode;
  readonly help?: React.ReactNode;
}

declare const FormFeedback: React.FunctionComponent<Props>;
export { FormFeedback, FormFeedback as default };
