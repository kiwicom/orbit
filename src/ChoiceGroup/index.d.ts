// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/ChoiceGroup";

type Size = "normal" | "large";
type Element = "h2" | "h3" | "h4" | "h5" | "h6";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly label?: Common.Translation;
  readonly labelSize?: Size;
  readonly labelAs?: Element;
  readonly error?: Common.Translation;
  readonly onlySelectionText?: Common.Translation;
  readonly filter?: boolean;
  readonly onOnlySelection?: (
    event: React.SyntheticEvent<HTMLButtonElement>,
    param2: { value: string; label: string },
  ) => void | Promise<void>;
  // InputEvent
  readonly onChange: Common.Event<React.SyntheticEvent<HTMLInputElement>>;
}

declare const ChoiceGroup: React.FunctionComponent<Props>;
export { ChoiceGroup, ChoiceGroup as default };
