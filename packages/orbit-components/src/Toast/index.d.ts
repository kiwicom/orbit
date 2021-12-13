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

interface Props extends Common.Global {
  readonly topOffset?: number;
  readonly leftOffset?: number;
  readonly rightOffset?: number;
  readonly bottomOffset?: number;
  readonly gutter?: number;
  readonly dismissTimeout?: number;
  readonly placement?: Placement;
}

declare const Toast: React.FunctionComponent<Props>;

declare function createToast(
  message: string,
  options: { readonly icon?: React.ReactElement<unknown> },
): void;

declare function createToastPromise(
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  promise: Promise<unknown>,
  options: {
    readonly icon?: React.ReactElement<unknown>;
    readonly loading?: React.ReactNode;
    readonly success?: string | ((data: unknown) => string);
    readonly error?: string | ((err: unknown) => string);
  },
): void;

export default Toast;
export { createToast, createToastPromise };
