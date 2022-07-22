// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as React from "react";
import {
  ValueOrFunction,
  Renderable,
  Toast as ToastType,
  DefaultToastOptions,
} from "react-hot-toast";

import * as Common from "../common/types";

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

export interface Options<T> {
  readonly icon: Pick<DefaultToastOptions, "icon">;
  readonly loading: Renderable;
  readonly success: ValueOrFunction<Renderable, T>;
  readonly error: ValueOrFunction<Renderable, any>;
}

export type createToast = (
  message: ValueOrFunction<Renderable, ToastType>,
  options?: Pick<DefaultToastOptions, "icon">,
) => void;

export type createToastPromise = <T>(promise: Promise<T>, options: Options<T>) => Promise<T>;
