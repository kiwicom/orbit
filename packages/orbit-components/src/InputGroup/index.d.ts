// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/InputGroup";

type Size = "small" | "normal";
type Event = Common.Event<React.SyntheticEvent<HTMLInputElement | HTMLSelectElement>>;

interface Props extends Common.Global, Common.SpaceAfter {
  readonly label?: Common.Translation;
  readonly flex?: string | string[];
  readonly size?: Size;
  readonly help?: React.ReactNode;
  readonly children: React.ReactNode;
  readonly error?: React.ReactNode;
  readonly onChange?: Event;
  readonly onFocus?: Event;
  readonly onBlur?: Event;
}

interface State {
  active: boolean;
  filled: boolean;
}
declare class InputGroup extends React.Component<Props, State> {}
export { InputGroup, InputGroup as default };
