// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type * as React from "react";
import type {
  ValueOrFunction,
  Renderable,
  Toast,
  ToastType,
  DefaultToastOptions,
} from "react-hot-toast";

import type * as Common from "../common/types";

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

interface ToastProps {
  readonly id: string;
  readonly icon?: Renderable;
  readonly visible?: boolean;
  readonly children: React.ReactNode;
  readonly dismissTimeout?: number;
  readonly onMouseEnter: () => void;
  readonly onMouseLeave: () => void;
  readonly onDismiss: () => void;
  readonly placement: Placement;
  readonly offset?: number;
  readonly ariaLive: "polite" | "assertive" | "off";
}

export interface Options<T> {
  readonly loading: Renderable;
  readonly success: ValueOrFunction<Renderable, T>;
  readonly error: ValueOrFunction<Renderable, any>;
}

export type IconType = Pick<DefaultToastOptions, "icon">;

export type createToast = (message: ValueOrFunction<Renderable, Toast>, options?: IconType) => void;

export type createToastPromise = <T>(
  promise: Promise<T>,
  messages: Options<T>,
  options?: IconType & Partial<Record<ToastType, IconType>>,
) => Promise<T>;

export { ToastProps as Toast };
