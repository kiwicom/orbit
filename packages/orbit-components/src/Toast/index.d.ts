// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as React from "react";

import * as Common from "../common/common";

type Placement =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

interface Props extends Common.Globals {
  readonly topOffset?: number;
  readonly leftOffset?: number;
  readonly rightOffset?: number;
  readonly bottomOffset?: number;
  readonly gutter?: number;
  readonly dismissTimeout?: number;
  readonly placement?: Placement;
}

interface Options {
  readonly icon?: React.ReactElement<unknown>;
  readonly loading?: React.ReactNode;
  readonly success?: string | ((data: unknown) => string);
  readonly error?: string | ((err: unknown) => string);
}

declare const ToastRoot: React.FunctionComponent<Props>;

declare function createToast(
  message: React.ReactNode,
  options?: { readonly icon?: React.ReactElement<unknown> },
): void;

declare function createToastPromise(promise: Promise<unknown>, options?: Options): Promise<void>;

export { ToastRoot, createToast, createToastPromise };
