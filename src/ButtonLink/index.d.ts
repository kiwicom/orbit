// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/ButtonLink";

type Type = "primary" | "secondary" | "critical" | "inline";

export interface Props extends Common.Global, Common.Ref, Common.SpaceAfter {
  readonly children?: React.ReactNode;
  readonly asComponent?: Common.Component;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLButtonElement>>;
  readonly disabled?: boolean;
  readonly fullWidth?: boolean;
  readonly external?: boolean;
  readonly type?: Type;
  readonly size?: Common.Size;
  readonly href?: string;
  readonly width?: number;
  readonly icon?: React.ReactNode;
  readonly iconLeft?: React.ReactNode;
  readonly iconRight?: React.ReactNode;
  readonly circled?: boolean;
  readonly submit?: boolean;
  readonly compact?: boolean;
  readonly tabIndex?: string;
  readonly ariaExpanded?: boolean;
  readonly ariaControls?: string;
  readonly role?: string;
  readonly title?: string | ((param: any) => string);
}

declare const ButtonLink: React.FunctionComponent<Props>;
export { ButtonLink, ButtonLink as default };
