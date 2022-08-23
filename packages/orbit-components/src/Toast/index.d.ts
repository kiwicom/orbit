// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as React from "react";
import { ValueOrFunction, Renderable, Toast, DefaultToastOptions } from "react-hot-toast";

import * as Common from "../common/common";

export type Placement =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface Props extends Common.Globals {
  readonly topOffset?: number;
  readonly leftOffset?: number;
  readonly rightOffset?: number;
  readonly bottomOffset?: number;
  readonly gutter?: number;
  readonly dismissTimeout?: number;
  readonly placement?: Placement;
}

export interface Toast {
  readonly id: string;
  readonly icon?: Renderable;
  readonly visible?: boolean;
  readonly children: React.ReactNode;
  readonly dismissTimeout?: number;
  readonly onUpdateHeight: (id: string, height: number) => void;
  readonly onMouseEnter: () => void;
  readonly onMouseLeave: () => void;
  readonly onDismiss: () => void;
  readonly placement: Placement;
  readonly offset?: number;
  readonly ariaLive: "polite" | "assertive" | "off";
}

interface Options<T> {
  readonly icon: Pick<DefaultToastOptions, "icon">;
  readonly loading: Renderable;
  readonly success: ValueOrFunction<Renderable, T>;
  readonly error: ValueOrFunction<Renderable, any>;
}

declare const ToastRoot: React.FunctionComponent<Props>;

declare function createToast(
  message: ValueOrFunction<Renderable, Toast>,
  options?: Pick<DefaultToastOptions, "icon">,
): void;

declare function createToastPromise<T>(promise: Promise<T>, options: Options<T>): Promise<T>;

export { ToastRoot, createToast, createToastPromise };
