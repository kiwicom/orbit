// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";

declare module "@kiwicom/orbit-components/lib/ChoiceGroup";

export { ChoiceGroup, ChoiceGroup as default };

declare namespace ChoiceGroup {
  type Size = "normal" | "large";
  type Element = "h2" | "h3" | "h4" | "h5" | "h6";

  interface Props extends Common.Global {
    readonly children: React.ReactNode;
    readonly label?: Common.Translation;
    readonly labelSize?: Size;
    readonly labelElement?: Element;
    readonly error?: Common.Translation;
    readonly filter?: boolean;
    readonly onOnlySelection?: (
      event: React.SyntheticEvent<HTMLButtonElement>,
      {},
    ) => void | Promise<void>;
    // InputEvent
    readonly onChange: Common.Event<React.SyntheticEvent<HTMLInputElement>>;
  }
}

declare class ChoiceGroup extends React.Component<ChoiceGroup.Props> {}
