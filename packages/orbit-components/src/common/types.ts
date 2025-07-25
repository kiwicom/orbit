// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

/**
Common types used in @kiwicom/orbit-component declarations

*/
export type Translation = React.ReactNode;
// TODO: remove after switch to typescript
export type TranslationString = React.ReactNode;
export type Callback = () => void | Promise<void>;
// Parameter event is not optional
// @see https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#optional-parameters-in-callbacks
export type Event<T> = (event: T) => void | Promise<void>;
export type Component = string | React.ComponentType<any> | React.ElementType;
export type Size = "small" | "normal" | "large" | "extraLarge";
export type InputSize = "small" | "normal";

export interface Carrier {
  code: string;
  name: string;
  type?: "airline" | "bus" | "train" | "ferry" | "private_transfer" | "kiwicom";
}

export interface DataAttrs {
  readonly dataAttrs?: {
    [key: string]: (string | null | undefined) | (boolean | null | undefined);
  };
}

export interface Translations {
  [key: string]: string;
}

export interface Globals<T = any> {
  readonly dataTest?: string;
  readonly id?: string;
  readonly ref?: React.Ref<T>;
}

export type RefType<T = HTMLElement> = { current: T | null } | ((instance: T | null) => void);

export interface Ref<T = HTMLElement> {
  readonly ref?: RefType<T>;
}

export type SpaceAfterSizes =
  | "none"
  | "smallest"
  | "small"
  | "normal"
  | "medium"
  | "large"
  | "largest";

export interface SpaceAfter {
  readonly spaceAfter?: SpaceAfterSizes;
}
export interface ObjectProperty {
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
}
