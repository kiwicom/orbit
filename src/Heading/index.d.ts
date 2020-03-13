// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";

declare module "@kiwicom/orbit-components/lib/Heading";

export { Heading, Heading as default };

declare namespace Heading {
  type Type = "display" | "displaySubtitle" | "title1" | "title2" | "title3" | "title4" | "title5";
  type Element = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

  interface Props extends Common.Global, Common.SpaceAfter {
    readonly element?: Element;
    readonly type?: Type;
    readonly children: React.ReactNode;
    readonly inverted?: boolean;
    readonly dataA11ySection?: string;
    readonly id?: string;
  }
}

declare class Heading extends React.Component<Heading.Props> {}
