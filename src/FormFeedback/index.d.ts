// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/FormFeedback";

type Type = "help" | "error";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly type?: Type;
}

const FormFeedback: React.FunctionComponent<Props>;
export { FormFeedback, FormFeedback as default };
