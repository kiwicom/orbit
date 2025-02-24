// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export type Type = "info" | "success" | "warning" | "critical";
export type Props = Common.Globals &
  Common.SpaceAfter & {
    readonly type?: Type;
    readonly children?: React.ReactNode;
    readonly title?: Common.Translation;
    readonly icon?: React.ReactNode;
    readonly inlineActions?: React.ReactNode;
    readonly onClose?: Common.Callback;
    readonly suppressed?: boolean;
    /**
     * When closable is true, labelClose is required.
     */
  } & (
    | {
        readonly closable: true;
        readonly labelClose: string;
      }
    | { readonly closable?: false; readonly labelClose?: string }
  );
