// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export type Type = "buttonLoader" | "boxLoader" | "searchLoader" | "pageLoader" | "inlineLoader";

export type LoadingLabelProps =
  | {
      text: Common.Translation;
      title?: never;
      ariaHidden?: never;
    }
  | {
      text?: never;
      title?: never;
      ariaHidden: true;
    }
  | {
      text?: never;
      title: string;
      ariaHidden?: false;
    };

interface BaseProps extends Common.Globals {
  readonly children?: React.ReactNode;
  readonly loading?: boolean;
  readonly type?: Type;
  readonly customSize?: number;
  readonly asComponent?: Common.Component;
}

export type Props = BaseProps & LoadingLabelProps;
