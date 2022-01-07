// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

/*
Common types used in @kiwicom/orbit-component declarations
*/

export type Translation = React.ReactNode;
export type Callback = () => void | Promise<void>;
// Parameter event is not optional
// @see https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#optional-parameters-in-callbacks
export type Event<T> = (event: T) => void | Promise<void>;
export type Component = string | React.ComponentType<{ className: string }>;
export type Size = "small" | "normal" | "large";
export type InputSize = "small" | "normal";

export type Carrier = {
  code: string;
  name: string;
  type?: "airline" | "bus" | "train" | "ferry" | "private_transfer" | "kiwicom";
};

export type DataAttrs = {
  readonly dataAttrs?: {
    [key: string]: (string | null | undefined) | (boolean | null | undefined);
  };
};

export type Translations = {
  [key: string]: string;
};

export interface Global {
  readonly dataTest?: string;
}

export interface Ref {
  readonly ref?: { current: HTMLElement | null } | ((instance: HTMLElement | null) => void);
}

export interface SpaceAfter {
  readonly spaceAfter?: "none" | "smallest" | "small" | "normal" | "medium" | "large" | "largest";
}
