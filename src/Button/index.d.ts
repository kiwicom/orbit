// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common.d.ts";

declare module "@kiwicom/orbit-components/lib/Button";

type Type =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "critical"
  | "facebook"
  | "google"
  | "white";

export interface Props extends Common.Global, Common.Ref, Common.SpaceAfter {
  readonly children?: React.ReactNode;
  readonly asComponent?: Common.Component;
  readonly href?: string;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLButtonElement>>;
  readonly external?: boolean;
  readonly circled?: boolean;
  readonly bordered?: boolean;
  readonly disabled?: boolean;
  readonly fullWidth?: boolean;
  readonly loading?: boolean;
  readonly type?: Type;
  readonly size?: Common.Size;
  readonly width?: number;
  readonly submit?: boolean;
  readonly icon?: React.ReactNode;
  readonly iconLeft?: React.ReactNode;
  readonly iconRight?: React.ReactNode;
  readonly tabIndex?: string;
  readonly ariaExpanded?: boolean;
  readonly ariaControls?: string;
  readonly role?: string;
  readonly title?: string | ((param: any) => string);
}

const Button: React.AbstractComponent<Props, HTMLButtonElement>;
export { Button, Button as default };
