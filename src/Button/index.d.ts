// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import { ButtonCommonProps } from "../primitives/ButtonPrimitive/index.d.ts";

declare module "@kiwicom/orbit-components/lib/Button";

type Type = "primary" | "secondary" | "critical" | "primarySubtle" | "criticalSubtle" | "white";

export interface Props extends ButtonCommonProps {
  readonly type?: Type;
}

const Button: React.AbstractComponent<Props, HTMLButtonElement>;
export { Button, Button as default };
