// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { ButtonCommonProps } from "../primitives/ButtonPrimitive/index";

declare module "@kiwicom/orbit-components/lib/Button";

type Type = "primary" | "secondary" | "critical" | "primarySubtle" | "criticalSubtle" | "white";

export interface Props extends ButtonCommonProps {
  readonly type?: Type;
}

declare const Button: React.FunctionComponent<Props>;
export { Button, Button as default };
