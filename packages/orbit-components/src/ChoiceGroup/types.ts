// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/types";

export type Size = "normal" | "large";
type Element = "h2" | "h3" | "h4" | "h5" | "h6";

export interface Props extends Common.Globals {
  readonly children:
    | React.ReactNode
    | ((args: {
        readonly Container: "div";
        readonly Item: React.ComponentType<{ readonly children: React.ReactNode }>;
        readonly spacing: string;
      }) => React.ReactNode);
  readonly label?: Common.Translation;
  readonly labelSize?: Size;
  readonly labelAs?: Element;
  readonly error?: Common.Translation;
  readonly onlySelectionText?: Common.Translation;
  readonly filter?: boolean;
  readonly onOnlySelection?: (
    event: React.SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>,
    param2: { readonly value: string; readonly label: string },
  ) => void | Promise<void>;
  // InputEvent
  readonly onChange: Common.Event<React.SyntheticEvent<HTMLInputElement>>;
}
