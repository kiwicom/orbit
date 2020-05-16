// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import { ButtonCommonProps } from "../../primitives/ButtonPrimitive/index";

declare module "@kiwicom/orbit-components/lib/Alert/AlertButton";

type Type = "primary" | "secondary" | "critical" | "primarySubtle" | "criticalSubtle" | "white";

export interface Props extends ButtonCommonProps {
  readonly type?: Type;
}

declare const AlertButton: React.FunctionComponent<Props>;
export { AlertButton, AlertButton as default };
