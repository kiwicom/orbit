// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/FormLabel";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly filled?: boolean;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly id?: string;
}

declare const FormLabel: React.FunctionComponent<Props>;
export { FormLabel, FormLabel as default };
