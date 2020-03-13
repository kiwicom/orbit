// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";

declare module "@kiwicom/orbit-components/lib/FormFeedback";

export { FormFeedback, FormFeedback as default };

declare namespace FormFeedback {
  type Type = "help" | "error";

  interface Props extends Common.Global {
    readonly children: React.ReactNode;
    readonly type?: Type;
  }
}

declare class FormFeedback extends React.Component<FormFeedback.Props> {}
