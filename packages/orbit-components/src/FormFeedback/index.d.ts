// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/FormFeedback";

type Type = "help" | "error";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly type?: Type;
}

declare const FormFeedback: React.FunctionComponent<Props>;
export { FormFeedback, FormFeedback as default };
