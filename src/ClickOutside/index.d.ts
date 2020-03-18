// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common.d.ts";

declare module "@kiwicom/orbit-components/lib/ClickOutside";

export { ClickOutside, ClickOutside as default };

declare namespace ClickOutside {
  interface Props {
    readonly onClickOutside?: Common.Event<React.MouseEvent>;
    readonly children: React.ReactNode | React.ReactNode[];
  }
}

declare class ClickOutside extends React.Component<ClickOutside.Props> {}
